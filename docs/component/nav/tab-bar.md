---
title: 底部导航栏 Tabbar
---

# <H2Icon /> 底部导航栏 Tabbar

> 通过 tabBar 配置项可以指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

自定义 tabBar 可以让开发者更加灵活地设置 tabBar 样式，以满足更多个性化的场景。<br/>
本组件提供封装好的接口方便使用，同时满足了一些微信原生`tabBar`完成不了的特殊样式。
<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEhEQnl2anJINXM0c254S3JRbEJkWGtnSzdtdFRscFhlaWJ4Z1VDTzdVSExnPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>

::: tip 注意事项
 * 因为微信当前的自定义tabbar模式，存在一些体验和开发上的不友好，所以这种用法，暂时不支持。等待微信完善后，会考虑加上。
:::

## 使用方法

常规的使用方法与Lin UI其他的组件一样，这里不做赘述，但是需要耐心阅读本文，参照下面的`底部菜单栏属性`列表去配置。


## 基本案例
自定义tabbar的参数设置和微信原生的tabbar参数基本一致，可以参考文末的**底部菜单栏属性**部分来学习。当我们在list里写入了对应页面的参数后，就能生成的tabbar了。
<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEVib3phMVN5SHlERDRWS01jbzhBcnhmQjIvTGUwaDQ0cmlQRm9nZ0dxZFB3PT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>


## 设置尺寸和背景色
lin-ui的自定义tabbar可以通过`backgroundColor`和 `iconSize`设置背景色和icon的大小。
<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEVib3phMVN5SHlERXpMQi81cGhyelpwOUgxYW5UaVZpQVFLMHBFTlQ5ckxBPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>

## 只有icon的TabBar
TabBar的当前tab项可以只设置图片的路径`iconPath`和 `iconSize`，这样我们可以做到更定制化的效果。
<img-wrapper>
 <img src="http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEVib3phMVN5SHlET1p5UDkzZWdxQWhwRWRlOTBPeXovMVB4TmZic0Q2cThBPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg">
</img-wrapper>

## 顶部带半圆的TabBar
lin-ui的自定义tabbar的`list`可以生成不同的tab项，每一项里都有对应的属性来设置更具特色的tab项，当设置  `style`为`circle`时。当前tab项的顶部出现半圆。
<img-wrapper>
 <img src="http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEVib3phMVN5SHlESThPYkJlVnRiNE83Tnd1NTk0S3VCUzZPVFk0eHJaOXpRPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>

## 带背景图片的TabBar
当一些重要节日到来，需要我们在tabbar上面做一些更绚丽的效果时，我们可以通过`backgroundImg`来设置自定义TabBar的背景图片，更加充满节日气息。
:::tip 注意事项
* 1，`backgroundImg`的权重大于`backgroundColor`，当设置背景图片后，背景色便不生效了。
* 2，当我们使用背景图片时，最好不要再设置单个tab的顶部为半圆。
:::
<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEVib3phMVN5SHlER2w4WW1xVGhJQ2FOTXZYZjI4WSt0RUo5aDVJSUFqM1VnPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>

## 底部菜单栏属性（TabBar Attributes）
| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 控制tabBar组件的显示和隐藏 | Boolean | true/false | true | 
| isSwitchTab | 控制tabBar跳转使用的方法是否是wx.switchTab,false代表使用wx.navigate跳转 | Boolean | true/false | true | 
| selected | tabBar组件的选中项的下标 | Number |  | null | 
| color | tab 上的文字默认颜色，仅支持十六进制颜色| String |   | #7A7E83 | 
| fontSize | tab 上的文字的大小| Number |   | 24 | 
| selectedColor | tab 上的文字选中时的颜色，仅支持十六进制颜色 | String |  |  主题色  | 
| backgroundColor | tab 的背景色，仅支持十六进制颜色 | String |   |  #fff | 
| backgroundImg | tab 的背景图片，仅支持网络图片和base64 | String |   |   | 
| list   | tab 的列表，详见 list 属性说明，最少2个、最多5个 tab	 | Array | |  |

## 底部菜单栏事件 (TabBar Events）
| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:lintap | 点击切换的时候触发            | detail：当前下标 | -    |

## list属性（List Attributes）
| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| pagePath | 页面路径 | String |  | null | 
| text | tab 上按钮文字 | String |   | | 
| iconSize | 图片尺寸，默认是64*64，单位是rpx | String |  | 64   | 
| iconPath | 图片路径，建议尺寸为 81px * 81px | String |  |    | 
| selectedIconPath | 选中时的图片路径，建议尺寸为 81px * 81px | String |   |  | 
| style | 当设置成‘circle’时,显示当前tabBar的border-bottom 为半圆 | String |  |  | 
| redDot | 显示 tabBar 某一项的右上角的红点 | Boolean |  true/false | false | 
| badge | 为 tabBar 某一项的右上角添加文本 | String |   |  | 

<!-- ## 底部菜单栏方法 (TabBar Methods）

| 方法名称   | 说明     | 
|:----|:----|
| show() | 控制整个tabBar的显示 |
| hide() | 控制整个tabBar的隐藏 |
| showItem(idx) | 切换tabBar的选中项，参数为tabBar下标 |
| showRedDot(idx) | 显示 tabBar 某一项的右上角的红点，参数为tabBar的下标  |
| hideRedDot(idx) | 显示 tabBar 某一项的右上角的红点，参数为tabBar的下标  |
| setTabBarBadge(idx,text) | 为 tabBar 某一项的右上角添加文本  |
| removeTabBarBadge(idx) | 移除 tabBar 某一项的右上角添加文本  | -->

<RightMenu />

  [1]: https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html
  [2]: http://doc.mini.7yue.pro/start/component.html