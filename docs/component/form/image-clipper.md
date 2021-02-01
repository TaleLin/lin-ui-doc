---
title: 图片裁剪 ImageClipper
---

# <H2Icon/> 图片裁剪 ImageClipper

> 图片裁剪组件。

## 介绍

根据下图所示，`ImageClipper`分为三个区域：`ImageContent`、`ClipperContent`、`ToolsContent`。

该组件默认撑满整个屏幕，您可以通过 `l-class` 外部样式类进行定制。

- `ImageContent`—— 图片内容区域：被裁剪的图片可以在此区域任意移动、缩放和旋转等操作
- `ClipperContent`—— 裁剪内容区域：此区域可以缩放，裁剪只会保留该区域的内容
- `ToolsContent`—— Tools区域：在此区域，**您可以任意定制您想要的功能**，如图所示，可以放一些功能性的按钮，**当然，您也可以随意放其他内容，随心所欲**，我们会默认内置一些功能，此区域部分功能需引用子组件 `ImageClipperTools` 

以上三个名词分别对应的部分如下图所示：、
:::img
![height=300](/screenshots/image-clipper/image-clipper.png)
:::

## 基础使用

### 代码演示

```wxml
<l-image-clipper show="{{true}}" image-url="{{图片路径}}">
  <l-image-clipper-tools />
</l-image-clipper>
```
:::img
![height=300](/screenshots/image-clipper/demo1.png)
:::

## 页面内选择图片

:::tip
推荐使用这种方式，在您需要操作的页面里，放置一个按钮或者其他元素，点击后调用[微信选择图片API](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)，当选择完成图片后，设置组件 `show` 状态为 `true`，调起 `ImageClipper` 组件，并将 `image-url` 属性设置为选择图片回调中的 `res.tempFilePaths` 参数，用户体验会更好一些。
:::

### 代码演示

```wxml
<l-button bind:lintap="upload" size="large">选择图片</l-button>
<l-image-clipper show="{{true}}" image-url="{{imageUrl}}"bindlinclip="linclip">
  <l-image-clipper-tools />
</l-image-clipper>
```

```javascript
Page({
  data: {
    show: false,
    imageUrl: ''
  },

  linclip(event) {
    const targetImageUrl = event.detail.url;
    console.log('生成的图片链接为：', targetImageUrl);
  },
  
  upload() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          imageUrl: tempFilePaths,
          show: true
        });
      }
    });
  }
});
```
:::img
![height=300](/screenshots/image-clipper/demo2.png)
:::

## 自定义工具栏

