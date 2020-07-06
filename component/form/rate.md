---
title: 评分 Rate
---

# <H2Icon /> 评分 Rate

## 基本用法

评分组件默认元素个数为5个，元素大小为：`36rpx`;

支持图片和图标两种资源格式，默认为图标资源

### 示例代码

<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/VVpkaDA0b3BNODZXRC9WQlpUWEk2ZVBhdUNiTFBuNGNMOTgvNEJ1UFdWWVdxUW5YREwxU0pnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
<l-rate/>
```

## 设置默认选中数

通过`score`属性设置默认选中数，支持小数点

### 示例代码

<img-wrapper>
 <img src="http://imglf5.nosdn0.126.net/img/VVpkaDA0b3BNODZXRC9WQlpUWEk2ZVZmWFRBQlFZN0o3WFlHcEhtcy83a3RWVFJ6OTNtUHpBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
  <img src="http://imglf5.nosdn0.126.net/img/VVpkaDA0b3BNODZXRC9WQlpUWEk2U0hMQWx6aWlXWnhJNmFncEkrVFBpQThvZmlyeGNyc3lnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
    <l-rate score="3" />
    <l-rate score="3.6" size="56" />
    <l-rate score="3.3" size="56" />
    <l-rate score="3.8" size="56" />
```

## 自定义组件样式

### 自定义大小

通过 `size` 属性设置组件元素的大小，传入数值单位为：`rpx`

#### 示例代码

<img-wrapper>
 <img src="http://imglf3.nosdn0.126.net/img/VVpkaDA0b3BNODZXRC9WQlpUWEk2VmZWWDc4bUlzVGVCWG9zL2F1QnpaaHJJM3RPNkprU0RRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
    <l-rate size="56" />
```

### 自定义颜色

通过 `active-color` 属性设置选中时元素颜色；
通过 `inActive-color` 属性设置未选中时元素颜色；

#### 示例代码

<img-wrapper>
 <img src="http://imglf5.nosdn0.126.net/img/VVpkaDA0b3BNODZXRC9WQlpUWEk2ZmNQVFZLaGdnRitxdzNmbmwydEcrSHRFU0ZUdHdVc2dnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
    <l-rate active-color="#FFDD55" inActive-color="#FFF5CE" />
```

### 自定义图标

自定义图标分两种情况：

1 使用 `Lin UI` 提供的 `icon` 组件内的图标;

2 使用自定义图标库扩展的图标；

第一种通过 `name`属性匹配对应的icon即可；
第二种场景使用步骤如下：
- 将自定义图标库写入`wxss`中，通过`@font-face`定义字体， `font-family`必须为：`iconfont`
- 设置带有`content`属性 `class` 为 `l-icon-name`格式，`name`值与在`rate`组件上设置的`name`属性值保持一致；
#### 示例代码

<img-wrapper>
 <img src="http://imglf3.nosdn0.126.net/img/VVpkaDA0b3BNODZXRC9WQlpUWEk2Y2Z0aWdNZVlPcklHTDNrcjVucVN5dkYzME5ZMmNucXJnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

```wxss
@font-face {font-family: "iconfont";
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATAAAsAAAAACSAAAARyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqFRIRVATYCJAMUCwwABCAFhG0HTBvdB1GULk6Y7OMwbvhKKLGYXKG1QTHZ/P9E8Px+3+ZceSuuUZt43LRpowONRIgkiAlKstDEQ/vD/7Z8yCXWZXAZsTWDB8cV9qJ0a71Fhbj4iyxdRfz92KzodRpRH97oxT7m2iBxhEjSkAhJZeLNQmFteSs9boGdQx1M0OMEOs2KhpyVVjcDO4W0KRCvWIYAdj6zkkIK7bom5mQR70HVnt4KzgHemX8fvySGHUnNpJ3XDyUUyP+W87wQ1f7XutUxANXnxO0cGduAQryIdd9B7fQ2VOen2MoBoF12JurK5j0v/N9iXIF0LOp2/odHSLJCNCR1NxGPVGXOkMon+JbHJ/GtgE/mW6F0p6grre9EP+ATADELxGV1ne0rKIM2SOocdsSw7nEvDw+B7RvJxgNe6AJdFGMyREAjECzeN4oSSFEaiUQGYYjOJOwyGAGhN+eadW3MQYvhuvRTtdeyqX3XWi8bmhiTRWe+YtZfC6cuacns+Xq31oU69zwSQ4WGJa5g/uIBIj2vM7mLFxi1mwdJdlzxQ5dFtSHrLGXC49cDQIvRU7D8kkaHJK1R2GcwIbl1IRJLD4Ri6/d5AK0LoY+kD5gtlirL9RZXdzPYcvr69XYDmwfrr5HzegT8F5vNmWeu1Ye3ehWRvBkiQ+tbeV2Ue/LQvL5LraKL/lRpUEJSQkkQ5X9R1OqWlF4afLHvYnEwYMHRrdaP0kSJkyRRCprTU6iwqfXNdxW2lmaGDJdRamojSNksuqVlKhl2Uvtm4x87cM6vshnJfKVf87e709xyccO/jUVLfJYYjUu9lyaBdi4zJVP0SPJR7JDH/18OS4N8Ax+4PAj0DVq+2Go1jx3AnLvksVhN9ZyDa6qrvWK7ZUHCAxhfHwTAB0mSxEp9rwOaUUsk2SL60MFDtChbPB20MN+kwlI+WC4dWUAOro7kPQvyHR1BaArdxOACUjoy9hZ8YWnS3ctx9bHxFcJ+3k3vC0tkxXsWstBfpBk3xtlhSd/etuRtud+XQWAGtpc3JqclnwUjALQO5z40j9Mn8kG0hPBs9ks+nt2umlXuFn79GyLN/mon3GMDXzdaNnCodbiAcujQo9zoGkE5u8pXJllqeberkre3utrCGxI6deLayDPoXj3akdxJQrsP3SBpMwNZu2VsIW5D1WUHGu0OodOWsvNdhiigonRg02SA0G87JL0+QtbvPLYQ70I16i00+gOFTjfhfMsuq8FiRQpIqCCFDxuJsyTXSys2FWbVNkJG3U0ovDKT0goVSjaGJ8TGB3NlsBcq6tij1DCJKhWN0wquBy+Fp8Hubg6XKbhOSKpiO1QqWWZcHB33RbEk1wMwpxQgggpEwQ0zEo5F4vSi9f4qWOj3G0EMtW4ERUrHj2ArSEGJnR6XIFZ8DmyZujdXx77MV9JgJFJRoXkdTYHTA1eKTqhbTnNwsvhlnSCSSqyOEkmZTHHUi86rjm1f27ONJ6CT9NYaKXKUqNFoXndw6pHQZiTBydhe25FcL+O02oxgO9RELwAAAA==') format('woff2'),
  url('iconfont.woff?t=1551939237196') format('woff'),
  url('iconfont.ttf?t=1551939237196') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1551939237196#iconfont') format('svg'); /* iOS 4.1- */
}

.l-icon-shouye:before {
  content: "\e73d";
}

```

