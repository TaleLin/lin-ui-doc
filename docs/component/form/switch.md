---
title: 开关 Switch
---

# <H2Icon /> 开关 Switch

> 用于在打开和关闭状态之间进行切换。

## 基础案例

### 示例代码

```wxml
<l-switch />
```

## 设置选中颜色及大小

可以通过 `color`、`select-color` 设置关闭和打开后的颜色。

通过 `size` 属性设置 `switch` 组件的大小。

### 示例代码

```wxml
<l-switch size="50rpx" color="#ccc" select-color="#34BFA3"/>
```

## 设置禁用

当我们需要禁用时只需要设置为 `disabled` 即可。

### 示例代码

```wxml
<l-switch disabled />
```

## 自定义打开或关闭的值

我们可以通过 `checked` 属性设置开关的默认状态

默认关闭时值为 `false`，打开时值为 `true`，通过 `active-value` 和 `inactive-value` 可以改变它们的值。

### 示例代码

```wxml
<l-switch checked="{{ customValue }}" active-value="{{ 1 }}" inactive-value="{{ 0 }}" bind:linchange="onChange"/>
```

## 开关组件属性

| 参数           | 说明           | 类型    | 可选值 | 默认值  |
| :------------- | :------------- | :------ | :----- | :------ |
| checked        | 开关选中状态   | Boolean | ---    | false   |
| size           | 开关尺寸       | String  | ---    | 38rpx   |
| disabled       | 是否为禁用状态 | Boolean | ---    | false   |
| color          | 关闭时的背景色 | String  | ---    | #FFF    |
| select-color   | 打开时的背景色 | String  | ---    | #3963BC |
| active-value   | 打开时的值     | Any     | ---    | true    |
| inactive-value | 关闭时的值     | Any     | ---    | false   |

## 开关组件外部样式类

| 外部样式类名     | 说明                           | 备注 |
| :--------------- | :----------------------------- | :--- |
| l-class          | 设置 switch 的外部样式类       | ---  |
| l-disabled-class | 设置 switch 禁用时的外部样式类 | ---  |

## 单项选择器事件

| 事件名称       | 说明               | 返回值                                                          | 备注 |
| :------------- | :----------------- | :-------------------------------------------------------------- | :--- |
| bind:linchange | 切换 switch 时触发 | 选中项发生变化时触发 `linchange` 事件，event.detail = { value } | -    |

<RightMenu />
