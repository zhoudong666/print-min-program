<template>
  <view class="page-section-spacing">
    <swiper
      class="swiper"
      indicator-dots="true"
      autoplay="true"
      interval="5000"
      duration="1500"
      circular
    >
      <swiper-item v-for="(item, index) in lunbo" :key="index">
        <image
          :src="item.imgUrl"
          @error="errorLoad(index, $event)"
          mode="scaleToFill"
        ></image>
      </swiper-item>
    </swiper>

    <view class="nearShop">
      <uni-mapshop
        :data="shopList"
        @toShop="_toShop"
        @mapshopClose="_mapshopClose"
      ></uni-mapshop>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      shopList: [],
      timer: null,
      lunbo: [],
    };
  },
  // 页面的什么周期
  onLoad(options) {
    // 监听页面加载，触发一次
  },
  onReady() {
    // 监听页面初次渲染完成，注意如果渲染速度快，会在页面进入动画完成前触发
    // 只触发一次
  },
  // onshow和onhide触发多次
  onShow() {
    this.getLocaltion();
    this.getSwiper();
  },
  onHide() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  mounted() {},
  methods: {
    // 获取轮播图
    async getSwiper() {
      this.lunbo = await this.$Q.get({ url: this.$api("swiper") });
    },
    // 获取地理位置
    getLocaltion() {
      const that = this;
      wx.getLocation({
        type: "gcj02",
        success: function (res) {
          const location = { myLat: res.latitude, myLng: res.longitude };
          that.getNearShop(location);
        },
        fail: function (error) {
          uni.showToast({ icon: "none", title: "位置获取失败" });
        },
      });
    },
    // 获取附近店铺信息
    async getNearShop(myLocation) {
      const res = await this.$Q.get({
        url: this.$api("nearShop"),
        data: myLocation,
      });
      this.shopList = res;
      this.optionVisible = true;
    },
    _mapshopClose() {
      this.optionVisible = false;
    },
    // 跳转到对应打印店
    _toShop(data) {
      // console.log('准备跳转到店铺信息', data);
      getApp().globalData.isTabbarScan = "";
      getApp().globalData.shopCode = data.shopCode;
      this.$goToUrl("/pages/shopInfo/index");
    },
    errorLoad(i, e) {
      this.lunbo.splice(i, 1, { imgUrl: `/static/swiper/swiper${i + 1}.jpg` });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-section-spacing {
  width: calc(100% - 40upx);
  height: calc(100% - 40upx);
  padding: 20upx;
}

.swiper {
  height: 300upx;
  width: 100%;
}

// swiper-item 里面的图片高度
swiper-item image {
  width: 100%;
  height: 300upx;
}

.nearShop {
  height: calc(100% - 340upx);
  padding: 20upx 0 0;
}
</style>
