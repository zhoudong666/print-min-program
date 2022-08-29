<template>
  <view class="testPage">testPage</view>
</template>

<script>
export default {
  async onLoad() {},
  onReady() {
    this.connectSocketInit();
  },
  async onShow() {},
  data() {
    return {
      socketTask: null,
    };
  },
  methods: {
    connectSocketInit() {
      var that = this;
      let name = encodeURI("测试传入中文");
      this.socketTask = uni.connectSocket({
        url: "wss://app.chsmart123.com/gcclwechat/websocket/BC3CA9C734974447A0760A1E0C4C76A6",
        success(data) {
          console.log("websocket连接成功", data);
        },
        header: { "content-type": "application/json" },
        // protocols: ['protocol1'],
        method: "GET",
      });

      this.socketTask.onOpen((res1) => {
        console.log("onOpen", res1);
        this.socketTask.onMessage((res2) => {
          // 可根据接收到的消息res来判断是否生产成功
          console.log("onMessage", res2);
        });
      });
      this.socketTask.onError(function (res) {
        console.log(res, "WebSocket连接打开失败，请检查！");
        this.closeSocket();
      });
      // 这里仅是事件监听【如果socket关闭了会执行】
      this.socketTask.onClose(() => {
        console.log("已经被关闭了");
      });
    },
    // 关闭websocket
    closeSocket() {
      var that = this;
      this.socketTask.close({
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

<style lang="scss" scoped></style>
