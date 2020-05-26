---
title: 轻提示 Toast
---

# <H2Icon /> 轻提示 Toast

> toast组件常用于在页面中展示重要的提示信息。

我们提供了`Toast`组件的两种调用方法，一种是最基本的组件调用方式，通过`show`属性来控制显示与隐藏，另一种是更接近于微信原生的调用方法，通过`wx.lin.showToast()` 这个方法来进行调用。

## 通过Api调用

### 显示 toast

在项目中，**showToast**这个操作可能会在一些函数的回调中被使用，那么通过Api去调用，是一种更好的体验。下面会通过一些代码示例来帮助理解。

首先需要在json文件中引入`Toast`组件，其次在wxml文件中使用它。
```wxml
<l-toast />

<view bindtap="show">触发</view>
```
之后在js里写下调用方法
```js
show() {
  wx.lin.showToast({
    title: '创建成功~',
    icon: 'success',
    success: (res) => {
      console.log(res)
    },
    complete: (res) => {
      console.log(res)
    }
  })
}

```
接着就能查看到页面出现了 `创建成功~` 的`Toast`提示了

<img-wrapper>
  <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEU3eDlFZy9Vc3FRSmE0d0poTzRldFVrcWl3aHJZakYwa2Y0UzlwK2V4RzdBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">
</img-wrapper> 

### 关闭toast
有一些情况，需要手动关闭toast，可以通过调用wx.lin.hideToast()主动关闭toast的显示。

##  无文字基本类型

提示框可通过设置`show `属性为`true`、`false` 来控制显示和隐藏，并且在不设置`image` 和 `icon` 的情况下，只会显示文本内容。

### 示例代码
```wxml
<!-- 单行文本 -->
<l-toast
  show="{{true}}"
  title="这是一条基础提示框"
/>

<!-- 多行文本 -->
<l-toast
  show="{{true}}"
  title="这是一条基础提示框，这是一条基础提示框"
/>

```

如下图：

<img-wrapper>
 <img src="http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEhlS2R1Y2tEUE5DUE1CV2VYNHh5aWdWeFlubUdmeW5BR0RFdk1DSitTMjdRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>



## icon + 文本内容的提示框

当我们遇到有一些场景需要icon+文字的提示框时，可以通过设置`icon` 来实现，同时，还可以设置 `size`和`color` 来控制icon图标的大小和颜色。
<br />
::: tip 注意事项 
 * 设置`icon` 为 `success`、`loading`、`error` 时，显示效果如下图所示。
 * 当设置 `icon` 为其他值时，默认显示白色，
:::

### 示例代码

```wxml
<!-- 显示 success 的提示框 -->
<l-toast
  show="{{true}}"
  icon="success"
  title="成功提示框"
/>
```
<img-wrapper>
 <img src="http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdEQUxENm5RRXoxVk1TYXQvRm42NTVxZzg5bzRSOEc4UWpnaUNWY0krT0F3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

## 自定义图片的提示框

当`icon` 属性不能满足我们的需求时，我们还可以通过设置`image` 来自由的定义显示的图片内容，只需要在`image`属性里传入有效的图片路径即可。
<br />

::: tip 注意事项
 * `image` 的权重高于 `icon`，所以当设置了 `image` 时，`icon` 不显示。
:::

### 示例代码
```wxml
<l-toast
  show="{{true}}"
  image="path/to/img.png"
  title="图片提示框"
/>
```

<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEVtNTBFQndmb0JodFlTbm54bFNDUDNlN2p6akJoOWVOYWNwSUs5WTEvdXRRPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg">
</img-wrapper>


## 更改文字的位置

`toast` 默认是列式布局（图标在上，文字在下），但是有时候会需要提示的图标居左，文字居右；或者文字居左，图标居右显示。
<br />
这时，我们可以通过设置 `placement` 属性来完成，`placement`可选值为`top / left / right / bottom ` ，默认值是 `bottom`。
::: tip 注意事项
 * 当 `icon` 或者 `image` 为空时，设置 `placement` 不生效。
:::

### 示例代码
```wxml
<l-toast
  show="{{true}}"
  icon="time"
  title="自定义提示框"
  placement="right"
/>
```
<img-wrapper>
 <img src="http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZMSTg0Uzl2cENhaG92d3A0R2xsZWkvWi9QbFJLWFdSYnJHTmJIdlZJMGlBPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg">
</img-wrapper>


### 提示框属性（Toast Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 控制提示框的显示 | Boolean | true/false | false | 
| title | 提示框的文本内容 | String |   |  | 
| icon | icon图标的名字| String |  参考[icon组件][1]支持的范围|   | 
| icon-size | icon图标的大小| String |  --- |  60 | 
| icon-color | icon图标的颜色 | String |  --- |  #fff | 
| image | 图片的有效路径，支持本地路径和网络路径 | String |   |   | 
| placement   | 文字的显示方位 | String | top/left/right/bottom  | bottom 
| duration   | 提示框显示的时长 | Number |  | 1500 
| zIndex   | 控制提示框的z-index层级 | Number |  | 999
| mask   | 是否显示透明蒙层，防止触摸穿透 | Boolean | true/false | false 
| offsetX | 设置提示框向右的偏移量 | Number | -  | 0 |
| offsetY | 设置提示框向下的偏移量 | Number | -  | 0 |

::: tip 注意事项 
* `image` 的权重大于 `icon` ，当设置`image`时， `icon`不生效
* `center` 设置为`false`的时候，提示框偏底部显示，默认居中显示。
:::

### 提示框外部样式类（Toast Class）

| 参数   | 说明 | 备注 |  
|:----|:----|:----|
| l-class | 覆盖toast整体的外部样式类 | --- | 
| l-bg-class | 覆盖背景部分的外部样式类 | --- | 
| l-image-class | 覆盖toast图片部分的外部样式类 | --- | 
| l-icon-class | 覆盖toast图标部分的外部样式类 | --- | 

## icon参数说明

| 属性值   | 说明 | 类型 |
|:----|:----|:----|
| success | 显示绿色的`success` 图标 | String | 
| error | 显示红色的 `error` 图标 | String | 
| loading | 显示白色的的 `loading` 图标 | String | 
| other | 参考[icon组件][1]支持的范围 | String | 


  [1]: http://doc.mini.7yue.pro/component/basic/icon.html


<RightMenu />