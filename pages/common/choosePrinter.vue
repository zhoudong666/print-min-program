<template>
  <view class="page padding-20 fs-36">
    <view class="my-card">
      <view class="merchant padding-30 flex justify-content-between">
        <view>已选店铺</view>
        <view>
          <picker
            mode="selector"
            :range="shopList"
            :value="shopIndex"
            @change="shopPickChange"
            :range-key="'shopName'"
          >
            <view class="c-print">重选店铺</view>
          </picker>
        </view>
      </view>
      <view class="my-card-content padding-30">
        <image class="image" src="/static/icon/icon-location.png"></image>
        <text class="margin-left-30">{{ shopName }}</text>
      </view>
    </view>

    <view class="my-card">
      <view class="merchant padding-30 flex justify-content-between">
        <view>已选打印机</view>
        <view @click="scanPrinter">
          <image class="image" src="/static/icon/icon-scan.png"></image>
        </view>
      </view>
      <view
        class="my-card-content padding-30 flex"
        :class="{ 'c-tip': !deviceNo }"
      >
        <image class="image" src="/static/icon/icon-printer.png"></image>
        <picker
          mode="selector"
          :range="printList"
          :value="printerIndex"
          @change="printerPickChange"
          :range-key="'deviceName'"
        >
          <text class="margin-left-20">
            {{ deviceName ? deviceName : hasPrint }}
          </text>
        </picker>
        <view
          class="print-modal"
          @click="noPrintTip"
          v-show="hasPrint === '此店铺无可用打印机'"
        >
        </view>
      </view>
    </view>
    <view class="">
      <view class=""><!-- <uni-scan  ></uni-scan> --></view>
    </view>

    <view class="my-card flex justify-content-around padding-30">
      提示: 请选择或扫描打印机</view
    >
    <button type="primary" @click="goto">{{ nextBtnText[from] }}</button>
  </view>
</template>

