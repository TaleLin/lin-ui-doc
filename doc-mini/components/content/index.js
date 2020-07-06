Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    md: String,
    fromSelf: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onIcon() {
      if (this.properties.fromSelf) {
        wx.navigateToMiniProgram({
          appId: 'wxdcec05d9a27f9064'
        })
      } else {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    }
  }
})