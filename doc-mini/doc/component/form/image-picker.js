module.exports = `> 图片选择器 ImagePicker

> 用于选择需要上传的图片，可自定义需要上传的图片数量。


<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdlTDVlKzRGNzZDZDQrWUw1N1UwVE1UdUtoMEVmVjdYYTRvWmZQUjZIMEJnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">
</img-wrapper>


## 设置最大值

图片选择器内部可以通过\`count\`设置最多可以选择的图片张数，默认是9张，没有最大张数的限制，但因根据实际情况合理选择，\`linchange\`事件能监听到选中图片数量的变化。

### 示例代码

\`\`\`html
<l-image-picker count="9" bind:linchange="onChangeTap" />
\`\`\`

## 自定义每行图片的数量

图片选择器内部可以通过\`size\`设置每行图片的数量，默认是3张，可选值为\`[3, 4]\`。

### 示例代码

\`\`\`html
<l-image-picker size="4" bind:linchange="onChangeTap" />
\`\`\`

<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdlTDVlKzRGNzZDVTNJS2N1cXlhcDAwQVA5ZzBMWVZ1eGRNSmlBVGptQlNnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">
</img-wrapper>

## 设置选择图片的质量

通过\`size-type\`可以设置图片来源，可选值是\`original/compressed\`，默认是\`original\`。

 注意事项
 * \`original\`表示原图。
 * \`compressed\`表示缩略图。


### 示例代码
\`\`\`html
<l-image-picker count="9" size-type="compressed" />
\`\`\`

## 自定义图片添加按钮

通过 \`<slot>\` 的方式可以自定义\`ImagePicker\`组件的添加图片部分，在此之前需要将\`custom\`设置为\`{{true}}\`

### 示例代码

\`\`\`html
<l-image-picker custom="{{true}}" >
  <view>
    <image src="path/to/img.png" />
  </view>
</l-image-picker>
\`\`\`
<img-wrapper>
 <img src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdlTDVlKzRGNzZDWjVuQ05EOFNiQVlmaWJXRWVJTFlZNUdxNnBrKzR2WmtnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">
</img-wrapper>

## 自定义图片的样式

当我们需要改变图片的样式时，可以通过\`l-item-class\`这样的外部样式类来完成。

### 示例代码

\`\`\`html
<l-image-picker l-item-class="item" />
\`\`\`
## 清除图片

当我们需要清除所有的图片时，可以通过\`clear\`属性为\`true\`。
 tip 注意事项
 * 每次在清除图片成功后，组件内会将\`clear\`属性还原为\`false\`, 如果你需要再次将图片清空，再次将\`clear\`设置为\`true\`即可。
 * 除此之外，你还可以设置\`urls\`属性为 \`[]\`，来使图片清空


### 示例代码

\`\`\`html
<l-image-picker clear="{{ isClear }}" />
<l-button bind:lintap="onClearTap">清除图片</l-button>
\`\`\`
\`\`\`js
Page({
  onClearTap() {
    this.setData({
      isClear: true
    })
  }
})
\`\`\`



## 图片选择器属性（ImagePicker Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| urls | 图片数组，支持两种格式，详见下方\`Tips\`| Array |  | [] | 
| count | 最多可以选择的图片张数 | String/Number |  | 9 | 
| size | 每行可显示的个数 | String/Number | 3/4 | 3 | 
| mode | 图片剪裁、缩放的模式 | String | 参考官方image组件的mode属性可选值 | aspectFit | 
| size-type | 所选的图片的尺寸 | String | original/compressed | original | 
| custom  | 设置是否传入\`slot\` | Boolean | true/false | false |
| preview  | 是否可以预览 | Boolean | true/false | true |
| clear  | 是否清空列表 | Boolean | true/false | true |
| max-image-size | 图片最大限制，单位字节 | Number | | 10000000 |

 tip
urls接收值可以有两种形式。

1. url数组，格式为

\`\`\`js
['图片1.jpg','图片2.jpg','图片3.jpg']
\`\`\`

数组内元素为图片地址。

2. url对象数组，对象中包含url和key。格式为：

\`\`\`js
[{url:'1.jpg',
  key: 'key1'},
  {url:'2.jpg',
  key:'key2'}]
\`\`\`
  
两种模式根据实际情况自行选择。在组件事件中返回的detail下所包含的all和current内容会根据所传的urls形式返回。



## 已经弃用的属性

以下这些属性已经停止支持，将在未来的某个版本中去除，请使用上方的属性替代

| 参数   | 说明 | 备注 |  
|:----|:----|:----|
| temp-file-paths(已弃用)| 图片显示的列表 | 请按照最新格式传入urls属性 | 


## 图片选择器外部样式类（ImagePicker ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 设置ImagePicker的外部样式类 | --- |  
| l-item-class   | 设置ImagePicker每个图片的外部样式类 | ---  |


## 图片选择器事件 (ImagePicker Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linchange |   新增图片时触发  | 选中项发生变化时触发 \`linchange\` 事件，event.detail = {current: [ 新增项的url信息 ], all: [ 当前urls值 ]} | urls格式与传入的urls格式保持一致   |
| bind:linremove |   移除图片时触发  | 图片移除时触发 \`linremove\` 事件，event.detail = {current: 移除项的url信息, all: [ 当前urls值 ], index: 移除项的下标}| urls格式与传入的urls格式保持一致   |
| bind:linpreview |   图片被点击时（预览）触发  | 图片预览触发 \`linpreview\` 事件，event.detail = {current:[ 当前点击项的url信息 ], all: [ 当前urls值 ], index: 点击项的下标}| urls格式与传入的urls格式保持一致    |
| bind:linclear |   清除图片全部时触发  | 图片移除时触发 \`linclear\` 事件，event.detail = {current: [ 移除项的url信息 ], all: [ 删除前urls值 ]}| urls格式与传入的urls格式保持一致    |
| bind:linoversize | 新增图片大小超过max-image-size设置的值时触发 | event.detail = {all:[当前urls值],oversize:[超过max-image-size限制的图片值],current:[当前值]}


`