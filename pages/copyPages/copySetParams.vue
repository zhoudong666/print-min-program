<template>
  <view class="app-container bg-white fs-36">
    <view class="params bg-white bd-radius-10">
      <view
        class="params-set bd-bottom-solid-default-1 margin-top-20 margin-bottom-50"
      >
        <view
          class="count-conainer params-set-item margin-bottom-50"
          v-if="isCopyOrScan === 'copy'"
        >
          <text>份数</text>
          <view
            class="count bd-solid-default-1 bd-radius-5 bg-numbtn margin-right-12"
          >
            <view class="count-btn reduce" @click="reduce(fileNums)">-</view>
            <view>
              <input
                class="count-input bg-white"
                type="number"
                maxlength="2"
                :value="fileNums"
                @input="inputChange"
                @blur="inputChange"
                id="inputId"
                :disabled="!isFirst"
              />
            </view>
            <view class="count-btn plus" @click="plus(fileNums)">+</view>
          </view>
        </view>
        <view
          v-for="(paramItem, paramIndex) in setParams"
          :key="paramIndex"
          class=""
        >
          <view class="radio-container params-set-item margin-bottom-35">
            <text>{{ paramItem.tempType }}</text>
            <radio-group
              class="radio-group"
              @change="radioChange"
              :id="paramIndex"
            >
              <label
                class="radio-item"
                v-for="(optItem, optIndex) in paramItem.items"
                :key="optItem.tempCode"
              >
                <view class="radio-title">{{ optItem.tempDesc }}</view>
                <view>
                  <radio
                    :value="optItem.tempCode"
                    style=""
                    :checked="!!optItem.chooseType"
                    :disabled="!isFirst"
                  />
                </view>
              </label>
            </radio-group>
          </view>
        </view>
      </view>

      <view class="margin-bottom-35" v-if="isCopyOrScan === 'scan'">
        <text class="margin-right-20">扫描文件名（选填）</text>
        <view class="input-box">
          <input
            class="uni-input"
            @input="onKeyInput"
            maxlength="20"
            :value="scanFileName"
            placeholder="输入扫描件命名，限字20"
            :disabled="!isFirst"
          />
          <text class="uni-icon" v-if="showClearIcon" @click="clearIcon"
            >x</text
          >
        </view>
      </view>

      <button type="primary" @click="starthandle" :disabled="isBtnDisabled">
        {{ isFirst ? "开始" : "继续" }}{{ btnText }}
      </button>

      <view class="succ-tip flex">
        <!-- todo websocket -->
        <!-- <view><image class="dui" src="../../static/icon/icon-dui.png"></image></view>
        <view class="msg">{{ btnText }}1: {{ btnText }}完成, 支付完成后出纸</view> -->
      </view>

      <view class="buttom-btn-container flex flex-row-reverse">
        <view class="padding-20 width100">
          <!-- <button type="default">继续{{ btnText }}</button> -->
          <button
            type="primary"
            @click="$goToUrl('/pages/common/payPage')"
            :disabled="isFirst || isBtnDisabled"
          >
            去支付
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { websocketUrl } from "../../urlConfig";
export default {
  async onShow() {
    this.isCopyOrScan = getApp().globalData.isPrintOrCopyOrScan;
    if (this.isCopyOrScan === "copy") {
      this.setParams.splice(
        1,
        0,
        {
          tempType: "颜色",
          items: [
            { tempCode: "DA", tempDesc: "黑白", chooseType: 0 },
            { tempCode: "DB", tempDesc: "彩色", chooseType: 0 },
          ],
          current: -1,
        },
        {
          tempType: "单双面",
          items: [
            { tempCode: "EA", tempDesc: "单面", chooseType: 0 },
            { tempCode: "EB", tempDesc: "双面", chooseType: 0 },
          ],
          current: -1,
        }
      );
    }
    this.deviceNo = getApp().globalData.deviceNo;
    this.btnText = this.btnTextMap[this.isCopyOrScan];

    const { printSettings } = await this.$Q.get({
      url: this.$api(this.isCopyOrScan + "_settingDefault", this.deviceNo),
    });
    printSettings.forEach((item, index) => {
      item.current = item.items.findIndex((i) => i.chooseType === 1);
    });
    this.setParams = printSettings;

    this.appCode = this.isCopyOrScan;
    this.cid = this.appCode + new Date().getTime();

    this.connectSocketInit(this.appCode, this.cid);
  },
  onHide() {
    this.closeSocket();
    console.log("hide");
  },
  onUnload() {
    this.closeSocket();
    console.log("onUnload");
  },
  data() {
    return {
      isCopyOrScan: "copy",
      deviceNo: "",
      fileNums: 1, // 复印 文件数量,默认1
      scanFileName: "", // 为扫描页 准备的 扫描文件名 选填
      setParams: [
        {
          tempType: "大小",
          items: [
            { tempCode: "CA", tempDesc: "A3", chooseType: 0 },
            { tempCode: "CB", tempDesc: "A4", chooseType: 0 },
          ],
          current: -1,
        },
      ],

      isFirst: true,
      btnTextMap: {
        copy: "复印",
        scan: "扫描",
      },
      btnText: "",
      showClearIcon: false,
      isBtnDisabled: false,

      appCode: "scan",
      cid: "",
      socketTask: null,
    };
  },
  methods: {
    // 单选按钮更改事件
    radioChange: function (evt) {
      const index = evt.currentTarget.id;
      this.setParams[index].current = this.setParams[index].items.findIndex(
        (item) => {
          return item.tempCode === evt.detail.value;
        }
      );
    },
    // 数量输入事件
    inputChange(evt) {
      const v = evt.detail.value;
      this.fileNums = !Number(v) ? 1 : parseInt(v) > 99 ? 99 : parseInt(v);
    },
    // 减少按钮
    reduce() {
      if (!this.isFirst)
        return uni.showToast({ icon: "none", title: "不可更改! " });
      if (this.fileNums === 1)
        return uni.showToast({ icon: "none", title: "数值不能小于 1" });
      this.fileNums -= 1;
    },
    // 增加按钮
    plus() {
      if (!this.isFirst)
        return uni.showToast({ icon: "none", title: "不可更改! " });
      if (this.fileNums === 99)
        return uni.showToast({ icon: "none", title: "数值不能大于 99" });
      this.fileNums += 1;
    },
    // 开始复印或扫描按钮
    async starthandle() {
      this.isFirst = false;
      this.isBtnDisabled = true;
      uni.showLoading({
        mask: true,
        title: this.btnTextMap[this.isCopyOrScan] + "中,请稍后...",
      });

      let printSettings = this.setParams.map((item) => {
        return {
          tempType: item.tempType,
          tempCode: item.items[item.current].tempCode,
        };
      });
      const data = {
        deviceNo: this.deviceNo,
        flowCode: getApp().globalData.flowCode,
        printSettings,
        appCode: this.appCode,
        cid: this.cid,
      };
      if (this.isCopyOrScan === "copy") {
        data.fileNums = this.fileNums;
      } else {
        data.scanFileName = this.scanFileName;
      }
      this.$Q.put({
        url: this.$api(this.isCopyOrScan + "_filesSetting"),
        data,
      });
      // let reqStart =
      // console.log('reqStart', reqStart);
    },
    // 扫描文件名输入事件监听
    onKeyInput(event) {
      this.scanFileName = event.detail.value;
      this.showClearIcon = !!event.detail.value.length;
    },
    clearIcon: function () {
      this.scanFileName = "";
      this.showClearIcon = false;
    },

    connectSocketInit(appCode, cid) {
      var that = this;
      that.socketTask = uni.connectSocket({
        url: `${websocketUrl}/api/anon/ws/printer/${appCode}/${cid}`,
        success(data) {
          console.log("websocket连接成功", data);
        },
        // header: { 'content-type': 'application/json' },
        // protocols: ['protocol1'],
        // method: 'GET'
      });
      that.socketTask.onOpen((res1) => {
        console.log("onOpen", res1);
      });

      that.socketTask.onMessage((res2) => {
        // 可根据接收到的消息res来判断是否生产成功
        console.log("onMessage", res2);
        uni.hideLoading();
        if (res2.data == 0) {
          uni.showToast({
            icon: "success",
            title: that.btnTextMap[that.isCopyOrScan] + "成功!",
          });
        } else {
          uni.showToast({
            icon: "error",
            title: that.btnTextMap[that.isCopyOrScan] + "失败!",
          });
        }
        that.isBtnDisabled = false;
        // that.closeSocket();
      });
      that.socketTask.onError((res) => {
        console.log(res, "WebSocket连接打开失败，请检查！");
        // that.closeSocket();
      });
      // 这里仅是事件监听【如果socket关闭了会执行】
      that.socketTask.onClose((e) => {
        console.log("已经被关闭了", e);
      });
    },
    // 关闭websocket
    closeSocket() {
      var that = this;
      uni.hideLoading();
      that.socketTask &&
        that.socketTask.close({
          success(res) {
            console.log("socket关闭成功", res);
          },
          fail(err) {
            console.log("关闭失败", err);
          },
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}
.params {
  padding: 20upx;
  margin-bottom: 20upx;
}
.params-set {
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54upx;
    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70upx;
      height: 50upx;
    }
    &-input {
      width: 140upx;
      text-align: center;
    }
  }
}
.params-operator {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .operator-btn {
    padding: 15upx 20upx;
  }
}
.radio-group,
.radio-item {
  display: flex;
  align-items: center;
  .radio-title {
    // padding: 0 10rpx 0 50rpx;
    width: 120rpx;
    text-align: right;
    padding-right: 10upx;
  }
}
.buttom-btn-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: 20upx;
}
.succ-tip {
  padding: 40upx;
  .dui {
    width: 50upx;
    height: 50upx;
    margin-right: 50upx;
    color: #1aad19;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .msg {
    color: #1aad19;
    height: 50upx;
    line-height: 50upx;
  }
}
.input-box {
  position: relative;
  height: 60upx;
  margin-top: 30upx;
  input {
    height: 100%;
    padding-right: 60upx;
  }
  .uni-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 60rpx;
    text-align: center;
    height: 60upx;
    line-height: 60upx;
    z-index: 1;
  }
}
</style>
