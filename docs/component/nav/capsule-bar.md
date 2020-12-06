---
title: 胶囊栏 CapsuleBar
---

# <H2Icon/> 胶囊栏 CapsuleBar

> 使用场景：需要胶囊按钮返回首页、导航栏自定义背景图片等场景

::: warning 注意
使用该组件必须在页面 json 文件中设置[**navigationStyle**](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)为**custom**
:::

## 介绍

`CapsuleBar`称为胶囊栏，其本质是由一个自定义导航栏和胶囊构成。CapsuleBar 的胶囊样式和微信原生样式高度一致并且位置对称，默认提供返回上一页和返回首页的功能。

## 核心概念

因 **CapsuleBar** 元素较多，为了便于你理解文档，我会简单介绍一下胶囊栏各个部分的名称

首先，我们把胶囊栏分为 3 个部分：`StatusBar`、`TitleBar`、`CapsuleButton`

- `StatusBar`—— 状态栏，手机顶部显示信号、电量等信息的区域
- `TitleBar`—— 标题栏，显示标题文字、胶囊按钮的区域
- `Capsule`—— 胶囊，标题栏左侧胶囊

以上三个名词分别对应的部分如下图所示：

:::img
![height=100](/screenshots/navigation-bar/1.png)
:::

## 基本用法

使用 **CapsuleBar** 仅需传入`home-page（主页路径）`和`title（页面标题）`两个属性，并将页面其他标签放置于`l-capsule-bar`标签内部即可。

```wxml
<!-- CapsuleBar 基础用法 -->
<l-capsule-bar home-page="/pages/navigator/index/index" title="林间有风">
	<view>页面内容</view>
</l-capsule-bar>
```

## 胶囊栏高度

实现自定义导航栏的一大难点在于微信小程序的导航栏高度是随机型不同而动态变化的，但却没有 api 可以获取导航栏的高度，所以 Lin UI 提供了一个工具类，用于获取导航栏的高度。你可以使用该工具类去获取导航栏的高度，以实现更多不同种类的玩法。

`CapsuleBar` 的高度便是通过该工具类获取到的。

```js
import deviceUtil from "/miniprogram_npm/lin-ui/utils/device-util"

Page({
  /**
   * 获取 CapsuleBar 高度
   */
  getNavigationBarHeight() {
    const capsuleBarHeight = deviceUtil.getNavigationBarHeight()
    console.log(`CapsuleBar 的高度为${capsuleBarHeight}rpx`)
  },
})
```

## 高级用法

CapsuleBar 的亮点除了构造了一个胶囊外，更加强大的是**支持图片背景**，这是微信小程序原生导航栏所无法实现的。

要支持图片背景，只需将`navigation-bar-color`设置为`transparent`即可，然后你便可以在`l-capsule-bar`标签内随意布局你的图片了

```wxml
<!-- CapsuleBar 图片背景 -->
<l-capsule-bar
  navigation-bar-color="transparent"
  capsule-button-color="white"
  title-color="white"
  home-page='/pages/navigator/index/index'
  title="林间有风">

  <view class="container">
  	<!-- CapsuleBar 背景图片 -->
    <image
      style="height:{{CapsuleBarHeight}}px;"
      class="navigation-bar-image"
      src="https://img.juzibiji.top/20200523214628.png">
    </image>

    <!-- 以下部分放置页面内容 -->
    <view>这里是你的页面内容</view>
  </view>
</l-capsule-bar>
```

```wxss
.container{
  width:100%;
}

.navigation-bar-image{
  width:100%;
  position:fixed;
  top:0;
  left:0;
}
```

```js
import deviceUtil from "/miniprogram_npm/lin-ui/utils/device-util"

Page({
  data: {
    capsuleBarHeight: deviceUtil.getNavigationBarHeight(),
  },
})
```

## 胶囊颜色

**CapsuleBar** 提供的胶囊与原生胶囊样式相似度达到 99%，可通过`capsule-color`属性控制胶囊颜色。

**胶囊栏右侧的原生胶囊颜色和`StatusBar`文字颜色需在页面 json 文件中通过设置[`navigationBarTextStyle`](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)来修改。**

## 胶囊栏属性（CapsuleBar Attributes）

> 下列属性以`color`结尾的，除可选值有特殊标注外，均可使用 **HEX/RGBA/CSS 颜色名** 作为值传入，表中不再单独说明。

| 参数             | 说明                                               | 类型    | 可选值      | 默认值 | 版本号 |
| ---------------- | -------------------------------------------------- | ------- | ----------- | ------ | ------ |
| bg-color         | `CapsuleBar`背景色                                 | String  | ---         | white  | 0.8.3  |
| status-bar-color | `StatusBar`背景色                                  | String  | ---         | white  | 0.8.3  |
| title-bar-color  | `TitleBar`背景色                                   | String  | ---         | white  | 0.8.3  |
| title-color      | 标题颜色                                           | String  | ---         | black  | 0.8.3  |
| capsule-color    | 左侧胶囊按钮颜色                                   | String  | white/black | white  | 0.8.3  |
| disable-back     | 禁用左侧按钮返回上一级页面                         | Boolean | ---         | false  | 0.8.3  |
| disable-home     | 禁用右侧按钮返回主页                               | Boolean | ---         | false  | 0.8.3  |
| hidden-capsule   | 隐藏左侧胶囊按钮，右侧胶囊按钮为原生组件，无法隐藏 | Boolean | ---         | false  | 0.8.3  |
| home-page        | 主页面 url，点击右侧按钮时跳转                     | String  | ---         | ---    | 0.8.3  |
| title            | 胶囊栏标题                                         | String  | ---         | ---    | 0.8.3  |
| has-padding      | 是否设置页面顶部内边距为 CapsuleBar 的高度         | Boolean | ---         | true   | 0.8.3  |
| hidden-title     | 隐藏标题                                           | Boolean | ---         | false  | 0.8.12 |

> 关于 has-padding 属性的说明：

- 为 true 时：页面内容布局从胶囊栏下边缘开始，适用于胶囊栏有背景色时使用
- 为 false 时，页面内容布局从屏幕顶部下边缘开始，适用于胶囊栏背景透明时使用

## 胶囊栏外部样式类（CapsuleBar ExternalClasses）

| 外部样式类名  | 说明             | 备注 | 版本号 |
| ------------- | ---------------- | ---- | ------ |
| l-title-class | 覆盖标题文字样式 | ---  | 0.8.3  |

## 胶囊栏事件（CapsuleBar Events）

| 事件名称               | 说明                                             | 返回值 | 备注 | 版本号 |
| ---------------------- | ------------------------------------------------ | ------ | ---- | ------ |
| bind:linlefttap        | 点击胶囊左侧按钮回调事件（在返回上一页之前触发） | ---    | ---  | 0.8.3  |
| bind:linleftlongpress  | 长按胶囊左侧按钮回调事件                         | ---    | ---  | 0.8.3  |
| bind:linrighttap       | 点击胶囊右侧按钮回调事件（在返回主页之前触发）   | ---    | ---  | 0.8.3  |
| bind:linrightlongpress | 长按胶囊右侧按钮回调事件                         | ---    | ---  | 0.8.3  |

## 胶囊栏插槽（CapsuleBar Slot）

| Slot 名称 | 说明                                                         | 备注 | 版本号 |
| --------- | ------------------------------------------------------------ | ---- | ------ |
| 默认 slot | 页面内容区域                                                 | ---  | 0.8.3  |
| title     | 标题栏区域，建议搭配 hidden-capsule 和 hidden-title 属性使用 | ---  | 0.8.12 |

<RightMenu/>
