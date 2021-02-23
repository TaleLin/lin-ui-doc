---
title: 开放函数
---

<RightMenu />

# <H2Icon /> 开放函数

## 诞生背景

Lin UI 是基于微信小程序自定义组件的方式实现的一套组件库，但由于微信官方的限制，**微信小程序与自定义组件的常见通信方式是通过 wxml 属性传值进行**，这在某些场景下十分不便（*例如需要在 JavaScript 代码中动态调起 Toast 组件的显示*），所以 Lin UI 制定了一套**开放函数**规范，以特定方式暴露 Lin UI 组件的内部方法，方便你在某些场景下更加灵活的对 Lin UI 组件进行控制。

## 函数规范

### 命名规范
Lin UI 组件内部所有的**开放函数**均以 `linXXX` 的格式进行命名。以 Toast 组件为例，显示 Toast 的函数命名为 `linShow`，隐藏 Toast 的函数命名为 `linHide`。

### 文档规范
每个组件可用的开放函数均会在组件文档页面进行详细说明，包括**函数列表、函数作用以及调用参数等**，你可以在组件对应文档中进行查阅。

## 使用方式
**开放函数**的使用方式非常简单，主要分为**获取组件实例**和**调用函数**两步。

我们同样以 Toast 组件为例，首先当然还是需要引入 Toast 组件，**但在 wxml 中声明 `l-toast` 节点时注意要加上一个 id 属性，供后续使用**，页面 json 和 wxml 代码如下所示：
```json
// index.json
{
  "usingComponents": {
    "l-toast": "/miniprogram_npm/lin-ui/toast/index"
  }
}
```

```wxml
<!-- index.wxml -->

<!-- 注意 id 属性 -->
<l-toast id="my-toast" />
```
准备工作完成，我们开始使用开放函数。微信小程序提供了 [`this.selectComponent`](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html#获取组件实例) api 让我们可以获取到组件实例：
```js
// index.js

// 第一步：使用 id 选择器语法获取 toast 实例
const toast = this.selectComponent('#my-toast');

// 第二步：调用开放函数

// 显示 Toast
toast.linShow({
  title: '温馨提示'
});
// 隐藏 Toast
toast.linHide();
```
这样你就可以在代码中非常灵活的控制 Toast 的显示与隐藏了。如果你的页面有多个 Toast，你可以为他们设置不同的 `id`，然后在代码中分别获取多个实例便可实现对 Toast 的细粒度控制。

这里我们只讨论了调用开放函数的方法，其实当你拿到 Lin UI 组件实例之后，可以做的事情就很多了，比如调用其他非开放函数（不推荐），调用 `setData` 设置组件内部数据等等，但要记住一点，**这是一种比较 Hack 的方法，如果使用不当，容易造成组件异常，所以请尽量只使用开放函数，确保你的程序不会出现意料之外的错误。**
