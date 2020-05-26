---
title: 导航栏 NavigationBar（开发中）
---

# <H2Icon/> 导航栏 NavigationBar（开发中）

> 使用场景：需要胶囊按钮返回首页、导航栏自定义背景图片等场景

::: warning 注意
使用该组件必须同时满足以下两个条件：

- 开启微信开发者工具[**增强编译**](https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html)选项
- 设置页面配置项[**navigationStyle**](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)为**custom**

:::



## 核心概念

因 **NavigationBar** 元素较多，为了便于你理解文档，我会简单介绍一下导航栏各个部分的名称

首先，我们把导航栏分为 4 个部分：`StatusBar`、`TitleBar`、`CapsuleButton`、`NavigationBar`

- `StatusBar`——状态栏，手机顶部显示信号、电量等信息的区域
- `TitleBar`——标题栏，显示导航栏标题的区域
- `CapsuleButton`——胶囊按钮，标题栏左侧胶囊按钮
- `NavigationBar`——导航栏，等于 状态栏 + 标题栏

以上四个名词分别对应的部分如下图所示：
<img-wrapper>
<a data-fancybox href="/screenshots/navigation-bar/basic-concept.png">
<img  src="/screenshots/navigation-bar/basic-concept.png"/>
</a>
</img-wrapper>



## 基本用法

使用 **NavigationBar** 仅需传入`home-page（主页路径）`和`title（页面标题）`两个属性，然后将页面内容放置在`l-navigation-bar`标签之间即可。

```wxml
<!-- NavigationBar 基础用法 -->
<l-navigation-bar home-page="/pages/navigator/index/index" title="林间有风">
	<view>页面显示的内容</view>
</l-navigation-bar>
```



## 高级用法

NavigationBar 的亮点除了构造了一个胶囊按钮外，更加强大的是**支持图片背景**，这是微信小程序原生导航栏所无法实现的。

要支持图片背景，只需将`navigation-bar-color`设置为`transparent`即可，然后你便可以在`l-navigation-bar`标签内随意布局你的图片了

```wxml
<!-- NavigationBar 图片背景 -->
<l-navigation-bar 
  navigation-bar-color="transparent"
  capsule-button-color="white"
  title-color="white"
  home-page='/pages/navigator/index/index' 
  title="林间有风">
  
  <view class="container">
  	<!-- NavigationBar 背景图片 -->
    <image 
      style="height:{{navigationBarHeight}}px;" 
      class="navigation-bar-image" 
      src="https://img.juzibiji.top/20200523214628.png">
    </image>
    
    <!-- 以下部分放置页面内容 -->
    <view>这里是你的页面内容</view>
  </view>
</l-navigation-bar>
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
import navigationBarUtil from '/miniprogram_npm/lin-ui/navigation-bar/navigation-bar-util'

Page({
  data:{
    navigationBarHeight:navigationBarUtil.getNavigationBarHeight()
  }
})
```





## 导航栏高度

