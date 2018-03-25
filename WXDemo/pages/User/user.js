// pages/User/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '世界尽头',
    author: '世界が终わるまでは',
    src: "https://d.pcs.baidu.com/file/509e75085559dc742b78f81bfa825671?fid=490690713-250528-1045916561845019&time=1521296432&rt=sh&sign=FDTAERVY-DCb740ccc5511e5e8fedcff06b081203-xlQIMe%2BhIZ9fLqst4A0Bu%2BcPSsg%3D&expires=8h&chkv=1&chkbd=0&chkpc=et&dp-logid=1761052660824994488&dp-callid=0&r=421971279",
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
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
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.showModal({
    //   title: '温馨提示',
    //   content: '该页面存在不可告人的秘密，你暂时无权访问',
    //   showCancel: false,
    //   success: function (res) {
    //     wx.switchTab({
    //       url: '../../pages/index/index',
    //       success: function (res) { },
    //       fail: function (error) { },
    //       complete: function (info) {
    //         console.log(info)
    //       }

    //     })
    //   }
    // });
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})