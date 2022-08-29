<template>
  <view class="app-container fs-36">
    <view class="content">
      <view v-for="(item, index) in form" :key="index">
        <uni-set-params
          v-show="!item.hide"
          :formInfo="item"
          :formIndex="index"
          @paramsInfo="_paramsInfo"
          @higherSet="_higherSet"
          @delete="_delete"
        >
          <template>
            <view class="params-header margin-bottom-15">
              <view class="info fw-bold">
                <!-- <image v-if="type === 'wxImg' || type === 'localImg'" class="imgs" :src="item.url" mode=""></image> -->
                <!-- <image class="imgs" src="" mode=""></image> -->
                <!-- <text v-else class="name">{{item.name}}</text> -->
                <text class="name">{{ item.fileName }}</text>
              </view>
              <view class="preview c-preview" @click="previewClick(index)">
                <image
                  class="icon-preview margin-right-10"
                  src="/static/icon/icon-preview.png"
                  mode="scaleToFill"
                ></image>
                <text>预览</text>
              </view>
            </view>
          </template>
        </uni-set-params>
      </view>
    </view>
    <view class="operator fs-36">
      <view class="operator-btn add c-print bg-white" @click="add"
        >继续添加</view
      >
      <view class="operator-btn confirm bg-print" @click="confirm"
        >确认打印</view
      >
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      type: "file", // img 参数设置类型
      token: "",
      imageName: "",
      formLen: getApp().globalData.printParams.length,
      ossList: [],
      form: [],
      files: [],
    };
  },
  onShow() {
    this.type = getApp().globalData.setParamType;
    // // 测试使用
    // this.token = 'bearer4abd270c-dda8-452b-84b5-7fa4e8f6d781'
    // uni.setStorageSync('token', this.token)
    // 实际开发获取
    this.token = uni.getStorageSync("token");
    this.getFile();
  },
  onHide() {
    // console.log("设置参数页面--onhide");
  },
  beforeDestroy() {
    // this.form.forEach((item, index) => {
    //   !item.hide && !item.confirm && this._delete(index);
    // });
  },
  methods: {
    getFile() {
      // if (this.type === 'wxFile') {
      // 	this.files = getApp().globalData.wxFile
      // } else if (this.type === 'wxImg') {
      // 	this.files = getApp().globalData.wxImg
      // } else if (this.type === 'localFile') {
      // 	this.files = getApp().globalData.localFile
      // } else {
      // 	this.files = getApp().globalData.localImg
      // }

      // this.files = getApp().globalData.printParams

      const form = [...getApp().globalData.printParams];
      const isHighSet = getApp().globalData.allFile.length > 0;
      // console.log(isHighSet, "isHighSet");
      this.form = [];
      if (!isHighSet) {
        this.form = form.map((item) => {
          const obj = { ...item };
          obj.hide = false;
          obj.confirm = false;
          return obj;
        });
      } else {
        this.form = [...getApp().globalData.allFile];
      }
      // console.log("参数设置类型", this.type, this.files, this.form);
    },
    previewClick(current) {
      const that = this;
      // if(this.type.indexOf('Img') !== -1){
      // 	uni.previewImage({
      // 		current,
      // 		urls: [this.form[current].url],
      // 		indicator: Number
      // 	})
      // } else {
      // console.log("预览地址", this.form[current].transFilePath);
      uni.downloadFile({
        url: this.form[current].transFilePath,
        success: (res) => {
          if (res.statusCode === 200) {
            uni.openDocument({
              filePath: res.tempFilePath,
              // 如果文件名包含中文，建议使用escape(res.tempFilePath)转码，防止ios和安卓客户端导致的差异
              success: function (res) {
                // console.log('打开文档成功');
              },
              fail: function () {
                uni.showToast({
                  icon: "none",
                  title: "文件读取失败",
                });
              },
            });
          }
        },
      });
    },
    _paramsInfo(data, index) {
      for (let k in data) {
        this.form[index][k] = data[k];
      }
      getApp().globalData.printParams = this.form;
    },
    _higherSet(data, index) {
      getApp().globalData.fileParamIndex = index;
      getApp().globalData.fileParam = { ...data };
      getApp().globalData.allFile = [...this.form];
      this.$goToUrl("/pages/printSteps/setHighParams");
    },
    async _delete(index) {
      const bastetId = this.form[index].bastetId;
      const res = this.$Q.delete({
        url: this.$api("deletePrintFile", bastetId),
      });
      this.form[index].hide = true;
    },
    add() {
      getApp().globalData.allFile = [...this.form];
      // if (this.type === 'wxFile') {
      // 	this.getWxFile();
      // } else if (this.type === 'wxImg') {
      // 	this.getWxImg();
      // } else if (this.type === 'localFile') {
      // 	this.getLocalFile();
      // } else {
      // 	this.getLocalImg();
      // }
      this.$goToUrl("/pages/printSteps/choose");
      getApp().globalData.allFile = [...this.form];
    },
    async confirm() {
      const printList = this.form.filter((i) => !i.hide);
      if (!printList.length) {
        return uni.showToast({
          icon: "none",
          title: "打印列表为空, 请继续添加!",
        });
      }
      this.form.forEach((item) => (item.confirm = true));
      const form = JSON.parse(JSON.stringify(this.form));
      getApp().globalData.allFile = JSON.parse(JSON.stringify(this.form));
      // console.log('确认提交时', form);
      const result = form
        .filter((item) => {
          return !item.hide;
        })
        .map((item) => {
          item.printSettings = item.printSettings.map((settings) => {
            return {
              tempCode: settings.items.filter(
                (setItem) => setItem.chooseType === 1
              )[0].tempCode,
              tempType: settings.tempType,
            };
          });
          delete item.hide;
          delete item.confirm;
          return item;
        });
      const isNearShop = getApp().globalData.isNearShop;
      if (!isNearShop) {
        this.$goToUrl("/pages/common/choosePrinter");
      } else {
        const flowCode = getApp().globalData.flowCode;
        const deviceNo = getApp().globalData.deviceNo;
        const params = {
          flowCode: flowCode,
          deviceNo: deviceNo,
          items: result,
        };
        const res = await this.$Q.put({
          url: this.$api("submitPrintParams"),
          data: params,
        });
        // 将提交成功的文件参数储存到 getApp().globalData.printSettings 中
        getApp().globalData.basketIds = result.map((item) => item.bastetId);
        this.$goToUrl("/pages/common/payPage");
      }
    },
    // // 获取微信聊天文档
    // getWxFile() {
    // 	const that = this;
    // 	wx.chooseMessageFile({
    // 		count: 2,
    // 		type: 'file',
    // 		// extension:['.doc','.xlsx','.docx','.pdf','.ppt'],
    // 		success(res) {
    // 			// tempFilePath可以作为img标签的src属性显示图片
    // 			const tempFilePaths = res.tempFiles;
    // 			uni.showLoading({
    // 				title: '上传中'
    // 			});
    // 			that.ossList = [];
    // 			that.getammeternumber(tempFilePaths, 0, tempFilePaths.length);
    // 			// console.log('聊天文档', tempFilePaths);
    // 		}
    // 	});
    // },
    // // 获取微信聊天图片
    // getWxImg() {
    // 	const that = this;
    // 	this.imageName = '聊天图片';
    // 	wx.chooseMessageFile({
    // 		count: 9,
    // 		type: 'image',
    // 		extension: ['.png', '.jpg', '.jpeg'],
    // 		success(res) {
    // 			// tempFilePath可以作为img标签的src属性显示图片
    // 			const tempFilePaths = res.tempFiles;
    // 			uni.showLoading({
    // 				title: '上传中'
    // 			});
    // 			that.ossList = [];
    // 			that.getammeternumber(tempFilePaths, 0, tempFilePaths.length);
    // 			// console.log('聊天图片', tempFilePaths);
    // 		}
    // 	});
    // },
    // // 获取本地文件
    // getLocalFile() {},
    // // 获取本地图片
    // getLocalImg() {
    // 	const that = this;
    // 	this.imageName = '本地图片';
    // 	// console.log('图片选择');
    // 	wx.chooseImage({
    // 		count: 9,
    // 		sizeType: ['original', 'compressed'],
    // 		sourceType: ['album', 'camera'],
    // 		success(res) {
    // 			// tempFilePath可以作为img标签的src属性显示图片
    // 			const tempFilePaths = res.tempFiles;
    // 			uni.showLoading({ title: '上传中' });
    // 			that.ossList = [];
    // 			that.getammeternumber(tempFilePaths, 0, tempFilePaths.length);
    // 		}
    // 	});
    // },
    // // 上传到oss
    // getammeternumber(fileList, i, length) {
    // 	const that = this;
    // 	const file = {};
    // 	const path = fileList[i].path;
    // 	const timestamp = new Date().getTime();
    // 	file.name = fileList[i].name || this.imageName + timestamp;
    // 	uni.uploadFile({
    // 		url: this.$prefix + this.$api('uploadToOSS'),
    // 		name: 'file',
    // 		filePath: path,
    // 		formData: {
    // 			originalFileName: file.name
    // 		},
    // 		header: {
    // 			Authorization: that.token
    // 		},
    // 		success: function(res) {
    // 			// console.log(res);
    // 			file.path = res.data;
    // 			that.ossList.push(file);
    // 			if (++i < length) {
    // 				that.getammeternumber(fileList, i, length);
    // 			} else {
    // 				that.ossToPdf();
    // 			}
    // 		},
    // 		fail: function(res) {
    // 			uni.hideLoading();
    // 			wx.showModal({
    // 				title: '错误提示',
    // 				content: '上传失败',
    // 				showCancel: false,
    // 				success: function(res) {}
    // 			});
    // 			return;
    // 		}
    // 	});
    // },
    // // oss转PDF
    // async ossToPdf() {
    // 	const pathList = this.ossList.map(item => item.path);
    // 	const fileType = this.type === 'wxFile' || this.type === 'localFile' ? 1 : 2;
    // 	// 获取每次打印的流水号
    // 	const flowCode = getApp().globalData.flowCode;
    // 	// oss转pdf
    // 	const ossToPdf = await this.$Q.put({
    // 		url: this.$api('ossToPdf'),
    // 		data: {
    // 			fileType: fileType,
    // 			files: pathList,
    // 			flowCode: flowCode
    // 		}
    // 	});
    // 	getApp().globalData.ossToPdfCode = ossToPdf;
    // 	this.getPrintParams();
    // },
    // // 获取打印文件和设置参数
    // getPrintParams() {
    // 	const flowCode = getApp().globalData.flowCode;
    // 	const deviceNo = getApp().globalData.deviceNo;
    // 	setTimeout(async () => {
    // 		const printParams = await this.$Q.put({
    // 			url: this.$api('getPrintParams'),
    // 			data: {
    // 				flowCode: flowCode,
    // 				deviceNo: deviceNo
    // 			}
    // 		});
    // 		if (!printParams[0].transFilePath) {
    // 			this.getPrintParams();
    // 		} else {
    // 			// console.log(printParams, '成功获取待打印文件和对于参数');
    // 			this.resetGlobalData(printParams);
    // 			uni.hideLoading();
    // 			return;
    // 		}
    // 	}, 1000);
    // },
    // 测试时调用
    // async getPrintParams() {
    // 	const flowCode = getApp().globalData.flowCode
    // 	// setTimeout(async () => {
    // 	const printParams = await this.$Q.put({
    // 		url: this.$api('getPrintParams'),
    // 		data: {
    // 			flowCode: flowCode
    // 		}
    // 	})
    // 	// if (!printParams[0].transFilePath) {
    // 	// this.getPrintParams()
    // 	// } else {
    // 	console.log(printParams, '成功获取待打印文件和对于参数')
    // 	this.resetGlobalData(printParams)
    // 	uni.hideLoading()
    // 	// return
    // 	// 	}
    // 	// }, 1000)
    // },
    // resetGlobalData(data) {
    // 	const that = this;
    // 	const len = that.form.filter(item => !item.hide).length;
    // 	const realData = data.slice(len, data.length);
    // 	getApp().globalData.printParams.push(...realData);
    // 	realData.forEach(item => {
    // 		const obj = item;
    // 		obj.hide = false;
    // 		that.form.push(obj);
    // 	});
    // 	this.formLen = getApp().globalData.printParams.length;
    // 	// console.log('继续添加', data, that.form);
    // }
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 20upx 20upx 130upx;
}

.scroll-view {
  width: 100%;
  height: 100%;
}

.params-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .imgs {
    width: 100upx;
    height: 85upx;
  }

  .preview {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 180upx;

    .icon-preview {
      width: 30upx;
      height: 30upx;
    }
  }
}

.operator {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  z-index: 9;
  &-btn {
    flex: 1;
    height: 100upx;
    line-height: 100upx;
    text-align: center;
  }
}
</style>
