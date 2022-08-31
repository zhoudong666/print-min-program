import Vue from "vue";
import App from "./App";

import "./utils/filters";
// 请求 request 设置
import request from "./utils/request.js";
import { goToUrl, checkIsLogin, goLogin } from "@/utils/login.js";
Vue.prototype.$goToUrl = goToUrl;
Vue.prototype.$checkIsLogin = checkIsLogin;
Vue.prototype.$goLogin = goLogin;

import { wxOpenSetting } from "@/utils/utils.js";
Vue.prototype.$wxOpenSetting = wxOpenSetting;
// 接口
import api from "@/utils/api.js";

import "./assets/main.scss";
import "./assets/common.css";

import { requestUrl } from "./urlConfig";

Vue.prototype.$Q = request;
Vue.prototype.$prefix = requestUrl;

// 用法 this.$api(url,params) // url:请求地址名称 params:拼接参数
Vue.prototype.$api = api.getUrl;

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({ ...App });

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
