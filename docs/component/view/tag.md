---
title: 标签 Tag
---

# <H2Icon/> 标签 Tag

> 关于标记或选择的标签。

::: tip
建议tag组件的父容器使用`flex`布局。
:::

## 标签形状

通过`shape`属性设置标签形状为`square`（方形标签）或`circle`（半圆标签）。默认形状为`square`(默认)。

:::img
![height=100](/screenshots/tag/1.png)
:::

### 示例代码

```wxml
<l-tag shape="square">方形标签</l-tag>
<l-tag shape="circle">半圆标签</l-tag>
```

## 标签大小

通过`size`属性设置标签大小为`super-mini`(超小)、`mini`（小）、`medium`（中）、`large`（大）。默认值为`mini`(默认)。

:::img
![height=100](/screenshots/tag/2.png)
:::

### 示例代码

```wxml
<l-tag size="mini">小标签</l-tag>
<l-tag size="medium">中标签</l-tag>
<l-tag size="large">大标签</l-tag>
```

## 标签类型

通过`type`属性设置标签的类型。默认值为`touch`。

标签的类型第一类为`touch`，这类标签主要便于点击，同时具有最小宽度，例如电商小程序`sku`的场景。

第二类为`reading`，这类标签主要用于展示阅读，宽度由文本长度所决定，例如展示商品的标签。

### 示例代码

```wxml
<l-tag size="medium" type="touch">标签</l-tag>
<l-tag size="mini" type="reading">标签</l-tag>
```

## 标签标识

通过`name`或`cell`属性设置标签的标识。

::: tip
标签标示作为tag的属性随点击事件会返回对应的标示。开发者可根据不同的标示类型选择使用`name`或者`cell`。
:::

### 示例代码

```wxml
<l-tag name="name" size="medium" type="touch">标签</l-tag>
```

## 设置标签高度

通过`height`属性设置标签高度。单位为rpx。

### 示例代码
```wxml
<l-tag height="60">标签</l-tag>
```

## 镂空标签

通过`plain`属性设置标签是否为镂空标签。属性值为`true`时为镂空标签。默认值为`false`。

:::img
![height=100](/screenshots/tag/3.png)
:::

### 示例代码

```wxml
<l-tag plain="{{true}}">镂空标签</l-tag>
```

## 标签颜色

标签为实心标签时通过`bg-color`属性设置标签背景颜色，`font-color`属性设置文字颜色。

标签为镂空标签时通过`font-color`属性设置字体颜色（镂空标签边框颜色与字体颜色一致）。

实心标签`bg-color`默认值为主题色（theme-color），`font-color`默认值为#ffffff。

镂空标签`font-color`默认值为主题色（thmen-color）。

:::img
![height=50](/screenshots/tag/4.png)
:::

### 示例代码

```wxml
<l-tag bg-color="#333">自定义标签颜色</l-tag>
<l-tag plain="{{true}}" font-color="#333">自定义标签颜色</l-tag>
```

## 图标标签

通过`icon`属性设置标签文字前的icon名称。

通过`icon-size`和`icon-color`属性设置icon大小和颜色。其他关于icon用法可参考[icon组件文档](http://doc.mini.talelin.com/component/basic/icon.html)。

通过`location`属性可设置icon的位置，默认值为`left`。

通过`image`属性设置标签文字前的图片。`l-image-class`自定义设置图片样式。

:::img
![height=100](/screenshots/tag/5.png)
:::

```wxml
<l-tag icon-size="20" icon="warning">图标标签</l-tag>
<l-tag icon-size="20" icon="warning" location="right">图标标签</l-tag>
<l-tag image="../image.png">图标标签</l-tag>
```

## 标签禁用

通过`disable`属性设置标签的禁用。

### 示例代码

```wxml
<l-tag disable="{{true}}">禁用标签</l-tag>
```

## 标签是否可选中

通过`select`属性设置标签是否可以选中，属性值为`true`时为标签为选中状态，设置`false`为未选中状态。

通过`l-select-class`属性传入外部样式类更改标签选中时的样式。

::: tip
仅存在选中和未选中两种状态时建议使用`select`属性进行样式的切换，如果状态较为复杂，建议使用`l-class`进行手动切换样式。
:::

### 示例代码

```wxml
<l-tag plain="{{true}}" select="{{select}}" l-select-class="select" bindtap="onSelect">可选中标签</l-tag>
```

```js
Page({
  data:{
    select: fasle
  },
  onSelect(){
    this.setData({
      select: true
    })
  }
})
```

```wxss
  /* wxss文件 */
  .select{
    background:#333 !important;
    color:#fff !important;
  }
```

## 标签属性

| 参数       | 说明             | 类型    | 可选值                       | 默认值 |
| :--------- | :--------------- | :------ | :--------------------------- | :----- |
| size       | 标签尺寸         | String  | large/medium/mini/super-mini | medium |
| shape      | 标签形状         | String  | square/circle                | square |
| type       | 标签类型         | String  | reading/touch                | touch  |
| disable    | 标签是否禁用     | Boolean | -----                        | false  |
| plain      | 标签是否镂空     | Boolean | -----                        | false  |
| bg-color   | 实心标签背景颜色 | String  | -----                        | ---    |
| font-color | 镂空标签字体颜色 | String  | -----                        | ---    |
| name       | 标签标识         | String  | -----                        | ---    |
| cell       | 标签标识         | Object  | -----                        | ---    |
| select     | 标签是否可选中   | Boolean | -----                        | false  |
| icon       | icon名称         | String  | -----                        | ---    |
| icon-size  | icon大小         | Number  | -----                        | ---    |
| icon-color | icon颜色         | String  | -----                        | ---    |
| image      | 图片路径         | String  | -----                        | ---    |
| location   | 图标位置         | String  | left/right                   | left   |


## 标签外部样式类

| 外部样式类名   | 说明                           | 备注 |
| :------------- | :----------------------------- | :--- |
| l-class        | 覆盖未选中标签区域的外部样式类 | ---  |
| l-select-class | 覆盖已选中标签区域的外部样式类 | ---  |
| l-image-class  | 覆盖自定义图片区域的外部样式类 | ---  |

## 标签插槽

| 插槽名称 | 说明               | 备注 |
| :------- | :----------------- | :--- |
| -        | 自定义标签显示内容 | ---  |

## 标签事件

| 事件名称    | 说明                                              | 返回值             | 备注     |
| :---------- | :------------------------------------------------ | :----------------- | :------- |
| bind:lintap | 点击标签时触发的事件,返回当前标签的标示和选中状态 | {name,cell,select} | -------- |

<RightMenu />
