<template>
  <view class="app-container padding-20">
    <view class="shop-card bg-white bd-radius-10 padding-20">
      <view class="info">
        <image
          class="icon-shop margin-right-15"
          :src="list.shopLogo"
          mode="scaleToFill"
        ></image>
        <view class="info-content">
          <view class="title c-title fs-36">
            <text>{{
              list.school ? list.school + "-" + list.shopName : list.shopName
            }}</text>
          </view>
          <view class="shopAddress c-grey fs-32 margin-top-15 margin-bottom-15">
            <image
              class="icon-point margin-right-10"
              src="../../static/icon/icon-location.png"
              mode="scaleToFill"
            ></image>
            <text>位置：{{ list.shopAddress }}</text>
          </view>
          <view class="support fs-28">
            <text>支持：</text>
            <text
              v-for="(item, index) in list.shopSupports"
              :key="item.code"
              class="support-tip margin-right-20"
            >
              {{ item.desc }}
            </text>
          </view>
        </view>
      </view>
      <!-- <view class="price fs-24 bd-radius-10">
        <view v-for="(item, index) in priceList" :key="index">
          <view class="price-item">
            <text class="c-grey">{{ item.name }}</text>
            <text>￥{{ item.value }}</text>
          </view>
        </view>
      </view> -->
    </view>
    <view
      v-show="!list.prints.length"
      class="fs-36 bg-white margin-top-20 margin-bottom-20 padding-20"
    >
      <view class="prints-header fs-32-fw-bold tac padding-20"
        >暂无可选打印机</view
      >
    </view>
    <view
      v-show="list.prints.length > 0"
      class="prints fs-32 bg-white padding-20 margin-top-20 margin-bottom-20"
    >
      <view class="prints-header fs-36-fw-bold margin-bottom-30"
        >选择打印机</view
      >
      <radio-group class="radio-group" @change="radioChange">
        <label
          v-for="(item, index) in list.prints"
          :key="item.deviceNo"
          class="margin-bottom-20"
        >
          <radio :value="item.deviceNo" :checked="item.deviceNo === deviceNo" />
          <text>{{ item.deviceName }}</text>
        </label>
      </radio-group>
    </view>
    <view
      v-show="list.prints.length"
      class="btn-container flex justify-content-around"
    >
      <template v-for="item in supports" :key="item">
        <button type="primary" size="mini" @tap.stop="toPrint(typeMap[item])">
          前去{{ item }}
        </button>
      </template>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      deviceNo: "",
      list: {},
      priceList: [
        { name: "A4黑白单面", value: "0.15" },
        { name: "A4黑白双面", value: "0.25" },
        { name: "身份证黑白", value: "0.15" },
      ],
      supports: [],
      typeMap: {
        打印: "print",
        复印: "copy",
        扫描: "scan",
      },
    };
  },
  async onLoad(options) {
    // 处理通过微信的扫码进来的情形
    if (options.q) {
      const urlArr = decodeURIComponent(options.q).split("/");
      const urlCode = urlArr[urlArr.length - 1];
      getApp().globalData.isTabbarScan = urlCode;
    }
  },
  // onshow和onhide触发多次
  onShow() {
    const deviceNo = getApp().globalData.isTabbarScan; // 由扫码得到设备号进行查询
    this.getShopInfo(deviceNo);
  },
  onhide() {
    uni.removeStorageSync("shopInfo");
  },
  mounted() {},
  methods: {
    async getShopInfo(devNo) {
      let res;
      if (devNo) {
        // 由扫码得到设备号进行查询
        res = await this.$Q.get({ url: this.$api(`scanQcode`, devNo) });
        res.prints = [res.printer];
      } else {
        // 附近店铺点进来进行查询
        const shopCode = getApp().globalData.shopCode; // '617cd054f8c042ee91e9f21f'; //
        res = await this.$Q.get({ url: this.$api("shopInfo", shopCode) });
      }

      this.list = res;
      // console.log('扫码跳转来的或者附近店铺点进来', res);
      this.deviceNo = res.prints.length > 0 ? res.prints[0].deviceNo : "";
      Array.isArray(res.shopSupports)
        ? (this.supports = res.shopSupports.map((i) => i.desc))
        : [];
    },
    radioChange(evt) {
      this.deviceNo = evt.detail.value;
    },
    async toPrint(types) {
      getApp().globalData.isPrintOrCopyOrScan = types;
      if (!this.list.prints.length)
        return uni.showToast({ icon: "none", title: "暂无可选打印机" });
      const print = this.list.prints.filter(
        (item) => item.deviceNo === this.deviceNo
      )[0];
      const deviceInfoList = getApp().globalData.deviceInfoList;
      deviceInfoList.forEach((item) => {
        getApp().globalData[item] = print[item];
      });
      const shopInfoList = getApp().globalData.shopInfoList;
      shopInfoList.forEach((item) => {
        getApp().globalData[item] = this.list[item];
      });

      await getApp().newFlowCode(); // 生成新的 打印流水号
      if (types === "print") {
        getApp().globalData.isNearShop = true;
        this.$goToUrl("/pages/printSteps/choose");
      } else {
        getApp().globalData.isNearShop = false;
        this.$goToUrl("/pages/copyPages/copySetParams");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon-shop {
    width: 130upx;
    height: 130upx;
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .shopAddress,
    .support {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .icon-point {
      width: 30upx;
      height: 30upx;
    }

    .support-tip {
      display: inline-block;
      padding: 15upx 10upx;
    }
  }
}

.price {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .price-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80upx;
    margin-right: 15upx;
  }
}
.prints-header {
  height: 36upx;
  line-height: 36upx;
}

.radio-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.btn-container {
  width: 100%;
}
</style>
