<template>
  <view class="page-container">
    <view class="one-tabs">
      <uni-tabs
        font-color="#999"
        active-color="#ff9966"
        :titles="orderTabstitles"
        @tabs-click="orderTabsClick"
      ></uni-tabs>
    </view>
    <scroll-view
      scroll-y="true"
      style="height: calc(100% - 100upx)"
      :scrollTop="scrollTop1"
      :refresher-enabled="true"
      :refresher-triggered="triggered1"
      @scrolltolower="scrolltolower1"
      @refresherpulling="refresherpulling1"
      @refresherrefresh="refresherrefresh1"
    >
      <view v-for="item in orderList" class="one-content" :key="item.orderTime">
        <my-card-order
          @click.native.stop="toDetail(item.orderNumber)"
          :item-data="item"
        ></my-card-order>
      </view>
      <view v-if="isOrderLoading" class="bottom-tip">加载中 ...</view>
      <view v-if="isOrderNoMore" class="bottom-tip">没有更多了</view>
    </scroll-view>
  </view>
</template>

<script>
import MyCardOrder from "./modules/my-card-order.vue";
export default {
  components: { MyCardOrder },
  onShow() {
    this.getOrderList(true);
  },
  data() {
    return {
      orderTabstitles: ["所有", "待打印", "已完成", "退款"],
      orderObj: {
        status: 0, // 订单状态 0：所有 1:待打印 2:已完成 3:退款
        size: 10, // 每页大小，默认10
        current: 1, // 当前页，默认1
        total: 0, // 总数
      },
      orderList: [
        // {
        //   actualPrice: 15, // 实付金额，单位分
        //   fileDeductMerPrice: '商户积分抵扣金额', // 商户积分抵扣金额，单位分
        //   fileDeductPlatPrice: '平台积分抵扣金额', // 平台积分抵扣金额，单位分
        //   fileName: '文件名称', // 文件名称
        //   orderNumber: '订单号', // 订单号
        //   orderTime: '2021-12-12 15:38:11', // 订单创建时间
        //   orderType: 'AA', // 订单类型 AA:打印 AB:复印 AC:扫描
        //   shopName: '店铺名称', // 店铺名称
        //   status: 1, // 订单状态 1:待打印 2：已完成 3：打印失败 4：申请退款 5：已退款
        //   totalPrice: '总金额' // 总金额，单位分
        // }
      ],
      isOrderLoading: false,
      isOrderNoMore: false,
      triggered1: false,
      timer1: null,
      scrollTop1: 0,
    };
  },
  methods: {
    orderTabsClick(i) {
      this.orderList = [];
      this.orderObj.current = 1;
      this.orderObj.total = 0;
      this.orderObj.status = i;
      this.getOrderList();
    },
    async getOrderList(first) {
      this.isOrderLoading = true;
      this.isOrderNoMore = false;
      const res = await this.$Q.get({
        url: this.$api("myOrder"),
        data: this.orderObj,
      });
      this.isOrderLoading = false;

      if (res.total === this.orderList.length) {
        this.isOrderNoMore = true;
      } else {
        this.orderList = this.orderList.concat(res.records);
      }
    },
    scrolltolower1(e) {
      if (this.timer1) clearTimeout(this.timer1);
      this.timer1 = setTimeout(() => {
        if (this.orderObj.total > this.orderList.length) {
          this.orderObj.current += 1;
        }
        this.getOrderList();
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
      this.getOrderList();
    },
    toDetail(orderNumber) {
      this.$goToUrl(`/pages/user/details/details?orderNumber=${orderNumber}`);
    },
  },
};
</script>

<style lang="scss">
.page-container {
  height: 100%;
}
.one-tabs {
  padding: 20upx 40upx;
  font-size: 40upx;
}
.bottom-tip {
  text-align: center;
  color: #999;
  margin-bottom: 30upx;
}
</style>
