---
title: 校验规则 Rules
---

# <H2Icon /> 校验规则 Rules

> 表单组件的校验规则

## 基本用法

校验的功能需要配合林间有风提供的表单组件使用。

在表单项上设置 `rules` 属性，`rules` 接收一个数组或者对象；

当失去焦点时触发校验事件，可通过 `linvalidate` 事件监听校验结果；

此外，还提供了三种错误提示的方式：`message` 、 `toast` 和 `text` ，通过设置 `tipType`的值为 `message` 或 `toast` 或 `text` 开启提示信息。

### 示例代码

```wxml
<l-input label="邮箱" placeholder="请输入邮箱" label-width="170" 
    name="email" rules="{{emailRules}}" />
<l-input label="用户名" placeholder="请输入用户名" label-width="170" 
    name="user" rules="{{userRules}}" />
```

```js
 data: {
     userRules: [{
        required: true
      },
      {
        min: 2,
        max: 5,
        message: '长度需要在2-3个字符之间'
      }
    ],
    emailRules: {
        type: 'email',
        required: true
  }
},
```

## 校验规则属性 （Rules Attributes）

| 参数       | 说明                         | 类型    | 可选值 | 默认值   |
| :--------- | :--------------------------- | :------ | :----- | :------- |
| enum       | 枚举类型                     | String  | -      | -        |
| len        | 字段长度                     | Number  | -      | -        |
| max        | 最大长度                     | Number  | -      | -        |
| message    | 校验错误提示文案             | String  | -      | -        |
| min        | 最小长度                     | Number  | -      | -        |
| pattern    | 正则表达式校验               | String  | -      | -        |
| required   | 是否必选                     | Boolean | -      | `false`  |
| type       | 内建校验类型                 | String  | 见下表 | `string` |
| whitespace | 必选时，空格是否会被视为错误 | Boolean | -      | `false`  |

更多高级用法可研究 [async-validator](https://github.com/yiminghe/async-validator)

::: tip 
提示：`pattern`属性的值需是 `String`，传入正则时，微信小程序不识别，会导致传入的 `pattern` 是个空的对象。
:::

## 内置校验类型 （Type Value）

| 参数    | 说明                         |
| :------ | :--------------------------- |
| string  | 字符串                       |
| number  | 数字                         |
| boolean | 布尔                         |
| method  | 方法                         |
| regexp  | 正则                         |
| integer | 整数                         |
| float   | 浮点数字                     |
| array   | 数组                         |
| object  | 对象                         |
| enum    | 枚举类型，值必须存在 enum 中 |
| date    | 日期                         |
| url     | 网址                         |
| email   | 邮箱                          |
| hex     | 16进制                        |

## 监听校验事件

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:linvalidate | 监听校验结果 | `{error,isError}` | - |

<RightMenu />