**NavigationBar** 的高度在不同的机型上是不一样的，内部使用了一个公式计算出了不同机型最合适的高度。如果你想在页面中获取这些高度，可以使用工具类`navigation-bar-util.js`，它有 4 个函数可以让你获取 NavigationBar 的布局信息,详见[工具类函数](#导航栏工具类（navigationbar-util-class）)。

```js
import navigationBarUtil from '/miniprogram_npm/lin-ui/navigation-bar/navigation-bar-util'

Page({
  /**
   * 获取 NavigationBar 高度
   */
  getNavigationBarHeight(){
      const navigationBarHeight = navigationBarUtil.getNavigationBarHeight()
      consoloe.log(`NavigationBar 的高度为${navigationBarHeight}px`)
  }  
})
```



## 胶囊按钮颜色

**NavigationBar** 提供的胶囊按钮与原生胶囊按钮样式相似度达到 99%，可通过`capsule-button-color`属性控制按钮颜色。

**导航栏右侧的原生胶囊按钮颜色和`StatusBar`文字颜色需通过页面配置项[`navigationBarTextStyle`](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)修改。**



## 导航栏属性（NavigationBar Arrtibutes）

> 下列属性以`color`结尾的，除可选值有特殊标注外，均可使用 **HEX/RGBA/CSS 颜色名** 作为值传入，表中不再单独说明。

| 参数                 | 说明                                              | 类型    | 可选值      | 默认值 | 版本号 |
| -------------------- | ------------------------------------------------- | ------- | ----------- | ------ | ------ |
| navigation-bar-color | `NavigationBar`背景色                             | String  | ---         | white  | ---    |
| status-bar-color     | `StatusBar`背景色                                 | String  | ---         | white  | ---    |
| title-bar-color      | `TitleBar`背景色                                  | String  | ---         | white  | ---    |
| title-color          | 标题颜色                                          | String  | ---         | black  | ---    |
| capsule-button-color | 左侧胶囊按钮颜色                                  | String  | white/black | white  | ---    |
| disable-back         | 禁用左侧按钮返回上一级页面                        | Boolean | ---  | false  | ---    |
| disable-home         | 禁用右侧按钮返回主页                              | Boolean | ---  | false  | ---    |
| hidden-capsule-button| 隐藏胶囊按钮                                    | Boolean | ---  | false  | ---    |
| home-page            | 主页面 url，点击右侧按钮时跳转                    | String  | ---         | ---    | ---    |
| title                | 导航栏标题                                        | String  | ---         | ---    | ---    |
| padding-top          | 页面是否设置顶部内边距为 NavigationBar 的高度      | Boolean | ---  | true   | ---    |

> 关于 padding-top 属性的说明：
 - 为 true 时：页面内容布局从导航栏下边缘开始，适用于导航栏有背景色时使用
 - 为 false 时，页面内容布局从屏幕顶部下边缘开始，适用于导航栏背景透明时使用


## 导航栏外部样式类（NavigationBar ExternalClasses）

| 外部样式类名  | 说明             | 备注 | 版本号 |
| ------------- | ---------------- | ---- | ------ |
| l-title-class | 覆盖标题文字样式 | ---  | ---    |

## 导航栏事件（NavigationBar Events）

| 事件名称               | 说明                                             | 返回值 | 备注 | 版本号 |
| ---------------------- | ------------------------------------------------ | ------ | ---- | ------ |
| bind:linlefttap        | 点击胶囊左侧按钮回调事件（在返回上一页之前触发） | ---    | ---  | ---    |
| bind:linleftlongpress  | 长按胶囊左侧按钮回调事件                         | ---    | ---  | ---    |
| bind:linrighttap       | 点击胶囊右侧按钮回调事件（在返回主页之前触发）   | ---    | ---  | ---    |
| bind:linrightlongpress | 长按胶囊右侧按钮回调事件                         | ---    | ---  | ---    |

## 导航栏插槽（NavigationBar Slot）

| Slot 名称 | 说明          | 备注 | 版本号 |
| --------- | ------------- | ---- | ------ |
| 默认 slot | 页面内容区域 | ---  | ---    |



## 导航栏工具类（NavigationBar Util Class）

| 函数名称               | 返回值                          | 返回类型 | 备注                                                         |
| ---------------------- | ------------------------------- | -------- | ------------------------------------------------------------ |
| getNavigationBarHeight | NavigationBar 的高度（单位 px） | Number   | ---                                                          |
| getStatusBarHeight     | StatusBar 的高度（单位 px）     | Number   | ---                                                          |
| getTitleBarHeight      | TitleBar 的高度（单位 px）      | Number   | ---                                                          |
| getCapsuleButtonInfo   | CapsuleButton 位置信息          | Object   | [Object 的具体属性和微信 API 一致](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html) |

<RightMenu/>
