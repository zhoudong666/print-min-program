/**
 * A Request useing App network request design {@link http://ext.dcloud.net.cn/plugin?id=709}
 * @author Jamling <li.jamling@gmail.com>
 * @version 1.0.1
 *
 **/
"use strict";
class Request {
  /**
   * @description 网络请求的默认配置
   * @property {Object} config - 默认参数配置
   * @property {string} config.baseUrl - 接口基地址
   * @property {string} config.business - 接口响应的业务数据对象字段名，默认为data
   */
  config = {
    /*返回默认为res.data*/
    baseUrl: "",
    //method: 'GET',
    //contentType: 'json',
    business: "data",
    //dataType: 'json',
    //encoding: 'UTF-8',
    // skipInterceptorResponse: false,
    // slashAbsoluteUrl: true,
    // debug: false,
    // loadingTip: undefined,
    // loadingDuration: 500,
    // responseType: 'text'
  };

  static posUrl(url) {
    /* 判断url是否为绝对路径 */
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
  }

  static getUrl(config) {
    let url = config.url || "";
    let abs = Request.posUrl(url);
    if (!abs) {
      let f = config.slashAbsoluteUrl;
      if (f) {
        abs = /^\/([\w.]+\/?)\S*/.test(url);
      }
    }
    return abs ? url : config.baseUrl + url;
  }

  static getContentType(config) {
    var type = config.contentType || "json";
    var charset = config.encoding || "UTF-8";
    if (type === "json") {
      return "application/json;charset=" + charset;
    } else if (type === "form") {
      return "application/x-www-form-urlencoded;charset=" + charset;
    } else if (type === "file") {
      return "multipart/form-data;charset=" + charset;
    } else if (type === "text") {
      return "text/plain;charset=" + charset;
    } else if (type === "html") {
      return "text/html;charset=" + charset;
    } else {
      throw new Error("unsupported content type : " + type);
    }
  }

  /**
   * @property {Object} interceptor 拦截器
   *
   */
  interceptor = {
    /**
     * @description define the interceptor before request
     * @param {function}
     */
    request: undefined,
    response: undefined,
    fail: undefined,
    complete: undefined, // since 1.2.0
  };

  /**
   * @description set default request options
   * @param {Object} config - the default options
   * @param {string} config.baseUrl baseUrl - the base url
   * @param {boolean} config.debug debug - enable debug to log
   */
  setConfig(config) {
    this.config = Object.assign(this.config, config);
  }

  request(options = {}) {
    var that = this;
    if (options.data === undefined) {
      options.data = {};
    }
    if (options.header === undefined) {
      options.header = {};
    }

    let _options = Object.assign({}, this.config, options);
    _options = Object.assign(options, _options);

    _options.url = Request.getUrl(_options);
    if (!_options.header["Content-Type"]) {
      _options.header["Content-Type"] = Request.getContentType(_options);
    }
    let _config = _options;
    if (
      that.interceptor.request &&
      typeof that.interceptor.request === "function"
    ) {
      _config = that.interceptor.request(_options);
    }
    let task = undefined;
    let promise = new Promise((resolve, reject) => {
      let extras = {};

      that._prepare(that, _config, extras);

      if (_config.contentType === "file") {
        task = uni.uploadFile({
          ..._config,
          success: (res) => {
            that._success(that, _config, res, resolve, reject);
          },
          fail: (res) => {
            that._fail(that, _config, res, resolve, reject);
          },
          complete: (res) => {
            that._complete(that, _config, res, extras);
          },
        });
        if (_config.progress && typeof _config.progress === "function") {
          task.onProgressUpdate((_res) => {
            _config.progress(_res, task);
          });
        }
      } else {
        task = uni.request({
          ..._config,
          success: (res) => {
            that._success(that, _config, res, resolve, reject);
          },
          fail: (res) => {
            that._fail(that, _config, res, resolve, reject);
          },
          complete: (res) => {
            that._complete(that, _config, res, extras);
          },
        });
      }
    });
    if (_config.success || _config.fail || _config.complete) {
      return task;
    }
    return promise;
  }

