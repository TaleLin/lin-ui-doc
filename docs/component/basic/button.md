---
title: 按钮 Button
---

# <H2Icon /> 按钮 Button

> 常用的操作按钮。

## 按钮类型 

通过设置`type`属性为`default`、`success`、`error`、`warning`来创建不同样式的Button，样式默认为`default`。

:::img
![height=100](/screenshots/button/1.png)
:::

### 示例代码

```wxml
<l-button type="default">default</l-button>
<l-button type="error">error</l-button>
<l-button type="success">success</l-button>
<l-button type="warning">warning</l-button>
```

## 按钮尺寸

通过`size`属性更改按钮大小为`mini`（小）、`medium`（中）、`large`（大）和`long`(通栏按钮)。默认大小为`medium`(中)。

:::tip
对应尺寸的按钮长和宽款式固定的，仅当按钮文案超出按钮长度时按钮长度会适应性改变长度。
如需更改长和宽，请使用`height`和`width`属性进行更改。
:::

:::img
![height=200](/screenshots/button/2.png)
:::

### 示例代码
```wxml
<l-button size="medium">中按钮</l-button>
<l-button size="large">大按钮</l-button>
<l-button size="mini">小按钮</l-button>
<l-button size="long">通栏按钮</l-button>
```

## 设置按钮长和宽

通过`height`和`width`属性设置按钮的长和宽。单位为rpx。

### 示例代码
```wxml
<l-button width="500" height="120">按钮</l-button>
```

## 按钮形状

通过`shape`属性更改按钮形状为`square`（直角）、`circle`（圆弧）或`semicircle`（半圆）。默认形状为`circle`(圆弧形)。

:::img
![height=100](/screenshots/button/3.png)
:::

### 示例代码

```wxml
<l-button shape="semicircle">半圆角</l-button>
<l-button shape="circle">圆弧角</l-button>
<l-button shape="square">方角</l-button>
```

## 镂空按钮

通过`plain`属性为`true`设置按钮为镂空按钮，默认值为`false`。

:::img
![height=200](/screenshots/button/4.png)
:::

### 示例代码
```wxml
<l-button plain="{{true}}">镂空</l-button>
```

## 禁用按钮

通过`disabled`属性设置按钮的禁用状态。

