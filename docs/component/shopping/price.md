---
title: 价格 Price
---

# <H2Icon /> 价格 Price

> 售卖商品的价格。

## 价格及价格符号

通过`value`属性设定价格。

通过`unit`属性设置价格单位。默认值为`￥`。

通过`mode`属性设置价格类型，可选值为`number`、`text`，默认值为`number`。

![价格及价格符号](http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmlreHhiN2hqR1AvWFhjMzJFVnhtTFM5YmlRWmw3NTZoQmNreElnQmc0OGpBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 示例代码

```wxml
  <l-price unit="￥" value="666"></l-price>
  <l-price unit="$" value="666"></l-price>
  <l-price unit="￥" value="666~777" mode="text"></l-price>
```

## 是否为删除态价格

通过`deleted`属性设置价格是否为删除态。默认值为`false`。

通过`del-color`属性设置价格删除态的颜色。

![是否为删除态价格](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmlreHhiN2hqR1AvWVRrandXYnRQN1BPMzY1S0pkc2M4WXBCKy9jdnkyTCtBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码

```wxml
  <l-price 
    unit="￥"
    value="666"
    deleted="{{true}}"
    del-color="#3963bc"
  ></l-price>
```

## 价格小数保留位数及自动补零

通过`reserve-digit`属性设置价格小数保留的位数。默认保留`2`位小数。

通过`autofix`属性设置自动补零。例如设置`value`为`666.00`，默认显示为`666`，开启自动补零可正常显示。

### 示例代码

```wxml
  <l-price 
    unit="￥"
    value="666.00"
    autofix
    reserve-digit="2"
    unit-color="#3963bc"
    unit-size="28"
  ></l-price>
```

## 价格颜色及大小

通过`color`、`size`、`bold`属性设置价格整体的颜色、大小及字体粗细。

通过`unit-size`属性设置价格单位的大小。

通过`unit-color`属性设置价格单位的颜色。

通过`value-size`属性设置价格的大小。

通过`value-color`属性设置价格的颜色。

::: tip
`color`、`size`、`bold`可以被`unit-size`等属性覆盖。
:::

![价格颜色及大小](http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmlreHhiN2hqR1AvWFhjMzJFVnhtTFM5YmlRWmw3NTZoQmNreElnQmc0OGpBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 示例代码

```wxml
  <l-price 
    unit="￥"
    value="666"
    unit-color="#3963bc"
    unit-size="28"
  ></l-price>
```

## 价格属性（Price Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| unit | 设置价格单位 | String | --- | ￥ |
| value | 设置价格内容 | String | --- | --- |
| mode | 设置价格内容类型 | String | number/text | text |
| deleted | 价格是否为删除态 | Boolean | --- | false |
| reserve-digit | 设置价格小数保留位数 | Number | --- | 2 |
| color | 设置价格整体颜色 | String | --- | --- |
| size | 设置价格整体字体大小 | String | --- | --- |
| bold | 设置价格整体字体粗细  | String | --- | ’500‘ |
| autofix | 是否开启自动补零 | Boolean | --- | false |
| del-color | 删除态价格删除线颜色 | String | --- | --- |
| value-color | 设置价格数字颜色 | String | --- | --- |
| unit-color | 设置价格单位颜色 | String | --- | --- |
| value-size | 设置价格数字大小（单位rpx） | Number | --- | 28 |
| unit-size | 设置价格单位大小（单位rpx） | Number | --- | 28 |
| unit-bold | 设置价格单位字体粗细 | Number/String | --- | -- |
| value-bold | 设置价格字体粗细 | Number/String | --- | -- |

## 价格外部样式类 (Price ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖价格部分的外部样式类 | --- |
| l-unit-class | 覆盖价格单位的外部样式类 | --- |
| l-value-class | 覆盖价格数字部分的外部样式类 | --- |

<RightMenu />