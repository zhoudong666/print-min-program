// 获取地理位置
export function getLocaltion() {
  return new Promise((resolve) => {
    const that = this;
    uni.getLocation({
      type: "gcj02",
      success: function (res) {
        // console.log('地理位置1112', res)
        resolve({
          myLat: res.latitude,
          myLng: res.longitude,
        });
      },
      fail: function (error) {
        uni.showToast({
          icon: "none",
          title: "您拒绝了位置授权 ！",
          duration: 2000,
        });
      },
    });
  });
}

import { goToUrl } from "@/utils/login.js";
/**
 * @description 判断是否授权 某个 权限
 * @param {Object} data - 参数选项
 * @param {string} data.scope - 见下方 tipMap 的 key
 * @param {string} data.isShowModal - 是否显示询问框
 */
export function wxOpenSetting(data = {}) {
  data = Object.assign({ isShowModal: true }, data);
  const tipMap = {
    address: "通信地址",
    camera: "摄像头",
    userInfo: "用户信息",
    userLocation: "地理位置",
  };
  if (!tipMap[data.scope])
    return (
      uni.showToast({
        icon: "none",
        title: "暂无授权字段，请添加 ！",
      }),
      false
    );
  return new Promise((resolve) => {
    uni.getSetting({
      success(res) {
        // console.log('authSetting', res.authSetting)
        // scope.address: true  // 是否授权地址
        // scope.camera: true // 相机组件
        // scope.userInfo: true  // 用户信息
        // scope.userLocation: true  // 授权定位
        // scope.invoice: true   // 获取发票
        // scope.invoiceTitle: true  // 发票抬头
        // scope.record: true  // 录音功能
        let isUndefined =
          typeof res.authSetting[`scope.${data.scope}`] === "undefined";
        if (data.scope === "userLocation" && isUndefined) {
          uni.getLocation({
            async success(succ) {
              await getApp().newFlowCode(); // 生成flowCode
              resolve(true);
              goToUrl("/pages/common/choosePrinter");
            },
            fail(fail) {
              uni.showToast({
                icon: "none",
                title: `您拒绝了${tipMap[data.scope]}授权 ！`,
                duration: 2000,
              });
            },
          });
          return resolve(false);
        } else if (data.scope === "camera" && isUndefined) {
          return resolve(false);
        }

        if (res.authSetting[`scope.${data.scope}`]) return resolve(true);
        if (!data.isShowModal)
          return resolve(res.authSetting[`scope.${data.scope}`]);
        uni.showModal({
          title: "",
          content: `检测到您没有打开此小程序的${
            tipMap[data.scope]
          }权限，是否去设置打开？`,
          success(res) {
            if (!res.confirm) return resolve(false);
            uni.openSetting({
              success(res) {
                resolve(res.authSetting[`scope.${data.scope}`]);
              },
            });
          },
        });
      },
    });
  });
}
