<script>
import request from "./utils/request.js";
import api from "@/utils/api.js";
export default {
  globalData: {
    shopName: "", // 店铺名称  --共用
    shopCode: "", // 店铺code  --共用
    shopAddress: "", // 店铺地址  --共用
    shopLogo: "", // 店铺Logo  --共用
    deviceNo: "", // 打印机编号  --共用
    deviceName: "", // 打印机名字  --共用
    deviceMsg: "", // 打印机描述  --共用
    shopInfoList: ["shopName", "shopCode", "shopAddress"],
    deviceInfoList: ["deviceNo", "deviceName", "deviceMsg"],
    flowCode: "", // 打印任务流水号  --共用
    ossToPdfCode: "", // oss转pdf后生成的code
    setParamType: "", // 打印文件类型 wxFile wxImg localFile localImg
    wxFile: [], // 存储已选打印文件
    wxImg: [], // 存储已选打印图片
    localFile: [], // 存储已选打印文件
    localImg: [], // 存储已选打印图片
    printParams: [], // 存储选取文件默认参数
    allFile: [], // 所有已选文件
    fileParam: {}, // 打印文件修改参数
    fileParamIndex: 0, // 被修改文件参数的索引,
    printFilesSetting: {}, // 最终提交参数
    basketIds: [], // 预打印文件id
    isPrintOrCopyOrScan: "copy", // 判断入口是 打印 复印 还是 扫描
    isAuthCamera: false, // 用于中间的tabbar扫描时检测是否开启摄像头
    isNearShop: false, // 记录是否是从附近店铺进入的flag 用于跳过打印机选择页面
    isFromScanQcode: false, // 用于打印机选择页,通过扫描跳转来时,进行下一步操作
    isTabbarScan: "", // 用于记录是否从tabbar扫描进入到店铺详情页
  },
  onLaunch: function () {},
  onShow: function () {
    var tokenTime = uni.getStorageSync("setTokenTime");
    // if(!tokenTime) return;
    var disTime = +new Date() - tokenTime;
    // 每次显示, 每距离上次token保存时间, 相差10 分钟 检测一下token是否过期
    if (disTime < 10 * 60 * 1000) return;
    this.reloadToken();
  },
  onHide: function () {},
  methods: {
    // 生成flowCode
    newFlowCode() {
      return new Promise(async (resolve) => {
        const type = this.globalData.isPrintOrCopyOrScan;
        this.globalData.flowCode = await request.get({
          url: api.getUrl(type + "_taskFlowId"),
        });
        resolve(true);
      });
    },
    // 刷新token
    reloadToken() {
      uni.login({
        provider: "weixin",
        success: (res) => {
          if (!res.code) return; //微信登录成功  已拿到code请求后台
          request.post({
            url: api.getUrl("login"),
            data: { principal: res.code }, //uni.login 登录成功后的code
            success: (re) => {
              uni.setStorageSync("token", "bearer" + re.access_token);
              uni.setStorageSync("setTokenTime", +new Date());
            },
          });
        },
      });
    },
    // 再次打印 共用
    async printAgain(orderNumber) {
      const res = await request.get({
        url: api.getUrl("repeatTaskFlow"),
        data: { orderNumber },
      });
      this.globalData.isPrintOrCopyOrScan = "print";
      this.globalData.flowCode = res;
      this.getPrintParams();
    },
    // 获取打印文件和设置参数
    async getPrintParams() {
      var data = {
        flowCode: this.globalData.flowCode,
        deviceNo: this.globalData.deviceNo,
      };
      const printParams = await request.put({
        url: api.getUrl("getPrintParams"),
        data,
      });
      this.globalData.printParams = printParams;
      this.$vm.$goToUrl("/pages/printSteps/setParams");
    },
  },
};
</script>

<style>
/*每个页面公共css */

/*  重写 radio 样式  */
/* 未选中的 背景样式 */
radio .wx-radio-input {
  border-radius: 50%; /* 圆角 */
  width: 40rpx;
  height: 40rpx;
  border: 2rpx solid #ff9966;
}
/* 这里如果不能修改背景颜色，在选中后的样式中添加background-color */
/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
radio .wx-radio-input.wx-radio-input-checked {
  border: 2rpx solid #ff9966;
  background: #ff9966;
}
/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
radio .wx-radio-input.wx-radio-input-checked::before {
  border-radius: 50%; /* 圆角 */
  width: 40rpx; /* 选中后对勾大小，不要超过背景的尺寸 */
  height: 40rpx; /* 选中后对勾大小，不要超过背景的尺寸 */
  line-height: 40rpx;
  text-align: center;
  font-size: 30rpx; /* 对勾大小 30rpx */
  color: #fff; /* 对勾颜色 白色 */
  background: transparent;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}

/* 重写 checkbox 样式 */
/* 未选中的 背景样式 */
checkbox .wx-checkbox-input {
  /* border-radius: 50%; */ /* 圆角 */
  border: 2rpx solid #ff9966;
  width: 40rpx; /* 背景的宽 */
  height: 40rpx; /* 背景的高 */
}
/* 这里如果不能修改背景颜色，在选中后的样式中添加background-color */
/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  border: 2rpx solid #ff9966;
  background: #ff9966;
}
/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
  border-radius: 50%; /* 圆角 */
  width: 40rpx; /* 选中后对勾大小，不要超过背景的尺寸 */
  height: 40rpx; /* 选中后对勾大小，不要超过背景的尺寸 */
  line-height: 40rpx;
  text-align: center;
  font-size: 30rpx; /* 对勾大小 30rpx */
  color: #fff; /* 对勾颜色 白色 */
  background: transparent;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}
</style>
