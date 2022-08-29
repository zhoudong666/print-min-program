<template>
  <view class="mine-page">
    <view class="info padding-40">
      <view class="flex justify-content-between">
        <view class="flex flex-align-items-center">
          <image class="avator" :src="avator_src" mode=""></image>
          <view class="name">{{ username }}</view>
        </view>
        <view class="click-login fw-bold" @click="gotoLogin" v-if="!isLogin"
          >点击登录</view
        >
      </view>
    </view>
    <view class="nav flex justify-content-around padding-20 margin-20 bg-white">
      <view
        class="flex flex-column flex-align-items-center nav-item"
        v-for="(item, i) in navList"
        :key="item.title"
        @click="gotoPage(item.url)"
      >
        <image class="img" :src="item.icon" mode=""></image>
        <text>{{ item.title }}</text>
      </view>
    </view>
    <view class="margin-20 bg-white">
      <view
        class="other-item flex justify-content-between bd-bottom-solid-default-2"
        v-for="item in otherList"
        :key="item.title"
        @click="gotoPage(item.url)"
      >
        <view>
          <image class="img margin-right-10" :src="item.icon" mode=""></image>
          <text>{{ item.title }}</text>
        </view>
        <text class="arror c-grey" decode="true">&gt;</text>
      </view>
    </view>

    <button type="primary" class="margin-20" @click="logout" v-if="isLogin">
      退出登录
    </button>
  </view>
</template>

<script>
import { xartlogin, loginForWx } from "@/utils/login.js";
export default {
  components: {},
  onShow() {
    this.setInfo();
  },
  data() {
    return {
      avator_src: "/static/icon/icon-avator.png",
      username: "用户名",
      isLogin: false,
      timer: null,
      navList: [
        {
          title: "我的订单",
          icon: "/static/icon/icon-order.png",
          url: "/pages/user/myOrder",
        },
        {
          title: "我的积分",
          icon: "/static/icon/icon-point.png",
          url: "/pages/user/myPoint",
        },
        {
          title: "扫描件下载",
          icon: "/static/icon/icon-scan-down.png",
          url: "/pages/user/myScan",
        },
      ],
      otherList: [
        {
          title: "统计报表",
          icon: "/static/icon/icon-report.png",
          url: "/pages/user/myReport",
        },
        {
          title: "操作指南",
          icon: "/static/icon/icon-intro.png",
          url: "/pages/user/intro",
        },
        {
          title: "关于我们",
          icon: "/static/icon/icon-about.png",
          url: "/pages/user/about",
        },
      ],
    };
  },
  methods: {
    // 设置用户头像和昵称
    setInfo() {
      var userInfoNow = uni.getStorageSync("userInfo");
      if (userInfoNow) {
        this.avator_src = userInfoNow.pic;
        this.username = userInfoNow.nickName;
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    gotoLogin() {
      uni.setStorageSync("loginRedirect", "/pages/user/index");
      loginForWx();
      // 登录请求后台,开个定时器刷用户头像和昵称,检测登录后停掉
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.setInfo();
        if (this.isLogin) clearInterval(this.timer);
      }, 100);
      setTimeout(() => {
        clearInterval(this.timer);
      }, 5 * 60 * 1000);
    },
    logout() {
      uni.showModal({
        title: "确认退出登录?",
        success({ confirm }) {
          if (!confirm) return;
          uni.removeStorageSync("userInfo");
          uni.removeStorageSync("token");
          uni.removeStorageSync("loginRedirect");
          uni.removeStorageSync("setTokenTime");
          uni.reLaunch({ url: "/pages/user/index" });
        },
      });
    },
    gotoPage(url) {
      console.log(url);
      this.$goToUrl(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  height: 160upx;
  background-color: #fff;
  .avator {
    height: 120upx;
    width: 120upx;
    border: 1upx solid $mainColor;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 20upx;
  }
  .name {
    width: 360upx;
  }
  .click-login {
    line-height: 120upx;
  }
}
.nav {
  .img {
    height: 80upx;
    width: 80upx;
    vertical-align: middle;
  }
}
.other-item {
  .img {
    height: 70upx;
    width: 70upx;
    vertical-align: middle;
    margin-right: 20upx;
  }
  padding: 30upx 0;
  margin: 0 30upx;
  .arror {
    line-height: 70upx;
  }
}
.other-item:last-child {
  border: none;
}
</style>
