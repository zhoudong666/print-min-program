<template>
  <view class="pay-page">
    <view class="head my-card padding-20 flex">
      <image :src="shopLogo" class="shop-logo"></image>
      <view class="shop-detail">
        <view class="my-card-header margin-bottom-10">打印点</view>
        <view class="my-card-content">
          <view class="school fs-30-fw-bold margin-bottom-10">{{
            shopName
          }}</view>
          <view class="location">位置: {{ shopAddress }}</view>
        </view>
      </view>
    </view>
    <view class="file-list">
      <uni-file-list
        :file-list="payObj.fileOrders"
        height="100%"
        @change-checked="changeChecked"
      ></uni-file-list>
    </view>
    <view class="page-bottom">
      <view class="my-card padding-20">
        <view class="my-card-content">
          <view class="margin-bottom-10 flex justify-content-between">
            <text>总价: {{ payObj.total | filter2dot }} 元</text>
            <text> 积分抵扣 {{ scoreMoney | filter2dot }} 元 </text>
          </view>
          <view class="flex justify-content-between">
            <text>应付: {{ payObj.actualTotal | filter2dot }} 元</text>
            <button type="primary" @click="gotoPayBtn">确认支付</button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad() {
    this.entry = getApp().globalData.isPrintOrCopyOrScan;
    this.shopName = getApp().globalData.shopName;
    this.shopCode = getApp().globalData.shopCode;
    this.shopAddress = getApp().globalData.shopAddress;
    this.shopLogo = getApp().globalData.shopLogo;
    this.getPayList(true);
  },
  data() {
    return {
      entry: "",
      payObj: {
        actualTotal: "", // 实际付款，单位分 integer(int32)
        deductMerPrice: "", // 商户积分抵扣金额，单位分 integer(int32)
        deductPlatPrice: "", // 平台积分抵扣金额，单位分 integer(int32)
        deviceMsg: "", // 打印机描述 string
        deviceName: "", // 打印机名字 string
        deviceNo: "", // 打印机编号 string
        // 打印文件列表 array 单个文件订单展示的信息
        fileOrders: [
          {
            bastetId: "", // 任务临时文件编号 integer(int64)
            fileActualTotal: "", // 实际付款，单位分 integer(int32)
            fileDeductMerPrice: "", // 商户积分抵扣金额，单位分 integer(int32)
            fileDeductPlatPrice: "", // 平台积分抵扣金额，单位分 integer(int32)
            fileName: "", // 文件名称 string
            filePath: "", // 文件路径 string
            fileTotal: "", // 总值，单位分 integer(int32)
            price: "", // 单页价格 integer(int32)
            settingDesc: "", // 设置描述 string
            totalPages: "", // 打印总页数 integer(int32)
          },
        ],

        flowCode: "", // 打印任务流水号 string
        shopCode: "", // 店铺编号 string
        shopLogo: "", // 店铺图片 string
        shopName: "", // 店铺名称 string
        total: "", // 总值，单位分 integer(int32)
      },

      shopName: "",
      shopCode: "",
      shopAddress: "",
      shopLogo: "",

      deviceMsg: "",
      timeFlag: true,
    };
  },
  computed: {
    scoreMoney() {
      return this.payObj.deductMerPrice + this.payObj.deductPlatPrice;
    },
  },
  methods: {
    async getPayList(first) {
      const params = {
        flowCode: getApp().globalData.flowCode,
        deviceNo: getApp().globalData.deviceNo,
      };
      if (first) {
        getApp().globalData.basketIds = [];
      } else {
        params.basketIds = getApp().globalData.basketIds;
      }
      console.log("获取预下单文件信息---params", params);
      const res = await this.$Q.post({
        url: this.$api(`${this.entry}_confirm`),
        data: params,
      });
      for (const key in this.payObj) {
        if (!first && key === "fileOrders") continue;
        this.payObj[key] = res[key];
      }
      this.payObj.fileOrders.forEach((item) => {
        item.value = item.bastetId;
        if (first) {
          getApp().globalData.basketIds.push(item.bastetId);
          item.checked = true; // getApp().globalData.basketIds.includes(item.bastetId);
        } else {
          item.checked = getApp().globalData.basketIds.includes(item.bastetId);
        }
      });
      console.log("获取预下单文件信息", res);
    },
    changeChecked(arr) {
      this.getPayList(false);
      // this.list = arr;
      // console.log('更改选中文件触发的', arr);
    },
    gotoPayBtn() {
      if (this.timeFlag) {
        this.timeFlag = false;
        this.gotoPay();
        setTimeout(() => {
          this.timeFlag = true;
        }, 6000);
      }
    },
    async gotoPay() {
      // this.$goToUrl('/pages/common/waiting', { goType: 'redirectTo' });
      // return;
      let { orderNumbers } = await this.$Q.post({
        url: this.$api(`${this.entry}_submit`),
        data: {
          deviceNo: getApp().globalData.deviceNo,
          flowCode: getApp().globalData.flowCode,
        },
      });

      // 应付为0时
      if (!Number(this.payObj.actualTotal)) {
        let res = await this.$Q.post({
          url: this.$api("payZero"),
          data: { orderNumbers, payType: 0 },
        });
        uni.showLoading({ title: "支付中...", mask: true });
        setTimeout(() => {
          uni.hideLoading();
          // 跳转
          this.$goToUrl("/pages/common/waiting", { goType: "redirectTo" });
        }, 500);
      } else {
        let { appId, nonceStr, packageValue, paySign, signType, timeStamp } =
          await this.$Q.post({
            url: this.$api("pay"),
            data: { orderNumbers, payType: 1 },
          });
        // 唤起支付
        uni.requestPayment({
          provider: "wxpay",
          timeStamp: timeStamp, // String(Date.now()),
          nonceStr: nonceStr, // 'A1B2C3D4E5',
          package: packageValue, //  'prepay_id=wx20180101abcdefg',
          signType: signType, //  'MD5',
          paySign: paySign, // '123123',
          success: (res) => {
            // 待支付成功 跳转
            this.$goToUrl("/pages/common/waiting", { goType: "redirectTo" });
          },
          fail: (err) => {
            console.log("fail:" + JSON.stringify(err));
            uni.showToast({
              icon: "none",
              title: "支付失败,请重试!",
            });
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pay-page {
  height: 100%;
  .head {
    height: 160upx;
  }
  .my-card {
    background-color: #fff;
    &-header {
      color: #0075ff;
    }
  }
  .file-list {
    height: calc(100% - 360upx);
  }
  .page-bottom {
    height: 200upx;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .my-card {
      height: 100%;
    }
    button {
      margin: 0;
    }
  }
  .shop-logo {
    width: 150upx;
    height: 150upx;
    margin-right: 10upx;
  }
  .shop-detail {
    flex: 1;
  }
}
</style>
