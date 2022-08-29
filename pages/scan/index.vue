<template>
  <view class="scan-page"
    ><uni-scan @scan_result="scan_result"></uni-scan
  ></view>
</template>

<script>
export default {
  async onLoad() {
    // 用于启动程序第一次进入扫码页,记录相机是否授权 放到全局中
    const getIsAuthCamera = await this.$wxOpenSetting({
      scope: "camera",
      isShowModal: false,
    });
    getApp().globalData.isAuthCamera = getIsAuthCamera;
  },
  async onShow() {
    // 每次页面显示与隐藏都检测一下 如果授权成功,需要重载一下页面,相机才可使用
    let isCam = await this.$wxOpenSetting({ scope: "camera" });
    if (!getApp().globalData.isAuthCamera && isCam)
      uni.reLaunch({ url: "/pages/scan/index" });
  },
  data() {
    return {};
  },
  methods: {
    // 扫码结果
    async scan_result(res) {
      const resArr = res.split("/");
      const resCode = resArr[resArr.length - 1];
      const scanRes = await this.$Q.get({
        url: this.$api(`scanQcode`, resCode),
      });
      // todo 扫码调接口查询打印机成功与否,
      // console.log('outer扫描组件扫描结果', resCode, scanRes);
      uni.showToast({ icon: "none", title: resCode });
      // this.forValDevice(scanRes.print)
      getApp().globalData.isTabbarScan = resCode;
      this.$goToUrl("/pages/shopInfo/index");
    },
  },
};
</script>

<style lang="scss" scoped>
.scan-page {
  height: 100%;
}
</style>
