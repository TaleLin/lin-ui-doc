---
title: 折叠面板 Collapse
---

# <H2Icon /> 折叠面板 Collapse

> 折叠面板，常见应用场景为折叠菜单、优惠券详情展示

折叠面板需要`collapse`和`collapse-item`组件关联使用

## 普通模式
折叠面板默认为普通模式。普通模式下，多个`collapse-item`可以同时展开。

<img style="width:50%;" :src="$withBase('/screenshots/collapse/collapse-base-case.gif')" alt="普通模式" />

### 示例代码
```wxml
<l-collapse>
  <l-collapse-item title="Lin UI">
    Lin UI 是基于微信小程序原生语法实现的组件库。遵循简洁，易用的设计规范。
  </l-collapse-item>
  <l-collapse-item title="Lin-CMS">
    Lin-CMS 是林间有风团队经过大量项目实践所提炼出的一套内容管理系统框架。
    Lin-CMS 可以有效的帮助开发者提高 CMS 的开发效率。
  </l-collapse-item>
  <l-collapse-item title="林间有风">
    林间有风是一个团队
  </l-collapse-item>
</l-collapse>
```
## 手风琴模式
通过`type='accordion'`指定折叠面板为手风琴模式。手风琴模式下多个`collapse-item`只能同时展开一个。

<img style="width:50%;" :src="$withBase('/screenshots/collapse/collapse-accordion-case.gif')" alt="手风琴模式" />

### 示例代码
```wxml
<l-collapse type="accordion">
  <l-collapse-item title="Lin UI">
    Lin UI 是基于微信小程序原生语法实现的组件库。遵循简洁，易用的设计规范。
  </l-collapse-item>
  <l-collapse-item title="Lin-CMS">
    Lin-CMS 是林间有风团队经过大量项目实践所提炼出的一套内容管理系统框架。
    Lin-CMS 可以有效的帮助开发者提高 CMS 的开发效率。
  </l-collapse-item>
  <l-collapse-item title="林间有风">
    林间有风是一个团队
  </l-collapse-item>
</l-collapse>
```

## 自定义标题
如果需要更复杂的布局，可以使用slot注入自定义标题

<img style="width:50%;" :src="$withBase('/screenshots/collapse/collapse-custom-title.jpg')" alt="自定义标题" />

```wxml
<l-collapse>
  <l-collapse-item l-body-class="l-body-class" l-title-class="l-title-class" customTitle="{{true}}">
    <!--自定义标题-->
    <view class="title" slot="title">
      <view class="ticket-detail-container">使用规则
        <l-icon name="down" size="16" color="#999"/>
      </view>
      <l-button l-class height="50" size="mini" shape="semicircle" plain="{{true}}">立即使用</l-button>
    </view>
    <text>1、本券一次使用1张限1件商品，自领取日起有效期7天。\n2、本优惠券不与其他优惠同享</text>
  </l-collapse-item>
<l-collapse>
```

## 折叠面板属性（Collapse Attributes）

| 参数 | 说明               | 类型   | 可选值 | 默认值 | 版本号 |
| ---- | ------------------ | ------ | ------ | ------ | ------ |
| type  | 折叠面板类型 | String | normal/accordion      | normal      | -|
| expand-item-id  | 初始状态需要展开的折叠面板子项id（手风琴模式下取数组第一个值） | Array | -      |       |- |

## 折叠面板子项属性（CollapseItem Attributes）

| 参数 | 说明               | 类型   | 可选值 | 默认值 | 版本号 |
| ---- | ------------------ | ------ | ------ | ------ | ------ |
| item-id  | 折叠面板子项id，需要确保唯一性 | String | -      | 折叠面板子项索引值      | -|
| disabled  | 是否禁用折叠面板 | Boolean | -      | false      | -|
| title  | 标题文字 | String | -      |    默认标题   | |
| custom-title  | 是否开启自定义标题区内容（slot注入） | Boolean | -      |    false   | |
| title-color  | 标题可点击时的颜色 | String | -      | #333333      |- |
| title-disabled-color  | 标题不可点击时的颜色 | String | -      | #DEE2E6      | -|
| animation-time  | 内容区域展开动画速度（单位：秒） | Number | -      | 0.3      |- |


## 折叠面板外部样式类（Collapse ExternalClasses）

| 外部样式类名 | 说明                 | 备注 | 版本号 |
| ------------ | -------------------- | ---- | ---- |
| l-class      | 覆盖折叠面板整体样式 | -    | -|

## 折叠面板子项外部样式类（CollapseItem ExternalClasses）

| 外部样式类名 | 说明                 | 备注 | 版本号 |
| ------------ | -------------------- | ---- | ---- |
| l-class      | 覆盖折叠面板子项整体样式 | -    | -|
| l-title-class      | 覆盖折叠面板子项标题样式 | -    | -|
| l-body-class      | 覆盖折叠面板子项内容区样式 | -    | -|

## 折叠面板事件（Collapse Events）

| 事件名称         | 说明                 | 返回值                                       | 备注 | 版本号 |
| ---------------- | -------------------- | -------------------------------------------- | ---- | ---- |
| bind:linfold   | 折叠面板折叠回调事件 | 折叠面板子项id | -    | -|
| bind:linexpand | 折叠面板展开回调事件 | 折叠面板子项id | -    | -|


## 折叠面板子项插槽（CollapseItem Slot）

| Slot名称 | 说明               | 备注                             | 版本号 |
| -------- | ------------------ | -------------------------------- | -------------------------------- |
| title   | 折叠面板标题区域   | -                                | |



<RightMenu />
