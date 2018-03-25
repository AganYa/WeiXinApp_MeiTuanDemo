// pages/Order/order.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listLi: [],
    theView: '',
    page: 0,
    scrollTop: 0,
  },
  //初始化数据
  initData: function () {
    var _lis = [];
    console.log(9);
    for (var i = 0; i < 20; i++) {
      _lis.push("initData" + i);
    }
    this.setData({
      listLi: _lis,
      page: 1
    })
  },
  //页面加载完毕后初始化数据
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    try {
      this.initData();
    } catch (e) { console.log(e.message) }
    console.log(this.data.listLi);
  },
  loadMore: function () {
    console.log('scroll to bottom for load more item')
    let _page = this.data.page + 1;
    let _lis = this.data.listLi;

    for (var i = (_page - 1) * 20; i < _page * 20; i++) {
      _lis.push("loadMore-" + i);
    }

    this.setData({
      listLi: _lis,
      page: _page
    })
  },
  //滚动到某个区域
  gotoView: function () {
    this.setData({
      theView: "gotoView-10"
    })

  },
  //滚动到顶部
  goTop: function () {
    this.setData({
      scrollTop: 0 //这里有个坑，第一次会失效，第二次就不行了，如果值是0，则无效。这个bug可以通过重设这2个值来解决
    })
    console.log(133)
  },
  //滚动事件
  scroll: function () {
    this.setData({
      theView: "scroll-120",
      scrollTop: 5,
    })
    console.log(3);
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
  console.log("下拉")
  // wx.showNavigationBarLoading()
  // var timer1 = setTimeout(function () {
  //   wx.hideNavigationBarLoading() //完成停止加载
  //   wx.stopPullDownRefresh() //停止下拉刷新
  //  }, 5000);
  // wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var _this=this;
    // _this.setData({ hidden: true })
    // var timer1 = setTimeout(function () {
    //   _this.setData({ hidden:false})
    // }, 5000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})