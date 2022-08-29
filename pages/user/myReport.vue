<template>
  <view class="page-container bg-white">
    <view
      class="chart-item bg-white padding-left-20 padding-right-20 padding-top-40"
      style="height: calc(100% - 132upx)"
    >
      <view class="first-row flex justify-content-between margin-bottom-20">
        <view class="tac bd-solid-print-2 bd-radius-5">
          <view class="text">累计消费</view>
          <view class="text">
            <text class="c-print fs-40-fw-bold margin-right-10">
              {{ (historyObj.price / 100).toFixed(2) }}
            </text>
            元
          </view>
        </view>
        <view class="tac bd-solid-print-2 bd-radius-5">
          <view class="text">累计积分抵扣</view>
          <view class="text">
            <text class="c-print fs-40-fw-bold margin-right-10">
              {{ (historyObj.deductPrice / 100).toFixed(2) }}
            </text>
            元
          </view>
        </view>
      </view>

      <view class="second-row margin-bottom-20">
        <view class="tac bd-solid-print-2 bd-radius-5">
          <view class="text">累计退款</view>
          <view class="text">
            <text class="c-print fs-40-fw-bold margin-right-10">
              {{ (historyObj.refund / 100).toFixed(2) }}
            </text>
            元
          </view>
        </view>
      </view>

      <view class="third-row margin-bottom-20">
        <view class="tac bd-solid-print-2 bd-radius-5">
          <view class="text">累计用纸</view>
          <view class="text">
            <text class="c-print fs-40-fw-bold margin-right-10">{{
              historyObj.papers
            }}</text>
            张
          </view>
        </view>
      </view>

      <view class="forth-row flex justify-content-between margin-bottom-20">
        <view class="tac bd-solid-print-2 bd-radius-5">
          <view class="text">打印量</view>
          <view class="text">
            <text class="c-print fs-40-fw-bold margin-right-10">{{
              historyObj.prints
            }}</text>
            张
          </view>
        </view>
        <view class="tac bd-solid-print-2 bd-radius-5">
          <view class="text">复印量</view>
          <view class="text">
            <text class="c-print fs-40-fw-bold margin-right-10">{{
              historyObj.copys
            }}</text>
            张
          </view>
        </view>
        <view class="tac bd-solid-print-2 bd-radius-5">
          <view class="text">扫描量</view>
          <view class="text">
            <text class="c-print fs-40-fw-bold margin-right-10">{{
              historyObj.scans
            }}</text>
            次
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  onShow() {
    this.getHistoryPrint();
  },
  onPullDownRefresh() {
    this.getHistoryPrint().then(() => {
      uni.stopPullDownRefresh();
      uni.showToast({
        icon: "none",
        title: "数据已更新!",
      });
    });
  },
  data() {
    return {
      // 3 历史 总览
      historyObj: {
        copys: 0,
        deductPrice: 0,
        papers: 0,
        price: 0,
        prints: 0,
        refund: 0,
        scans: 0,
      },
    };
  },
  methods: {
    getHistoryPrint() {
      return new Promise(async (resolve) => {
        const res = await this.$Q.get({ url: this.$api("historyPrint") });
        for (const k in res) {
          this.$set(this.historyObj, k, res[k]);
        }
        resolve();
      });
    },
  },
};
</script>

<style lang="scss">
.page-container {
  height: 100%;
}
.tac {
  text-align: center;
  .text {
    padding: 20upx;
  }
}
.first-row .tac {
  width: calc(50% - 15upx);
}
.forth-row .tac {
  width: calc(33% - 15upx);
}
</style>
