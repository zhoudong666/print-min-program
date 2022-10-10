<template>
  <view class="app-container">
    <view
      v-for="(item, index) in list"
      :key="index"
      class="choose-info bg-white bd-radius-10 bd-solid-primary-2 padding-20 margin-bottom-20"
      hover-class="bd-solid-print-2"
      @click="getFile(item.type)"
    >
      <image class="icon" :src="item.icon" mode="scaleToFill"></image>
      <view class="margin-left-15 c-print">{{ item.name }}</view>
    </view>
  </view>
</template>

<script>
import SparkMD5 from "@/tools/spark-md5.js";
export default {
  data() {
    return {
      type: "",
      ossList: [],
      imageName: "",
      token: "",
      timer: null,
      list: [
        {
          type: "wxFile",
          icon: "/static/icon/icon-weixin.png",
          name: "微信聊天文档",
        },
        {
          type: "wxImg",
          icon: "/static/icon/icon-weixin.png",
          name: "微信聊天图片",
        },
        {
          type: "localFile",
          icon: "/static/icon/icon-file.png",
          name: "手机本地文档",
        },
        {
          type: "localImg",
          icon: "/static/icon/icon-file.png",
          name: "手机本地图片",
        },
      ],
      getPrintParamsTimer: null,
      longTimer: null,
    };
  },
  // 页面的什么周期
  onLoad(options) {
    // 监听页面加载，触发一次
    if (options.filePaths) {
      this.ossToPdf(JSON.parse(decodeURIComponent(options.filePaths)), 1);
    }
  },
  onUnload() {
    clearInterval(this.getPrintParamsTimer);
  },
  onReady(options) {
    // 监听页面初次渲染完成，注意如果渲染速度快，会在页面进入动画完成前触发
    // 只触发一次
  },
  // onshow和onhide触发多次
  onShow() {
    getApp().globalData.allFile = [];
    getApp().globalData.fileParam = {};
    getApp().globalData.fileParamIndex = 0;
    // 测试使用
    // this.token = 'bearer4abd270c-dda8-452b-84b5-7fa4e8f6d781'
    // uni.setStorageSync('token', this.token)
    // 实际开发获取
    this.token = uni.getStorageSync("token");
  },
  onHide() {},
  methods: {
    getFile(type) {
      this.type = type;
      if (type === "wxFile") {
        this.getWxFile();
      } else if (type === "wxImg") {
        this.getWxImg();
      } else if (type === "localFile") {
        this.getLocalFile();
      } else {
        this.getLocalImg();
      }
    },
    // 获取微信聊天文档
    getWxFile() {
      const that = this;
      uni.chooseMessageFile({
        count: 9,
        type: "file",
        // extension:['.doc','.xlsx','.docx','.pdf','.ppt'],
        success(res) {
          // console.log(res);
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles;
          uni.showLoading({ title: "上传中...", mask: true });
          that.ossList = [];
          that.getammeternumber(tempFilePaths, 0, tempFilePaths.length);
        },
      });
    },
    // 获取微信聊天图片
    getWxImg() {
      const that = this;
      this.imageName = "聊天图片";
      uni.chooseMessageFile({
        count: 9,
        type: "image",
        extension: [".png", ".jpg", ".jpeg"],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles;
          uni.showLoading({ title: "上传中...", mask: true });
          that.ossList = [];
          that.getammeternumber(tempFilePaths, 0, tempFilePaths.length);
        },
      });
    },
    // 获取本地文件
    getLocalFile() {
      this.$goToUrl("/pages/dashbord/uplaodWebView");
    },
    // 获取本地图片
    getLocalImg() {
      const that = this;
      this.imageName = "本地图片";
      uni.chooseImage({
        count: 9,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles;
          uni.showLoading({ title: "上传中...", mask: true });
          that.ossList = [];
          that.getammeternumber(tempFilePaths, 0, tempFilePaths.length);
        },
      });
    },

    // 读取选择的文件的md5 //////////////////////
    myReadFileMD5(filePath) {
      return new Promise(function (resolve, reject) {
        uni.getFileSystemManager().readFile({
          filePath, //选择图片返回的相对路径
          // encoding: 'binary', //编码格式
          success: (res) => {
            //成功的回调
            let spark = new SparkMD5.ArrayBuffer();
            spark.append(res.data);
            let hexHash = spark.end(false);
            // console.log(333333, hexHash);
            resolve(hexHash);
          },
        });
      });
    },
    // 请求2.1成功  发起putObject请求，直传OSS
    upToOss(path, tempTokenRes) {
      return new Promise(function (resolve, reject) {
        uni.uploadFile({
          url: "https://oss.qmprint.cn",
          filePath: path,
          name: "file", //必须填file
          header: { "Content-Type": "multipart/form-data" },
          formData: {
            key: tempTokenRes.fileKey,
            policy: tempTokenRes.policyBase64,
            OSSAccessKeyId: tempTokenRes.accessid,
            signature: tempTokenRes.signature,
            success_action_status: "200",
          },
          success: function (res) {
            resolve();
          },
          fail: function (res) {
            uni.hideLoading();
            uni.showModal({
              title: "错误提示",
              content: "上传失败",
              showCancel: false,
              success: function (res) {},
            });
            reject();
            return;
          },
        });
      });
    },

    // 上传到oss
    async getammeternumber(fileList, i, length) {
      const that = this;
      const file = {};
      const path = fileList[i].path;
      const timestamp = new Date().getTime();
      file.name = fileList[i].name || this.imageName + timestamp;

      // 1、  // 获取上传的文件类型
      let fileTypeIndex = path.lastIndexOf(".");
      let extName = path.substring(fileTypeIndex + 1);

      // 2、 // 获取文件实际名称 ，文件大小
      let OrgiName = fileList[i].name;
      let fileSize = fileList[i].size;

      const md5 = await this.myReadFileMD5(path);
      const { checkFlag, transFile } = await this.$Q.post({
        url: this.$api("print_checkMd5"),
        data: { md5 },
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      // checkFlag 为 0 表示 MD5文件不存在
      if (checkFlag == "0") {
        //  3、调用  2.1:小程序直传，获取临时授权token 接口
        const tempTokenRes = await this.$Q.post({
          url: this.$api("print_ossToken"),
          data: { extName: extName },
          header: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        that.upToOss(path, tempTokenRes).then(() => {
          // 4、调用  2.2:小程序直传，回传文件信息 接口  xxx
          that.$Q
            .post({
              url: that.$api("print_elementInfo"),
              data: {
                filePath: tempTokenRes.fileKey,
                fileSize: fileSize,
                originalFileName: OrgiName,
              },
              header: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then((res) => {
              file.filePath = res;
              file.mdfive = md5;
              that.ossList.push(file);
              if (++i < length) {
                that.getammeternumber(fileList, i, length);
              } else {
                // const pathList = that.ossList.map((item) => item.path);
                const pathList = that.ossList;
                const fileType =
                  that.type === "wxFile" || that.type === "localFile" ? 1 : 2;
                that.ossToPdf(pathList, fileType);
              }
            });
        });

        // checkFlag 为 1 表示 MD5文件 存在
      } else {
        file.filePath = transFile;
        file.mdfive = md5;
        that.ossList.push(file);
        if (++i < length) {
          that.getammeternumber(fileList, i, length);
        } else {
          const pathList = that.ossList;
          const fileType =
            that.type === "wxFile" || that.type === "localFile" ? 1 : 2;
          that.ossToPdf(pathList, fileType);
        }
      }

      // 二次修改, 前台直接上传到 oss

      // //请求2.1成功  发起putObject请求，直传OSS
      // uni.uploadFile({
      //   url: "https://oss.qmprint.cn",
      //   filePath: path,
      //   name: "file", //必须填file
      //   header: { "Content-Type": "multipart/form-data" },
      //   formData: {
      //     key: tempTokenRes.fileKey,
      //     policy: tempTokenRes.policyBase64,
      //     OSSAccessKeyId: tempTokenRes.accessid,
      //     signature: tempTokenRes.signature,
      //     success_action_status: "200",
      //   },
      //   success: function (res) {
      //     // 4、调用  2.2:小程序直传，回传文件信息 接口  xxx
      //     that.$Q
      //       .post({
      //         url: that.$api("print_elementInfo"),
      //         data: {
      //           filePath: tempTokenRes.fileKey,
      //           fileSize: fileSize,
      //           originalFileName: OrgiName,
      //         },
      //         header: { "Content-Type": "application/x-www-form-urlencoded" },
      //       })
      //       .then((res) => {
      //         file.path = res;
      //         that.ossList.push(file);
      //         if (++i < length) {
      //           that.getammeternumber(fileList, i, length);
      //         } else {
      //           const pathList = that.ossList.map((item) => item.path);
      //           const fileType =
      //             that.type === "wxFile" || that.type === "localFile" ? 1 : 2;
      //           that.ossToPdf(pathList, fileType);
      //         }
      //       });
      //   },
      //   fail: function (res) {
      //     uni.hideLoading();
      //     uni.showModal({
      //       title: "错误提示",
      //       content: "上传失败",
      //       showCancel: false,
      //       success: function (res) {},
      //     });
      //     return;
      //   },
      // });

      // 最原始 上传到后台,然后后台上传到oss
      // uni.uploadFile({
      // 	url: this.$prefix + this.$api('uploadToOSS'),
      // 	name: 'file',
      // 	filePath: path,
      // 	formData: {originalFileName: file.name},
      // 	header: {Authorization: that.token},
      // 	success: function(res) {
      // 		file.path = res.data;
      // 		that.ossList.push(file);
      // 		if (++i < length) {
      // 			that.getammeternumber(fileList, i, length);
      // 		} else {
      // 			//  ("最终--成功上传到oss", that.ossList);

      // 			const pathList = that.ossList.map(item => item.path);
      // 			const fileType = that.type === 'wxFile' || that.type === 'localFile' ? 1 : 2;
      // 			that.ossToPdf(pathList, fileType);
      // 		}
      // 	},
      // 	fail: function(res) {
      // 		uni.hideLoading();
      // 		wx.showModal({
      // 			title: '错误提示',
      // 			content: '上传失败',
      // 			showCancel: false,
      // 			success: function(res) {}
      // 		});
      // 		return;
      // 	}
      // });
    },
    // oss转PDF
    async ossToPdf(pathList, fileType) {
      uni.showLoading({ title: "处理中...", mask: true });
      // 获取打印机编号
      const deviceNo = getApp().globalData.deviceNo;
      // 获取每次打印的流水号
      const formType = getApp().globalData.isPrintOrCopyOrScan;
      let flowCode = "";
      flowCode = getApp().globalData.flowCode;

      // oss转pdf
      const ossToPdf = await this.$Q.put({
        url: this.$api("ossToPdf"),
        data: {
          fileType: fileType,
          files: pathList,
          flowCode: flowCode,
        },
      });
      // (ossToPdf, "oss转PDF");
      getApp().globalData.ossToPdfCode = ossToPdf;
      this.getPrintParams(deviceNo, flowCode);
      // 5分钟后自动停止转换
      if (this.longTimer) clearTimeout(this.longTimer);
      this.longTimer = setTimeout(() => {
        clearInterval(this.getPrintParamsTimer);
      }, 5 * 60 * 1000);
    },
    // 获取打印文件和设置参数
    getPrintParams(deviceNo, flowCode) {
      this.getPrintParamsTimer = setTimeout(async () => {
        const printParams = await this.$Q.put({
          url: this.$api("getPrintParams"),
          data: {
            flowCode: flowCode,
            deviceNo: deviceNo,
          },
        });
        // if (!printParams[0].transFilePath) {
        if (printParams.some((i) => !i.transFilePath)) {
          this.getPrintParams(deviceNo, flowCode);
        } else {
          // (printParams, "成功获取待打印文件和对于参数");
          getApp().globalData.printParams = printParams;
          getApp().globalData.setParamType = this.type;
          uni.hideLoading();
          this.$goToUrl("/pages/printSteps/setParams");
          return;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  padding: 30upx 30upx;
}

.choose-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  .icon {
    width: 100upx;
    height: 90upx;
  }
}
</style>
