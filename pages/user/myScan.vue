<template>
  <view class="page-container flex padding-20">
    <scroll-view
      scroll-y="true"
      style="height: calc(100vh - 40upx)"
      :scrollTop="scrollTop2"
      :refresher-enabled="true"
      :refresher-triggered="triggered2"
      @scrolltolower="scrolltolower2"
      @refresherpulling="refresherpulling2"
      @refresherrefresh="refresherrefresh2"
    >
      <view
        v-for="item in scanList"
        class="one-content"
        :key="item.orderNumber"
      >
        <my-card-scan :item-data="item"></my-card-scan>
      </view>

      <view v-show="isScanLoading" class="bottom-tip">加载中 ...</view>
      <view v-show="isScanNoMore" class="bottom-tip">没有更多了</view>
    </scroll-view>
  </view>
</template>

<script>
import MyCardScan from "./modules/my-card-scan.vue";
export default {
  components: { MyCardScan },
  onShow() {
    this.getScanList(true);
  },
  data() {
    return {
      // 2  扫描 data
      scrollTop2: 0,
      timer2: null,
      triggered2: false,
      isScanNoMore: true,
      isScanLoading: false,
      scanList: [
        // {
        //   fileName: 'fileName',
        //   filePath: 'filePath',
        //   orderNumber: 'orderNumber',
        //   orderTime: 'orderTime',
        //   shopName: 'shopName'
        // }
      ],
      scanObj: {
        size: 10, // 每页大小，默认10
        current: 1, // 当前页，默认1
        total: 0, // 总数
      },
    };
  },
  methods: {
    // =================
    async getScanList(first) {
      this.isScanLoading = true;
      this.isScanNoMore = false;
      const res = await this.$Q.get({
        url: this.$api("myScan"),
        data: this.scanObj,
      });
      this.isScanLoading = false;
      // if (!first) uni.showToast({ icon: 'none', title: '刷新成功!' });
      this.scanObj.total = res.total;
      if (res.total === this.scanList.length) {
        this.$nextTick(() => {
          this.isScanNoMore = true;
        });
      } else {
        this.scanList = this.scanList.concat(res.records);
      }
    },
    scrolltolower2(e) {
      if (this.timer2) clearTimeout(this.timer2);
      this.timer2 = setTimeout(() => {
        if (this.scanObj.total > this.scanList.length) {
          this.scanObj.current += 1;
        }
        this.getScanList();
      }, 300);
    },
    refresherpulling2(e) {
      if (!this.triggered2) {
        //下拉加载，先让其变true再变false才能关闭
        this.triggered2 = true;
        //关闭加载状态 (转动的圈)，需要一点延时才能关闭
        setTimeout(() => {
          this.triggered2 = false;
        }, 1000);
      }
    },
    refresherrefresh2() {
      this.getScanList();
    },
  },
};
</script>

<style lang="scss">
.page-container {
  height: 100%;
}

.bottom-tip {
  text-align: center;
  color: #999;
}
</style>
