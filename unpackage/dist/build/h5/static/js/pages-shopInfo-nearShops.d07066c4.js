(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopInfo-nearShops"],{"01be":function(t,n,i){var a=i("e2b4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("19de43f9",a,!0,{sourceMap:!1,shadowMode:!1})},"0809":function(t,n,i){"use strict";i.r(n);var a=i("f436"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},"21a4":function(t,n,i){"use strict";i.r(n);var a=i("2e2c"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},"2e2c":function(t,n,i){"use strict";var a=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("96cf");var e=a(i("1da1")),o={data:function(){return{shopList:[],timer:null,lunbo:[]}},onLoad:function(t){},onReady:function(){},onShow:function(){this.getLocaltion(),this.getSwiper()},onHide:function(){clearTimeout(this.timer),this.timer=null},mounted:function(){},methods:{getSwiper:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$Q.get({url:t.$api("swiper")});case 2:t.lunbo=n.sent;case 3:case"end":return n.stop()}}),n)})))()},getLocaltion:function(){var t=this;wx.getLocation({type:"gcj02",success:function(n){var i={myLat:n.latitude,myLng:n.longitude};t.getNearShop(i)},fail:function(t){uni.showToast({icon:"none",title:"位置获取失败"})}})},getNearShop:function(t){var n=this;return(0,e.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,n.$Q.get({url:n.$api("nearShop"),data:t});case 2:a=i.sent,n.shopList=a,n.optionVisible=!0;case 5:case"end":return i.stop()}}),i)})))()},_mapshopClose:function(){this.optionVisible=!1},_toShop:function(t){getApp().globalData.isTabbarScan="",getApp().globalData.shopCode=t.shopCode,this.$goToUrl("/pages/shopInfo/index")}}};n.default=o},3121:function(t,n,i){"use strict";var a=i("01be"),e=i.n(a);e.a},"3f5b":function(t,n,i){"use strict";var a=i("6506"),e=i.n(a);e.a},"49be":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var a={uniMapshop:i("c2a4").default},e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",interval:"5000",duration:"1500",circular:!0}},t._l(t.lunbo,(function(t,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-image",{attrs:{src:t.imgUrl,mode:"scaleToFill"}})],1)})),1),i("v-uni-view",{staticClass:"nearShop"},[i("uni-mapshop",{attrs:{data:t.shopList},on:{toShop:function(n){arguments[0]=n=t.$handleEvent(n),t._toShop.apply(void 0,arguments)},mapshopClose:function(n){arguments[0]=n=t.$handleEvent(n),t._mapshopClose.apply(void 0,arguments)}}})],1)],1)},o=[]},"4a6c":function(t,n,i){t.exports=i.p+"static/img/icon-distance.7feab8e8.png"},"4dda":function(t,n,i){"use strict";i.r(n);var a=i("49be"),e=i("21a4");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("3f5b");var s,r=i("f0c5"),c=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"311393fd",null,!1,a["a"],s);n["default"]=c.exports},6506:function(t,n,i){var a=i("b0a3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("6c8665c6",a,!0,{sourceMap:!1,shadowMode:!1})},b0a3:function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page-section-spacing[data-v-311393fd]{width:calc(100% - %?40?%);height:calc(100% - %?40?%);padding:%?20?%}.swiper[data-v-311393fd]{height:%?300?%;width:100%}uni-swiper-item uni-image[data-v-311393fd]{width:100%;height:%?300?%}.nearShop[data-v-311393fd]{height:calc(100% - %?340?%);padding:%?20?% 0 0}',""]),t.exports=n},c2a4:function(t,n,i){"use strict";i.r(n);var a=i("faaa"),e=i("0809");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("3121");var s,r=i("f0c5"),c=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"d645dca2",null,!1,a["a"],s);n["default"]=c.exports},cf13:function(t,n,i){t.exports=i.p+"static/img/icon-location.adc6bb9a.png"},e2b4:function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app-container_box[data-v-d645dca2]{height:100%}.content[data-v-d645dca2]{height:100%;max-height:100%;padding-bottom:%?20?%}.header[data-v-d645dca2]{display:flex;justify-content:space-between;align-items:center;height:%?50?%;line-height:%?50?%;margin-bottom:%?20?%;padding:0 %?20?%}.body[data-v-d645dca2]{width:100%;height:calc(100% - %?70?%)}.body .scroll-view[data-v-d645dca2]{width:100%;height:100%;overflow:hidden}.body .body-item[data-v-d645dca2]{width:calc(100% - %?40?%);display:flex;justify-content:space-between;padding:%?20?%}.body .icon-point[data-v-d645dca2]{width:%?40?%}.body .icon-point-img[data-v-d645dca2]{width:%?30?%;height:%?30?%}.body .info[data-v-d645dca2]{display:flex;justify-content:flex-start;align-items:flex-start}.body .info-item[data-v-d645dca2]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.body .info .info-top .first-tip[data-v-d645dca2]{display:inline-block;padding:%?5?%;margin-left:%?10?%}.body .info .info-bottom[data-v-d645dca2]{display:flex;justify-content:flex-start}.body .info .addr[data-v-d645dca2]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.body .icons[data-v-d645dca2]{display:flex}.body .icons-item[data-v-d645dca2]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-left:%?10?%}.body .icons .icon-size[data-v-d645dca2]{width:%?50?%;height:%?50?%}',""]),t.exports=n},f436:function(t,n,i){"use strict";i("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{visible:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}}},watch:{visible:function(t){this.show=t}},data:function(){return{show:this.visible}},methods:{toShop:function(t){this.$emit("toShop",t)},arrayToString:function(t){return t.map((function(t){return t.desc})).join("")},close:function(){this.show=!1,this.$emit("mapshopClose")}}};n.default=a},faaa:function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"app-container_box bg-blank"},[a("v-uni-view",{staticClass:"animate__fadeInUp animate__delay-5s content bg-white"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-text",{staticClass:"title fs-36-fw-bold padding-top-20"},[t._v("附近店铺")])],1),a("v-uni-view",{staticClass:"body"},[a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},t._l(t.data,(function(n,e){return a("v-uni-view",{key:e,staticClass:"body-item",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toShop(n)}}},[a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"icon-point"},[a("v-uni-image",{staticClass:"icon-point-img",attrs:{src:i("cf13"),mode:"scaleToFill"}})],1),a("v-uni-view",{staticClass:"info-item"},[a("v-uni-view",{staticClass:"info-top"},[a("v-uni-text",{staticClass:"fs-30-fw-bold"},[t._v(t._s(n.shopName))]),0===e?a("v-uni-text",{staticClass:"first-tip c-light bg-tip fs-24"},[t._v("离我最近")]):t._e()],1),a("v-uni-view",{staticClass:"info-bottom c-tip fs-24"},[a("v-uni-view",{staticClass:"supports margin-right-10"},[t._v(t._s(t.arrayToString(n.shopSupports)))]),a("v-uni-view",{staticClass:"addr"},[t._v(t._s(n.shopAddress))])],1)],1)],1),a("v-uni-view",{staticClass:"icons c-tip fs-24"},[a("v-uni-view",{staticClass:"icons-item"},[a("v-uni-image",{staticClass:"icon-size icon-distance",attrs:{src:i("4a6c"),mode:"scaleToFill"}}),a("v-uni-text",[t._v(t._s(n.distance)+"km")])],1)],1)],1)})),1)],1)],1)],1)},o=[]}}]);