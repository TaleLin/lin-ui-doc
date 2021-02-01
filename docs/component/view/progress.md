---
title: 进度条 Progress
---

# <H2Icon /> 进度条 Progress

> 用来展示当前事件进度。

## 百分比

通过`percent`属性设置进度条当前进度，取值0~100，默认为0.

:::img
![height=50](/screenshots/progress/1.png)
:::

示例代码

```wxml
<l-progress percent="20"></l-progress>
<l-progress percent="50"></l-progress>
```

## 宽度

通过`stroke-width`属性设置进度条的宽度。默认12，单位`rpx`.

:::img
![height=50](/screenshots/progress/2.png)
:::

示例代码

```wxml
<l-progress percent="20"></l-progress>
<l-progress percent="50" stroke-width='20'></l-progress>
```

## 圆角

通过`border-radius`属性设置进度条的圆角数值，默认为6，单位`rpx`.

:::img
![height=50](/screenshots/progress/3.png)
:::

示例代码

```wxml
<l-progress percent="20" stroke-width='20' border-radius='8'></l-progress>
<l-progress percent="50" stroke-width='20' border-radius='15'></l-progress>
```

## 已选择的进度条颜色

通过`active-color`属性可以设置已选择的进度条颜色，默认为主题色。（关于主题色设置请阅读[入门介绍-主题色更改](http://doc.mini.talelin.com/start/#自定义配置)）

:::img
![height=50](/screenshots/progress/4.png)
:::

示例代码

```wxml
<l-progress percent="20"></l-progress>
<l-progress percent="50" active-color="red"></l-progress>
```

## 背景色

通过`background-color`属性可以设置未选择的进度条颜色，默认颜色`#EBEBEB`。

:::img
![height=50](/screenshots/progress/5.png)
:::

示例代码

```wxml
<l-progress percent="20"></l-progress>
<l-progress percent="50" background-color='#FF00FF'></l-progress>
```

## 显示数值

通过设置`show-info`属性为{{true}}，可以显示当前百分比数值，默认为`false`.
```wxml
<l-progress percent='20' show-info="{{true}}">
```

## 文字显示位置

通过`text-position`属性可以设置百分比数值的显示位置，可选值有"left","right"。默认为"right"。

:::img
![height=100](/screenshots/progress/6.png)
:::

示例代码

```wxml
<l-progress percent="20" show-info="{{true}}"></l-progress>
<l-progress percent="50" show-info="{{true}}" text-position="left"></l-progress>
```

## 文字颜色

通过`text-color`属性，可以设置文字颜色，默认为主题色。（关于主题色设置请阅读[入门介绍-主题色更改](http://doc.mini.talelin.com/start/#自定义配置)）

:::img
![height=50](/screenshots/progress/7.png)
:::

示例代码

```wxml
<l-progress percent="50" show-info="{{true}}" text-color='red'></l-progress>
```

## 文字和进度条间隔

通过`interval`属性，可以设置文字和进度条之间的间隔距离。默认值20，单位`rpx`。

## 自定义子节点

进度条头部的样式可通过slot自定义传入，通过传入slot="header"自定义进度条头部样式。

:::img
![height=100](/screenshots/progress/8.png)
:::

示例代码

```wxml
<l-progress>
    <view slot='header' style="width:50rpx;height:50rpx;border-radius:50%;background-color:red;display:block;"></view>
</l-progress>
<l-progress percent="50" l-slot-class='slot-class'>
    <image src="imoji.jpg" slot='header' style="width:50rpx;height:50rpx;border-radius:50%;display:block;" />
</l-progress>
```

:::tip
slot传递的组件，需要标注display:block;属性
:::

## 进度条属性

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  版本|
|:----|:----|:----|:----|:----|:----|
| percent	| 百分比	| Number | 0~100 | 0 | 0.8.0|
| stroke-width	| 进度条线的宽度  |	number/string | - | 6 | 0.8.0|
|border-radius| 圆角大小| number/string|-|6| 0.8.0|
| active-color	| 已选择的进度条的颜色 | String | -| 主题色 |0.8.0|
| background-color	| 未选择的进度条的颜色 |	String	| - |#EBEBEB| 0.8.0|
|show-info| 显示当前百分比数值|boolean|-|false| 0.8.0|
|text-position | 文字显示位置 | String | 'left','right'| 'right'| 0.8.0|
|text-color| 文字颜色| String | -| -|0.8.0|
|interval| 文字和进度条间隔距离 | Number | - | 20，单位`rpx` | 0.8.0 |
|active | 进度条从左往右的动画  | Boolean |  |  false| 0.8.0|
| duration| 进度增加1%所需毫秒数 |Number | |  30，单位毫秒| 0.8.0|

## 外部样式类

| 外部样式类   | 说明 | 备注| 版本 |  
|:----|:----|:----|:----|
|l-class| 进度条整体的外部样式类| | |
|l-text-class | 文本的外部样式类| | |
|l-active-class|覆盖已选择进度的外部样式类|||
|l-background-class|覆盖背景进度条的外部样式类|||

## 插槽

| 插槽名   | 说明 | 备注|  
|:----|:----|:----|
|header |自定义header | |

<RightMenu />