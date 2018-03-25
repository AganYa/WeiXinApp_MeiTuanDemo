// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    cellData:  [
      { "poiId": 6334713, "frontImg": "http://p0.meituan.net/600.600/deal/__48682061__9764306.jpg", "title": "尚东餐饮澳门豆捞（南汇乐购店）", "avgScore": 3.1, "allCommentNum": 3391, "address": "浦东新区惠南镇南门大街18号乐购4楼(近沪南公路)", "avgPrice": 65, "dealList": [] }, 
    { "poiId": 6369624, "frontImg": "http://p0.meituan.net/600.600/mogu/7a9fba8dc818949e80058034f0f4e87a107904.jpg", "title": "部落情火锅（剑川店）", "avgScore": 3.8, "allCommentNum": 1555, "address": "闵行区剑川路140弄(近龙吴路)", "avgPrice": 57, "dealList": [] },
     { "poiId": 1467102, "frontImg": "http://p1.meituan.net/600.600/deal/556a6a62a1767e1bcb27d50ed5c02405303437.jpg", "title": "鼎中鼎澳门豆捞（共和新路店）", "avgScore": 4.7, "allCommentNum": 2395, "address": "闸北区共和新路3318号大润发超市2楼（近江场西路）", "avgPrice": 87, "dealList": [] },
      { "poiId": 2411362, "frontImg": "http://p1.meituan.net/600.600/apiback/42eed8219be015d54db8e06685c1640627291.jpg", "title": "蜀公馆成都老火锅【壹馆】（百联真光路店）", "avgScore": 3.5, "allCommentNum": 1536, "address": "普陀区真光路1288号百联中环购物广场B区4层", "avgPrice": 99, "dealList": [] },
       { "poiId": 51424016, "frontImg": "http://p1.meituan.net/600.600/mogu/6bc268607fedd4d195bc39804c24f267119170.jpg", "title": "独一品川渝无限量自助火锅（车峰路店）", "avgScore": 3.2, "allCommentNum": 2543, "address": "松江区车峰路140号（祥东小区对面）", "avgPrice": 39, "dealList": [] }],
    inoc: [
      { name: '美食', color: '#fd8712', path: '../../images/knife.png', desc: { title: '想吃美食？', content: '不存在的，吃翔去吧。。。。哈哈'}},
      { name: '猫眼电影', color: '#FF0000', path: '../../images/moive.png', desc: { title: '想看电影？', content: '有女票了么？没有滚蛋去。。。。哈哈' } },
      { name: '酒店住宿', color: '#9400D3', path: '../../images/hotel.png', desc: { title: '想住酒店？', content: '最近风头紧，暂时停运。。。。哈哈' }},
      { name: '休闲娱乐', color: '#01C3A8', path: '../../images/play.png', desc: { title: '想去哪玩？', content: '玩你个蛋蛋去。。。。哈哈' }},
      { name: '外卖', color: '#fd8712', path: '../../images/takeOut.png', desc: { title: '想点外卖了？', content: '饿死你活该。。。。哈哈' }},
      { name: 'KTV', color: '#01C3A8', path: '../../images/KTV.png', desc: { title: '想去唱K？', content: '我选择自杀。。。。哈哈' }},
      { name: '丽人', color: '#FF546E', path: '../../images/beauty.png', desc: { title: '想买化妆品？', content: '不存在的，丑女无敌，还化个毛，别化完出来造孽，求求你了。。。。哈哈' } },
      { name: '景点门票', color: '#20A3FD', path: '../../images/tickets.png', desc: { title: '想旅游？', content: '钱带够了么，没钱穷游去吧。。。。哈哈' }},
      { name: '火车票', color: '#20A3FD', path: '../../images/railwayTicket.png', desc: { title: '想去哪？', content: '你咋不上天呢。。。。哈哈' }},
      { name: '查附近', color: '#20A3FD', path: '../../images/location.png', desc: { title: '想约炮？', content: '撒泡尿照照自己再约吧。。。。哈哈' }}],
    show: true
  },
  alert(e){
    console.log(e)
    wx.showModal({
      title: e.currentTarget.dataset.title,
      content: e.currentTarget.dataset.content,
      showCancel:false
    })
  },
  detail(e){
console.log(e)
wx.navigateTo({
  url: '../../pages/ProductDetails/productDetails?url=' + e.currentTarget.dataset.url,
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var _this = this;
    // wx.showNavigationBarLoading()
    _this.setData({ show: true })
    var timer1 = setTimeout(function () {
      // _this.setData({ show: false });
      // _this.onShow();
      // wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 3000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var _this = this;
    _this.setData({ show: true })
    var timer1 = setTimeout(function () {
      _this.setData({ show: false })
    }, 3000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})