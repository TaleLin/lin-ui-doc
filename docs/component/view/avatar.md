---
title: 头像 Avatar
---

# <H2Icon /> 头像 Avatar

> 用来展示用户或事物。

## 头像类型

组件支持三种类型，Icon、图片以及`open-data`，三种类型的优先级依次是`open-data`、Icon和图片。

### 1 图标头像（Icon）

用于显示图标，默认为头像大小的50%。

通过`icon`属性设置显示图标类型，可配置图标类型同`Icon`组件一致，

可使用`icon-style`修改icon的颜色和大小；语法同设置行内样式一致，支持属性为：`size`和`color`。

示例代码

:::img
![height=100](/screenshots/avatar/1.png)
:::

```wxml
   <l-avatar size="80" icon="user" />
   <l-avatar l-class="avatar-bg" icon-style="color:#5bf320;size:50" size="80" icon="user" />
   <l-avatar l-class="avatar-bg" size="80" icon="user" icon-style="color:#5bf320" />
```

### 2 图片头像

用于显示本地图片或者网络图片，通过`src`属性设置，你还可以通过`mode`属性来设置图片的裁剪方式。
> `mode`属性值可参考[小程序image组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.wxml)

示例代码

:::img
![height=100](/screenshots/avatar/2.png)
:::

```wxml
   <l-avatar src="/images/view/default-image.jpg" />
   <l-avatar src="http://img3.a0bi.com/upload/ttq/20161015/1476518118768.png" />
```

### 3 open-data(废弃)

:::warning
微信官方从 2022 年 2 月 21 日 24 时起回收通过 `<open-data>` 展示个人信息的能力，具体看下面的网址

[小程序用户信息相关接口调整公告](https://developers.weixin.qq.com/community/develop/doc/000e881c7046a8fa1f4d464105b001?blockType=1&page=2#comment-list)
:::

用于展示当前用户的微信头像和昵称

`open-data`接收数组，通过传入`userAvatarUrl`、`userNickName`控制显示用户头像和昵称。

:::img
![height=100](/screenshots/avatar/3.png)
:::

```wxml
   <l-avatar open-data="{{['userAvatarUrl','userNickName']}}" />
```

## 头像形状

通过在`<l-avatar/>`设置`shape`属性来指定头像形状，有两种形状可选，分别为`circle`和`square`, 默认值为`circle`。
同时，支持通过外部样式类`l-class`修改头像的样式。

### 示例代码

:::img
![height=100](/screenshots/avatar/4.png)
:::

```wxml
    <l-avatar shape="circle" src="/images/view/default-image.jpg" />
    <l-avatar shape="square" src="/images/view/default-image.jpg" />
```

## 头像尺寸

通过在`<l-avatar/>`设置`size`属性来设置头像的大小，单位为`rpx`;

### 示例代码

:::img
![height=100](/screenshots/avatar/5.png)
:::

```wxml
   <l-avatar size="80" src="/images/view/default-image.jpg" />
   <l-avatar size="120" src="/images/view/default-image.jpg" />
   <l-avatar size="160" src="/images/view/default-image.jpg" />
```

## 头像和文本

通过设置`text`属性来显示文本，并且可以通过`placement`属性控制头像与文本的相对位置，默认为`right`,可设置`left`、`right`、`top`、`bottom`四种位置。

同时，支持通过外部样式类`l-text-class`修改文本的样式。

### 示例代码

:::img
![height=200](/screenshots/avatar/6.png)
:::

```wxml
  <l-avatar text="月野君" placement="bottom" src="/images/view/default-image.jpg" />
  <l-avatar text="月野君" placement="right" src="/images/view/default-image.jpg" />
  <l-avatar text="月野君" placement="top" src="/images/view/default-image.jpg" />
  <l-avatar text="月野君" placement="left" src="/images/view/default-image.jpg" />
```

## 头像属性

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| size	| 设置头像大小	| Number | - | `120 * 120` |
| shape	| 设置头像形状  |	String | `square `、 `circle` | `circle` |
| src	| 显示的头像地址，支持本地或网络图片 |	String | - | - |
| mode	| 图片缩放裁剪模式 |	String	| 见[小程序image组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) |`scaleToFill`|
| icon	| 设置头像的图标类型 | String |	- | - |
| icon-color | 设置图标的颜色| String | - | - |
| icon-size | 设置图标的大小 | String | - | 28 |
| open-data | 显示用户和头像，参考[微信开放数据](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html) | Array | `['userAvatarUrl','userNickName']` | [] |
| text |  设置显示文本的内容 | String | - | - |
| placement | 文本的显示位置 | String | `left`/`right`/`top`/`bottom`| `right` |

## 头像外部样式类
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖头像组件的头像区域样式 | String |- |
| l-text-class | 覆盖头像组件中文本的样式 | 取代l-class-text |

## 已经弃用的外部样式类
以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。

| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class-text | 覆盖头像组件中文本的样式 | 请用l-text-class替代 |

## 头像事件

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap  | 当点击头像组件时触发   | ---------   | --------   | 

<RightMenu />