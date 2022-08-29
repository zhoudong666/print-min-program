const projectKey = 'print'

function setStorage(key, data) {
  return new Promise(function(resolve, reject) {
    uni.setStorage({
      key: `${projectKey}_${key}`,
      data: data,
      success: function() {
        resolve()
      },
      fail: function(err) {
        reject(err)
      }
    })
  })
}

function getStorage(key) {
  return new Promise(function(resolve, reject) {
    uni.getStorage({
      key: `${projectKey}_${key}`,
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        // 为了方便后期处理，找不到数据也走正常流程，返回 null 数据
        resolve(null)
      }
    })
  })
}

function getStorageSync(key, data) {
  return uni.getStorageSync(`${projectKey}_${key}`)

}

function setStorageSync(key, data) {
  uni.setStorage({
    key: `${projectKey}_${key}`,
    data: data
  })
}

export { getStorage, setStorage, getStorageSync, setStorageSync }
