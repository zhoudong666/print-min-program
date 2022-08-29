<template>
  <view class="waiting">
    <view class="img box"
      ><image class="image" src="/static/icon/icon-dui.png"></image
    ></view>
    <view class="msg box">
      支付完成，
      <text v-if="formWhere === 'print' || formWhere === 'copy'"
        >正在出纸 ...</text
      >
      <text v-else-if="formWhere === 'scan'">到“我的”下载</text>
    </view>
    <view class="continue c-print box" @click="continueHandle">
      继续
      <text v-if="formWhere === 'print'">打印</text>
      <text v-else-if="formWhere === 'copy'">复印</text>
      <text v-else-if="formWhere === 'scan'">扫描</text>
    </view>
    <view class="c-print tac margin-top-80" @click="goHome">返回主页</view>
  </view>
</template>

<script>
export default {
  onShow() {
    this.formWhere = getApp().globalData.isPrintOrCopyOrScan;
  },
  onHide() {
    console.log("hide111");
  },
  onUnload(options) {
    console.log("onUnload22");
    this.goHome();
  },
  data() {
    return { formWhere: "scan" };
  },
  methods: {
    async continueHandle() {
      let getFlowCode = await getApp().newFlowCode(); // 生成flowCode
      if (this.formWhere === "print") {
        // uni.showToast({ title: '继续打印' });
        this.$goToUrl("/pages/printSteps/choose", { goType: "reLaunch" });
      } else {
        this.$goToUrl("/pages/copyPages/copySetParams", { goType: "reLaunch" });
      }
    },
    goHome() {
      this.$goToUrl("/pages/dashbord/index", { goType: "reLaunch" });
    },
  },
};
</script>

<style lang="scss" scoped>
.waiting {
  height: 100vh;
  background-color: #fff;
  .img .image {
    width: 150upx;
    height: 150upx;
    margin-top: 20%;
  }
  & > .box {
    display: flex;
    justify-content: center;
  }
  .msg {
    color: #1aad19;
    margin: 50upx 0 20%;
  }
}
</style>
