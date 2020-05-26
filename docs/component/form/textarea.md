---
title: 文本域 Textarea
---

# <H2Icon /> 文本域 Textarea

> 基于原生组件 Textarea 封装，多行输入框组件，根据是否有内容、是否聚焦有折叠、展开两种状态。

## 基础案例

Textarea 可以通过`placeholder` 来显示自定义的占位文本。

### 示例代码

```wxml
<l-textarea  placeholder="说说你的想法吧..."  />
```

## 显示文本计数器

当我们通过 `maxlength` 设置了输入文本的最大长度后，还可以通过设置 `indicator` 为 `true` 来显示文本计数器，如 `0/140`,

::: tip 注意事项

- 当设置 `maxlength`为-1 时， `indicator`属性不再生效
  :::

### 示例代码

```wxml
<l-textarea indicator="{{true}}" maxlength="140" placeholder="说说你的想法吧..."  />
```

## 自动增高

当设置 `auto-height` 为 `true` 时， `Textarea` 组件会根据行数的变化自动增高，原始高度为`88rpx`。

### 示例代码

```wxml
<l-textarea auto-height="{{true}}"  />
```

## 校验规则

设置表单校验是为了在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，我们可以通过 `rules` 属性来设置相对应的校验规则。

### 示例代码

```wxml
<l-textarea  rules="rules" />
```

## 设置禁用

当我们需要将表单项禁用时，设置 `disabled` 为 `true` 即可。

### 示例代码

```wxml
<l-textarea disabled="{{true}}"  placeholder="禁止输入" />
```

## 文本域属性（Textarea Attributes）

| 参数              | 说明                                                                                       | 类型    | 可选值             | 默认值 |
| :---------------- | :----------------------------------------------------------------------------------------- | :------ | :----------------- | :----- |
| value             | 输入框的值                                                                                 | String  |                    |        |
| border             | 控制文本区域border显示隐藏                                                                        | Boolean |true/false       |     true   |
| placeholder       | 占位文本                                                                                   | String  |                    |        |
| focus             | 获取焦点                                                                                   | Boolean | true/false         | false  |
| indicator         | 显示文字长度的计数器                                                                       | Boolean | true/false         | true   |
| maxlength         | 最大输入长度，设置为 -1 的时候不限制最大长度                                               | Number  |                    | 140    |
| auto-height       | 是否自动增高，设置 auto-height 时，style.height 不生效                                     | Boolean | true/false         | false  |
| rules             | 输入内容的校验规则                                                                         | object  |                    | --     |
| fixed             | 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 `fixed` 为 `true| object` |         | --                 |
| disabled          | 设置是否禁用                                                                               | Boolean | true/false         | false  |
| placeholder-style | 设置输入框占位文本的内联样式                                                               | String  |                    |
| tip-type          | 校验错误提醒方式                                                                           | String  | toast/message/text | -      |


## 文本域外部样式类
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 设置 Textarea 组件的外部样式类 | |   
| l-error-text-class| tipType 为 text 时，错误提示信息外部样式类| 取代l-error-text| 
|l-inner-class|文本输入区域的外部样式类	|	|

## 已经弃用的外部样式类
以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。

| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-error-text |tipType 为 text 时，错误提示信息外部样式类| 请使用 l-error-text-class替代 |                                                                                                             

## 文本域事件 (Textarea Events）

| 事件名称        | 说明                 | 返回值             | 备注 |
| :-------------- | :------------------- | :----------------- | :--- |
| bind:lininput  | 键盘输入时触发       | 输入框当前值 value | -    |
| bind:linfocus   | 文本域聚焦时触发     | 输入框当前值 value | -    |
| bind:linblur    | 文本域失去焦点时触发 | 输入框当前值 value | -    |
| bind:linconfirm | 点击完成按钮时触发   | 输入框当前值 value | -    |

<RightMenu />
