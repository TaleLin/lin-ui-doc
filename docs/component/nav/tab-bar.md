---
title: 导航栏 TabBar
---

# <H2Icon /> 导航栏 TabBar

> 导航栏适用场景：需要动态控制标签种类、数量，以及对样式自定义程度高的场景

## 介绍

导航栏使用微信小程序的[ 自定义 TabBar ](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)实现。**在初次切换页面时，会发生闪烁**，该问题是微信小程序自定义 TabBar 底层实现方式导致，不属于 Lin UI 的问题。

## 基础使用
:::img
![height=100](/screenshots/tab-bar/1.png)
:::

根据[微信小程序官方要求](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)，要使用自定义 TabBar ，需进行如下配置：

1. 在`app.json`中将`tabBar`的`custom`字段指定为`true`，具体参考[此链接](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)


2. 在对应的**每个**`tab`页面中引入`TabBar`组件并在页面中使用，同时指定`list`属性（**该`list`会生效**）

  ```json
  // 页面 json 文件
  {
      "usingComponents":{
          "l-tab-bar":"/miniprogram_npm/tab-bar/index"
      }
  }
  ```

  ```wxml
  <!-- 页面 wxml 文件 -->
  <l-tab-bar list="{{list}}" />
  ```

  ```js
  // 页面 js 文件
  Page({
      data:{
          list:[
              {
                  pagePath:"/pages/index/index",
                  text:"首页",
                  iconPath:"/icons/tab-bar/index.png",
                  selectedIconPath:"/icons/tab-bar/index-selected.png"
              }
              ...
          ]
      }
  })
  ```

## 自定义背景图片
导航栏支持使用`bg-img`属性自定义背景图片，**但不支持本地路径，请使用 https 开头的网络路径**

```html
<l-tab-bar bg-img="https://imgchr.com/i/Dj7f6P"  list="{{taobaoTabBar}}" />
```

:::img
![height=100](/screenshots/tab-bar/2.png)
:::
## 显示红点
在`list`数组中传入`redDot`属性，可以控制导航栏标签是否显示红点或者显示徽标。

redDot 支持传入`Boolean/Number`的值。**当 redDot 为 false 时，不显示红点；为 true 时，显示红点；为数字时，显示徽标。默认为 false。**

下图中**发现标签为红点,购物车标签为带数字的徽标**
:::img
![height=100](/screenshots/tab-bar/1.png)
:::


## 导航栏属性

| 属性                  | 说明                      | 类型            | 可选值         | 必填 | 默认值  | 版本号 |
| --------------------- | ------------------------- | --------------- | -------------- | ---- | ------- | ------ |
| list                  | TabBar 绑定的页面路径     | Array\<Object\> | -              | 是   | -       | -      |
| bg-color              | TabBar 背景色             | String          | CSS 支持的颜色 | 否   | white   | -      |
| bg-img                | TabBar 背景图             | String          | 图片网络路径   | 否   | -       | -      |
| text-selected-color   | TabBar 文字选中时的颜色   | String          | CSS 支持的颜色 | 否   | 主题色  | -      |
| text-color            | TabBar 文字未选中时的颜色 | String          | CSS 支持的颜色 | 否   | #666666 | -      |

## 页面列表属性

`list`接收一个数组，数组中的每项都是一个对象，对象可配置属性如下表

| 属性               | 说明               | 类型           | 可选值              | 必填 | 默认值  | 版本号 |
| ------------------ | ------------------ | -------------- | ------------------- | ---- | ------- | ------ |
| pagePath           | 标签对应页面路径   | String         | -                   | 是   | -       | 0.8.12 |
| text               | 标签文字           | String         | -                   | 是   | -       | 0.8.12 |
| iconPath | 未选中状态图标路径 | String         | -                   | 是   | -       | 0.8.12 |
| selectedIconPath   | 选中状态图标路径   | String         | -                   | 是   | -       | 0.8.12 |
| redDot             | 是否显示红点       | Boolean/Number | `true`/`false`/数字 | 否   | `false` | 0.8.12 |


## 导航栏事件

| 事件名称           | 说明           | 返回值       | 备注 |
| ------------------ | -------------- | ------------ | ---- |
| bind:linchange     | 标签切换时触发 | 当前标签信息 |      |
| mut-bind:linchange | 点击标签时触发 | 点击标签信息 |      |

<RightMenu />
