---
title: 圆型进度条 Circle
---

# <H2Icon /> 圆型进度条 Circle

> 用来展示当前事件进度。

## 百分比

通过`percent`属性设置进度条当前进度，取值0~100，默认为0.

示例代码

```wxml
<l-circle percent='50'></l-circle>
```

## 外圆直径

通过`outer-diameter`属性设置进度条外圆的直径，默认值220，单位`rpx`. 进度条的宽窄可以通过设置内外圆直径来控制。

示例代码

```wxml
<l-circle percent='50' outer-diameter='150'></l-circle>
```

## 内圆直径

通过`inner-diameter`属性设置进度条内圆的直径，默认值170，单位`rpx`.进度条的宽窄可以通过设置内外圆直径来控制。

```wxml
 <l-circle percent='50' inner-diameter='80'></l-circle>
```

## 已选择的进度条颜色

通过`active-color`属性可以设置已选择的进度条颜色，默认为主题色。（关于主题色设置请阅读[入门介绍-主题色更改](http://doc.mini.talelin.com/start/#自定义配置)）

示例代码

```wxml
<l-circle percent='50' active-color='red'></l-circle>
```

## 未选择的进度条颜色

通过`background-color`属性可以设置未选择的进度条颜色，默认颜色`#EBEBEB`。

示例代码

```wxml
<l-circle percent='50' background-color='green'></l-circle>
```

## 中间的背景颜色

通过`inner-color`属性可以设置中间背景颜色，默认颜色`#FFFFFF`。

示例代码

```wxml
<l-circle percent='50' inner-color='yellow'></l-circle>
```

## 显示数值

通过设置`show-value`属性为{{true}}，可以显示当前百分比数值，默认为`false`.
```wxml
<l-circle percent='50' show-value='{{true}}'></l-circle>
```

## 文字颜色

通过`value-color`属性，可以设置文字颜色，默认为黑色。


示例代码

```wxml
<l-circle percent='50' show-info='{{true}}' value-color='red'></l-circle>
```

## 文字大小

通过`value-size`属性，可以设置文字的字体大小，默认25，单位`rpx`

```wxml
<l-circle percent='50' show-info='{{true}}' value-size='30'></l-circle>
```

## 自定义背景

通过默认插槽自定义中间背景图案。
注：自定义背景和文字显示不能同时设置。

```wxml
<l-circle percent='50'>
    <image src="timg.jpeg" style="width:90rpx;height:90rpx;border-radius:50%;display:block;" />
</l-circle>
```

## 进度条属性

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  版本|
|:----|:----|:----|:----|:----|:----|
| percent	| 百分比	| Number | 0~100 | 0 | 0.8.5|
| outer-diameter	| 外圆直径  |	number/string | - | 220,单位`rpx` | 0.8.5|
|inner-diameter| 内圆直径| number/string|-|170,单位`rpx`| 0.8.5|
| active-color	| 已选择的进度条的颜色 | String | -| 主题色 |0.8.5 |
| background-color	| 未选择的进度条的颜色 |	String	| - |#EBEBEB| 0.8.5|
| inner-color	| 中间部分的背景颜色 |	String	| - |#FFFFFF| 0.8.5|
|show-value| 显示当前百分比数值|boolean|-|false| 0.8.5|
|value-color| 文字颜色| String | -| -|0.8.5|
|value-size| 文字大小| String | -| 25,单位`rpx`|0.8.5|
|active | 是否开启进度条动画  | Boolean |  |  false| 0.8.5|
| duration| 进度增加1%所需毫秒数 |Number | |  30，单位毫秒| 0.8.5|

## 外部样式类

| 外部样式类   | 说明 | 备注| 版本 |  
|:----|:----|:----|:----|
|l-value-class | 文本的外部样式类| | 0.8.5|


## 插槽

| 插槽名   | 说明 | 备注| 版本 |  
|:----|:----|:----|:----|
|默认插槽 | 自定义中间的背景图案| | 0.8.5|

<RightMenu />
