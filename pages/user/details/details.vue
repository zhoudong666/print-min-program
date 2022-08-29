<template>
  <view class="page padding-20">
    <view
      class="top-part padding-20 margin-bottom-20 padding-bottom-40 bg-white"
    >
      <view class="v"
        >订单金额: ￥ {{ (detailObj.actualPrice / 100).toFixed(2) }}</view
      >
      <view class="v">取件点: {{ detailObj.shopName }}</view>
      <view class="v">状态: {{ statusMap[detailObj.status] }}</view>
      <view class="v">位置: 宿舍楼 ==暂无数据</view>
      <view class="v">客服电话: {{ detailObj.shopTel }}</view>
      <view class="v">下单时间: {{ detailObj.orderTime }}</view>
      <view class="v">订单编号: {{ detailObj.orderNumber }}</view>

      <view
        class="copy-order c-print"
        @click="setClipboard(detailObj.orderNumber)"
      >
        复制订单号
      </view>
    </view>

    <view class="file-list padding-20 bg-white">
      <view
        class="title flex justify-content-between padding-bottom-10 bd-bottom-solid-default-1"
      >
        <text class="fw-bold">文件列表</text>
        <text>{{ tttt }}</text>
      </view>
      <view class="content">
        <view class="flex justify-content-around fs-30-fw-bold padding-20">
          {{ detailObj.fileDto.fileName }}
        </view>
        <view class="flex flex-wrap">
          <view
            class="flex flex-column flex-align-items-center padding-bottom-40 item"
          >
            <text class="fs-24 c-grey">色彩</text>
            <text>{{ detailObj.fileDto.paramColor }}</text>
          </view>
          <view
            class="flex flex-column flex-align-items-center padding-bottom-40 item"
          >
            <text class="fs-24 c-grey">单双面</text>
            <text>{{ detailObj.fileDto.paramDou }}</text>
          </view>
          <view
            class="flex flex-column flex-align-items-center padding-bottom-40 item"
          >
            <text class="fs-24 c-grey">打印页码</text>
            <text>{{ detailObj.fileDto.filePages }}</text>
          </view>
          <view
            class="flex flex-column flex-align-items-center padding-bottom-40 item"
          >
            <text class="fs-24 c-grey">多合一</text>
            <text>{{ detailObj.fileDto.paramBj }}</text>
          </view>
          <view
            class="flex flex-column flex-align-items-center padding-bottom-40 item"
          >
            <text class="fs-24 c-grey">份数</text>
            <text>{{ detailObj.fileDto.fileNums }}</text>
          </view>
          <view
            class="flex flex-column flex-align-items-center padding-bottom-40 item"
          >
            <text class="fs-24 c-grey">总页数</text>
            <text>{{ detailObj.fileDto.filePrintPages }}</text>
          </view>
        </view>
        <view class="flex padding-bottom-30 padding-top-30">
          <button
            type="primary"
            v-show="detailObj.status === 2"
            @click="refund(orderNumber)"
          >
            申请退款
          </button>
          <!-- <button type="primary" @click="refund(orderNumber)">申请退款</button> -->
          <button type="primary" @click="printAgain(orderNumber)">
            再打印一次
          </button>
        </view>
        <!-- <view class="n"><text class="c-print">我要申诉</text></view> -->
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(option) {
    this.orderNumber = option.orderNumber;
    this.getOrderDetail(option.orderNumber);
  },
  data() {
    return {
      orderNumber: "",
      statusMap: {
        0: "",
        1: "待打印",
        2: "已完成",
        3: "打印失败",
        4: "申请退款",
        5: "已退",
      },
      typeMap: {
        AA: "打印",
        AB: "复印",
        AC: "扫描",
      },
      detailObj: {
        actualPrice: 0, // 实付金额，单位分
        fileDeductMerPrice: 0, // 商户积分抵扣金额，单位分
        fileDeductPlatPrice: 0, // 平台积分抵扣金额，单位分
        // 打印文件
        fileDto: {
          fileName: "", // 文件名
          fileNums: 0, // 打印份数
          filePages: "", // 打印页码
          filePrintPages: 0, // 打印页数
          paramBj: "", // 多合一
          paramColor: "", // 颜色
          paramDou: "", // 单双面
          paramSize: "", // 尺寸
        },
        orderNumber: "", // 订单号
        orderTime: "", // 订单创建时间
        orderType: "", // 订单类型 AA:打印 AB:复印 AC:扫描
        shopDesc: "", // 店铺备注
        shopName: "", // 店铺名称
        shopTel: "", // 店铺电话
        status: 0, // 订单状态 1:待打印 2：已完成 3：打印失败 4：申请退款 5：已退款
        totalPrice: 0, // 总金额，单位分
      },
    };
  },
  computed: {
    tttt() {
      return (
        "文件数: " +
        this.detailObj.fileDto.fileNums +
        "  " +
        this.typeMap[this.detailObj.orderType] +
        "张数: " +
        this.detailObj.fileDto.filePrintPages
      );
    },
  },
  methods: {
    async getOrderDetail(orderNumber) {
      let res = await this.$Q.get({
        url: this.$api("orderDetail"),
        data: { orderNumber },
      });
      for (const k in res) {
        this.$set(this.detailObj, k, res[k]);
      }
    },
    printAgain(orderNumber) {
      getApp().printAgain(orderNumber);
    },
    // async printAgain(orderNumber) {
    //   const res = await this.$Q.get({
    //     url: this.$api('repeatTaskFlow'),
    //     data: { orderNumber }
    //   });
    //   getApp().globalData.isPrintOrCopyOrScan = 'print';
    //   getApp().globalData.flowCode = res;
    //   this.getPrintParams();
    // },
    // // 获取打印文件和设置参数
    // async getPrintParams() {
    //   var data = {
    //     flowCode: getApp().globalData.flowCode,
    //     deviceNo: getApp().globalData.deviceNo
    //   };
    //   const printParams = await this.$Q.put({ url: this.$api('getPrintParams'), data });
    //   getApp().globalData.printParams = printParams;
    //  this.$goToUrl("/pages/copyPages/copySetParams");
    // },
    setClipboard(data) {
      uni.setClipboardData({
        data: data,
        success: function () {
          console.log("setClipboard success", data);
        },
      });
    },
    refund(orderNumber) {
      // this.$goToUrl('/pages/user/details/refusePage')
      this.$goToUrl(
        `/pages/user/details/refusePage?orderNumber=${orderNumber}`
      );
      // var params = {
      //   buyerMsg: '',
      //   orderNumber: this.orderNumber,
      //   photoFiles: ''
      // };
      // const res = await this.$Q.put({ url: this.$api('refund'), data: params });
      // if (res) uni.showToast({ title: '申请成功!' });
      // console.log('refund请求结果', res);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 40upx);
  .v {
    margin-bottom: 8upx;
  }
}
.copy-order {
  text-align: right;
}
.file-list {
  height: calc(100% - 560upx);
}
.item {
  width: 33%;
}
</style>
