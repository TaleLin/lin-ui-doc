---
title: wx.lin使用方法
---

# <H2Icon /> wx.lin使用方法

在一些操作交互方面，有些组件可以全局挂载一个调用的方法，比如说vue中的类似的调用方法`this.$message`，同样的在小程序的组件中，我们也设计了类似的调用方法，不过在小程序中使用会受到一些限制：

1. 需要调用某个组件时，必须在对应的页面的`json`文件中引入并在`wxml`文件中挂载。
2. 组件仅显示在引入的页面，跳转到其他页面时组件将会消失。比如某些场景下，在成功操作后会提示并跳转页面，这种场景建议传入回调函数在组件隐藏后再进行跳转或者使用原生的`API`。
3. 一个页面只能引入一个相关的组件，比如`water-flow`组件每一个页面只能使用一次该组件。

下面以`Loading`组件为例，介绍下`wx.lin`的用法：

1. 在`json`和`wxml`文件中引入`loading`组件。

```json
{
  "usingComponents": {
    "l-loading": ""
  }
}
```

```wxml
<!-- index.wxml -->
<l-loading />
```

2. 在`js`文件调用API并传入参数即可，参数参考对应组件的属性列表，参数均为`非必填`，并且参数需改为`驼峰命名`。

```js
onLoad(){
  wx.lin.showLoading({
    type:"filp",
    fullScreen: true
  })
  setTimeout(()=>{
    wx.lin.hideLoading()
  },2000)
}
```

::: tip
显示的API为`wx.lin.show${组件名称}`，隐藏的API为`wx.lin.hide${组件名称}`(某些组件不支持隐藏)。
:::

<RightMenu />