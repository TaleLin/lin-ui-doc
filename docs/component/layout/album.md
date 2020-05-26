---
title: 相册Album
---

# <H2Icon/> 相册 Album

> 图片展示组件，展示传入的图片。常见使用场景：微信朋友圈，商品评论。

## 使用方法

引用组件，通过`urls`属性传入图片链接,`urls`应为网络图片链接或本地绝对路径。组件自动展示`urls`中的图片。

## <span id='urls'>图片列表</span> 

`urls`接收一个数组，数组内元素可以有两种格式。

- 数组元素为字符串

```js
['图片1.jpg','图片2.jpg','图片3.jpg']
```

- 数组元素为对象，对象中包含url属性，且url属性值的类型为字符串。对象可以包含其他任意属性。

```js
[{
	url:'1.jpg',
  	key: 'key1'
 },{
 	url:'2.jpg',
  	key:'key2',
  	value:2
}]
```
  
:::tip

两种格式根据实际情况自行选择，但不能混用，同一组件内只能使用同一种格式。

在组件事件中返回的detail内容，与传入的urls内容保持一致。


:::

##	指定key
当`urls`数组元素为对象时，可以通过`key`属性指定数据源的键值（即`url`）

```js
data:{
	urls:[{
		newUrl:'1.jpg',
	  	key: 'key1'
	 },{
	 	newUrl:'2.jpg',
	  	key:'key2',
	  	value:2
	}]
}
```

```wxml
<l-album urls='{{urls}}' key='newUrl'></l-album>
```


## 图片展示

组件分为单图展示和多图展示两种情景，组件会根据传入的`urls`长度自动布局，不需要单独指定。

1. 单图

当`urls`长度为1时，为单图展示情景。组件将所传图片等比压缩，长边压缩/拉伸至`360rpx`。
> 组件只包含图片部分，其他部分代码为展示用。

