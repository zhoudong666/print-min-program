<template>
  <view class="page-container bg-white">
    <view class="padding-left-20 padding-right-20 padding-bottom-20 bg-white">
      <text class="c-grey">商户积分: {{ platScore }}</text>
    </view>
    <view class="table-title table-row flex justify-content-around bg-white">
      <text class="text fw-bold">店铺名称</text>
      <text class="text fw-bold">所属商家</text>
      <text class="text fw-bold">积分</text>
      <text class="text"></text>
    </view>
    <scroll-view
      class="bg-white"
      scroll-y="true"
      style="height: calc(100% - 140upx)"
      :refresher-enabled="true"
      :refresher-triggered="triggered1"
      @scrolltolower="scrolltolower1"
      @refresherpulling="refresherpulling1"
      @refresherrefresh="refresherrefresh1"
    >
      <view
        v-for="item in merScores"
        :key="item.shopName"
        class="table-title table-row flex justify-content-around bg-white"
      >
        <text class="text fs-26">{{ item.shopName }}</text>
        <text class="text fs-24">{{ item.merName }}</text>
        <text class="text">{{ item.score }}</text>
        <text class="c-print text" @click="gotoUse">去使用</text>
      </view>
      <view v-if="!merScores.length" class="bottom-tip">暂无积分</view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  onShow() {
    this.getMyScore();
  },
  data() {
    return {
      // 4 积分
      merScores: [],
      platScore: 0,

      triggered1: false,
      timer1: null,
    };
  },
  methods: {
    getMyScore() {
      return new Promise(async (resolve) => {
        const res = await this.$Q.get({ url: this.$api("myScore") });
        this.platScore = res.platScore;
        this.merScores = res.merScores;
        resolve();
      });
    },
    gotoUse() {
      uni.switchTab({ url: "/pages/dashbord/index" });
    },
    scrolltolower1(e) {
      if (this.timer1) clearTimeout(this.timer1);
      this.timer1 = setTimeout(() => {
        this.getMyScore();
      }, 300);
    },
    refresherpulling1(e) {
      if (!this.triggered1) {
        //下拉加载，先让其变true再变false才能关闭
        this.triggered1 = true;
        //关闭加载状态 (转动的圈)，需要一点延时才能关闭
        setTimeout(() => {
          this.triggered1 = false;
        }, 1000);
      }
    },
    refresherrefresh1() {
      this.getMyScore().then(() => {
        uni.showToast({ icon: "none", title: "数据已更新!" });
      });
    },
  },
};
</script>

<style lang="scss">
.page-container {
  height: 100%;
  line-height: 50upx;
}
.table-row .text {
  text-align: center;
  padding: 10upx;
}
.table-row .text:nth-child(1),
.table-row .text:nth-child(2) {
  flex: 2;
}
.table-row .text:nth-child(3),
.table-row .text:nth-child(4) {
  flex: 1;
}
.bottom-tip {
  text-align: center;
  color: #999;
  margin: 0 60upx 60upx 40upx;
}
</style>
