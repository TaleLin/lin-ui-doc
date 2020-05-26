---
title: 页底提示 Loadmore
---

# <H2Icon/> 页底提示 Loadmore

> 用于页底的加载提示。

Loadmore组件支持以下两种用法：
1. Loadmore作为页面的一部分元素直接插入页面中使用。
2. Loadmore作为一个布局组件，可将页面的内容通过插槽的形式传入组件内部，此时loadmore组件的内容可自动定位
在页面的最下方显示，该用法需设置`slot="content"`(以下示例代码使用的是第二种用法)。

> 该组件支持<a href="/start/wx.html">wx.lin</a>用法。

## 显示与隐藏

通过`show`属性设置页底提示的显示与隐藏。默认值为`false`。

### 示例代码

```wxml
<l-loadmore show="{{true}}">
  <view slot="content">
      此处是页面内容
  </view>
</l-loadmore>
```

## 提示类型及提示文案

通过`type`属性设置页底提示类型。默认值为`loading`（加载中）。

设置`loading-text`属性可覆盖`loading`状态下的默认文本。

设置`end-text`属性覆盖`end`状态下的默认文本。

![提示类型](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdaWllxMi9kOHptU0JnV1ZURkM1TzMwYm5xTDhLRlF6cE9ZR3FUVVVPbFZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

![提示文案](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmdaWllxMi9kOHptVVRYa2hGNEF0VEl3MklUQ0JhdHVwa2JrZHVOYkgrK09BPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 示例代码

```wxml
<l-loadmore show="{{true}}" type="loading" loading-text="努力加载中~">
  <view slot="content">
      此处是页面内容
  </view>
</l-loadmore>
```

## 是否显示分割线

通过`line`属性设置是否显示分割线。默认值为`false`。

![是否显示分割线](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmdaWllxMi9kOHptZGc5bXZRNHBFeGo4bE9Bd1FUTzIwWUxnQ3Y4a29WcytRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 示例代码

```wxml
<l-loadmore show="{{true}}" type="loading" line="{{true}}">
  <view slot="content">
      此处是页面内容
  </view>
</l-loadmore>
```

## 自定义提示文字颜色及字体大小

通过`color`属性设置文字和分割线颜色。

通过`size`属性设置提示文字的字体大小。

### 示例代码

```wxml
<l-loadmore show="{{true}}" 
          type="loading"
          size="28" 
          line="{{true}}" 
          color="#333">
  <view slot="content">
      此处是页面内容
  </view>
</l-loadmore>
```

## 自定义页底加载类型

通过`custom`属性自定义页底提示，自定义内容通过设置`slot="custom"`传入。默认值为`false`。

### 示例代码

```wxml
<l-loadmore show="{{true}}" custom="{{true}}">
  <view slot="content">
    此处是页面内容
  </view>
  <view slot="custom">
  </view>
</l-loadmore>
```

## 页底提示属性（Loadmore Attributes）
| 参数   | 说明   | 类型   | 可选值   | 默认值    | 
|:----|:----|:----|:----|:----|
| show   | 是否显示页底提示   | Boolean   | ----   | false   | 
| type   | 页底提示类型   | String   | end/loading   | loading   | 
| loading-text   |  加载中状态的文案   | String   | ----   | ---   | 
| end-text   |  加载完成状态的文案   | String   | ---  | ---  | 
| line   | 是否显示分割线   | Boolean  | ----   | false   | 
| size   | 自定义页底加载提示文字字体大小  | String  | ----   | `28`  单位为`rpx`   | 
| color   | 自定义页底加载提示文字和分割线颜色   | String  | ----   | ---   | 
| custom   | 是否自定义页底加载   | Boolean  | ----   | fasle   | 

## 页底提示事件 (Loadmore Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 点击页底提示区域触发的事件   | ---------   | --------   | 

## 页底提示外部样式类 (Loadmore ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
|:----|:----|:----|:----|
| l-class |  覆盖loadmore组件整体的外部样式类  | ---  |
| l-loading-class |  覆盖loading状态的外部样式类  | --- |
| l-end-class |  覆盖end状态的外部样式类  | --- |
| l-line-class |  覆盖分割线的外部样式类  | --- |

## 页底提示插槽 (Loadmore Slot)

| 插槽名    | 说明    | 备注 |
|:----|:----|:----|:----|
| content |  自定义展示内容  | 适用于第二种用法  |
| loading |  自定义加载时提示的内容  | --  |
| end |  自定义加载完成提示的内容  | --  |

<RightMenu />
