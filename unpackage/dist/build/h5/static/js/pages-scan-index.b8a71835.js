(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scan-index"],{"163a":function(t,a,e){"use strict";e.r(a);var n=e("176f"),i=e("3458");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("ed79");var c,s=e("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"77ace3ea",null,!1,n["a"],c);a["default"]=o.exports},1751:function(t,a,e){"use strict";e.r(a);var n=e("7b59"),i=e("72cd");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("8dc5");var c,s=e("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"14cfa53e",null,!1,n["a"],c);a["default"]=o.exports},"176f":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"scanCode_box"},[n("v-uni-camera",{staticClass:"camera",attrs:{mode:"scanCode",flash:t.isLight,"frame-size":"large"},on:{scancode:function(a){arguments[0]=a=t.$handleEvent(a),t.scancode.apply(void 0,arguments)}}},[n("v-uni-cover-view",{staticClass:"aside bg-ccc float-left"}),n("v-uni-cover-view",{staticClass:"middle float-left"},[n("v-uni-cover-view",{staticClass:"top bg-ccc"}),n("v-uni-cover-view",{staticClass:"center"},[n("v-uni-cover-view",{staticClass:"h k"}),n("v-uni-cover-view",{staticClass:"h k"}),n("v-uni-cover-view",{staticClass:"h k"}),n("v-uni-cover-view",{staticClass:"h k"}),n("v-uni-cover-view",{staticClass:"v k"}),n("v-uni-cover-view",{staticClass:"v k"}),n("v-uni-cover-view",{staticClass:"v k"}),n("v-uni-cover-view",{staticClass:"v k"}),n("v-uni-cover-view",{staticClass:"animation",attrs:{animation:t.animation}})],1),n("v-uni-cover-view",{staticClass:"bottom bg-ccc"},[n("v-uni-cover-view",{staticClass:"tips"},[t._v("扫描打印机二维码")]),n("v-uni-cover-view",{staticClass:"light-box flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeLight.apply(void 0,arguments)}}},[n("v-uni-cover-image",{staticClass:"light margin-bottom-20",attrs:{src:e("31a3")}}),n("v-uni-cover-view",{staticClass:"text"},[t._v(t._s(t.isLight))])],1)],1)],1),n("v-uni-cover-view",{staticClass:"aside bg-ccc float-left"})],1)],1)},r=[]},1954:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scanCode_box[data-v-77ace3ea],\r\n.camera[data-v-77ace3ea]{position:relative;width:100%;height:100%}.bg-ccc[data-v-77ace3ea]{background:rgba(0,0,0,.4)}.float-left[data-v-77ace3ea]{float:left}.aside[data-v-77ace3ea]{width:%?100?%;height:100%;box-sizing:initial}.middle[data-v-77ace3ea]{height:100%;width:calc(100vw - %?200?%)}.top[data-v-77ace3ea]{height:15%}.center[data-v-77ace3ea]{position:relative;height:74vw;width:74vw}.animation[data-v-77ace3ea]{position:absolute;top:%?20?%;left:6vw;width:62vw;height:%?2?%;background-color:#f96;border-radius:50%}.bottom[data-v-77ace3ea]{height:80vh}.tips[data-v-77ace3ea],\r\n.text[data-v-77ace3ea]{text-align:center;padding:%?20?%;color:#cdcdcd}.light-box[data-v-77ace3ea]{height:30%;flex-direction:column;align-items:center}.light-box .light[data-v-77ace3ea]{height:%?110?%;width:%?80?%}.light-box .text[data-v-77ace3ea]{color:#cdcdcd}.h[data-v-77ace3ea]{height:%?10?%;width:%?80?%}.v[data-v-77ace3ea]{width:%?10?%;height:%?80?%}.k[data-v-77ace3ea]{position:absolute;z-index:1;background-color:#f96}.k[data-v-77ace3ea]:nth-child(1),\r\n.k[data-v-77ace3ea]:nth-child(2),\r\n.k[data-v-77ace3ea]:nth-child(5),\r\n.k[data-v-77ace3ea]:nth-child(6){top:%?10?%}.k[data-v-77ace3ea]:nth-child(3),\r\n.k[data-v-77ace3ea]:nth-child(4),\r\n.k[data-v-77ace3ea]:nth-child(7),\r\n.k[data-v-77ace3ea]:nth-child(8){bottom:%?10?%}.k[data-v-77ace3ea]:nth-child(2n + 1){left:%?10?%}.k[data-v-77ace3ea]:nth-child(2n){right:%?10?%}',""]),t.exports=a},"31a3":function(t,a){t.exports="data:image/png;base64,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"},3381:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scan-page[data-v-14cfa53e]{height:100%}',""]),t.exports=a},3458:function(t,a,e){"use strict";e.r(a);var n=e("ac07"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"4d47":function(t,a,e){"use strict";var n=e("4ea4");e("ac1f"),e("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var i=n(e("1da1")),r={onLoad:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$wxOpenSetting({scope:"camera",isShowModal:!1});case 2:e=a.sent,getApp().globalData.isAuthCamera=e;case 4:case"end":return a.stop()}}),a)})))()},onShow:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$wxOpenSetting({scope:"camera"});case 2:e=a.sent,!getApp().globalData.isAuthCamera&&e&&uni.reLaunch({url:"/pages/scan/index"});case 4:case"end":return a.stop()}}),a)})))()},data:function(){return{}},methods:{scan_result:function(t){var a=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.split("/"),i=n[n.length-1],e.next=4,a.$Q.get({url:a.$api("scanQcode",i)});case 4:e.sent,uni.showToast({icon:"none",title:i}),getApp().globalData.isTabbarScan=i,a.$goToUrl("/pages/shopInfo/index");case 8:case"end":return e.stop()}}),e)})))()}}};a.default=r},"72cd":function(t,a,e){"use strict";e.r(a);var n=e("4d47"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"7b59":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uniScan:e("163a").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"scan-page"},[e("uni-scan",{on:{scan_result:function(a){arguments[0]=a=t.$handleEvent(a),t.scan_result.apply(void 0,arguments)}}})],1)},r=[]},"8dc5":function(t,a,e){"use strict";var n=e("b440"),i=e.n(n);i.a},a3de:function(t,a,e){var n=e("1954");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("708fb9fc",n,!0,{sourceMap:!1,shadowMode:!1})},ac07:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=uni.createAnimation({}),i=uni.createInnerAudioContext();i.src="https://downsc.chinaz.net/Files/DownLoad/sound1/202007/13193.mp3";var r={data:function(){return{animation:n,lastTime:0,timer:null,isLight:"off"}},onShow:function(){},mounted:function(){this.donghua()},methods:{donghua:function(){var t=this,a=!0;this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){a&&n.translateY(250).step({duration:3e3}),!a&&n.translateY(10).step({duration:3e3}),a=!a,t.animation=n.export()}),3e3)},scancode:function(t){var a=+new Date;if(a-this.lastTime>2500){i.play();var e=t.detail.result;this.$emit("scan_result",e),this.lastTime=a}},changeLight:function(){this.isLight="on"===this.isLight?"off":"on"}}};a.default=r},b440:function(t,a,e){var n=e("3381");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("3ba6849c",n,!0,{sourceMap:!1,shadowMode:!1})},ed79:function(t,a,e){"use strict";var n=e("a3de"),i=e.n(n);i.a}}]);