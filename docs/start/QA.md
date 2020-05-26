---
title: 常见问题
---

# <H2Icon /> 常见问题汇总（完善中……）

## 在跨端框架中使用Lin-UI
lin-ui支持在uni-app、mpvue、Taro等跨端框架中使用。

::: tip 注意
当在跨端框架中引用lin-ui后，将只能编译为微信小程序
:::

- [uni-app 引入教程](https://uniapp.dcloud.io/frame?id=小程序组件支持)
- [Taro 引入教程](https://taro-docs.jd.com/taro/docs/mini-third-party.html)
- [mpvue 引入（参考mpvue引入echarts-for-weixin组件库）](https://github.com/mpvue/examples/tree/master/echarts)

<RightMenu />

## 组件List常见问题

1 、在使用List组件时，有时我们需要去掉List默认的右侧箭头，通过阅读文档找到配置项`is-link`，需要注意的是`is-link`的数据类型`Boolean`。通常会有错误写法如下:
``` wxml
<l-list icon="notification" title="铃声" is-link="false"/>
```
正确写法:
``` wxml
<l-list icon="notification" title="铃声" is-link="{{false}}"/>
```
原因:在小程序中如果写成`is-link="false"`，此时`false`数据类型并不是`Boolean`，而是`String`，这也是小程序中一个比较常见的问题。更加值得注意的是如果写成下面这种写法也是可以达到预期的效果。
``` wxml
<l-list icon="notification" title="铃声" is-link="{{xxx}}"/>
```
or
``` wxml
<l-list icon="notification" title="铃声" is-link="{{0}}"/>
```
但是如果`is-link="{{1}}"`等价于`is-link="{{true}}"`
``` wxml
<l-list icon="notification" title="铃声" is-link="{{1}}"/>
```

## 关于在小程序中将less编译成wxss

在开发小程序的过程中，或许很多人还在用`wxss`写小程序的层叠样式表，或许曾经尝试过将`less`编译成`wxss`。但是每次写完`less`都需要手动编译，效率真的是太低了，用`wxss`写样式，也不够优雅，那么我们就需要一个技术去同步将`less`编译成`wxss`。

这里介绍下[wxss-cli](https://github.com/echo008/wxss-cli)，这是一个可以实时将`less`变成`wxss`的插件。

使用方法:
1 、首先全局安装[wxss-cli](https://github.com/echo008/wxss-cli)
``` bash
    npm install -g wxss-cli
```
2 、查看是否安装完毕
``` bash
    wxss -V
```
3 、使用[wxss-cli](https://github.com/echo008/wxss-cli)
``` bash
    wxss ./minicode
```
::: tip 友情提醒
minicode 为小程序开发根目录
:::

4 、运行[wxss-cli](https://github.com/echo008/wxss-cli)，如果出现类似以下提示，则[wxss-cli](https://github.com/echo008/wxss-cli)运行成功！
``` bash
wxss is running...
Add pages/books/index.less success!
Add pages/index/index.less success!
```

## 关于`自定义iconfont`与lin-ui内置的`iconfont`相冲突的问题
在实际项目，`lin-ui`现在所提供的`icon`可能还不能满足需求，我们往往会通过`iconfont`为项目添加自定义的`icon`。在添加`icon`的时候，往往会出现`自定义的iconfont`库中的`content`属性与`lin-ui`内置`iconfont`的`content`的值一样。

解决思路有以下两种:

1 、在自定义的项目中修改`iconfont`的`content`属性。但是，如果自定义图标过多，那么造成冲突的概率就会大大提升，不建议这样解决冲突。

2 、在项目中添加`iconfont`时，把`font-family`改成自定义的值，只要不是`iconfont`就可以。
``` wxml
<l-icon name="my-icon" l-class="icon-self"/>
```
``` wxss
.icon-self{
    font-family:my-icon !important;
}
```

::: tip 友情提醒
my-icon 为你自定义的font-family值
:::