  /**
   * @method
   * @description execute a get request
   * @param {Object} options - 参数选项
   * @param {string} options.url - 请求地址
   * @param {string} [options.method=GET] - 请求方法 GET|POST
   * @param {string} [options.contentType=json] - 请求类型，为json(默认)，form
   * @param {Object} [options.data] - 请求参数
   * @param {string} [options.encoding] - 请求编码，默认为utf-8
   * @param {string} [options.dataType] - 如果设为 json（默认），会尝试对返回的数据做一次 JSON.parse
   * @param {string} [options.business] - 接口响应的业务数据对象字段名，默认为data，如果返回整个业务对象，则需要设置为undefined
   * @param {string} [options.skipInterceptorResponse] - 是否跳过响应过滤器，如需跳过，请置true
   * @param {string} [options.slashAbsoluteUrl] - 是否视以/开头的url为绝对地址，默认为false，此设置仅当初步判断url为非绝对地址时有效
   * @param {string} [options.loadingTip] - 是否在请求前显示文字为参数值的loading提示，如果是，会在请求结束后自动关闭loading提示
   * @param {string} [options.loadingDuration] - 设置loadingTip时的最小loading显示时间
   * 
   * @return {Promise} promise
   * @example
   * $request.get({
       url: 'foo/bar',
       data: {
           param1: value1
       }
   })
   * @see {@link https://uniapp.dcloud.io/api/request/request}
   */
  get(options = {}) {
    options.method = "GET";
    return this.request(options);
  }

  /**
       * @method
       * @description execute a post request
       * @param {Object} options - 参数选项
       * @param {string} options.url - 请求地址
       * @param {string} [options.method=POST] - 请求方法 GET|POST
       * @param {string} [options.contentType=json] - 请求类型，为json(默认)，form
       * @param {Object} [options.data] - 请求参数
       * @param {string} [options.encoding] - 请求编码，默认为utf-8
       * @param {string} [options.dataType] - 如果设为 json（默认），会尝试对返回的数据做一次 JSON.parse
       * @param {string} [options.business] - 接口响应的业务数据对象字段名，默认为data，如果返回整个业务对象，则需要设置为undefined
       * @param {string} [options.skipInterceptorResponse] - 是否跳过响应过滤器，如需跳过，请置true
       * @param {string} [options.slashAbsoluteUrl] - 是否视以/开头的url为绝对地址，默认为false，此设置仅当初步判断url为非绝对地址时有效
       * @param {string} [options.loadingTip] - 是否在请求前显示文字为参数值的loading提示，如果是，会在请求结束后自动关闭loading提示
       * @param {string} [options.loadingDuration] - 设置loadingTip时的最小loading显示时间
       * 
       * @return {Promise} promise
       * @example
       * $request.post({
          url: 'foo/bar',
          data: {
              param1: value1
          }
      })
      * @see {@link https://uniapp.dcloud.io/api/request/request}
      */
  post(options = {}) {
    options.method = "POST";
    return this.request(options);
  }

  /**
   * author by wyh
   */
  put(options = {}) {
    options.method = "PUT";
    return this.request(options);
  }
  /**
   * author by wyh
   */
  delete(options = {}) {
    options.method = "DELETE";
    return this.request(options);
  }

