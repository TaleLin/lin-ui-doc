---
title: 轻提示 Toast
---
<RightMenu />

# <H2Icon /> 轻提示 Toast
:::tip 组件特性
- 支持[开放函数](#开放函数)
:::

Toast 组件常用于在页面中展示重要的提示信息。
##  无文字基本类型

提示框可通过设置`show `属性为`true`、`false` 来控制显示和隐藏，并且在不设置`image` 和 `icon` 的情况下，只会显示文本内容。

### 示例代码
```wxml
<!-- 单行文本 -->
<l-toast
  show="{{true}}"
  title="这是一条基础提示框"
/>

<!-- 多行文本 -->
<l-toast
  show="{{true}}"
  title="这是一条基础提示框，这是一条基础提示框"
/>

```

如下图：

:::img
![height=150](/screenshots/toast/2.png)
:::

## icon + 文本内容的提示框

当我们遇到有一些场景需要icon+文字的提示框时，可以通过设置`icon` 来实现，同时，还可以设置 `size`和`color` 来控制icon图标的大小和颜色。
<br />
::: tip 注意事项 
 * 设置`icon` 为 `success`、`loading`、`error` 时，显示效果如下图所示。
 * 当设置 `icon` 为其他值时，默认显示白色，
:::

### 示例代码

```wxml
<!-- 显示 success 的提示框 -->
<l-toast
  show="{{true}}"
  icon="success"
  title="成功提示框"
/>
```
:::img
![height=150](/screenshots/toast/3.png)
:::

## 自定义图片的提示框

当`icon` 属性不能满足我们的需求时，我们还可以通过设置`image` 来自由的定义显示的图片内容，只需要在`image`属性里传入有效的图片路径即可。
<br />

::: tip 注意事项
 * `image` 的权重高于 `icon`，所以当设置了 `image` 时，`icon` 不显示。
:::

### 示例代码
```wxml
<l-toast
  show="{{true}}"
  image="path/to/img.png"
  title="图片提示框"
/>
```

:::img
![height=150](/screenshots/toast/4.jpg)
:::


## 更改文字的位置

`toast` 默认是列式布局（图标在上，文字在下），但是有时候会需要提示的图标居左，文字居右；或者文字居左，图标居右显示。
<br />
这时，我们可以通过设置 `placement` 属性来完成，`placement`可选值为`top / left / right / bottom ` ，默认值是 `bottom`。
::: tip 注意事项
 * 当 `icon` 或者 `image` 为空时，设置 `placement` 不生效。
:::

### 示例代码
```wxml
<l-toast
  show="{{true}}"
  icon="time"
  title="自定义提示框"
  placement="right"
/>
```
:::img
![height=150](/screenshots/toast/5.jpg)
:::


## 提示框属性

| 参数       | 说明                                   | 类型    | 可选值                                                                    | 默认值 |
| :--------- | :------------------------------------- | :------ | :------------------------------------------------------------------------ | :----- |
| show       | 控制提示框的显示                       | Boolean | true/false                                                                | false  |
| title      | 提示框的文本内容                       | String  |                                                                           |        |
| icon       | icon图标的名字                         | String  | 参见 [Icon](http://doc.mini.talelin.com/component/basic/icon.html) 可选值 |        |
| icon-size  | icon图标的大小                         | String  | ---                                                                       | 60     |
| icon-color | icon图标的颜色                         | String  | ---                                                                       | #fff   |
| image      | 图片的有效路径，支持本地路径和网络路径 | String  |                                                                           |        |
| placement  | 文字的显示方位                         | String  | top/left/right/bottom                                                     | bottom |
| duration   | 提示框显示的时长                       | Number  |                                                                           | 1500   |
| zIndex     | 控制提示框的z-index层级                | Number  |                                                                           | 999    |
| mask       | 是否显示透明蒙层，防止触摸穿透         | Boolean | true/false                                                                | false  |
| offsetX    | 设置提示框向右的偏移量                 | Number  | -                                                                         | 0      |
| offsetY    | 设置提示框向下的偏移量                 | Number  | -                                                                         | 0      |

::: tip 注意事项 
* `image` 的权重大于 `icon` ，当设置`image`时， `icon`不生效
* `center` 设置为`false`的时候，提示框偏底部显示，默认居中显示。
:::

## 提示框外部样式类

| 参数          | 说明                          | 备注 |
| :------------ | :---------------------------- | :--- |
| l-class       | 覆盖toast整体的外部样式类     | ---  |
| l-bg-class    | 覆盖背景部分的外部样式类      | ---  |
| l-image-class | 覆盖toast图片部分的外部样式类 | ---  |
| l-icon-class  | 覆盖toast图标部分的外部样式类 | ---  |

## icon 参数说明

| 属性值  | 说明                                                                      | 类型   |
| :------ | :------------------------------------------------------------------------ | :----- |
| success | 显示绿色的`success` 图标                                                  | String |
| error   | 显示红色的 `error` 图标                                                   | String |
| loading | 显示白色的的 `loading` 图标                                               | String |
| 其他值  | 参见 [Icon](http://doc.mini.talelin.com/component/basic/icon.html) 可选值 | String |

## [开放函数](https://doc.mini.talelin.com/start/open-function.html)
| 函数名           | 说明       | 支持版本  | 备注                                                |
| :--------------- | :--------- | :---- | :-------------------------------------------------- |
| linShow(optinos) | 显示 Toast | 0.9.3 | optinos 为 Object 类型，属性为 Toast 支持的所有属性 |
| linHide          | 隐藏 Toast | 0.9.3 |                                                     |