```wxml
    <l-rate score="4" name="like" />
    <l-rate score="4" name="shouye" active-color="#F4516C"  
            inActive-color="rgba(244,81,108,0.1)" />
    
```


### 自定义图片

使用自定义图片必须同时设置**选中时图片资源**和**未选中是的图片资源**，图片资源必须是绝对路径。

通过`active-image`设置选中时图片资源;

通过`inActive-image`设置选中时图片资源;

默认图片宽高为`80rpx`,可通过外部样式类 `l-image-class`自定义样式。

<img-wrapper>
 <img src="http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODZ6RmJSRGR2R1I0Z2J3amNmY1F4TzNDNEtlbHVYUVg2Yy9iN1FHWW1KaUxnPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>


```wxml
    <l-rate score="4" 
        active-image="/pages/components/form/images/smile-active.png"
        inActive-image="/pages/components/form/images/smile-inactive.png" />
   
```


## 设置评分元素个数

通过 `count` 属性设置评分组件内元素个数，默认是5个。

### 示例代码

<img-wrapper>
 <img src="http://imglf6.nosdn0.126.net/img/VVpkaDA0b3BNODZXRC9WQlpUWEk2Y0NrM3hZTlFFaWhXN1Q0QndGMGdUd1BGYllSTXJBRnJnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
    <l-rate score="3" count="10" bind:linChange="changeScore" />
```
## 禁用

通过 `disabled`属性值为`true`禁用评分组件，此时点击事件没有任何反应。

## 评分组件属性 （Rate Attributes）

| 参数       | 说明                         | 类型    | 可选值 | 默认值   |
| :--------- | :--------------------------- | :------ | :----- | :------- |
| count   | 评分组件元素个数      | Number  | -      | 5        |
| score    | 默认选中元素个数        | Number  | -   | 0      |
| size     | 图标元素大小        |  String  | -      | 36     |
| active-color| 图标元素选中时颜色     | String  | -      | `#FF5252`   |
| inActive-color| 图标元素未选中时颜色  | String | -      | `#FFE5E5`  |
| name  | 图标元素类型                 | String  | - | - |
| active-image | 未选中状态下的图片资源 | String | 图片路径为绝对路径  | - |
| inActive-image | 未选中状态下的图片资源 | String | 图片路径为绝对路径 | -  |
| disabled | 禁用评分组件 | Boolean | `true`、`false` | `false`  |

## 评分外部样式类（Rate ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖评分组件的外部样式类 | | 
| l-image-class | 自定义图片样式 | 取代l-class-image|
| l-icon-class  | 自定义图标样式 | 取代l-class-icon|

## 已经弃用的外部样式类
以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。

| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class-image | 自定义图片样式 | 请使用l-image-class替代 |
| l-class-icon | 自定义图标样式 | 请使用l-icon-class替代 |  

## 评分组件事件 (Rate Events）

| 事件名称        | 说明                 | 返回值             | 备注 |
| :-------------- | :------------------- | :----------------- | :--- |
| bind:linchange  | 单击选中评分时触发      | 当前选择的个数 score | -    |

<RightMenu />