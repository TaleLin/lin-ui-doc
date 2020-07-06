---
title: 气泡框 Popover
---

# <H2Icon />  气泡框 Popover(即将上线)

> 弹出气泡式提示框。

气泡是一个在移动app（手机app，webApp，小程序，H5）里常见的组件，它由你自定义的事件去触发，显示在某一个元素的周围，可以是上下左右四个方位。


<img-wrapper>
  <img src="http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdRVlpjY2JUME5DMVZZTXQyeHA0Mm9oVitZczQzQkM3TDB1T3FCM1V1aHNBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper> 

## 基本案例

气泡框可通过设置`show`属性为`true`、`false`来控制显示和隐藏，不设置则显示状态默认为`false`。

### 示例代码
```wxml
<l-popover show="{{show}}">
  <view bindtap="handleShow">点击提示</view>
</l-popover>
```
```js
handleShow() {
  this.setData({ show: true })
}
```

## 设置气泡的类型

气泡框的类型有两种，`text`和`list`，通过`type`属性来控制。

::: tip 注意事项
 - 当`type`为`text`时，设置`text`属性就可以在气泡内显示文本内容。
 - 当`type`为`list`时，气泡框内显示的是一个列表，你可以传入一个数组去渲染它，当`list`的内容超过了气泡的默认最大值后，气泡框内会出现一个可以纵向滚动的滚动条，你可以滑动它来查看超出部分的内容。
:::

### 示例代码
```wxml
<l-popover show="{{true}}" type="text" text="哈哈哈！">
  <view>点击提示</view>
</l-popover>

<l-popover show="{{true}}" type="list" list="{{ arr }}">
  <view>点击提示</view>
</l-popover>
```

```js
data: {
  arr: [
    'A',
    'B',
    'C',
    'D'
  ]
}
```

## 气泡出现的方位

我们可以通过设置 `placement` 属性的值来改变气泡出现的方位，可选值为` top、left、right、bottom、topLeft、topRight、bottomLeft、bottomRight、leftTop、leftBottom、rightTop、rightBottom`，默认`top`。

### 示例代码
```wxml
<l-popover show="{{true}}" placement="left">
  <view>点击提示</view>
</l-popover>
```

## 气泡的背景色

气泡的背景色可以通过设置`bgColor`来改变，默认为黑色半透明背景色（rgba(0, 0, 0, 0.5）。

### 示例代码
```wxml
<l-popover show="{{true}}" bgColor="rgba(0, 0, 0, .6)">
  <view>点击提示</view>
</l-popover>
```


## 设置子节点

我们在使用的组件的时候，可以根据使用场景,自由的在气泡框组件内插入 `<image>` `<view>` `<text>` 等子节点，当然，你也可以在其中插入 `自定义组件` 。



## 设置是否点击关闭

气泡框可以通过设置 `locked` 属性的值为`true` 或者 `false` 来设置他是否可以被点击关闭，默认为 `true`

::: tip 注意事项
 如果设置为 `true` ，点击气泡框的时候会将其关闭
:::
### 示例代码

```wxml
<l-mask show="{{true}}" locked="{{true}}">
    <view class="mask-content">
      <view class="mask-text" >取消子节点的垂直居中</view>
    </view>
</l-mask>

```

## 锁定Popover
设置按钮的 `locked` 属性来控制气泡框的锁定态，属性值为 `true` 时点击气泡框部分不会关闭，属性值为 `false` 时点击气泡框会立即关闭，默认为 `true`。 

### 示例代码
```wxml
<l-popover show="{{true}}" locked="true">
  <view>点击提示</view>
</l-popover>

```

## 气泡框属性（Popover Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 控制气泡框的显示 | Boolean | true/false | false | 
| bgColor | 控制气泡框的背景色 | String |  | rgba(0,0,0, .5) | 
| type | 控制气泡框的类型 | String | text/list | text | 
| text | 渲染气泡框的内容 | String |  |  | 
| list | 渲染气泡框的内容(列表) | Array |  |  | 
| placement | 设置气泡框出现的位置 | String |  top、left、right、bottom、topLeft、topRight、bottomLeft、bottomRight、leftTop、leftBottom、rightTop、rightBottom | top | 
| locked   | 气泡框是否设定为锁定态 | Boolean | true/false | false 

::: tip 注意事项
 Popover组件使用cover-view来绘制，层级最高，可以覆盖微信的一些原生组件。
:::

## 气泡框外部样式类（Popover ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 设置气泡框的根节点样式 |   | 
| l-item-class   | 设置气泡框里的list列表的item样式 |  | 


## 气泡框事件（Popover Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 当点击气泡框时触发   |  如果是list类型，会返回当前的下标  | --------   | 
|  |    |   |  | 


<RightMenu />

