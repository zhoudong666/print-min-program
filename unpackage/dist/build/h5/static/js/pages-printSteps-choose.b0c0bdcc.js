(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-printSteps-choose"],{"248d":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"app-container"},e._l(e.list,(function(t,a){return n("v-uni-view",{key:a,staticClass:"choose-info bg-white bd-radius-10 bd-solid-primary-2 padding-20 margin-bottom-20",attrs:{"hover-class":"bd-solid-print-2"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getFile(t.type)}}},[n("v-uni-image",{staticClass:"icon",attrs:{src:t.icon,mode:"scaleToFill"}}),n("v-uni-view",{staticClass:"margin-left-15 c-print"},[e._v(e._s(t.name))])],1)})),1)},r=[]},"3d88":function(e,t,n){"use strict";var a=n("4ea4");n("baa5"),n("d81d"),n("45fc"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),r={data:function(){return{type:"",ossList:[],imageName:"",token:"",timer:null,list:[{type:"wxFile",icon:"/static/icon/icon-weixin.png",name:"微信聊天文档"},{type:"wxImg",icon:"/static/icon/icon-weixin.png",name:"微信聊天图片"},{type:"localFile",icon:"/static/icon/icon-file.png",name:"手机本地文档"},{type:"localImg",icon:"/static/icon/icon-file.png",name:"手机本地图片"}],getPrintParamsTimer:null,longTimer:null}},onLoad:function(e){e.filePaths&&this.ossToPdf(JSON.parse(decodeURIComponent(e.filePaths)),1)},onUnload:function(){clearInterval(this.getPrintParamsTimer)},onReady:function(e){},onShow:function(){getApp().globalData.allFile=[],getApp().globalData.fileParam={},getApp().globalData.fileParamIndex=0,this.token=uni.getStorageSync("token")},onHide:function(){},methods:{getFile:function(e){this.type=e,"wxFile"===e?this.getWxFile():"wxImg"===e?this.getWxImg():"localFile"===e?this.getLocalFile():this.getLocalImg()},getWxFile:function(){var e=this;wx.chooseMessageFile({count:9,type:"file",success:function(t){var n=t.tempFiles;uni.showLoading({title:"上传中...",mask:!0}),e.ossList=[],e.getammeternumber(n,0,n.length)}})},getWxImg:function(){var e=this;this.imageName="聊天图片",wx.chooseMessageFile({count:9,type:"image",extension:[".png",".jpg",".jpeg"],success:function(t){var n=t.tempFiles;uni.showLoading({title:"上传中...",mask:!0}),e.ossList=[],e.getammeternumber(n,0,n.length)}})},getLocalFile:function(){this.$goToUrl("/pages/dashbord/uplaodWebView")},getLocalImg:function(){var e=this;this.imageName="本地图片",wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){var n=t.tempFiles;uni.showLoading({title:"上传中...",mask:!0}),e.ossList=[],e.getammeternumber(n,0,n.length)}})},getammeternumber:function(e,t,n){var a=this;return(0,i.default)(regeneratorRuntime.mark((function i(){var r,o,s,c,l,u,p,f,d;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=a,o={},s=e[t].path,c=(new Date).getTime(),o.name=e[t].name||a.imageName+c,l=s.lastIndexOf("."),u=s.substring(l+1),p=e[t].name,f=e[t].size,i.next=11,a.$Q.post({url:a.$api("print_ossToken"),data:{extName:u},header:{"Content-Type":"application/x-www-form-urlencoded"}});case 11:d=i.sent,uni.uploadFile({url:"https://oss.qmprint.cn",filePath:s,name:"file",header:{"Content-Type":"multipart/form-data"},formData:{key:d.fileKey,policy:d.policyBase64,OSSAccessKeyId:d.accessid,signature:d.signature,success_action_status:"200"},success:function(a){r.$Q.post({url:r.$api("print_elementInfo"),data:{filePath:d.fileKey,fileSize:f,originalFileName:p},header:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(a){if(o.path=a,r.ossList.push(o),++t<n)r.getammeternumber(e,t,n);else{var i=r.ossList.map((function(e){return e.path})),s="wxFile"===r.type||"localFile"===r.type?1:2;r.ossToPdf(i,s)}}))},fail:function(e){uni.hideLoading(),uni.showModal({title:"错误提示",content:"上传失败",showCancel:!1,success:function(e){}})}});case 13:case"end":return i.stop()}}),i)})))()},ossToPdf:function(e,t){var n=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var i,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return uni.showLoading({title:"处理中...",mask:!0}),i=getApp().globalData.deviceNo,getApp().globalData.isPrintOrCopyOrScan,r="",r=getApp().globalData.flowCode,a.next=7,n.$Q.put({url:n.$api("ossToPdf"),data:{fileType:t,files:e,flowCode:r}});case 7:o=a.sent,getApp().globalData.ossToPdfCode=o,n.getPrintParams(i,r),n.longTimer&&clearTimeout(n.longTimer),n.longTimer=setTimeout((function(){clearInterval(n.getPrintParamsTimer)}),3e5);case 12:case"end":return a.stop()}}),a)})))()},getPrintParams:function(e,t){var n=this;this.getPrintParamsTimer=setTimeout((0,i.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$Q.put({url:n.$api("getPrintParams"),data:{flowCode:t,deviceNo:e}});case 2:if(i=a.sent,!i.some((function(e){return!e.transFilePath}))){a.next=7;break}n.getPrintParams(e,t),a.next=12;break;case 7:return getApp().globalData.printParams=i,getApp().globalData.setParamType=n.type,uni.hideLoading(),n.$goToUrl("/pages/printSteps/setParams"),a.abrupt("return");case 12:case"end":return a.stop()}}),a)}))),1e3)}}};t.default=r},"46fa":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app-container[data-v-bf52104e]{padding:%?30?% %?30?%}.choose-info[data-v-bf52104e]{display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box}.choose-info .icon[data-v-bf52104e]{width:%?100?%;height:%?90?%}',""]),e.exports=t},"5dc4":function(e,t,n){"use strict";var a=n("e3e5"),i=n.n(a);i.a},baa5:function(e,t,n){var a=n("23e7"),i=n("e58c");a({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},e3e5:function(e,t,n){var a=n("46fa");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("4d10c9d2",a,!0,{sourceMap:!1,shadowMode:!1})},eea4:function(e,t,n){"use strict";n.r(t);var a=n("3d88"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f8e9:function(e,t,n){"use strict";n.r(t);var a=n("248d"),i=n("eea4");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("5dc4");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"bf52104e",null,!1,a["a"],o);t["default"]=c.exports}}]);