  /**
   * @method
   * @description execute a get request
   * @param {Object} options - 参数选项
   * @param {string} options.url - 请求地址
   * @param {string} [options.method=GET] - 请求方法 GET|POST
   * @param {string} [options.contentType=json] - 请求类型，为json(默认)，form
   * @param {Object} [options.data] - 请求参数
   * @param {string} [options.encoding] - 请求编码，默认为utf-8
   * @param {string} [options.dataType] - 如果设为 json（默认），会尝试对返回的数据做一次 JSON.parse
   * @param {string} [options.business] - 接口响应的业务数据对象字段名，默认为data，如果返回整个业务对象，则需要设置为undefined
   * @param {string} [options.skipInterceptorResponse] - 是否跳过响应过滤器，如需跳过，请置true
   * @param {string} [options.slashAbsoluteUrl] - 是否视以/开头的url为绝对地址，默认为false，此设置仅当初步判断url为非绝对地址时有效
   * @param {string} [options.loadingTip] - 是否在请求前显示文字为参数值的loading提示，如果是，会在请求结束后自动关闭loading提示
   * @param {string} [options.loadingDuration] - 设置loadingTip时的最小loading显示时间
   * 
   * @return {Promise} promise
   * @example
   * $request.upload({
      url: 'foo/bar',
      filePath: res.tempFilePaths[0];
      data: {
          param1: value1
      }
  })
  * @see {@link https://uniapp.dcloud.io/api/request/network-file}
  */
  upload(options = {}) {
    options.method = "POST";
    options.contentType = "file";
    return this.request(options);
  }

  _success = function (that, _config, res, resolve, reject) {
    //这个返回状态时uniapp的vue自动封装出来的statusCode
    //console.log('res really is',res)
    if (res.statusCode >= 200 && res.statusCode <= 302) {
      // http ok

      var result = res.data; // 全局的拦截器
      var parseFileJson =
        _config.contentType === "file" &&
        typeof result === "string" &&
        (_config.dataType === undefined || _config.dataType === "json");
      if (parseFileJson) {
        result = JSON.parse(res.data);
      }
      var skip = _config.skipInterceptorResponse;

      // 走全局的拦截器，
      //这个时候 that.interceptor.response 就是main.js里面我们设定的全局拦截器那里的response

      if (
        that.interceptor.response &&
        typeof that.interceptor.response === "function" &&
        !skip
      ) {
        //console.log('first re')
        result = that.interceptor.response(result, _config);
        //console.log('处理过的result??',result)

        if (_config.businessSuccess /* || result.success*/) {
          // 不兼容原来的接口业务逻辑调用成功判定

          //console.log('is businesssuccess?')

          // 接口调用业务成功
          // 最终决定怎么返回data

          //默认暂时先不开启最终的字段筛选
          // var _data = _config.business ? result[_config.business] : result;
          var _data = result;

          if (_config.debug) {
            //   console.log(`response(${_config.url }) success: `, _data)
          }
          _config.success ? _config.success(_data) : resolve(_data);
          return;
        }
      } else {
        // 对于某些特殊接口，比如访问其它系统，全局拦截器可能不适合
        // 这种情况下，需要自己处理接口响应，相当于透传
        if (_config.debug) {
          //console.log(`response(${_config.url }) success: `, result)
        }
        _config.success ? _config.success(result) : resolve(result);
        return;
      }
    }
    // 剩下的都走失败
    //console.log('shizhelishibaile????')
    that._fail(that, _config, res, resolve, reject);
  };

  _fail = function (that, _config, res, resolve, reject) {
    if (_config.debug) {
      console.error(`response(${_config.url}) failure: `, res);
    }
    if (res.errMsg === "request:fail abort") {
      return;
    }
    var result = res;
    if (that.interceptor.fail && typeof that.interceptor.fail === "function") {
      result = that.interceptor.fail(res, _config);
    }
    _config.fail ? _config.fail(result) : reject(result);
  };

  _prepare = function (that, _config, obj = {}) {
    if (
      that.interceptor.prepare &&
      typeof that.interceptor.prepare === "function"
    ) {
      that.interceptor.prepare(_config, obj);
      return;
    }
    obj.startTime = Date.now();
    if (_config.loadingTip) {
      uni.showLoading({
        title: _config.loadingTip,
        mask: true,
      });
    }
    if (_config.contentType === "file") {
      if (_config.formData === undefined || _config.formData === null) {
        _config.formData = _config.data;
        delete _config.data;
      }
      delete _config.header["Content-Type"];
      delete _config.header["Referer"];
      _config.method = "POST";
    }
    if (_config.debug) {
      //console.log(`request(${_config.url }): `, _config)
    }
  };

