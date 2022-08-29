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
          <!-- <view class="box-right status">复制下载链接</view> -->
        </view>
        <view class="box flex justify-content-between">
          <view class="text-over-ellipsis fs-color-grey">1个文件</view>
          <view
            class="box-right status"
            style="width: 260upx"
            @click="setClipboard(itemData.filePath)"
          >
            复制下载链接
          </view>
        </view>
      </view>
    </view>
    <view class="buttom flex">
      <view class="print-again">删除</view>
      <view class="print-again" @click.stop="printAgain(itemData.orderNumber)"
        >打印</view
      >
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
    return {};
  },
  methods: {
    printAgain(orderNumber) {
      getApp().printAgain(orderNumber);
    },
    setClipboard(data) {
      uni.setClipboardData({
        data: data,
        success: function () {
          console.log("setClipboard success", data);
        },
      });
    },
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
        padding: 3upx;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        background-color: #ff9966;
      }
    }
  }
  .buttom {
    flex-direction: row-reverse;
    .print-again {
      color: #ff9966;
      background-color: #fff;
      padding: 5upx 8upx;
      margin-left: 20upx;
    }
  }
}
</style>
