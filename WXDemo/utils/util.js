const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 时间格式化
function renderTime(time) {
  var n = time;
  var date = new Date(n);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return (Y + M + D) 
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 调用服务器api
const baseUrl="XXXXXXX";
const requestJson = (url, data, success)=>{
  wx.request({
    url: baseUrl+url,
    data: data, 
    header: {
      "client": "ajax"
    },
    method: 'GET',
    dataType: 'json',   //预期服务器返回的数据类型
    responseType: 'text', //设置响应的数据类型。合法值：text、arraybuffer
    success: success,
    fail: function(res) {
      console.log(res);
    },
    complete: function(res) {},
  })
}
const requestByPost = (url, data, success) => {
  wx.request({
    url: baseUrl + url,
    data: data,
    header: {
      "client": "ajax"
    },
    method: 'POST',
    dataType: 'json',
    responseType: 'text',
    success: success,
    fail: function (res) {
      console.log(res);
    },
    complete: function (res) { },
  })
};
const requestPostJson = (url, data, success) => {
  wx.request({
    url: baseUrl + url,
    data: data,
    header: {
      "client": "ajax",
      'content-type': 'application/json' // 默认值，对数据进行 JSON 序列化
    },
    method: 'POST',
    dataType: 'json',   //预期服务器返回的数据类型
    responseType: 'text', //设置响应的数据类型。合法值：text、arraybuffer
    success: success,
    fail: function (res) {
      console.log(res);
    },
    complete: function (res) { },
  })
};

module.exports = {
  formatTime: formatTime,
  requestJson: requestJson,
  renderTime: renderTime,
  baseUrl: baseUrl,
  requestByPost: requestByPost,
  requestPostJson: requestPostJson
}
