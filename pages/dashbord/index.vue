<template>
  <view class="padding-20">
    <swiper
      class="swiper"
      indicator-dots="true"
      autoplay="true"
      interval="5000"
      duration="1500"
      circular
    >
      <swiper-item v-for="(item, index) in lunbo" :key="index">
        <image class="item-img" :src="item.imgUrl" mode="scaleToFill"></image>
      </swiper-item>
    </swiper>
    <view class="margin-top-20 bd-top-solid-default-1">
      <view class="tip tac">选择自助服务项</view>
      <view class="options-select flex flex-wrap justify-content-between">
        <button type="primary" class="entry-btn" @click="toPage('print')">
          打印
        </button>
        <button type="primary" class="entry-btn" @click="toPage('copy')">
          复印
        </button>
        <button type="primary" class="entry-btn" @click="toPage('scan')">
          扫描
        </button>
        <button type="primary" class="entry-btn" @click="toDevPage">
          照片
        </button>
        <button
          type="primary"
          class="entry-btn width100"
          @click="toPage('nearShops')"
        >
          附近打印
        </button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      lunbo: [
        { imgUrl: "/static/swiper/swiper1.jpg" },
        { imgUrl: "/static/swiper/swiper1.jpg" },
        { imgUrl: "/static/swiper/swiper3.jpg" },
      ],
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
  mounted() {
    this.getSwiper();
  },
  methods: {
    // 获取轮播图
    async getSwiper() {
      this.lunbo = await this.$Q.get({ url: this.$api("swiper") });
    },
    // 跳转到文件选择
    async toPage(pageKey) {
      const pageObj = {
        print: "/pages/printSteps/choose",
        copy: "/pages/copyPages/instruction",
        scan: "/pages/copyPages/instruction",
        nearShops: "/pages/shopInfo/nearShops",
      };

      getApp().globalData.deviceNo = ""; // 清掉之前有可能选的打印机
      getApp().globalData.deviceName = ""; // 清掉之前有可能选的打印机
      getApp().globalData.deviceMsg = ""; // 清掉之前有可能选的打印机

      if (pageKey === "print") {
        let flowCode = await this.$Q.get({ url: this.$api("taskFlowId") });
        getApp().globalData.flowCode = flowCode;
      }

      this.$goToUrl(pageObj[pageKey]);
      getApp().globalData.isNearShop = false;
      if (pageKey === "nearShops")
        return (getApp().globalData.isNearShop = true);
      getApp().globalData.isPrintOrCopyOrScan = pageKey;
    },
    toDevPage() {
      this.$goToUrl("/pages/dashbord/developing");
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper,
.item-img {
  height: 500upx;
  width: 100%;
}
.tip {
  height: 50upx;
  line-height: 50upx;
  font-size: $uni-font-size-base;
  color: $uni-text-color-tip;
}
.options-select {
  margin: 50upx 100upx 0;
  .entry-btn {
    width: 40%;
    margin: 0 0 30upx;
  }
}
</style>
