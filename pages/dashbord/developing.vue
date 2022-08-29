<template>
  <view class="page-container bg-white flex flex-column" @click="goback">
    <view class="container tac c-print fs-36">
      <view class="margin-bottom-20"><image class="loading" src="/static/icon/icon-Loading.png"></image></view>
      <view class="tip margin-bottom-20">该功能正在开发中,</view>
      <view class="tip margin-bottom-20">敬请期待...</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
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
      uni.navigateBack({ delta: 1 })
    }
  }
}
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
.loading {
  width: 80upx;
  height: 80upx;
  animation: rotation 4s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