:::img
![width=500](https://cdn.talelin.com/WX20201214-204446@2x.png)
:::

### 示例代码
```wxml
<l-button disabled="{{true}}">禁用按钮</l-button>
```
## 加载状态

通过设置`loading`属性在按钮上显示加载状态。

:::img
![height=100](/screenshots/button/6.png)
:::

### 示例代码
```wxml
<l-button loading="{{true}}">加载中</l-button>
```

## 图标按钮

在按钮文字前面添加图标，设置Button的`icon`属性可使用icon组件的图标。

设置`icon-size`和`icon-color`属性可更改图标大小和图标颜色。

:::img
![height=100](/screenshots/button/7.png)
:::

### 示例代码

```wxml
<l-button icon="warning" icon-size="20" icon-color="#fff">icon图标</l-button>
```

## 特殊样式按钮

>同时设置spcial属性和open-type时，仅在slot中定义的内容可以触发开放能力。

在某些场景下，对Button的样式会有一些特殊需求，比如使用按钮开放能力的图片。此时可设置Button的`special`属性使按钮成为一个自定义按钮。

自定义内容在组件slot插入即可。

:::img
![height=200](/screenshots/button/8.png)
:::

### 示例代码
```wxml
<l-button special="{{true}}" open-type="share">
    <!-- 此处是插槽自定义内容 -->
   <l-icon name="share" />
</l-button>
```

## 按钮微信开放能力

> 建议使用开放能力前仔细阅读[微信小程序button组件][1]的相关文档，充分了解小程序Button的相关开放能力。

Lin-Mini的Button组件同样支持小程序原生Button的相关开放能力。

例如，小程序可以通过原生Button来获取用户的相关信息。而使用Lin-Mini的Button组件同样可以做到，且用法同原生Button保持一致。

具体使用方法如下：

* 根据需求设置Button的`open-type`(开放能力类型)属性，该属性的可选值与[小程序Button组件][1]的`open-type`属性可选值保持一致。

例如设置分享功能即可写为`open-type="share"`。
* 某些开放能力同时还需要传入一个回调函数用以获取回调数据，Lin-MiNi的Button组件的回调函数设置方式同样与小程序原生Button保持一致。

例如在获取用户信息时，你可以这样设置回调函数：`bind:getuserinfo="getUserInfo"`。

### 示例代码

```wxml
<l-button bind:getuserinfo="getUserInfo" open-type="getUserInfo"></l-button>
```

## 用户案例

浏览完以上内容，您大概已经了解Button组件的`特殊样式用法`以及`按钮的微信开放能力`。

下面我们来浏览一个在实际开发中较为常见的用户案例，案例实现效果图如下所示：

:::img
![height=50](/screenshots/button/9.png)
:::

通过效果图，我们来分析下怎样去实现该案例。总体来讲可分为两部分:

1. 设置Button组件的`special`属性为`true`，然后将自定义代码插入插槽中。
2. 将Button组件的`open-type`属性设置为`contact`实现客服功能。

以下是实现该案例的代码。

### 示例代码

```wxml
 <!-- wxml文件 -->
 <l-button special="{{true}}" open-type="contact">
    <view class="container">
      <l-icon size="40" name="customer-service" color="#3683d6" />
      <text class="describe">客服</text>
    </view>
  </l-button>
```

```wxss
  /* wxss文件 */
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .describe {
    color: #3683d6;
    font-size: 28rpx;
    margin-left:20rpx;
  }
```

## 按钮属性

>除本文档列出的参数之外，微信原生Button的参数同样支持，具体参考[微信Button组件文档][1]。

:::tip
[微信Button组件文档][1]指出将` button` 封装在自定义组件中，而 `from` 在自定义组件外，将会使这个 `button` 的 `form-type` 失效。
由于本组件由原生Button进行的封装，所以导致 `form-type` 属性无法获取到表单组件值。此处建议使用原生Button组件。
:::

<!-- form-type -->

| 参数           | 说明             | 类型    | 可选值                        | 默认值  | 版本号 |
| :------------- | :--------------- | :------ | :---------------------------- | :------ | :----- |
| size           | 按钮尺寸         | String  | medium/large/mini/long        | medium  |
| type           | 按钮类型         | String  | warning/success/error/default | default |
| plain          | 按钮是否镂空     | Boolean | -----                         | false   |
| disabled       | 按钮是否禁用     | Boolean | -----                         | false   |
| loading        | 是否为加载中按钮 | Boolean | -----                         | false   |
| bg-color       | 按钮背景颜色     | String  | -----                         | ---     |
| height         | 按钮高度         | Number  | -----                         | ---     |
| width          | 按钮宽度         | Number  | -----                         | ---     |
| shape          | 按钮形状         | String  | square/circle/semicircle      | circle  |
| icon           | 按钮内icon图标   | String  | -----                         | ---     |
| icon-size      | 按钮内icon大小   | Number  | -----                         | 20rpx   |
| icon-color     | 按钮内icon颜色   | String  | -----                         | #fff    |
| special        | 特殊按钮         | Boolean | -----                         | false   |
| open-type      | 微信开放能力     | String  | -----                         | ---     |
| disabled-hover | 禁用 hover 效果  | Boolean | -----                         | false   | 0.8.12 |

## 按钮外部样式类
| 外部样式类名  | 说明                         | 备注                                                                                                  |
| :------------ | :--------------------------- | :---------------------------------------------------------------------------------------------------- |
| l-class       | 覆盖按钮区域自定义外部样式类 | 如果在l-class中使用margin-left或margin-right，请使用该外部样式进行代替，其他的属性依旧使用l-class即可 |
| l-label-class | 覆盖按钮区域自定义外部样式类 | ---                                                                                                   |
| l-icon-class  | 覆盖icon的自定义外部样式类   | ---                                                                                                   |
| l-hover-class | 自定义按钮点击态外部样式类   | ---                                                                                                   |

## 按钮插槽

| 插槽名称 | 说明               | 备注 |
| :------- | :----------------- | :--- |
| -        | 自定义按钮显示内容 | ---  |

## 按钮事件
 
| 事件名称            | 说明                                                                                                                                                                                | 返回值 | 备注 |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- | :--- |
| bind:lintap         | 按钮在非禁用状态下点击所触发的事件                                                                                                                                                  | -----  | ---  |
| bind:contact        | 客服消息回调                                                                                                                                                                        | -----  | ---  |
| bind:getphonenumber | 获取用户手机号回调                                                                                                                                                                  | -----  | ---  |
| bind:error          | 当使用开放能力时，发生错误的回调                                                                                                                                                    | -----  | ---  |
| bind:opensetting    | 在打开授权设置页后回调                                                                                                                                                              | -----  | ---  |
| bind:getuserinfo    | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与[wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)返回的一致 | -----  | ---  |
| bind:chooseavatar    | 	获取用户头像，可以从 bindchooseavatar 回调中获取到头像信息                                                                                                                      | -----  | ---  |


[1]: https://developers.weixin.qq.com/miniprogram/dev/component/button.html

<RightMenu /> 