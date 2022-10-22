<template>
  <view>
    <web-view
      :src="h5UploadPageSrc"
      @message="getMsg"
      @onPostMessage="getOnMsg"
    ></web-view>
  </view>
</template>

<script>
import { h5UploadPageSrc } from "../../urlConfig";
export default {
  data() {
    return {
      msg: "",
      h5UploadPageSrc,
    };
  },
  // 页面的生命周期
  // 监听页面加载，触发一次
  onLoad(options) {},
  // 监听页面初次渲染完成，注意如果渲染速度快，会在页面进入动画完成前触发 只触发一次
  onReady() {},
  // onshow和onhide触发多次
  onShow() {},
  onHide() {},
  mounted() {},
  methods: {
    goback() {
      // uni.navigateBack({ delta: 1 })
    },
    getMsg(e) {
      uni.showModal({
        content: JSON.stringify(e.detail),
        showCancel: false,
      });
    },
    getOnMsg(e) {
      uni.showModal({
        content: JSON.stringify(e.detail),
        showCancel: false,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.page-container {
  height: 100%;
}
.container {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
