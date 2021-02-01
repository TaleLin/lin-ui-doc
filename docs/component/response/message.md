---
title: 消息提示 Message
---

# <H2Icon />  消息提示 Message

> 用于主动操作后的消息反馈。

## 基本使用 

Message组件有以下两种用法：

1. 常规组件的使用方式，通过更改传入的属性值来控制`Message`的显示和隐藏。

2. `wx.lin.showMessage(object)`，使用`wx.lin.showMessag`的调用时，与组件的使用一致，需要在json文件中引入组件，且在wxml中写入`Message`组件。

`wx.lin.showMessage`接受的参数是个对象，里面包含了与消息提示相关的属性。

:::tip
第一种用法小程序基础库版本 `2.6.1` 开始支持。
:::


### 示例代码（第一种用法）

```wxml
<!-- wxml -->
<l-button bind:lintap="showMessage">操作</l-button>
<l-message content="{{content}}"/>
```

```js
// js
showMessage(){
    this.setData({
        show:true,
        content:'消息提示'
    })
}
```

### 示例代码（第二种用法）

```wxml
<l-message />
```

```js
// js
showMessage(){
    wx.lin.showMessage({
        content:'消息提示'
    })
}
```

## 显示消息

通过设置`show`属性为`true`显示消息（第一种用法使用该属性）,设置为`fasle`隐藏消息。

### 示例代码

```wxml
<!-- wxml -->
<l-button bind:lintap="showMessage">操作</l-button>
<l-message content="{{content}}"/>
```

```js
// js
showMessage(){
    this.setData({
        show:true,
        content:'消息提示'
    })
}
```

## 消息内容

通过`content`属性设置消息提示的内容，此处文字建议不超过十个。

:::img
![height=50](/screenshots/message/1.png)
:::

### 示例代码

```js
// js
showMessage(){
    wx.lin.showMessage({
        content:'内容'
    })
}
```

## 提示类型

通过`type`属性设置为`primary`、`success`、`warning`、`error`创建不同类型的消息提示。默认值为`primary`。

:::img
![height=200](/screenshots/message/2.png)
:::

### 示例代码

```js
// js
showMessage(){
    wx.lin.showMessage({
        type:'success',
        content:'内容'
    })
}
```

## 消息提示时长

通过`duration`属性设置消息提示时长。默认值为`1500ms`。

```js
// js
showMessage(){
    wx.lin.showMessage({
        duration：4000,
        content:'内容'
    })
}
```

## 消息图标

通过`icon`属性设置消息内的图标的名称。默认图标为对应`type`的图标，当`type`为primary 时无图标。

通过`image`属性设置消息文字前的自定义图片。通过`l-image-class`属性可更改自定义图片的样式。

### 示例代码

```js
// js
showMessage(){
    wx.lin.showMessage({
        type:'error',
        duration：4000,
        icon:'warning',
        content:'内容'
    })
}
```

## 消息提示属性

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 显示与隐藏消息 | Boolean | ---- | fasle |
| content | 消息内容 | String | ---- | --- |
| type | 消息提示类型 | String | primary/warning/success/error | primary |
| duration   | 消息显示的时长 | Number   | ---- | 1500 |
| icon | 消息图标 | String | ---- | `type` |
| icon-size | 消息图标的大小 | String | ---- | -- |
| icon-color | 消息图标的颜色 | String | ---- | 28 |
| image | 消息前的自定义图片 | String | ---- | --- |
| success | 消息调用成功后的回调函数 | Function | ---- | --- |
| top | 消息弹出时距离视窗顶部的距离（单位`rpx`） | Number | ---- | 0 |

## 消息提示外部样式类

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖消息区域自定义外部样式类 | --- | 
| l-image-class | 覆盖消息前自定义图片的自定义外部样式类 | --- |

<RightMenu />
