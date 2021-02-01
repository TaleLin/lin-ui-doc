---
title: 加载中 Loading
---

# <H2Icon />  加载中 Loading

> 当区域正在获取数据时使用，提高用户体验。

该组件支持<a href="/start/wx.html">wx.lin</a>用法。

## 加载类型

可通过加载组件的`type`属性设置加载动画类型。并通过 设置`show` 为 `true` 或者 `false` 来控制它的显示与隐藏。

`type`共有五种状态，可选值为`flash`、`flip`、`change`、`circle`、`rotate`，可根据使用场景选择合适的类型，默认为`rotate`。

### 示例代码

```wxml
<l-loading show="{{true}}" type="flash"></l-loading>
<l-loading show="{{true}}" type="flip"></l-loading>
<l-loading show="{{true}}" type="change"></l-loading>
<l-loading show="{{true}}" type="circle"></l-loading>
<l-loading show="{{true}}" type="rotate"></l-loading>
```

:::img
![height=150](/screenshots/loading/1.png)
:::

## 加载动画大小

设置组件`size`属性可更改加载动画的大小。

`size`的可选值为`mini`、`medium`、`large`，默认为`medium`。

### 示例代码
```wxml
<l-loading show="{{true}}" size="mini"></l-loading>
<l-loading show="{{true}}" size="medium"></l-loading>
<l-loading show="{{true}}" size="large"></l-loading>
```

:::img
![height=150](/screenshots/loading/2.png)
:::


## 自定义加载动画颜色

设置组件的`color`属性更改加载动画的颜色。默认颜色与主题色(theme_color)一致。

### 示例代码

```wxml
<l-loading show="{{true}}" color="#666"></l-loading>
```

:::img
![height=150](/screenshots/loading/3.png)
:::


## 自定义加载动画

为适应不同的场景和需求，组件的内容部分（动画）可以通过自定义的方式来实现。

设置组件的`custom`属性为 `true` ，自定义内容在slot插槽中写入即可。也支持传入一个包含文字+image的子节点。

::: tip 注意事项
 * loading组件只接收一个slot作为子节点，但你可以在这个子节点内添加更多的标签和内容
:::


### 示例代码
```wxml
<l-loading show="{{true}}" custom="{{true}}">
  <image src="/image/view/spin.gif"></image>
</l-loading>
```

:::img
![height=150](/screenshots/loading/4.png)
:::

## 全屏状态下的Loading

在开发工作的中，我们会遇到一种常见的场景：当跳转到一个新页面时，开始加载数据，全屏显示loading，当数据加载完成时，隐藏loading。

针对这种场景，我们可以通过设置 `full-screen` 属性为 `true` ，并配合外部样式类 `l-container-class` 来完成,也可以使用`bg-color`、`z-index`、`opacity`属性来设置全屏状态下的背景颜色、层级和背景透明度。

::: tip 注意事项
 * 全屏模式下可以设置 `type` 值来指定不同的加载动画，同样也可以使用自定义的 `slot`，
 * `l-container-class` 无法改变`loading`背景的 `position`、`height`、`width` 属性。
:::

### 示例代码
```wxml
<l-loading
  l-container-class="l-container"
  bg-color="#f3f3f3"
  z-index="776"
  opacity="1"
  show="{{show}}"
  full-screen="{{true}}"
  custom="{{true}}"
>
  <image class="loading-img" src="/image/static/loading.gif"></image>
</l-loading>
```

:::img
![height=200](/screenshots/loading/5.jpg)
:::

## 固定Loading区域
### 示例代码
```wxml
<l-loading
  l-container-class="l-container"
  bg-color="#f3f3f3"
  z-index="776"
  opacity="1"
  show="{{show}}"
  full-screen="{{false}}"
  custom="{{true}}"
>
  <image class="loading-img" src="/image/static/loading.gif"></image>
  <view slot="content" style="height: 600rpx; width:100%"></view>
</l-loading>
```

## 加载中属性

| 参数   | 说明   | 类型   | 可选值   | 默认值    |
|:----|:----|:----|:----|:----|
| show   | 是否显示加载动画   | Boolean   | ----   | false   |
| type   | 加载动画类型   | String   | flash/flip/change/rotate/circle   | rotate   |
| size   | 加载动画大小   | String   | mini/medium/large   | medium   |
| color  | 加载动画颜色    | String   | -----   | ----   |  主题色 |
| z-index |  加载动画层级  | String   | -----   | 776   |
| custom   |  加载动画（内容部分）是否自定义   | Boolean   | -----   | false   |
| full-screen  |  加载动画（内容部分）是否全屏  | Boolean   | -----   | false   |
| bg-color  | 加载动画背景颜色（全屏模式）    | String   | -----   | ----   |  #fff |
| opacity |  加载动画背景透明度 | String   | -----   | 1  |

## 加载中插槽

| 插槽名称    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| -  | 自定义loading图标  | ---   |
| content  | 非全屏模式下主体内容区域  | loading组件将包裹在content插槽外部   |

## 加载中外部样式类

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 覆盖动画区域（内容部分）自定义外部样式类   |  ---   |
| l-container-class   | 覆盖背景部分的自定义外部样式类   |  ---   |

<RightMenu />
