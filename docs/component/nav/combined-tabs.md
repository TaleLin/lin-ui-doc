---
title: 混合标签 Combined Tabs
---

# <H2Icon /> 混合标签 Combined Tabs

> 选项卡切换组件升级版，包含上和左切换选项卡。

混合标签需`combined-tabs`和`tabpanel`两个组件关联使用。

`tabpanel`用于设置每一个标签的名称、以及标签下对应的内容；

`combined-tabs` 包裹在所有tabpanel最外层，`combined-tabs`下的所有`tabpanel`属于同一个标签页。

## 等宽标签

默认为等宽标签，当标签数过多时可在`combined-tabs`上设置`scrollable="{{true}}"`开启滚动标签栏。

默认激活的是第一个标签页，通过`combined-tabs`组件上设置`active-key={{key}}`配置初始状态时激活的选项卡。

必须在`tabpanel`组件中传入`tab`、`key`、`sub-tab`、`sub-key`、`slot`属性，其中：

- `tab` 是混合标签栏横向显示的文字；

- `key` 是混合标签栏横向的标识，对应`combined-tabs`中的`active-key`；

- `sub-tab` 是混合标签栏竖向显示的文字；

- `sub-key` 是混合标签栏竖向的标识；

- `slot` 受小程序的限制，必须传属性`slot`且值的内容与`key`保持一致；

- `tabpanel`标签中包裹的内容为标签栏对应的内容。


## 标签动画

在`combined-tabs`上设置`animated="{{true}}"`开启标签页切换动画，默认不开启。

## 标签初始样式

- 标签栏位置在顶部和底部时的默认高度为`80rpx`，宽度等分，开启`scrollable`时，最小宽度为`160rpx`;
- 标签栏位置在左边或右边时，默认宽度为`160rpx`,高度等分,开启`scrollable`时，最小高度为`80rpx`;
- 可通过`l-header-class`、`l-active-class`、`l-inactive-class`覆盖默认标签栏样式。


## 混合标签属性

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| active-key | 默认激活tabs的key | String | - | 默认为第一个 |
| animated  | 是否使用动画切换标签 | Boolean | `false` |
| scrollable | 是否滚动标签栏 | Boolean | `false` | - |
| active-color | 设置激活状态标签的文本颜色 | String | 表示颜色的是16进制 | - |
| inactive-color | 设置未激活状态标签的文本和颜色 | String | 表示颜色的是16进制 | - |
| has-line | 设置是否显示标签下的装饰线 | Boolean | - | `true` |


## 混合标签外部样式类
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-header-class | 外部样式类，覆盖标签头部整体样式 | 取代l-class-header |
| l-active-class | 外部样式类，覆盖标签激活状态样式 | 取代l-class-active |
| l-inactive-class | 外部样式类，覆盖标签默认状态样式 | 取代l-class-inactive | 
| l-line-class | 外部样式类，覆盖标签选中时装饰线的样式 | 取代l-class-line |
| l-content-class | 外部样式类，覆盖内容区域的样式 | - |


## 已经弃用的外部样式类
以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。

| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class-header | 外部样式类，覆盖标签头部整体样式 |  请使用l-header-class替代 |
| l-class-active | 外部样式类，覆盖标签激活状态样式 |  请使用l-active-class替代 |
| l-class-inactive |外部样式类，覆盖标签默认状态样式 |  请使用l-inactive-class替代 |
| l-class-line | 外部样式类，覆盖标签选中时装饰线的样式 |  请使用l-line-class替代 |


## 标签页属性

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| key | 对应 `active-key`，必填 | String	| - | - |
| tab | 选项卡头显示文字 | String| - | - |
| sub-key |混合选项卡竖向key | String	| - | - |
| sub-tab | 混合选项卡竖向显示文字 | String| - | - |
| slot | `key`一致，有`sub-key`时则与`sub-key`保持一致，必填 | String| - | - |


## 混合标签事件

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:linchange | `tab` 切换的回调事件 | 当前横向激活标签页`activeKey` 、`currentIndex` ，竖向标签页的`subCurrentIndex` 、`activeSubKey` , | - |


<RightMenu />
