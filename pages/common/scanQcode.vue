<template>
  <view class="scan-page"
    ><uni-scan @scan_result="scan_result"></uni-scan
  ></view>
</template>

<script>
export default {
  onLoad() {
    this.flowCode = getApp().globalData.flowCode;
    this.from = getApp().globalData.isPrintOrCopyOrScan;
  },
  onShow() {},
  data() {
    return {
      flowCode: "",
      from: "copy",
      deviceNo: "",
    };
  },
  methods: {
    // 扫码结果
    async scan_result(res) {
      const resArr = res.split("/");
      const resCode = resArr[resArr.length - 1];

      const data = { deviceNo: resCode, flowCode: this.flowCode };
      const scanRes = await this.$Q.put({
        url: this.$api(`${this.from}_scan_setPrinter`),
        data,
      });

      // uni.showToast({ icon: 'none', title: resCode })
      this.forValDevice(scanRes.print);
      this.forValShop(scanRes);
    },

    // 给打印机device几个对象赋值
    async forValDevice(deviceObj) {
      getApp().globalData.deviceMsg = deviceObj.deviceMsg;
      getApp().globalData.deviceNo = this.deviceNo = deviceObj.deviceNo;
      getApp().globalData.deviceName = deviceObj.deviceName;

      if (this.from === "print") return;
      const setPrinter = { deviceNo: this.deviceNo, flowCode: this.flowCode };
      await this.$Q.put({
        url: this.$api(`${this.from}_setPrinter`),
        data: setPrinter,
      });
      getApp().globalData.isFromScanQcode = true;
      uni.navigateBack({ delta: 1 });
    },
    // 给店铺shop几个对象赋值
    forValShop(shopObj) {
      getApp().globalData.shopName = shopObj.shopName;
      getApp().globalData.shopCode = shopObj.shopCode;
      getApp().globalData.shopAddress = shopObj.shopAddress;
      getApp().globalData.shopLogo = shopObj.shopLogo;
    },
  },
};
</script>

<style lang="scss" scoped>
.scan-page {
  height: 100%;
}
</style>