<script>
import { getLocaltion } from "../../utils/utils.js";
export default {
  data() {
    return {
      from: "copy",
      flowCode: "",
      shopName: "",
      shopCode: "",
      shopAddress: "",
      shopList: [],
      shopIndex: 0,

      deviceMsg: "",
      deviceNo: "",
      deviceName: "",
      printList: [],
      printerIndex: 0,
      nextBtnText: {
        print: "去支付",
        copy: "下一步",
        scan: "下一步",
      },
      hasPrint: "请选择打印机",
    };
  },
  async onReady(option) {
    // from 参数 'print','copy','scan'
    this.from = getApp().globalData.isPrintOrCopyOrScan;
    this.flowCode = getApp().globalData.flowCode;
    // 用于启动程序第一次进入扫码页,记录相机是否授权 放到全局中
    const getIsAuthCamera = await this.$wxOpenSetting({
      scope: "camera",
      isShowModal: false,
    });
    getApp().globalData.isAuthCamera = !!getIsAuthCamera;
    let location = await getLocaltion();
    // todo: 暂时选择 河海大学 到时候需要放开
    // location = { myLat: '36.665107472186826', myLng: '117.07795495239256' }// 河海大学
    // location = { myLat: '31.929628', myLng: '118.886757' }; // 齐鲁图文
    // location = { myLat: '31.930732', myLng: '118.888625' } // 工程小屋
    const fixShop = await this.$Q.put({
      url: this.$api("locationGetShop"),
      data: location,
    });
    if (typeof fixShop === "object") {
      this.forValShop(fixShop);
      this.printList = fixShop.prints;
      this.hasPrint = this.printList.length
        ? "请选择打印机"
        : "此店铺无可用打印机";
    }
    // 获取附近店铺信息
    const nearShops = await this.$Q.get({
      url: this.$api("nearShop"),
      data: location,
    });
    this.shopList = nearShops;
    if (typeof fixShop === "string") {
      this.forValShop(nearShops[0]);
      this.reqPrints(nearShops[0].shopCode);
    }
  },
  onShow() {
    let isFromScanQcode = getApp().globalData.isFromScanQcode;
    if (isFromScanQcode) {
      getApp().globalData.isFromScanQcode = false;
      this.deviceMsg = getApp().globalData.deviceMsg;
      this.deviceNo = getApp().globalData.deviceNo;
      this.deviceName = getApp().globalData.deviceName;
      // this.goto() // 不可接连跳转
      this.shopName = getApp().globalData.shopName;
      this.shopCode = getApp().globalData.shopCode;
      this.shopAddress = getApp().globalData.shopAddress;
      this.shopLogo = getApp().globalData.shopLogo;
    }
  },
  methods: {
    // 给店铺shop几个对象赋值
    forValShop(shopObj) {
      getApp().globalData.shopName = this.shopName = shopObj.shopName;
      getApp().globalData.shopCode = this.shopCode = shopObj.shopCode;
      getApp().globalData.shopAddress = this.shopAddress = shopObj.shopAddress;
      getApp().globalData.shopLogo = this.shopLogo = shopObj.shopLogo;
    },
    // 给打印机device几个对象赋值
    forValDevice(deviceObj) {
      getApp().globalData.deviceMsg = this.deviceMsg = deviceObj.deviceMsg;
      getApp().globalData.deviceNo = this.deviceNo = deviceObj.deviceNo;
      getApp().globalData.deviceName = this.deviceName = deviceObj.deviceName;

      if (this.from === "print") return;
      const setPrinter = { deviceNo: this.deviceNo, flowCode: this.flowCode };
      if (!this.deviceNo) return;
      this.$Q.put({
        url: this.$api(`${this.from}_setPrinter`),
        data: setPrinter,
      });
    },
    // 根据shopCode请求打印机列表
    async reqPrints(shopCode) {
      const prints = await this.$Q.get({
        url: this.$api("shopDetail", shopCode),
        data: location,
      });
      this.printList = prints.prints;
      this.deviceName = "";
      this.deviceNo = "";
      this.hasPrint = this.printList.length
        ? "请选择打印机"
        : "此店铺无可用打印机";
    },
    // shop 店铺选择后的回调
    async shopPickChange(e) {
      const currItem = this.shopList[e.target.value];
      this.forValShop(currItem);
      this.reqPrints(this.shopCode);
      this.forValDevice({ deviceMsg: "", deviceNo: "", deviceName: "" });
    },
    // device 打印机选择后的回调
    printerPickChange(e) {
      const currItem = this.printList[e.target.value];
      if (currItem) this.forValDevice(currItem);
    },
    // 点击扫设备码的图标
    async scanPrinter() {
      // const isAuthCamera = await this.$wxOpenSetting({ scope: 'camera' })
      // // if (!getApp().globalData.isAuthCamera && isAuthCamera)
      // //   return uni.redirectTo({ url: '/pages/common/choosePrinter' });
      // if (isAuthCamera) this.$goToUrl('/pages/common/scanQcode')
      this.$goToUrl("/pages/common/scanQcode");
    },
    async goto() {
      // todo 放开 对未选中打印机的拦截
      if (!this.deviceNo) {
        return uni.showToast({ icon: "none", title: "请选择或扫描打印机" });
      }
      if (this.from === "copy" || this.from === "scan") {
        this.$goToUrl("/pages/copyPages/copySetParams");
      } else {
        const form = JSON.parse(JSON.stringify(getApp().globalData.allFile));
        const result = form
          .filter((item) => !item.hide)
          .map((item) => {
            item.printSettings = item.printSettings.map((settings) => {
              return {
                tempCode: settings.items.filter(
                  (setItem) => setItem.chooseType === 1
                )[0].tempCode,
                tempType: settings.tempType,
              };
            });
            delete item.hide;
            return item;
          });
        const deviceNo = getApp().globalData.deviceNo;
        const params = {
          flowCode: this.flowCode,
          deviceNo: deviceNo,
          items: result,
        };
        const res = await this.$Q.put({
          url: this.$api("submitPrintParams"),
          data: params,
        });
        getApp().globalData.basketIds = result.map((item) => item.bastetId);
        this.$goToUrl("/pages/common/payPage");
      }
    },
    noPrintTip() {
      uni.showToast({
        icon: "none",
        title: "此店铺无可用打印机, 请重选店铺!",
      });
    },
  },
};
</script>

<style lang="scss">
.my-card {
  border-radius: 10upx;
  background-color: #fff;
  margin-bottom: 20upx;
  .merchant {
    border-bottom: 1px solid #ccc;
  }
  .image {
    width: 46upx;
    height: 46upx;
    vertical-align: middle;
  }
  .my-card-content {
    position: relative;
  }
  .print-modal {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 88upx;
    width: 100%;
    background-color: transparent;
  }
}

.color-eee {
  color: #eee;
}
.display-none {
  display: none;
}
</style>
