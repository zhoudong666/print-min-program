<template>
  <view class="my-card">
    <view class="top-title flex justify-content-between">
      <view class="shop text-over-ellipsis">{{ itemData.shopName }}</view>
      <view class="time text-over-ellipsis">{{ itemData.orderTime }}</view>
    </view>

    <view class="content flex">
      <image class="image" src="/static/icon/icon-document.png"></image>

      <view class="right-part">
        <view class="box flex justify-content-between">
          <view class="box-left text-over-ellipsis fw-bold">{{
            itemData.fileName
          }}</view>
          <view class="box-right status">{{ statusMap[itemData.status] }}</view>
        </view>
        <view class="box flex justify-content-between">
          <view class="box-left text-over-ellipsis fs-color-grey">1个文件</view>
          <view class="box-right price"
            >￥ {{ (itemData.actualPrice / 100).toFixed(2) }}</view
          >
        </view>
      </view>
    </view>
    <view class="buttom flex">
      <view class="print-again" @click.stop="printAgain(itemData.orderNumber)">
        {{ itemData.orderType === "AA" ? "再打印一次" : "打印" }}
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      statusMap: {
        0: "",
        1: "待打印",
        2: "已完成",
        3: "打印失败",
        4: "申请退款",
        5: "已退",
      },
    };
  },
  methods: {
    printAgain(orderNumber) {
      getApp().printAgain(orderNumber);
    },
    // async printAgain(orderNumber) {
    //   console.log('printAgain', orderNumber);
    //   const res = await this.$Q.get({ url: this.$api('repeatTaskFlow'), data: { orderNumber } });
    //   getApp().globalData.isPrintOrCopyOrScan = 'print';
    //   getApp().globalData.flowCode = res;
    //   // getApp().globalData.flowCode = '61cc80b2e4b0051c1dc84d89'; // res;
    //   this.$goToUrl("/pages/printSteps/setParams");
    //   this.getPrintParams();
    // },
    // // 获取打印文件和设置参数
    // async getPrintParams() {
    //   var params = {
    //     flowCode: getApp().globalData.flowCode,
    //     deviceNo: getApp().globalData.deviceNo
    //   };
    //   const printParams = await this.$Q.put({ url: this.$api('getPrintParams'), data: params });
    //   getApp().globalData.printParams = printParams;
    //   this.$goToUrl("/pages/printSteps/setParams");
    // }
  },
};
</script>

<style lang="scss" scoped>
.fs-color-grey {
  color: $uni-text-color-grey;
}

.my-card {
  position: relative;
  margin: 0 20upx 20upx;
  background-color: #fff;
  padding: 20upx;
  .top-title {
    display: flex;
    flex-wrap: nowrap;
    font-size: 14px;
    color: $uni-text-color-grey;
    padding-bottom: 20upx;
    .shop {
      width: calc(100% - 150px);
    }
    .time {
      font-size: 14px;
      width: 150px;
      text-align: right;
    }
  }
  .content {
    position: relative;
    padding: 0 0 0 120upx;
    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100upx;
      height: 100upx;
    }
  }
  .right-part {
    width: 100%;
    .box {
      margin-bottom: 20upx;
      .box-left {
        width: calc(100% - 65px);
      }
      .box-right {
        width: 68px;
      }
      .status {
        // padding: 3upx;
        text-align: center;
        // border-radius: 20px;
        // color: #fff;
        // background-color: #ff9966;
        color: #ff9966;
      }
    }
  }
  .buttom {
    flex-direction: row-reverse;
    .print-again {
      color: #fff;
      background-color: #ff9966;
      padding: 5upx 18upx;
      border-radius: 10upx;
    }
  }
}
</style>