  _complete = function (that, _config, res, obj = {}) {
    if (
      that.interceptor.complete &&
      typeof that.interceptor.complete === "function"
    ) {
      that.interceptor.complete(_config, obj, res);
      return;
    }
    obj.endTime = Date.now();
    if (_config.debug) {
      // console.log(`request(${_config.url }) completed in ${obj.endTime - obj.startTime} ms`)
    }
    if (_config.loadingTip) {
      let diff = obj.endTime - obj.startTime;
      let duration = _config.loadingDuration || 500;
      if (diff < duration) {
        diff = duration - diff;
      } else {
        diff = 0;
      }

      setTimeout(function () {
        uni.hideLoading();
      }, 50);
    }
    if (_config.complete) {
      _config.complete(res);
    }
  };
}
/**
 *
 */
var request = new Request();

// 设置 全局默认配置 以及 拦截器
function getUrlCurrent() {
  let routes = getCurrentPages(); // 获取当前打开过的页面路由数组

  let curRoute = routes[routes.length - 1].route; //获取当前页面路由
  let curParam = routes[routes.length - 1].options; //获取路由参数
  // 拼接参数
  let param = "";
  for (let key in curParam) {
    param += "&" + key + "=" + curParam[key];
  }
  return curRoute + "?" + param;
}

request.setConfig({
  baseUrl: "https://api.qmprint.cn",
  debug: true,
});

// 请求拦截
request.interceptor.request = (config) => {
  const token = uni.getStorageSync("token");
  // if(!token){
  // 	uni.redirectTo({
  // 		url:'/pages/mine/login?redirect='+getUrlCurrent()
  // 	})
  // 	return false;
  // }
  // uni.setStorageSync('loginRedirect', getUrlCurrent())
  // 给header添加全局请求参数token
  if (!config.header.Authorization) {
    if (!config.url.startsWith("https://api.qmprint.cn/p/")) {
      config.header.Authorization = "";
    } else {
      config.header.Authorization = token ? token : "";
    }
  }

  // 添加一个自定义的参数，默认异常请求都弹出一个toast提示
  if (config.toastError === undefined) {
    config.toastError = true;
  }
  return config;
};
// 全局的业务拦截
request.interceptor.response = (res, config) => {
  config.businessSuccess = true;
  // console.log('resresres',res)
  return res;
};

// 全局的错误异常处理
request.interceptor.fail = async (res, config) => {
  let ret = res;
  let msg = "";
  console.log("反正就是错了！！！", res);
  if (res.statusCode === 200) {
    // 业务错误
    msg = res.data.msg;
    ret = res.data;
  } else if (res.statusCode === 401) {
    // HTTP错误
    // uni.setStorageSync('loginRedirect', getUrlCurrent())
    // uni.redirectTo({ url: '/pages/index/index' })
    uni.removeStorageSync("userInfo");
    // uni.switchTab({ url: '/pages/dashbord/index' })
    // 对token过期的 再次请求,获取新的token
    uni.login({
      provider: "weixin",
      success: (res) => {
        if (!res.code) return; //微信登录成功  已拿到code请求后台
        request.post({
          url: "/login",
          data: { principal: res.code }, //uni.login 登录成功后的code
          success: (re) => {
            uni.setStorageSync("token", "bearer" + re.access_token);
            uni.setStorageSync("setTokenTime", +new Date());
          },
        });
      },
    });
  } else if (res.statusCode === 500) {
    // 其它错误
    msg = "服务器开了点小差~";
    uni.showToast({
      title: msg,
      duration: 2000,
      icon: "none",
    });
  } else if (res.statusCode === 404) {
    // 其它错误
    msg = "找不到访问地址~";
    uni.showToast({
      title: msg,
      duration: 2000,
      icon: "none",
    });
  } else if (res.statusCode === 400) {
    msg = res.data;
    uni.showToast({
      title: msg,
      duration: 2000,
      icon: "none",
    });
  }
  return ret;
};

/**
 * @module {Request} request
 */
export default request;
