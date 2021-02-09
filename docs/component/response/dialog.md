---
title: 模态框 Dialog
---

<RightMenu />

# <H2Icon /> 模态框 Dialog
> 保留当前页面，弹出一个对话框，告知用户并承载相关操作。

:::tip 组件特性
- 支持[开放函数](#开放函数)
:::

## 模态框类型

模态框可通过设置`type`属性为`alert`或者`confirm`来控制模态框的类型为 `提示框` 和 `确认框` ，不设置则显示状态默认为`alert`。


### 示例代码
```wxml
<!-- 提示框 -->
<l-dialog 
  show="{{true}}"
  type="alert"     
  title="标题"
  content="这个是提示框" />

<!--确认框 -->
<l-dialog 
  show="{{true}}"
  type="confirm"     
  title="标题"
  content="这个是确认框" />
```
:::img
![height=150](/screenshots/dialog/1.jpg)
:::

## 无标题的模态弹框

模态框可以通过设置 `show-title` 属性为`true`、`false`来控制组件标题的显示和隐藏，不设置则显示状态默认为`true`。

### 示例代码
```wxml
<!-- 无标题提示框 -->
<l-dialog 
  show="{{true}}"
  type="alert"  
  show-title="{{false}}"
  title="标题"
  content="这个是无标题提示框" />

<!-- 无标题确认框 -->
<l-dialog 
  show="{{true}}"
  type="confirm"  
  show-title="{{false}}"
  title="标题"
  content="这个是无标题确认框" />
```
:::img
![height=150](/screenshots/dialog/2.jpg)
:::

## 修改按钮文字和颜色

模态框的按钮支持 `文本内容` 和 `字体颜色` 的修改， 设置 `confirm-text` 和 `cancel-text` 可以更改模态框两个按钮的文本， `confirm-color` 和 `cancel-color` 则可以更改他们的字体颜色。

::: tip 注意事项
* 提示框只需设置 `confirm-text`和  `confirm-color`。
:::

### 示例代码
```wxml
<l-dialog 
  show="{{true}}"
  type="confirm"  
  title="提问"
  content="PHP是最好的语言吗？"
  confirm-text="yes"
  confirm-color="#f60"
  cancel-text="no~"
  cancel-color="#999" />
```
:::img
![height=150](/screenshots/dialog/3.jpg)
:::

## 设置子节点

我们在使用的组件的时候，可以根据使用场景,自由的在遮罩层组件内插入 `image`、 `view`、 `text` 等子节点，当然，你也可以在其中插入 `自定义组件` 。

::: tip 注意事项
* 不建议在组件中传入多个子节点。
* 子节点默认是垂直居中显示。
:::

### 示例代码
```wxml
<l-dialog 
  show="{{true}}"
  type="confirm"  
  show-title="{{false}}"
  title="标题"
>
  <image class='dio-img' src='/path/to/example.gif'></image>
</l-dialog>

```
:::img
![height=200](/screenshots/dialog/4.jpg)
:::

## 锁定

模态框设置 `locked` 属性为 `false` 时，点击背景可隐藏模态框组件，默认为 `true` ， 即点击背景无法关闭该组件。

### 示例代码
```wxml
<l-dialog 
  show="{{true}}"
  type="alert"  
  show-title="{{false}}"
  locked="{{locked}}"
  title="标题"
  content="这个是提示框" 
>
  </l-dialog>
```



## 模态框参数

| 参数          | 说明                 | 类型    | 可选值        | 默认值   |
| :------------ | :------------------- | :------ | :------------ | :------- |
| show          | 控制模态框的显示     | Boolean | true/false    | false    |
| type          | 设置模态框的类型     | String  | alert/confirm | alert    |
| title         | 设置模态框的标题     | String  | -----         | 提示     |
| title-color   | 设置标题的颜色       | String  |               | #45526b; |
| content       | 设置模态框的内容     | String  | -----         |          |
| locked        | 设置背景是否为锁定态 | Boolean | -----         | true     |
| show-title    | 是否显示模态框的标题 | Boolean | true/false    | true     |
| confirm-text  | 确定按钮的文本       | String  |               | 确定     |
| confirm-color | 确定按钮的颜色       | String  |               | #3683d6  |
| cancel-text   | 取消按钮的文本       | String  |               | 取消     |
| cancel-color  | 取消按钮的颜色       | String  |               | #45526b  |
| is-hover      | 是否显示hover效果    | Boolean | ---           | true     |


## 模态框外部样式类

| 外部样式类名    | 说明                           | 备注 |
| :-------------- | :----------------------------- | :--- |
| l-class         | 设置dialog的外部样式类         | --   |
| l-title-class   | 设置dialog头部的外部样式类     | --   |
| l-content-class | 设置dialog内容的外部样式类     | --   |
| l-cancel-class  | 设置dialog取消按钮的外部样式类 | --   |
| l-confirm-class | 设置dialog确定按钮的外部样式类 | --   |
| l-bg-class      | 设置dialog遮罩的外部样式类     | --   |

<!-- 'l-class', 'l-title-class', 'l-content-class', 'l-confirm-class', 'l-cancel-class', 'l-bg-class' -->

## 模态框事件

| 事件名称        | 说明                   | 返回值    | 备注     |
| :-------------- | :--------------------- | :-------- | :------- |
| bind:lintap     | 当点击背景时触发的事件 | --------- | -------- |
| bind:linconfirm | 当点击确定时触发的事件 | confirm   | -------- |
| bind:lincancel  | 当点击取消时触发的事件 | cancel    | -------- |

## [开放函数](https://doc.mini.talelin.com/start/open-function.html)
| 函数名           | 说明       | 备注                                                 |
| :--------------- | :--------- | :--------------------------------------------------- |
| linShow(options) | 显示模态框 | optinos 为 Object 类型，属性为 Dialog 支持的所有属性 |
| linHide()        | 隐藏模态框 |                                                      |