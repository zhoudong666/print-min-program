<template>
  <view class="scanCode_box">
    <view class="h k"></view>
    <view class="h k"></view>
    <view class="h k"></view>
    <view class="h k"></view>
    <view class="v k"></view>
    <view class="v k"></view>
    <view class="v k"></view>
    <view class="v k"></view>
    <view class="msg">扫描打印机二维码</view>
    <camera
      class="camera"
      mode="scanCode"
      @scancode="scancode"
      frame-size="large"
    >
      <!-- <cover-view class="animation" :animation="animation"></cover-view> -->
      <!-- <cover-view class="animation" id='anim'></cover-view> -->
        <cover-view class="animation" ></cover-view>
    </camera>
  </view>
</template>

<script>
// 实现步骤
// 1.使用系统相机camera, 客户端6.7.3以上支持相机识别二维码功能
// 2.将系统相机的应用模式mode改为scanCode就是支持二维码了
// 3.给相机设置bindscancode属性,就可以识别而我们时调用我们需要的方法
// 4.使用cover-view,cover-image标签在camera上制作自己想要的页面

// let animation = uni.createAnimation({});  // uniapp的动画暂时取消
let innerAudioContext = uni.createInnerAudioContext();
// 小程序不支持本地音频
innerAudioContext.src =
  "https://downsc.chinaz.net/Files/DownLoad/sound1/202007/13193.mp3";
export default {
  // props: {   // uniapp的动画暂时取消
  //   isShow: {
  //     type: Boolean,
  //     default: true,
  //   },
  // },
  data() {
    return {
      // animation,   // uniapp的动画暂时取消
      lastTime: 0,
      timer: null,
    };
  },
  // watch: {   // uniapp的动画暂时取消
  //   isShow(val) {
  //     if (val) {
  //       this.donghua();
  //     }
  //   },
  // },
  onShow() {},
  mounted() {
    // this.donghua();   // uniapp的动画暂时取消
  },
  methods: {  
    // donghua() {   // uniapp的动画暂时取消
    //   let scode = true;
    //   if (this.timer) clearInterval(this.timer);
    //   this.timer = setInterval(() => {
    //     scode && animation.translateY(220).step({ duration: 3000 });
    //     !scode && animation.translateY(10).step({ duration: 3000 });
    //     scode = !scode;
    //     this.animation = animation.export();
    //   }, 3000);
    // },
    scancode(e) {
      let _nowTime = +new Date();
      if (_nowTime - this.lastTime > 2500) {
        innerAudioContext.play();
        let res = e.detail.result; // 扫描结果
        this.$emit("scan_result", res);
        // console.log('scan component inner', res);
        // uni.showToast({ title: res });
        this.lastTime = _nowTime;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scanCode_box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-color: transparent;
  overflow: hidden;
}
.camera {
  position: relative;
  width: 433upx;
  height: 434upx;
  border-radius: 6upx;
}
.animation {
  position: absolute;
  top: 10upx;
  left: 30upx;
  width: 373upx;
  height: 2upx;
  background-color: #ef6149;
  border-radius: 50%;
  animation: move 6s linear infinite;
}

@keyframes move {
  from {
    transform: translateX(10upx);
  }
  to {
    transform: translateY(410upx);
  }
}
.h {
  height: 10upx;
  width: 150upx;
}
.v {
  width: 10upx;
  height: 150upx;
}
.k {
  position: absolute;
  z-index: 1;
  background-color: #ef6149;
}

.k:nth-child(1),
.k:nth-child(2),
.k:nth-child(5),
.k:nth-child(6) {
  top: 10upx;
}
.k:nth-child(3),
.k:nth-child(4),
.k:nth-child(7),
.k:nth-child(8) {
  bottom: 10upx;
}
.k:nth-child(2n + 1) {
  left: 50%;
  transform: translateX(-204upx);
}
.k:nth-child(2n) {
  right: 50%;
  transform: translateX(204upx);
}
.msg {
  position: absolute;
  top: 350upx;
  z-index: 2;
  color: red;
}
</style>
