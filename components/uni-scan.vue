<template>
  <view class="scanCode_box">
    <camera class="camera" mode="scanCode" :flash="isLight" @scancode="scancode" frame-size="large">
      <cover-view class="aside bg-ccc float-left"></cover-view>
      <cover-view class="middle float-left">
        <cover-view class="top bg-ccc"></cover-view>
        <cover-view class="center">
          <cover-view class="h k"></cover-view>
          <cover-view class="h k"></cover-view>
          <cover-view class="h k"></cover-view>
          <cover-view class="h k"></cover-view>
          <cover-view class="v k"></cover-view>
          <cover-view class="v k"></cover-view>
          <cover-view class="v k"></cover-view>
          <cover-view class="v k"></cover-view>

          <cover-view class="animation" :animation="animation"></cover-view>
        </cover-view>

        <cover-view class="bottom bg-ccc">
          <cover-view class="tips">扫描打印机二维码</cover-view>
          <cover-view class="light-box flex" @click="changeLight">
            <cover-image class="light margin-bottom-20" src="../static/icon/icon-light.png"></cover-image>
            <cover-view class="text">{{ isLight }}</cover-view>
          </cover-view>
        </cover-view>
      </cover-view>
      <cover-view class="aside bg-ccc float-left"></cover-view>
    </camera>
  </view>
</template>

<script>
// 实现步骤
// 1.使用系统相机camera, 客户端6.7.3以上支持相机识别二维码功能
// 2.将系统相机的应用模式mode改为scanCode就是支持二维码了
// 3.给相机设置bindscancode属性,就可以识别而我们时调用我们需要的方法
// 4.使用cover-view,cover-image标签在camera上制作自己想要的页面

let animation = uni.createAnimation({}) // uniapp的动画
let innerAudioContext = uni.createInnerAudioContext()
// 小程序不支持本地音频
innerAudioContext.src = 'https://downsc.chinaz.net/Files/DownLoad/sound1/202007/13193.mp3'
export default {
  data() {
    return {
      animation, // uniapp的动画
      lastTime: 0,
      timer: null,
      isLight: 'off'
    }
  },
  onShow() {},
  mounted() {
    this.donghua() // uniapp的动画
  },
  methods: {
    donghua() {
      // uniapp的动画
      let scode = true
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        scode && animation.translateY(250).step({ duration: 3000 })
        !scode && animation.translateY(10).step({ duration: 3000 })
        scode = !scode
        this.animation = animation.export()
      }, 3000)
    },
    scancode(e) {
      let _nowTime = +new Date()
      if (_nowTime - this.lastTime > 2500) {
        innerAudioContext.play()
        let res = e.detail.result // 扫描结果
        this.$emit('scan_result', res)
        // uni.showToast({ title: res });
        this.lastTime = _nowTime
      }
    },
    changeLight() {
      this.isLight = this.isLight === 'on' ? 'off' : 'on'
    }
  }
}
</script>

<style lang="scss" scoped>
.scanCode_box,
.camera {
  position: relative;
  width: 100%;
  height: 100%;
}
.bg-ccc {
  background: rgba(0, 0, 0, 0.4);
}
.float-left {
  float: left;
}
.aside {
  width: 100upx; // 或者 22 我的手机没有缝隙
  height: 100%;
  box-sizing: content-box;
}
.middle {
  height: 100%;
  width: calc(100vw - 200upx);
}
.top {
  height: 15%;
}
.center {
  position: relative;
  height: 74vw;
  width: 74vw;
}
.animation {
  position: absolute;
  top: 20upx;
  left: 6vw;
  width: 62vw;
  height: 2upx;
  background-color: #ff9966;
  border-radius: 50%;
}
.bottom {
  height: 80vh;
}
.tips,
.text {
  text-align: center;
  padding: 20upx;
  color: #cdcdcd;
}
.light-box {
  height: 30%;
  flex-direction: column;
  align-items: center;
  .light {
    height: 110upx;
    width: 80upx;
  }
  .text {
    color: #cdcdcd;
  }
}

.h {
  height: 10upx;
  width: 80upx;
}
.v {
  width: 10upx;
  height: 80upx;
}
.k {
  position: absolute;
  z-index: 1;
  background-color: #ff9966;
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
  // left: 50%;
  // transform: translateX(-234upx);
  left: 10upx;
}
.k:nth-child(2n) {
  // right: 50%;
  // transform: translateX(204upx);
  right: 10upx;
}
</style>
