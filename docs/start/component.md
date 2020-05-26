---
title: 组件上手
---

# <H2Icon /> 组件上手

关于微信小程序组件的相关知识，本文不会做详细的描述，这些知识点需要你去参考微信小程序的[自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)来获取，本文的重点是保证每一个使用者都能正确快速的在自己的项目里使用Lin-UI。

## 组件的引入

引入Lin-UI组件和引入自己写的组件一样，首先需要在 `json` 文件中进行自定义组件声明，也就是在`usingComponents` 下以键值对的形式去注册，`l-icon` 是组件的名称，`path/to/icon/index` 是组件的路径。
::: tip 注意事项
需要注意的是，由于引入lin-ui的方式不同，（npm引入/ 复制源码的dist文件夹），所以这里的`path/to` 只是用来表示路径这个含义，并不能直接复制进项目里。需要你根据实际情况来配置正确的路径。
:::
```json
{
  "usingComponents": {
    "l-icon": "path/to/icon/index"
  }
}
```
## 组件的使用

当组件的声明已经完成，那么我们在页面的 `wxml` 中就可以像使用基础组件一样使用自定义组件。
<br/>同时每个组件都有相对应的`props`（属性）, 例如: `l-icon`标签上的`name`属性，就是根据传递不同的name值，来显示不同的`icon`

::: tip 注意事项
因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。
:::

```wxml
<l-icon name="add" />
```

## 组件的事件

大部分的组件都有对应的事件，详细的内容请参阅每个组件的文档，以及统一的[事件说明](http://doc.mini.7yue.pro/start/event.html)。


## 全局自定义组件

我们都知道微信小程序的组件使用需要在页面的json文件里注册，那么这个时候会有一个问题：一些常用的基础组件，如`toast`，`diolag`等等，每次在一个页面使用都要在`json`中去声明一次，实在过于繁琐，或则说这一点也不`前端`。
<br/>
所以，对于这类跨页面，使用频率高的组件，我们可以在`app.json`里一次性声明，也就是创建`全局自定义组件`，声明的方法和页面声明一样。


```json
{
  "pages": ["pages/index/index", "pages/logs/index"],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "日志"
      }
    ]
  },
  "usingComponents": {
    "l-toast": "path/to/toast/index",
    "l-message": "path/to/message/index"
  }
}
```

这样，我们使用Lin-UI开发的效率又会大大提升啦！

`官方提示`:组件开发体验爽，一直使用一直爽！

<RightMenu />