---
title: 选项卡 Segment
---

# <H2Icon /> 选项卡 Segment

> 选项卡组件与标签页组件的区别在于，标签页将内容和选项卡封装到一个组件内了，在业务场景是分类或者比较复杂的业务场景时推荐使用选项卡组件。

选项卡需`segment`和`segment-item`两个组件关联使用。

`segment-item`用于设置每一个选项的名称 ;

`segment` 包裹在所有`segment-item`最外层 ,`segment` 下的所有 `segment-item` 属于同一个选项卡。

## 等宽选项卡

默认为等宽选项卡，当选项卡数过多时可在`segment`上设置`scrollable` 为 `true`开启滚动标选项卡。

默认激活的是第一个选项卡，通过在 `segment` 组件上设置 `active-key`的值为任意 `key`值配置初始状态时激活的选项卡。

须在`segment-item`组件中传入`tab`、`key`属性，其中：

- `tab`是选项卡显示的文字；

- `key`为每个选项卡的唯一标识，对应`segment`中的`active-key`；


### 示例代码

<img-wrapper>
 <img src="http://imglf4.nosdn.127.net/img/VVpkaDA0b3BNODVjZ2JNM1FDU3V1MTE1NjNqdWpKVUFVbndGbVZnZ2lIQXJMUUQ1TkxzTVNnPT0.jpeg?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
   <l-segment bind:linchange="changeTabs">
        <l-segment-item tab="客厅" key="one" />
        <l-segment-item tab="卧室" key="two" />
        <l-segment-item tab="厨房" key="three" />
    </l-segment>   
```

## 选项卡位置

默认选项卡位置在顶部，可通过在`segment`上设置`placement`属性切换选项卡位置，可选值有 `top`/`left`/`right`/`bottom`。


## 图标选项卡

在`segment-item`上设置`icon`时，可以在选项卡上添加图标，默认图标大小为`28rpx`,颜色与字体颜色一致。

通过在`segment-item`上设置`icon`属性设置每个选项卡显示图标类型，可配置图标类型同`Icon`组件一致，


## 图片选项卡

使用`image`配置图片资源的样式，可配置项有：
- `defaultImage`:未选中时的图片资源,
- `activeImage`：选中时的图片资源
- `picPlacement`可以更改图片、图标的相对于文字的位置，默认为`top`

## 徽标选项卡

 可在任意 `segment-item`上通过属性`badge-count`设置徽标的数值，不设置内容时徽标不显示，或者设置`dotBadge={{true}}`时显示圆点徽标

  徽标相关的属性有，作用分别如下：
  - `badge-max-count` 设置徽标数字最大值，超过最大值时显示${max-count}+;
  - `badge-count-type`  数字的显示方式, 可选值为`overflow`、`limit`、`custom`,默认值为`overflow`。

### 示例代码

<img-wrapper>
 <img src="http://imglf4.nosdn.127.net/img/VVpkaDA0b3BNODVjZ2JNM1FDU3V1NzcxZlIwMlZqVlZhclhmY29WenN3MGN5RVpyUjBjWS9BPT0.jpeg?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
<l-segment active-key="one" bind:linchange="changeTabs">
    <l-segment-item tab="客厅" key="one" dot-badge="{{true}}"/>
    <l-segment-item tab="卧室" key="two" badge-count="97"/>
    <l-segment-item tab="厨房" key="three" badge-count="900" l-badge-class="badge-view"/>
    <l-segment-item tab="浴室" key="four" />
</l-segment>

```

## 自定义选项卡

使用 `slot`可以自定义选项卡的内容和样式 , 此时不能设置 `tab` 属性 , 否则会同时展示两者的内容。

### 示例代码

<img-wrapper>
 <img src="http://imglf4.nosdn.127.net/img/VVpkaDA0b3BNODVjZ2JNM1FDU3V1OC9WVzRraEFwclRrck5uV1FySFlTTlU3Wk1PNlV6SFJRPT0.jpeg?imageView&thumbnail=1680x0&quality=96&stripmeta=0">
</img-wrapper>

```wxml
    <l-segment bind:linchange="changeTabs" l-tab-image-class="tab-image" has-line="{{false}}" l-class="segment-view"   
               l-active-class="segment-active" activeKey="two">
        <l-segment-item key="one" slot="one">
          <view class="tab-item">
            <view>2月12日 10：00</view>
            <view>已开抢</view>
          </view>
        </l-segment-item>
        <l-segment-item key="two" slot="two">
          <view class="tab-item">
            <view>2月13日 10：00</view>
            <view>即将开始</view>
          </view>
        </l-segment-item>

        <l-segment-item key="three" slot="three">
          <view class="tab-item">
            <view>2月14日 10：00</view>
            <view>即将开始</view>
          </view>
        </l-segment-item>
    </l-segment>  
```

