---
title: 骨架屏 Skeleton
---

# <H2Icon /> 骨架屏 Skeleton

> 在需要等待加载内容的位置提供一个占位图形组合。

骨架屏由标题、段落、头像三部分组成，分别由 `title` 、 `paragraph` 、 `avatar` 属性控制该部分的显隐；标题和段落默认显示，头像默认不显示。

该组件主要适用于以下几种场景：

1. 网络较慢，需要长时间等待加载处理的情况下。
2. 图文信息内容较多的列表/卡片中。
3. 只在第一次加载数据的时候使用。
4. 可以被 Loading 组件完全代替，但是在可用的场景下可以比 Loading 组件提供更好的视觉效果和用户体验。

## 基础用法

加载完成后展示的内容需放在插槽中，通过设置 `loading` 属性为 `true` 时，显示骨架屏占位图；反之则直接展示插槽内容。默认值为 `true` 。

![a](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmpnTHNjNjRPeWdqZzNvOTZMQzJRRVZYSlEvUUUyRzBqbDhsYXVTcm1mcTFnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码

```wxml
<l-skeleton 
  loading="{{true}}"
  rows="3"
>
  <!-- 插槽内容 -->
  <view/>
</l-skeleton>
```

## 设置段落占位图的行数

通过 `rows` 属性设置段落占位图的行数。默认值为 `0` 。

### 示例代码

```wxml
<l-skeleton 
  loading="{{true}}"
  rows="3"
>
  <!-- 插槽内容 -->
  <view/>
</l-skeleton>
```

## 设置段落及标题占位图宽度及高度

通过设置 `title-width` 属性修改标题占位图的宽度。默认值为父容器宽度的 `50%`。

通过设置 `rows-width` 属性修改段落占位图的宽度。段落占位图最后一行宽度默认值为父容器的 `70%` ，其余行默认宽度为 `100%` 。

通过设置 `rows-height` 属性修改段落占位图的宽度。段落占位图每一行高度默认为 `34rpx` 。

`rows-width` 和 `rows-height` 属性可接收数组和字符串。若为数组时则为对应的每行宽度和高度，反之则是最后一行的宽度和高度。

![a](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmpDOXAvTmZhRXFZOWZUT1pvNFNYT3FkNmRxdXM0dnlpbm9SQXhkd21WU29nPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码

```wxml
<l-skeleton 
  loading="{{true}}"
  rows="3"
  title-width="240rpx"
  rows-width="{{['240rpx','240rpx','120rpx']}}"
  rows-height="100rpx"
>
  <!-- 插槽内容 -->
  <view/>
</l-skeleton>
```

## 设置头像占位图

通过设置 `avatar` 属性可显示头像展示图。默认值为 `false` 。

通过 `avatar-shape` 和 `avatar-size` 属性可设置头像占位图的形状和大小。

![a](http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmpnTHNjNjRPeWdqaWdSc09mMmQ3SkxHb3huK3RCYkR4UXhsNjEzQm9KSXl3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码

```wxml
<l-skeleton 
  loading="{{true}}"
  avatar="{{true}}"
  avatar-size="32rpx"
  avatar-shape="circle"
  rows="3"
>
  <!-- 插槽内容 -->
  <view/>
</l-skeleton>
```

## 展示动画效果

通过设置 `active` 属性为 `false` 可关闭占位图动画效果，默认值为 `true` 。

### 示例代码

```wxml
<l-skeleton 
  loading="{{true}}"
  paragraph="{{true}}"
  title="{{true}}"
  avatar="{{true}}"
  avatar-size="32rpx"
  avatar-shape="circle"
  rows="3"
  active="{{false}}"
>
  <!-- 插槽内容 -->
  <view/>
</l-skeleton>
```

## 骨架屏属性 (Skeleton Attributes)

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  版本号 |
|:----|:----|:----|:----|:----|:----|
| loading | 为 `true` 时，显示占位图。反之则直接展示子组件 | Boolean | --- | true | 0.7.2|
| active | 是否展示动画效果 | Boolean |  --- | true  | 0.7.2|
| paragraph | 是否显示段落占位图 | Boolean | --- | true | 0.7.2|
| rows | 设置段落占位图的行数 | String | --- | 0 |0.7.2 |
| rows-width | 设置段落占位图的宽度 | String/Array | --- | 60% | 0.7.2|
| rows-height | 设置段落占位图的高度 | String/Array | --- | 34rpx |0.7.2 |
| title   | 是否显示标题占位图 | Boolean | --- | true |0.7.2 |
| title-width | 设置标题占位图的宽度| String | --- | 50% |0.7.2 |
| avatar | 是否显示头像占位图 | Boolean |  ---  | false  | 0.7.2|
| avatar-size | 设置头像占位图大小 | String |  ---  | 32rpx  |0.7.2 |
| avatar-shape | 设置头像占位图形状 | String |  circle/square  | circle  |0.7.2 |

## 骨架屏外部样式类 (Skeleton ExternalClasses)

| 外部样式类名 | 说明 | 备注 | 版本号 |
| :--------- | :----------------- | :----- | :----- |
| l-class | 覆盖骨架屏整体的外部样式类 | --- |0.7.2 |
| l-title-class | 覆盖标题部分的外部样式类 | --- |0.7.2 |
| l-row-class | 覆盖段落内每一行的外部样式类 |  --- |0.7.2 |
| l-avatar-class | 覆盖头像部分的外部样式类 |  --- | 0.7.2|

<RightMenu />