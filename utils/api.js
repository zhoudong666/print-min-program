const url = {
  login: "/login", // 登录接口
  swiper: "/index/indexImg/indexImgs", // 轮播图
  nearShop: "/customer/printSetting/nearShops", // 附近打印店铺
  shopInfo: "/customer/printSetting/shop", // 店铺信息	/customer/printSetting/shop/{shopCode}
  taskFlowId: "/p/printSetting/print/taskFlowId", // 打印 1.打印任务流水号
  uploadToOSS: "/p/printSetting/print/upload/element", // 打印 2.选取文件上传到oss  取消  见下方30行
  ossToPdf: "/p/printSetting/print/addPrintFiles", // 打印 3.添加oss文件转PDF
  getPrintParams: "/p/printSetting/print/printFiles", // 打印 4.获取待打印pdf文件列表及设置项
  submitPrintParams: "/p/printSetting/print/printFilesSetting", // 打印 5.提交打印参数
  deletePrintFile: "/p/printSetting/print/deletePrintFilebask", // 删除打印文件 /p/printSetting/print/deletePrintFile/{bastetId}
  locationGetShop: "/p/printSetting/print/fixShop", // 打印 -选打印机 - 根据坐标获取定位地店铺
  shopDetail: "/customer/printSetting/shop", // 先选打印机 -- 从附近店铺列表点击/扫码,进入店铺信息
  scanQcode: "/customer/printSetting/printer", // 微信扫二维码进入店铺详情页面
  pay: "/p/order/pay", // 支付
  payZero: "/p/order/payZero", // 0元支付

  userPhoneSet: "/p/user/userPhoneSet", // 解密用户授权的微信手机号码并更新用户信息 设置手机号码
  setUserInfo: "/p/user/setUserInfo", //  设置用户昵称头像复制文档

  // ====================== 打印相关 ======================
  print_taskFlowId: "/p/printSetting/print/taskFlowId", // 打印 1.打印任务流水号
  print_setPrinter: "/p/printSetting/print/fixPrinter", //  打印 -选打印机- 选取打印机打印文档
  print_scan_setPrinter: "/p/printSetting/print/scanFixPrinter", //  打印 -选打印机- 扫码选取打印机 打印 文档

  print_confirm: "/p/printOrder/confirm", // 预下单
  print_submit: "/p/printOrder/submit", // 提交订单

  // 打印 -文件设置- 2.0:检查文件MD5
  print_checkMd5: "/p/printSetting/print/checkMd5",
  //打印 -文件设置- 2.1:小程序直传，获取临时授权token
  print_ossToken: "/p/printSetting/print/upload/ossToken",
  // 打印 -文件设置- 2.2:小程序直传，回传文件信息
  print_elementInfo: "/p/printSetting/print/upload/elementInfo",

  // ====================== 复印相关 ======================
  copy_taskFlowId: "/p/printSetting/copy/taskFlowId", // 复印 - 1.生成复印任务流水号
  copy_setPrinter: "/p/printSetting/copy/fixPrinter", //  复印 -选打印机- 选取打印机复制文档
  copy_scan_setPrinter: "/p/printSetting/copy/scanFixPrinter", //  复印 -选打印机- 扫码选取打印机复制文档
  copy_settingDefault: "/p/printSetting/copy/copySettingDefault", // /{deviceNo}  复印 -复印设置- 2.获取复印默认设置
  copy_filesSetting: "/p/printSetting/copy/copyFilesSetting", //  复印 -复印设置- 3：设置复印参数复制文档

  copy_confirm: "/p/copyOrder/confirm", // 复印 -- 预下单复制文档
  copy_submit: "/p/copyOrder/submit", // 提交订单

  // ====================== 扫描相关 ======================
  scan_taskFlowId: "/p/printSetting/scan/taskFlowId", // 扫描 - 1.生成扫描任务流水号复制文档
  scan_setPrinter: "/p/printSetting/scan/fixPrinter", //  扫描 -选打印机- 选取打印机扫描文档
  scan_scan_setPrinter: "/p/printSetting/scan/scanFixPrinter", //  扫描 -选打印机- 扫码选取打印机扫描文档
  scan_settingDefault: "/p/printSetting/scan/scanSettingDefault", // /{deviceNo}  扫描 -扫描设置- 2.获取扫描默认设置复制文档
  scan_filesSetting: "/p/printSetting/scan/scanFilesSetting", //  扫描 -扫描设置- 3：设置扫描参数复制文档

  scan_confirm: "/p/scanOrder/confirm", // 扫描 -- 预下单
  scan_submit: "/p/scanOrder/submit", // 提交订单

  // 用户tabs  接口
  myOrder: "/p/myOrder/myOrder", // 根据订单状态获取订单列表信息，状态为0时获取所有订单
  repeatTaskFlow: "/p/myOrder/repeatTaskFlow", // 再打印一次（打印）,跳转到打印设置页面复制文档
  orderDetail: "/p/myOrder/orderDetail", // 根据订单号获取订单详情信息
  refund: "/p/myOrder/refund", // 申请退款，只有已完成状态订单，才显示该按钮
  myScan: "/p/myScan/scanList", // 扫描件列表信息
  historyPrint: "/p/myReport/calcStatic", // 历史打印量统计总览
  myScore: "/p/myScore/scoreView", // 积分数据
};

// resUrl请求地址 params拼接参数
function getUrl(resUrl, params) {
  // /customer/printSetting/shop/{shopCode}
  const realUrl = params ? url[resUrl] + "/" + params : url[resUrl];
  return realUrl;
}

export default { getUrl };
