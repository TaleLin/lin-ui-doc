---
title: 搜索栏 SearchBar
---

# <H2Icon /> 搜索栏 SearchBar

> 搜索组件的搜索栏。

## 基础用法

通过`placeholder`属性设置搜索框占位符。

通过`cancel-text`属性更改输入框后面的文字内容，默认值为`取消`。

:::img
![height=100](/screenshots/search-bar/1.png)
:::

### 示例代码

```wxml
  <l-search-bar placeholder="搜索"/>
```

## 更改搜索框形状及背景颜色

通过`shape`属性设置搜索框形状。

通过`bg-color`属性设置搜索框背景颜色。

:::img
![height=100](/screenshots/search-bar/2.jpg)
:::

### 示例代码

```wxml
  <l-search-bar placeholder="搜索"
                bg-color="#f6f6f6"
                shape="circle"/>
```

## 设置地址

通过`front-text`属性设置搜索框前的地址。

:::img
![height=100](/screenshots/search-bar/3.png)
:::

```wxml
  <l-search-bar placeholder="搜索"
                bg-color="#f6f6f6"
                shape="circle"
                front-text="北京"/>
```

### 是否显示取消文字

通过`show-cancel`属性设置是否显示取消文字。

:::img
![height=100](/screenshots/search-bar/4.png)
:::

### 示例代码

```wxml
  <l-search-bar placeholder="搜索"
                show-cancel="{{false}}"/>
```

### 设置插槽内容

设置`slot='before'`可自定义搜索框前部的内容。

设置`slot='after'`可自定义搜索框后面的内容。

设置`slot='icon'`可自定义搜索框图标部分的内容。需同时设置`custom`属性为`true`。

### 示例代码

```wxml
  <l-search-bar placeholder="搜索">
    <!-- 此处是插槽内容 -->
    <view name="before"/>
  </l-search-bar>
  <l-search-bar placeholder="搜索">
    <!-- 此处是插槽内容 -->
    <view name="after"/>
  </l-search-bar>
  <l-search-bar placeholder="搜索" custom>
    <!-- 此处是插槽内容 -->
    <view name="icon"/>
  </l-search-bar>
```

## 搜索栏属性

| 参数              | 说明                                         | 类型    | 可选值         | 默认值   |
| :---------------- | :------------------------------------------- | :------ | :------------- | :------- |
| placeholder       | 设置搜索输入框占位符内容                     | String  | ---            | ---      |
| cancel-text       | 设置搜索输入框后面的文字                     | String  | ---            | 取消     |
| show-cancel       | 设置是否显示取消文字                         | Boolean | ---            | true     |
| shape             | 设置搜索框形状                               | String  | circle/primary | circle   |
| icon              | 设置图标                                     | String  | ---            | research |
| icon-color        | 设置图标颜色                                 | String  | ---            | #bdbdbd  |
| icon-size         | 设置图标大小                                 | String  | ---            | 28       |
| custom            | 是否自定义图标部分内容                       | Boolean | ---            | false    |
| bg-color          | 设置搜索框背景颜色                           | String  | ---            | #f3f3f3  |
| front-text        | 设置搜索框前的文字                           | String  | ---            | ---      |
| focus             | 获取焦点                                     | Boolean | true/false     | false    |
| type              | input 的类型                                 | String  | ---            | ---      |
| value             | 输入框的初始内容                             | String  | ---            | ---      |
| clear             | 是否显示清除按钮                             | Boolean | true/false     | true    |
| maxlength         | 最大输入长度，设置为 -1 的时候不限制最大长度 | Number  |                | 140      |
| placeholder-style | 设置输入框占位文本的内联样式                 | String  |                |

## 搜索栏事件

| 事件名称         | 说明                       | 返回值             | 备注 |
| :--------------- | :------------------------- | :----------------- | :--- |
| bind:lincancel   | 点击取消文字触发           | -                  | -    |
| bind:linchange   | 键盘输入时触发             | 输入框当前值 value | -    |
| bind:linfocus    | 输入框聚焦时触发           | 输入框当前值 value | -    |
| bind:linblur     | 输入框失去焦点时触发       | 输入框当前值 value | -    |
| bind:linconfirm  | 点击完成按钮时触发         | 输入框当前值 value | -    |
| bind:linclear    | 点击清除按钮时触发         | -                  | -    |
| bind:linfronttap | 点击`front-text`文字时触发 | -                  | -    |

## 搜索栏插槽

| 插槽名称 | 说明                   | 备注                       |
| :------- | :--------------------- | :------------------------- |
| before   | 自定义输入框左边的内容 | ---                        |
| after    | 自定义输入框右边的内容 | ---                        |
| icon     | 自定义图标的内容       | 需设置 custom 为`true`生效 |

## 搜索栏外部样式类

| 外部样式类名        | 说明                               | 备注 |
| :------------------ | :--------------------------------- | :--- |
| l-class             | 设置输入框容器的样式类（灰色区域） | ---  |
| l-container-class   | 设置输入框整体的样式类             | ---  |
| l-icon-class        | 设置图标的样式类                   | ---  |
| l-input-class       | 设置输入框的样式类                 | ---  |
| l-cancel-class      | 设置取消文字的样式类               | ---  |
| l-placeholder-class | 设置输入框占位符的样式类           | ---  |

<RightMenu />
