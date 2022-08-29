<template>
  <view class="padding-20">
    <view class="my-card margin-bottom-20">
      <view class="order">1</view>
      <view class="content">第一步：操作指南</view>
    </view>
    <view class="my-card margin-bottom-20">
      <view class="order">2</view>
      <view class="content">第二步：操作指南</view>
    </view>
    <view class="my-card margin-bottom-20">
      <view class="order">3</view>
      <view class="content">第三步：操作指南</view>
    </view>
    <view class="my-card margin-bottom-20">
      <view class="order">4</view>
      <view class="content">第四步：操作指南</view>
    </view>
    <view class="my-card margin-bottom-20">
      <view class="order">5</view>
      <view class="content">第五步：操作指南</view>
    </view>
    <button type="primary" @click="goToNext">我已知晓，下一步</button>
  </view>
</template>

<script>
export default {
  onLoad() {
    // console.log('操作指南', getApp().globalData.isPrintOrCopyOrScan);
  },
  methods: {
    async goToNext() {
      const isAuthUserLocation = await this.$wxOpenSetting({
        scope: "userLocation",
      });
      if (!isAuthUserLocation) return;
      let getFlowCode = await getApp().newFlowCode(); // 生成flowCode
      this.$goToUrl("/pages/common/choosePrinter");
    },
  },
};
</script>

<style lang="scss">
.my-card {
  border-radius: 10upx;
  background-color: #fff;
  display: flex;
  padding: 50upx;
  .order {
    width: 50upx;
  }
}
</style>
