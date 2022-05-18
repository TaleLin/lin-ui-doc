---
title: 数量选择器 Counter
---

# <H2Icon /> 数量选择器 Counter

> 本组件从v0.6.4版本更名为Counter

## 基础用法

通过`count`属性设置起始数量，默认值为`1`。

通过`min`属性设置最小数量，默认值为`1`。

通过`max`属性设置最大数量，默认值为`10000`。

:::img
![height=100](/screenshots/counter/1.png)
:::

### 示例代码

```wxml
<l-counter count="1" min="1" max="10"/>
```

## 设置数量增减步长

通过`step`属性设置数量增减步长，默认值为`1`。

:::img
![height=100](/screenshots/counter/2.png)
:::

### 示例代码

```wxml
<l-counter count="1" min="1" max="10" step="2"/>
```

## 设置禁用状态

通过`disabled`属性设置数量选择器禁用状态。默认值为`false`。

:::img
![height=100](/screenshots/counter/3.png)
:::

### 示例代码

```wxml
<l-counter count="1" min="1" max="10" disabled="{{true}}"/>
```
## 整数模式

组件默认支持小数输入，如果你不想让用户输入小数，可以将round—float设置为true。当用户输入小数时，组件将自动取整
注意：此种取整模式为四舍五入

## 数量选择器属性

:::tip
1. 如果需通过`l-count-class`或者`l-class`修改`height`,请同时设置`line-height`和`min-height`并与`height`大小保持一致。
3. `l-disabled-class`与`l-symbol-class`为互斥关系。
:::



| 参数   | 说明 | 类型 | 可选值 | 默认值 |
|:----|:----|:----|:----|:----|
| count | 设置起始数量 | Number | --- | 1 |
| min | 设置最小数量 | Number | --- | 1 |
| max | 设置最大数量 | Number | --- | 10000 |
| step | 设置数量增减步长 | Number | --- | 1|
| disabled | 设置禁用状态 | Boolean | --- | false |
| is-hover | 是否显示hover效果 | Boolean | --- | true |
| round-float | 开启整数模式 | Boolean | --- | false |

## 数量选择器外部样式类

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 设置数量选择器整体容器的外部样式类 |  --- |
| l-symbol-class | 设置数量选择器加（减）号容器的外部样式类 | --- |
| l-disabled-class | 设置数量选择器数字容器禁用状态的外部样式类 | --- |
| l-count-class | 设置数量选择器数字容器的外部样式类 | --- |

## 数量选择器事件

| 事件名称        | 说明               | 返回值          | 备注 |
| :--------- | :----------------- | :----- | :--------------- |
| bind:lintap | 点击加（减）号及数字输入框失去焦点触发的事件 | {count,type} | type值为`reduce`、`add`和`blur` |
| bind:linout | 数字超出可选范围触发的事件 | {type,way} | type值为`overflow_min`、`overflow_max`,way值为`icon`、`input`、`parameter`|
| bind:linchange | 数字改变时触发的事件 | {count} | |
| bind:lininput | 输入数字时触发的事件 | {value, cursor, keyCode} | 该事件在 linchange 之前触发 |

::: tip
way值介绍：
1. `icon`为点击加（减）号触发的超出事件。
2. `input`为输入框数字超出事件。
3. `parameter`为输入的参数导致的超出事件。
:::


<RightMenu />