## 选项卡初始样式

- 选项卡位置在顶部和底部时的默认高度为`80rpx`，宽度等分，开启`scrollable`时，最小宽度为`160rpx`;
- 选项卡位置在左边或右边时，默认宽度为`160rpx`,高度等分,开启`scrollable`时，最小高度为`80rpx`;
- 可通过`l-class`、`l-active-class`、`l-inactive-class`覆盖默认选项卡样式。


## 选项卡属性 (Segment Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| active-key | 默认激活tabs的key | String | - | 默认为第一个 |
| placement | 选项卡位置 | String | `top`/`left`/`right`/`bottom` | `top` |
| scrollable | 是否滚动选项卡 | Boolean | `false` | - |
| active-color | 设置激活状态选项卡的文本和图标颜色 | String | 表示颜色的是16进制 | - |
| inactive-color | 设置未激活状态选项卡的文本和颜色 | String | 表示颜色的是16进制 | - |
| has-line | 设置是否显示选项卡下的装饰线 | Boolean | - | `true` |
| animated-for-line | 是否使用动画切换装饰线 | Boolean | `false` |
| even | 设置是否是等宽或等高标签 | Boolean | - | `true` |
| width | 设置选项卡整体的宽度 | Number ，单位`rpx` | - | - |
| height | 设置选项卡整体的高度 | Number ，单位`rpx` | - | - |
| item-width | 设置选项卡子项的宽度 | Number ，单位`rpx` | - | - |
| item-height | 设置选项卡子项的高度 | Number ，单位`rpx` | - | - |

## 选项卡子项属性 (Segment-item Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| key | 对应 `active-key`，必填 | String	| - | - |
| tab | 选项卡头显示文字 | String| - | - |
| slot | 自定义选项卡时使用 , 与 `key`一致 , 此时不能设置 `segment` 的属性，否则优先显示 `segment` 的内容 | String| - | - |
| icon	| 设置选项卡图标类型 | String |	- | - |
| icon-size	| 设置选项卡图标的大小 | String |	- | 28 |
| picPlacement | 设置图片、图标的相对于文字的位置 | String  | `top`/`left`/`right`/`bottom` | `top` |
| image | 设置选项卡图片资源 | Object | `{activeImage,defaultImage}` | - |
| badge-count-type |  数字的显示方式 | String | `overflow`/`limit`/`custom`| `overflow` |
| dot-badge | 显示圆点徽标 | Boolean | `false`/`true` | `false` |
| badge-count | 徽标的数值 | String | - | - |
| badge-max-count | 徽标数字最大值，超过最大值时显示${max-count}+ | Number   | -----   | 99   | 

## 选项卡外部样式类 (Segment ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖选项卡整体样式 | - |
| l-header-class | 覆盖选项卡整体样式 | 与`l-class`区别，该属性主要设置选项卡的`height`和`width` |
| l-active-class | 覆盖选项卡激活状态样式 | 替代l-class-active |
| l-inactive-class |覆盖选项卡默认状态样式 | 替代l-class-inactive |
| l-line-class | 覆盖选项卡选中时装饰线的样式 | 替代l-class-line |
| l-header-line-class | 覆盖选项卡装饰线的样式 | 替代l-class-header-line  |
| l-tab-image-class | 覆盖选项卡图片的样式 | 替代l-class-tabimage |
| l-icon-class |覆盖选项卡图标的样式 | 替代l-class-icon |
| l-badge-class |覆盖徽标的样式 | ---| 

## 已经弃用的外部样式类
以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代

| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
|l-class-active | 覆盖选项卡激活状态样式 | 使用l-active-class替代 |
|l-class-inactive | 覆盖选项卡默认状态样式 | 使用l-inactive-class替代 | 
|l-class-line | 覆盖选项卡选中时装饰线的样式 | 使用l-line-class替代 |
| l-class-header-line | 覆盖选项卡装饰线的样式 | 使用l-header-line-class替代 | 
|l-class-tabimage | 覆盖选项卡图片的样式  | 使用l-tab-image-class替代|
| l-class-icon | 覆盖选项卡图标的样式 | 使用l-icon-class | 




## 选项卡事件 (Segment Events）

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:linchange | `segment`切换的回调事件 | {activeKey:当前激活选项卡的`key`,currentIndex:当前激活选项卡的索引 | - |

<RightMenu />