:::tip
您可以在该插槽内任意定制您想要的功能或其他，当然我们也为您准备了一些工具，需引用 `ImageClipperTools` 组件，[组件属性](#工具栏组件属性（imageclippertools-attributes）)如下。
:::

### 代码演示

```wxml
<l-image-clipper show="{{true}}" image-url="{{imageUrl}}">
  <l-image-clipper-tools 
    lock-width="{{true}}" 
    lock-height="{{true}}" 
    lock-ratio="{{true}}" 
    disable-scale="{{true}}" 
    disable-rotate="{{true}}" 
    limit-move="{{true}}"
  />
</l-image-clipper>
```
:::img
![height=300](/screenshots/image-clipper/demo3.png)
:::

## 组件完整使用说明
- 组件会监听 `image-url` 参数的变化，当属性有内容时，组件会调用 [`wx.getImageInfo()`](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html) API，当请求成功后，组件会触发 `linimageready` 事件，表示图片已加载完成，该事件会返回：
  - `width` ：图片宽度
  - `height` ：图片高度
  - `path` ：图片本地路径
  - `orientation` ：拍照时设备方向
  - `type` ：图片格式

- `image-url` 属性可以是 **相对路径、临时文件路径、存储文件路径、网络图片路径**，详见 [`wx.getImageInfo()`](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)，需要注意的是，您使用 **网络图片路径** 可能会造成 **跨域**，当然，您可以在 **微信开发者工具** 里配置 `合法域名`，或者开发环境下勾选 `不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书`
- 当您点击工具栏的 **旋转按钮** 时，会触发 `linrotate` 事件，并且会返回 `currentDeg`（当前旋转的角度）  
- 同样，当您 **双指拖动图片** 放大时，会触发 `linsizechange` 事件，并且会返回 `imageWidth` (当前图片宽度) 、`imageHeight`（当前图片高度）
- 当您调整好图片状态后，点击工具栏中的 `√` 按钮，将会触发 `linclip` 事件，该事件会返回：
  - `url` ：生成的图片 `url`（当您的属性 `type` ，为 `url` 时）
  - `base64` ：生成的图片 `base64` （当您的属性 `type` ，为 `base64` 时）
  - `width` ：生成的图片宽度
  - `height` ：生成的图片高度
- 裁剪完成

:::tip
除此之外，我们还为您准备了更多属性，方便您更自由的定制组件功能，[点击查看](#组件属性（imageclipper-attributes）)
:::
:::warning 注意事项
为了优化体验，当您未选择图片时，无法对裁剪框进行任何操作！！！
:::

## 组件属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 版本 |
|:----|:----|:----|:----|:----|:----|
| show	| 设置组件展示隐藏	| Boolean | - | false | 0.8.7 |
| image-url	| 图片路径	| String | - | - | 0.8.7 |
| type	| 生成图片类型	| String | `base64`  `url` | `url` | 0.8.7 |
| quality	| 生成图片质量	| Number | 0~1 | 1 | 0.8.7 |
| width	| 裁剪框宽度，单位为 `rpx`	| Number | - | 400 | 0.8.7 |
| height	| 裁剪框高度，单位为 `rpx`	| Number | - | 400 | 0.8.7 |
| min-width	| 裁剪框最小宽度，单位为 `rpx`	| Number | - | 200 | 0.8.7 |
| min-height	| 裁剪框最小高度，单位为 `rpx`	| Number | - | 200 | 0.8.7 |
| max-width	| 裁剪框最大宽度，单位为 `rpx`	| Number | - | 600 | 0.8.7 |
| max-height	| 裁剪框最大高度，单位为 `rpx`	| Number | - | 600 | 0.8.7 |
| lock-width	| 是否锁定裁剪框宽度	| Boolean | - | false | 0.8.7 |
| lock-height	| 是否锁定裁剪框高度	| Boolean | - | false | 0.8.7 |
| lock-ratio	| 是否锁定裁剪框比例	| Boolean | - | true | 0.8.7 |
| scale-ratio	| 生成图片相对于裁剪框的比例	| Number | - | 1 | 0.8.7 |
| min-ratio	| 图片最小缩放比	| Number | - | 0.5 | 0.8.7 |
| max-ratio	| 图片最大缩放比	| Number | - | 2 | 0.8.7 |
| disable-scale	| 是否禁止缩放	| Boolean | - | false | 0.8.7 |
| disable-rotate | 是否禁止旋转	| Boolean | - | false | 0.8.7 |
| limit-move	| 是否限制移动范围	| Boolean | - | false | 0.8.7 |
| check-image	| 是否显示选择图片按钮	| Boolean | - | true | 0.8.7 |
| check-image-icon	| 选择图片按钮图标url地址	| String | - | - | 0.8.7 |
| rotate-along	| 是否显示顺时针旋转按钮	| Boolean | - | true | 0.8.7 |
| rotate-along-icon	| 顺时针旋转按钮图标url地址	| String | - | - | 0.8.7 |
| rotate-inverse	| 是否显示逆时针旋转按钮	| Boolean | - | true | 0.8.7 |
| rotate-inverse-icon	| 逆时针旋转按钮图标url地址	| String | - | - | 0.8.7 |
| sure	| 是否显示确定按钮	| Boolean | - | true | 0.8.7 |
| sure-icon	| 确定按钮图标url地址	| String | - | - | 0.8.7 |
| close	| 是否显示关闭按钮	| Boolean | - | true | 0.8.7 |
| close-icon	| 关闭按钮图标url地址	| String | - | - | 0.8.7 |
| rotate-angle	| 旋转按钮每次旋转的角度	| Number | - | 90 | 0.8.7 |

## 工具栏组件属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 版本 |
|:----|:----|:----|:----|:----|:----|
| lock-width	| 是否显示锁定裁剪框宽度按钮	| Boolean | - | false | 0.8.7 |
| lock-height	| 是否显示锁定裁剪框高度按钮	| Boolean | - | false | 0.8.7 |
| lock-ratio	| 是否显示锁定裁剪框比例按钮	| Boolean | - | false | 0.8.7 |
| disable-scale	| 是否显示禁止缩放按钮	| Boolean | - | false | 0.8.7 |
| limit-move	| 是否显示限制移动范围按钮	| Boolean | - | false | 0.8.7 |


## 组件外部样式类
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 最底层元素（组件总容器）外部样式类   |  ---   |


## 组件事件

| 事件名称 | 说明 | 返回值	 | 备注 |
|:----|:----|:----|:----|
| bind:linimageready	| 图片加载完成式触发	| `width`：图片宽度 <br /> `height`：图片高度<br />`path`：图片本地路径<br />`orientation`：拍照时设备方向<br />`type`：图片格式 | - |
| bind:linrotate	| 图片旋转时触发	| `currentDeg`：当前旋转的角度 | - |
| bind:linsizechange	| 图片大小改变时触发	| `imageWidth`：当前图片宽度<br />`imageHeight`：当前图片高度 | - |
| bind:linclip	| 图片裁剪完成后触发	| `url`：生成的图片url<br />`base64`：生成的图片base64<br />`width`：生成的图片宽度<br />`height`：生成的图片高度 | - |

<RightMenu />


