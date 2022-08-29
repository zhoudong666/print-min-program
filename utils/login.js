import request from "./request.js";
import api from "./api.js";

function loginForWx() {
  var infos = {};
  var userInfoNow = uni.getStorageSync("userInfo");

  // console.log('userInfoNow', userInfoNow)
  if (userInfoNow.pic) {
    xartlogin();
  } else {
    uni.getUserProfile({
      desc: "Wexin", // 这个参数是必须的
      success: async (res) => {
        // console.log('用户信息', res)
        var data = JSON.parse(res.rawData);
        xartlogin(true, data);

        setTimeout(function () {
          uni.hideLoading();
        }, 2000);
      },
      fail: () => {
        uni.showToast({
          icon: "none",
          title: "您拒绝了用户信息授权 ！",
          duration: 2000,
        });
        uni.hideLoading();
      },
    });
  }
}

function xartlogin(updateProfile, profile, isReDirect) {
  uni.showLoading({ title: "加载中...", mask: true });
  uni.login({
    provider: "weixin",
    success: (res) => {
      if (res.code) {
        //微信登录成功 已拿到code
        request.post({
          url: api.getUrl("login"),
          data: { principal: res.code }, //uni.login 登录成功后的code
          success: async (re) => {
            // console.log('what is re', re)
            // 换取成功后 暂存这些数据 留作后续操作
            // infos.openid=re.data.openid     //openid 用户唯一标识
            // infos.unionid=re.data.unionid     //unionid 开放平台唯一标识
            // infos.session_key=re.data.session_key     //session_key  会话密钥
            // if (re.statusCode === 200) {
            // console.log('re----access_token',re.access_token)
            var redirect = uni.getStorageSync("loginRedirect");
            uni.setStorageSync("token", "bearer" + re.access_token);
            uni.setStorageSync("setTokenTime", +new Date());

            // // 暂时后台拿不到手机号,需要手动获取
            // const rrrr = await request.get({
            // 	url: api.getUrl('userPhoneSet'),
            // 	data: {
            // 		'encryptedData': zdd.encryptedData,
            // 		'ivStr': zdd.iv
            // 	}
            // })
            // console.log('rrrr',rrrr)

            if (updateProfile) {
              const re1 = await request.put({
                url: api.getUrl("setUserInfo"),
                data: {
                  avatarUrl: profile.avatarUrl,
                  nickName: profile.nickName,
                },
              });
              re.nickName = profile.nickName;
              re.pic = profile.avatarUrl;
            }
            uni.setStorageSync("userInfo", re);
            if (isReDirect !== "noReDirect") {
              // 每60分钟请求一次后台, 获取 最新token
              setInterval(function () {
                xartlogin(false, {}, "noReDirect");
              }, 1000 * 60 * 60);
              if (redirect === "") {
                uni.switchTab({ url: "/pages/dashbord/index" });
              } else if (
                redirect.includes("dashbord") ||
                redirect.includes("scan") ||
                redirect.includes("user/index")
              ) {
                uni.switchTab({ url: redirect });
              } else {
                uni.navigateTo({ url: redirect });
              }
            }
            uni.hideLoading();
            // } else {
            //   uni.hideLoading()
            //   uni.showToast({
            //     icon: 'none',
            //     title: '网络连接失败~'
            //   })
            // }
          },
          fail() {
            uni.hideLoading();
          },
        });
      } else {
        uni.hideLoading();
        console.log("登录失败！" + res.errMsg);
        uni.showToast({ icon: "none", title: "登录失败!请重试..." });
      }
    },
    fail() {
      uni.hideLoading();
    },
  });
}

function checkIsLogin() {
  const userInfos = uni.getStorageSync("userInfo");
  return userInfos && userInfos.pic;
}

function goLogin() {
  return new Promise((resolve) => {
    uni.showModal({
      title: "微信登录",
      content: "微信授权登录使用小程序全部功能",
      cancelText: "暂不登录",
      confirmText: "登录",
      success({ confirm }) {
        if (confirm) loginForWx();
        resolve(confirm);
      },
    });
  });
}

async function goToUrl(url, args = { goType: "navigateTo" }) {
  let login;
  const whiteList = [
    "pages/shopInfo/index",
    "pages/user/intro",
    "pages/user/about",
  ];
  // 下面判断用于扫码进入打印机页面
  // url === 'pages/shopInfo/index' ? login = true : login = checkIsLogin()
  whiteList.indexOf(url) > -1 ? (login = true) : (login = checkIsLogin());
  if (login) {
    uni[args.goType]({ url });
  } else {
    // 询问弹框 省去待定
    // const gogo = await goLogin()
    // if (gogo) uni.setStorageSync('loginRedirect', url)
    loginForWx();
    uni.setStorageSync("loginRedirect", url);
  }
}
export { loginForWx, xartlogin, checkIsLogin, goLogin, goToUrl };