![单图](http://imglf3.nosdn0.126.net/img/YXcvYzgxMzh2bmQyVVBmd3dSVFFBUVVCeEY1ekR1WFZJQW1lMTdwZ1J5NlAzdEpaVlpmcnhBPT0.jpeg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 示例代码


```wxml
<view>
    <view class="album">
        <l-avatar class="avatar" size='80' shape="square" src="" />
        <view class="right">
            <view class="name">Lin-UI-27315</view>
            <view class='content'>一张横屏图片的展示，宽为360rpx。</view>
            <l-album urls='{{urls}}'></l-album>
        </view>
    </view>
    <view class="line"></view>
</view>
<view>
    <view class="album">
        <l-avatar class="avatar" size='80' shape="square" src="" />
        <view class="right">
            <view class="name">Lin-UI-27315</view>
            <view class='content'>一张竖屏图片的展示，高为360rpx。</view>
            <l-album urls='{{urls}}'></l-album>
        </view>
    </view>
    <view class="line"></view>
</view>
```

```wxss
.album {
    display: flex;
    flex-direction: row;
}

.avatar {
    margin-left: 20rpx;
}

.right {
    margin-left: 20rpx;
}

.name {
    color: rgb(91, 108, 160);
    font-weight: 450;
}

.content {
    margin-top: 7rpx;
    margin-right: 10rpx;
    color: black;
    font-weight: 445;
    margin-bottom: 15rpx;
}

.line {
    height: 1px;
    border-top: solid Silver 1px;
    margin-bottom: 40rpx;
    margin-top: 30rpx;
}
```

2. 多图

当`urls`长度大于`1`时，为多图展示情景。多图展示时，最多展示9张照片，如果所传`urls`长度超过`9`，组件自动截取前`9`张照片进行展示。

多图情景下，图片展示为边长`158rpx`的正方形图片。

![多图模式](http://imglf5.nosdn0.126.net/img/YXcvYzgxMzh2bmQyVVBmd3dSVFFBVHpTOXNLdHl1Uy9MdGJVZVBXTjBDZ3g3a295UFUwcTFBPT0.jpeg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 示例代码


```wxml
<view>
    <view class="album">
        <l-avatar class="avatar" size='80' shape="square" src="" />
        <view class="right">
            <view class="name">Lin-UI-27315</view>
            <view class='content'>多张图片展示，显示为边长158rpx的正方形。</view>
            <l-album urls='{{urls}}'></l-album>
        </view>
    </view>
    <view class="line"></view>
</view>
<view>
    <view class="album">
        <l-avatar class="avatar" size='80' shape="square" src="" />
        <view class="right">
            <view class="name">Lin-UI-27315</view>
            <view class='content'>多张图片展示，自动按照朋友圈显示规则排序。</view>
            <l-album urls='{{urls}}'></l-album>
        </view>
    </view>
    <view class="line"></view>
</view>
```

```wxss
    wxss文件同上
```

:::tip 多图展示规则
**传入的urls长度不同，组件采用不同的布局形式，具体布局形式如下：**

**2图**:		一行两列

**3图**:		一行三列

**4图**:		两行两列

**5、6图**:	两行三列

**7、8、9图**:	三行三列
:::



## 预览

组件图片是否支持预览，默认状态为支持，可以通过设置`preview`属性为`false`关闭。


## 图片尺寸

1. 单图

单张图片时，组件将所传图片等比压缩，长边压缩/拉伸至`360rpx`。通过设置`single-size`可以更改长边大小，单位`rpx`。

2. 多图 

多张图片时，图片展示为边长`158rpx`的正方形图片。通过设置`multiple-size`可以更改图片边长，单位`rpx`

## 图像间隔 

> 此设置仅在多图展示时生效

通过设置`gap-row`和`gap-column`属性来更改多图时，图片的水平间隔和竖直间隔，默认值为`10`,单位`rpx`;

## 裁剪、缩放模式
单图情景和多图情景下的裁剪、缩放模式可单独设置，互相不受影响。组件根据传入`urls`长度自动选择对应裁剪、缩放方式进行图片展示。

1.	单图 
属性`single-mode`可以更改单图展示时图片的裁剪、缩放模式，默认值`aspectFit`。

2.	多图  
属性`multiple-mode`可以更改多图展示时图片的裁剪、缩放模式，默认值`aspectFill`。

![裁剪模式](http://imglf6.nosdn0.126.net/img/YXcvYzgxMzh2bmQyVVBmd3dSVFFBZlJqcmpTR2lFemo2YUlQWTMwTnNZWS9WWE5vNFQ5cFdRPT0.jpeg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 示例代码

```wxml
<view>
    <view class="album">
        <l-avatar class="avatar" size='80' shape="square" src="" />
        <view class="right">
            <view class="name">Lin-UI-27315</view>
            <view class='content'>通过single-mode可以更改单图时图片裁剪、缩放的模式。示例为center模式。</view>
            <l-album urls='{{urls}}' single-mode='center'></l-album>
        </view>
    </view>
    <view class="line"></view>
</view>
<view>
    <view class="album">
        <l-avatar class="avatar" size='80' shape="square" src="" />
        <view class="right">
            <view class="name">Lin-UI-27315</view>
            <view class='content'>通过multiple-mode可以更改多图时图片裁剪、缩放的模式。示例为scaleToFill模式。</view>
            <l-album urls='{{urls}}' multiple-mode='scaleToFill'></l-album>
        </view>
    </view>
    <view class="line"></view>
</view>
```

```wxss
    wxss文件同上
```

## 属性（Album Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  版本号|
|:----|:----|:----|:----|:----|:----|
| urls	| 图片地址，详细说明见属性[urls](#urls)说明	| Array | - | [] |0.7.2	|
|key | 指定替代键|String | |url | |
| preview	| 图片是否可预览  | Boolean| `true`,`false` | `true` |0.7.2	|
| single-size | 单图时，图片长边的长度，单位rpx | Number | - | 360 |0.7.2	|
| multiple-size	| 多图时，图片边长，单位rpx |	Number | - | 158 |0.7.2	|
| gap-row	| 多图时，图片水平间隔 | Number |	- | 10 |	0.7.2|
| gap-column	| 多图时，图片垂直间隔 | Number |	- | 10 |	0.7.2|
| single-mode	| 单图时，图片缩放裁剪的模式 |	String	| 见[小程序image组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) |`aspectFit`|0.7.2	|
| multiple-mode	| 多图时，图片缩放裁剪的模式 |	String	| 见[小程序image组件](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) |`aspectFill`|0.7.2	|


## 外部样式类（Album ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖组件整体样式的外部样式类 | - |
| l-single-image-class | 覆盖组件单图时图片样式的外部样式类 |- |
| l-multi-image-class  |覆盖组件多图时图片样式的外部样式类 |- |


## 组件事件（Album Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap  | 点击图片时触发   | event.detail = {current:[ 当前点击项的信息 ], all: [ 当前所有项信息 ], index: 点击项的下标}  |detail内容与传入的urls内容保持一致  | 

<RightMenu />