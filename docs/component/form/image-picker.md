---
title: 图片选择器 ImagePicker
---

# <H2Icon /> 图片选择器 ImagePicker

> 用于选择需要上传的图片，可自定义需要上传的图片数量。

:::tip 组件特性
- 支持[开放函数](#开放函数)
:::

:::img
![height=200](/screenshots/image-picker/image1.jpg)
:::


## 设置最大值

图片选择器内部可以通过`count`设置最多可以选择的图片张数，默认是9张，没有最大张数的限制，但因根据实际情况合理选择，`linchange`事件能监听到选中图片数量的变化。

### 示例代码

```wxml
<l-image-picker count="9" bind:linchange="onChangeTap" />
```

## 自定义每行图片的数量

图片选择器内部可以通过`size`设置每行图片的数量，默认是3张，可选值为 1 - 10。

### 示例代码

```wxml
<l-image-picker size="4" bind:linchange="onChangeTap" />
```
:::img
![height=100](/screenshots/image-picker/image2.jpg)
:::

## 设置选择图片的质量

通过`size-type`可以设置图片来源，可选值是`original/compressed`，或者二者均填，默认是`['original', 'compressed']`。

:::tip 注意事项
 * `original`表示原图。
 * `compressed`表示缩略图。
:::

### 示例代码
```wxml
<l-image-picker count="9" size-type="compressed" />
```

## 自定义图片添加按钮

通过 `<slot>` 的方式可以自定义`ImagePicker`组件的添加图片部分。

### 示例代码

```wxml
<l-image-picker custom="{{true}}" >
  <view>
    <image src="path/to/img.png" />
  </view>
</l-image-picker>
```
:::img
![height=150](/screenshots/image-picker/image3.jpg)
:::

## 图片选择器属性

| 参数           | 说明                           | 类型          | 可选值                            | 默认值    |
| :------------- | :----------------------------- | :------------ | :-------------------------------- | :-------- |
| urls           | 初始图片链接，仅支持字符串数据 | Array         |                                   | []        |
| cells          | 初始图片链接，对象数组格式     | Array         |                                   | null      |
| count          | 最多可以选择的图片张数         | String/Number |                                   | 9         |
| size           | 每行可显示的个数               | String/Number | 1-9                               | 3         |
| mode           | 图片剪裁、缩放的模式           | String        | 参考官方image组件的mode属性可选值 | aspectFit |
| size-type      | 所选的图片的尺寸               | String        | original/compressed               | original  |
| preview        | 是否可以预览                   | Boolean       | true/false                        | true      |
| remove         | 点击删除按钮是否删除图片       | Boolean       | true/false                        | true      |
| max-image-size | 图片最大限制，单位字节         | Number        |                                   | 10000000  |

::: tip 提示

urls 和 cells 两个属性中仅需选择其一传入即可，两者区别如下：

- 若你的链接为如下**字符串数组**格式，请使用 `urls` 属性

  ```json
  [
      'https://talelin.com/logo1.png',
      'https://talelin.com/logo2.png'
  ]
  ```

- 若你的链接为如下**对象数组**格式，请使用 `cells` 属性

  ```json
  // url 属性名称不可改变，其余部分可随意
  [{
      url:'https://talelin.com/logo1.png',
      name:'桔子'
  },{
      url:'https://talelin.com/logo2.png',
      name:'juzi',
      sex:'男'
  }]
  ```
:::



## 图片选择器外部样式类
| 外部样式类名 | 说明                                | 备注 |
| :----------- | :---------------------------------- | :--- |
| l-class      | 设置ImagePicker的外部样式类         | ---  |
| l-item-class | 设置ImagePicker每个图片的外部样式类 | ---  |


## 图片选择器事件

| 事件名称          | 说明                                         | 返回值                                                                                                                     | 备注                 |
| :---------------- | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| bind:linchange    | 新增图片时触发                               | 选中项发生变化时触发 `linchange` 事件，event.detail = {current: [ 新增项的url信息 ], all: [ 当前urls值 ]}                  | urls格式为字符串数组 |
| bind:linremove    | 移除图片时触发                               | 图片移除时触发 `linremove` 事件，event.detail = {current: 移除项的url信息, all: [ 当前urls值 ], index: 移除项的下标}       | urls格式为字符串数组 |
| bind:linpreview   | 图片被点击时（预览）触发                     | 图片预览触发 `linpreview` 事件，event.detail = {current:[ 当前点击项的url信息 ], all: [ 当前urls值 ], index: 点击项的下标} | urls格式为字符串数组 |
| bind:linclear     | 清除图片全部时触发                           | 图片移除时触发 `linclear` 事件，event.detail = {current: [ 移除项的url信息 ], all: [ 删除前urls值 ]}                       | urls格式为字符串数组 |
| bind:linoversize  | 新增图片大小超过max-image-size设置的值时触发 | event.detail = {all:[当前urls值],oversize:[超过max-image-size限制的图片值],current:[当前值]}                               |
| bind:linremovetap | 点击删除按钮                                 |                                                                                                                            |

<RightMenu />

## [开放函数](https://doc.mini.talelin.com/start/open-function.html)
| 函数名                     | 说明                  | 备注                                                |
| :------------------------- | :-------------------- | :-------------------------------------------------- |
| linRemoveImage(imageIndex) | 删除某个图片          | optinos 为 Object 类型，属性为 Toast 支持的所有属性 |
| linClearImage()            | 清空所有图片          | 不会触发 linremove 事件                             |
| linGetValue()              | 获取所有 url 图片链接 | url 格式为 Array<String>                            |
