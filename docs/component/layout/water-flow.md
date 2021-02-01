---
title: 瀑布流 WaterFlow
---

# <H2Icon /> 瀑布流 WaterFlow

> 适用于展示卡片宽度相同、高度不一致的场景中，根据高度排列卡片位置。

## 使用方法

本组件使用了抽象节点，与其他组件使用方法略有不同，对实现原理感兴趣的同学可以参考微信小程序文档关于[抽象节点][1]的章节。

瀑布流组件使用步骤如下：

1. 封装一个自定义组件接收数据。
2. 在需要使用瀑布流组件的页面同时引入瀑布流组件和自定义组件。
3. 传入数据渲染瀑布流。

::: tip
目前只支持两列渲染。
:::

使用组件之前，因为要自行封装一个承载数据的组件，所以要对组件封装有一定经验，当然您也可以参考demo的源码进行一定的修改。

下面介绍下如何封装承载数据组件。

假设我们创建了一个叫做`l-demo`的组件。在`l-demo`组件的js的文件中写入以下代码即可。

```js
  // demo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object
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

  }
})
```

上面的`data`就是我们要进行渲染的数据，这是经过组件内部处理过的，可以直接进行数据绑定。

假设`l-demo`组件是以下的wxml结构。

::: tip
温馨提示：可以对`card`组件进行二次封装哦，当然也可以自行编写wxml结构。
:::

```wxml
<!-- demo.wxml -->
<l-card full type="cover" image="{{data.image}}" title="{{data.title}}" l-class="life-container" l-img-class="life-img" l-title-class="life-title" bindtap="onProduct">
  <view class='life-product-contianer'>
    <view class='art-content'>{{data.describe}}</view>
    <view class='price-container'>
      <l-price unit="￥" value="{{data.count}}" value-color="#ad0e11" unit-color="#ad0e11" value-size="36"></l-price>
      <l-price l-class="del-price" unit="￥" value="{{data.delCount}}" value-color="#ad0e11" unit-color="#ad0e11" deleted del-color="#666" value-color="#666" unit-color="#666"></l-price>
    </view>
  </view>
</l-card>
```

::: tip
以下`wxss`为示例代码仅供参考，请根据实际情况编写。
:::

```wxss
/* demo.wxss */
.life-container {
  width: 350rpx !important;
  padding: 0 0 20rpx 0 !important;
  background-color: #fff !important;
  box-shadow: 0px 8rpx 20rpx 0px rgba(9, 36, 66, 0.04) !important;
  border-radius: 16rpx !important;
  overflow: hidden;
  margin-bottom: 20rpx;
}

.life-img {
  width: 350rpx !important;
  height: 380rpx !important;
}

.life-product-contianer {
  padding: 0 10rpx;
  display: flex;
  flex-direction: column;
}

.life-title {
  margin-left: 10rpx !important;
}

.tag {
  height: 30rpx !important;
  line-height: 30rpx !important;
}

.art-content {
  font-size: 28rpx;
  color: #999;
  margin-top: 15rpx;
  display: flex;
  flex-wrap: wrap;
}
```

OK，`l-demo`组件封装好以后，接下来就可以渲染瀑布流了。

在使用瀑布流组件页面的json文件中同时引入`water-flow`和封装好的`l-demo`组件。

```wxml
<l-water-flow generic:l-water-flow-item="l-demo"/>
```

启动渲染最重要的一步，就是在需要渲染的时候调用`wx.lin.renderWaterFlow()`（比如在onLoad生命周期中）并传入需要渲染的数据，然后就可以完成组件的渲染。

`wx.lin.renderWaterFlow()`支持传入三个参数，第一个参数为`data`即为传入的数据信息，第二个参数为`refresh`为是否刷新数据(删除之前渲染的数据，重新渲染)。

::: tip
该组件内部已经实现保存了历史数据，在实际应用场景中，经常会采用分页获取数据的方法，第二次渲染传入新的数据即可，请勿合并第一次的数据传入，造成数据的重复。
:::

```js
Page({

  data: {
    demo:[{
      image: '../image.png',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    }，{
      image: '../image.png',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    }，{
      image: '../image.png',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    }]
  },

  onLoad(options) {
    wx.lin.renderWaterFlow(this.data.demo, false ,()=>{
      console.log('渲染成功')
    })
  }
})  
```

## 列间距

通过`column-gap`属性可设置瀑布流列间距。

### 示例代码

```wxml
<l-water-flow generic:l-water-flow-item="l-demo" column-gap="20rpx"/>
```

## 瀑布流属性

|  参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| column-gap |  瀑布流列间距 | String | - | 20rpx |

## 瀑布流子项事件

| 事件名称         | 说明                 | 返回值                                       | 备注 | 版本号 |
| ---------------- | -------------------- | -------------------------------------------- | ---- | ---- |
| bind:linitemtap   | 点击瀑布流子项回调事件 | 自定义传入的子项数据 | -    | 0.8.2|

<RightMenu />

[1]: https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html
