---
title: 吸顶容器 Sticky
---

# <H2Icon /> 吸顶容器 Sticky

> 吸顶容器，常见应用场景为吸顶菜单、索引选择器

吸顶容器需要`sticky`和`sticky-item`组件关联使用

`sticky-item`包括头部`header`和`body`两个部分，通过slot注入


## 页面垂直滑动距离（必填）

因为组件内部无法获取页面垂直滑动距离，所以需要在`sticky`组件上通过属性[`scroll-top`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object)传入

### 属性传值示例代码

```wxml
<!-- 页面wxml文件 -->

<l-sticky scrollTop="{{scrollTop}}">
  <l-sticky-item>
    <view slot="header">吸顶菜单</view>
    <view slot="body">内容部分</view>
  </l-sticky-item>
</l-sticky>

```

```js
// 页面js文件
Page({
  data: {
    // 页面垂直滑动的距离
    scrollTop: undefined
  },

  onPageScroll(res) {
    this.setData({
      scrollTop: res.scrollTop
    })
  }
})
```
### `wx.lin`传值示例代码

::: tip 提示
* 若一个页面中仅使用了一个sticky组件，可采用[`wx.lin.setScrollTop(scrollTop)`](#吸顶容器事件（sticky-events）)方式传入scrollTop值。该方式在一定程度上可以优化性能。
:::

```wxml
<!-- 页面wxml文件 -->

<l-sticky>
  <l-sticky-item>
    <view slot="header">吸顶菜单</view>
    <view slot="body">内容部分</view>
  </l-sticky-item>
</l-sticky>

```

```js
// 页面js文件
Page({
  onPageScroll(res) {
    wx.lin.setScrollTop(res.scrollTop)
  }
})
```

## 渲染模式

`sticky`组件拥有`js`和`css`两种渲染模式，通过`mode`属性指定，默认值为`css`

::: tip 两者区别

* `css`模式UI流畅度优于`js`模式，适合对交互体验要求较高的场景，但不支持事件监听，并且部分机型不支持（此时会回滚js模式）
* `js`模式在滑动过快的情况下，吸顶容器会闪烁，但支持`linsticky`和`linunsticky`事件监听，适合复杂业务场景

:::

## 吸顶位置

在`sticky-item`组件上设置`top`属性（单位rpx），指定吸顶容器吸附点距离视窗顶部的距离，默认为`0`，即吸附到视窗顶部

### 示例代码

```wxml
<l-sticky scrollTop="{{scrollTop}}">
  <l-sticky-item top="10">
    <view slot="header">吸顶菜单</view>
    <view slot="body">内容部分</view>
  </l-sticky-item>
    <l-sticky-item top="20">
    <view slot="header">吸顶菜单</view>
    <view slot="body">内容部分</view>
  </l-sticky-item>
</l-sticky>
```



## 动态修改内容

在某些场景下`sticky-item`的内容会增加/减少，如：上拉加载更多，此时需要主动调用`wx.lin.flushSticky()`方法刷新吸顶容器的宽高数据，否则会造成吸顶位置错乱。

### 示例代码

```js
 fetchData(){
     // 从服务端获取数据
    let data = http.fetchData()
    // 设置数据
    this.setData({
        listData:data
    })
	// 刷新sticky容器
    wx.lin.flushSticky()
  }
```



## 吸顶容器属性

| 参数       | 说明                   | 类型   | 可选值     | 默认值 | 版本号 |
| ---------- | ---------------------- | ------ | ---------- | ------ | ------ |
| mode       | 吸顶容器实现方式       | String | `css`/`js` | `css`  | 0.7.4 |
| scroll-top | 页面垂直滑动距离，必填 | Number | -          | -      | 0.7.4|



## 吸顶容器子项属性

| 参数 | 说明               | 类型   | 可选值 | 默认值 | 版本号 |
| ---- | ------------------ | ------ | ------ | ------ | ------ |
| top  | 吸顶容器吸附的位置（单位rpx） | Number | -      | -      |0.7.4 |



## 吸顶容器外部样式类

| 外部样式类名 | 说明                 | 备注 | 版本号 |
| ------------ | -------------------- | ---- | ---- |
| l-class      | 覆盖吸顶容器整体样式 | -    | 0.7.4|



## 吸顶容器子项外部样式类

| 外部样式类名           | 说明                           | 备注 | 版本号 |
| ---------------------- | ------------------------------ | ---- | ---- |
| l-class                | 覆盖吸顶容器子项整体样式       | -    | 0.7.4|
| l-header-class         | 覆盖吸顶容器子项头部样式       | -    |0.7.4 |
| l-header-sticky-class         | 覆盖吸顶容器子项头部吸顶后的样式       | -    | 0.7.4|



## 吸顶容器事件

| 事件名称         | 说明                 | 返回值                                       | 备注 | 版本号 |
| ---------------- | -------------------- | -------------------------------------------- | ---- | ---- |
| bind:linsticky   | 吸顶容器吸顶回调事件 | 当前`sticky-item`在`sticky`中的索引值`index` | -    | 0.7.4|
| bind:linunsticky | 吸顶容器脱落回调事件 | 当前`sticky-item`在`sticky`中的索引值`index` |      | 0.7.4|



## 吸顶容器wx.lin方法

| 方法名称             | 说明                                       | 返回值 | 备注 | 版本号 |
| -------------------- | ------------------------------------------ | ------ | ---- | ---- |
| wx.lin.flushSticky() | 刷新吸顶容器宽高数据，在改变sticky-item中的内容后调用 | -      | -    |0.7.4|
| wx.lin.setScrollTop(scrollTop) | 设置页面滑动距离，仅可在页面使用一个sticky组件时使用该方式传值，若一个页面使用了两个及以上的sticky组件时，不可使用该方式传值 | -      | -    |0.7.4|



## 吸顶容器子项插槽

| Slot名称 | 说明               | 备注                             | 版本号 |
| -------- | ------------------ | -------------------------------- | -------------------------------- |
| header   | 吸顶容器吸附部分   | -                                |0.7.4|
| body     | 吸顶容器的内容区域 | 该部分用于计算吸顶容器脱落的时机 |0.7.4|

<RightMenu />
