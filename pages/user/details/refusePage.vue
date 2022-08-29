<template>
  <view class="padding-20">
    <view class="bg-white">
      <textarea
        class="textaret padding-20"
        placeholder-style="color:#ff9966"
        placeholder="输入退款理由"
        v-model="buyerMsg"
      />
    </view>
    <view class="img margin-top-20">
      <view class="img-container">
        <view
          class="flex-item float-left"
          v-for="(item, index) in fileListtt"
          :key="item"
        >
          <image class="img" :src="item" mode=""></image>
          <view class="remove" @click="removeItem(index)">X</view>
        </view>
        <view
          class="flex-item float-left fs-26"
          v-if="fileListtt.length < 6"
          @click="uploadImg"
        >
          点击上传凭证
        </view>
      </view>
    </view>

    <button type="primary" @click="submit">提交</button>
  </view>
</template>

<script>
export default {
  name: "refusePage",
  onLoad(option) {
    this.orderNumber = option.orderNumber;
  },
  data() {
    return {
      orderNumber: "",
      buyerMsg: "",
      photoFiles: "",
      ossList: [],
      fileListtt: [],
    };
  },
  methods: {
    uploadImg() {
      const that = this;
      wx.chooseImage({
        count: 6 - that.ossList.length,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles;
          that.fileListtt = that.fileListtt.concat(res.tempFilePaths);
          uni.showLoading({ title: "上传中...", mask: true });
          that.getammeternumber(tempFilePaths, 0, tempFilePaths.length);
        },
      });
    },
    // 上传到oss
    getammeternumber(fileList, i, length) {
      const that = this;
      const file = {};
      const path = fileList[i].path;
      const timestamp = new Date().getTime();
      file.name = fileList[i].name || "申请退款" + +new Date();
      uni.uploadFile({
        url: this.$prefix + this.$api("uploadToOSS"),
        name: "file",
        filePath: path,
        formData: { originalFileName: file.name },
        header: { Authorization: uni.getStorageSync("token") },
        success: function (res) {
          file.path = res.data;
          that.ossList.push(file);
          if (++i < length) {
            that.getammeternumber(fileList, i, length);
          } else {
            uni.hideLoading();
          }
        },
        fail: function (res) {
          uni.hideLoading();
          wx.showModal({
            title: "错误提示",
            content: "上传失败",
            showCancel: false,
            success: function (res) {},
          });
          return;
        },
      });
    },
    removeItem(index) {
      this.ossList.splice(index, 1);
      this.fileListtt.splice(index, 1);
    },
    async submit() {
      var params = {
        buyerMsg: this.buyerMsg,
        orderNumber: this.orderNumber,
        photoFiles: this.ossList.map((i) => i.path).join(","),
      };
      const res = await this.$Q.put({ url: this.$api("refund"), data: params });
      if (res) uni.showToast({ title: "申请成功!" });
      setTimeout(() => {
        this.$goToUrl(
          `/pages/user/details/details?orderNumber=${this.orderNumber}`
        );
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.textaret {
  width: calc(100% - 40upx);
  height: 150upx;
}
.img {
  width: 100%;
  height: 100%;
}
.flex-item {
  position: relative;
  width: 222rpx;
  height: 222rpx;
  margin-left: 20rpx;
  border: 1rpx dashed #ff9966;
  text-align: center;
  line-height: 222rpx;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 20upx;
  .remove {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 50upx;
    width: 50upx;
    height: 50upx;
    // background: #eee;
    color: #f00;
  }
}
.flex-item:nth-child(3n + 1) {
  margin-left: 0;
}
</style>
