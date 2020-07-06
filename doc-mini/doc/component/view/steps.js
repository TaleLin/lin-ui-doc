module.exports = `> 步骤条 Steps

> 拆分某项流程的步骤，引导用户按流程完成任务。

步骤条包含 2 个组件： \`steps\` 、 \`step\` ，这两个组件必须同时在使用页面引入。

## 基础用法

\`step\`组件用于设置每一个步骤条元素的内容。

通过\`title\`和\`describe\`属性分别设置步骤条元素的标题和描述内容。

### 示例代码

![aa](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyY0pCRmdzZGJ2dFBUVnFyWU9jekd2aWlEWHJJOWlSMEFnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<l-steps>
  <l-step title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 设置步骤条进度

通过\`active-index\`设置初始步骤条进度。默认值为\`0\`。

### 示例代码

\`\`\`html
<l-steps active-index="1">
  <l-step title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 设置步骤条方向及步骤条元素的最小高度

通过\`direction\`属性设置步骤条方向。可选值为\`row\`、\`column\`，默认为\`row\`。

在\`direction\`属性为\`column\`是可通过设置\`step-min-height\`属性更改步骤条元素的最小高度，该高度包括右侧内容高度，同时可撑高线的高度。默认为\`120\`，单位为\`rpx\`。

### 示例代码

![a](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyUVNiKzJKWUZkTlFYdTlDaVExWWZCS3lSdTlDZ1htYVFRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<l-steps direction="column" step-min-height="160">
  <l-step title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 设置步骤条排序

通过\`reverse\`属性为\`true\`可设置步骤条为倒序排列。默认为正序排列。

### 示例代码

![aaa](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyVnJxR1VFdUYzQkovYmh5aGIwcGlEZHdnbHlqMnZWUmJRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<l-steps reverse="{{true}}" direction="column" step-min-height="160">
  <l-step title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 设置步骤条状态

通过\`status\`属性设置步骤条当前选中元素的状态。可选值为\`process\`、\`error\`，默认为\`process\`。

### 示例代码

![a](http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyV3dWM0N5TDl5bTlyVStPc2dZMVlROHYvbXRLRjhmaFh3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<l-steps active-index="1" status="error">
  <l-step title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 点状步骤条

通过\`dot\`属性设置步骤条为点状步骤条。默认值为\`fasle\`。

### 示例代码

![a](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyYlVSTDM1eTF3NGxhSWhBdjVjMkp5V2g3blZjS28ybUhnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<l-steps dot="{{true}}">
  <l-step title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 步骤条图标

通过\`icon\`属性设置步骤条元素的图标，仅在\`dot\`为\`true\`的条件下生效。

通过\`icon-size\`和\`icon-color\`属性设置步骤条元素的图标的大小和颜色。

### 示例代码

![a](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyWVhGRktXSVVqa1hBd09JQUNQZ08rVEZXVGtiV2JVTXJnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<l-steps dot="{{true}}">
  <l-step icon="cart" title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 步骤条激活态颜色

通过\`color\`属性设置步骤条激活状态的颜色。

### 示例代码

![aaa](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyYVpEOFppb1lPNWtOU3lQWE5oZUZjWkJ5dFo1dmVEbVl3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<l-steps color="48a7e3">
  <l-step icon="cart" title="已支付" describe="11:30"></l-step>
  <l-step title="备餐中" describe="11:30"></l-step>
  <l-step title="已出餐" describe="11:30"></l-step>
</l-steps>
\`\`\`

## 自定义（步骤条节点 || 描述内容）

通过设置插槽的\`slot\`为\`dot\`和\`describe\`分别自定义步骤条节点和描述内容，自定义步骤条节店内容需同时设置\`custom\`属性为\`true\`。

### 示例代码

![b](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdLamV5S09COXkyV3MxQ0RtMk1LeEFZRTdsZlo5bXBOQXFMbnEzZXRWbUl3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

\`\`\`html
<!-- 自定义步骤条节点 -->
<l-steps>
  <l-step title="已支付" describe="11:30" />
  <l-step title="备餐中" describe="12:30" />
  <l-step custom="{{true}}" title="已收货" describe="11:30">
    <view class="shou" slot="dot">收</view>
  </l-step>
</l-steps>

<!-- 自定义描述内容 -->
<l-steps direction="column" active-index="1">
  <l-step title="2019-9-25 11:30">
    <view class="describe-container" slot="describe">
      广大群众反映步骤条问题
    </view>
  </l-step>
  <l-step title="2019-10-05 12:30">
    <view class="describe-container" slot="describe">
      拾玖重构步骤条
    </view>
  </l-step>
  <l-step title="2019-10-25 13:30">
    <view class="describe-container" slot="describe">
      步骤条更新完成😄
    </view>
  </l-step>
</l-steps>
\`\`\`

## 步骤条属性（Steps Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  版本 |
|:----|:----|:----|:----|:----|:----|
| direction | 步骤条方向 | String | column/row | row  |0.6.8|
| active-index | 初始步骤条进度 | Number | --- | 0 |0.6.8|
| dot | 点状步骤条 | Boolean |--- | false  |0.6.8|
| status | 当前激活步骤条元素状态 | String | process/error | process |0.6.8|
| color | 步骤条激活状态颜色 | String | --- | --- |0.6.8|
| reverse | 步骤条倒序排列 | Boolean | --- | true |0.6.8|
| step-mini-height | 步骤条元素高度 | String | --- | 120 |0.6.8|

## 步骤条元素属性 (Step Attributes) 

| 参数   | 说明 | 类型 | 可选值 | 默认值 | 版本 | 
|:----|:----|:----|:----|:----|:----|
| title | 步骤条标题 | String | ----| ---  |0.6.8|
| describe | 步骤条描述 | String | ---- | ---  |0.6.8|
| icon | 步骤条图标 | String | ----| ---  |0.6.8|
| icon-color | 步骤条图标颜色 | String | ----| ---  |0.6.8|
| icon-size | 步骤条图标大小 | String | ----| ---  |0.6.8|
| custom | 是否自定义步骤条元素 | Boolean | --- | false  |0.6.8|

## 步骤条元素外部样式类 (Steps Class) 

| 参数   | 说明 |版本 |
|:----   |:----|:----|
| l-class | 覆盖步骤条的外部样式类 |0.6.8|

## 步骤条元素外部样式类 (Step Class) 

| 参数   | 说明 |版本 |
|:----   |:----|:----|
| l-class | 覆盖步骤条元素的外部样式类 ||
| l-step-class | 覆盖步骤条元素数字部分的外部样式类 |0.6.8 |
| l-describe-class | 覆盖步骤条元素描述内容的外部样式类 | 0.6.8|
| l-title-class | 覆盖步骤条元素标题的外部样式类 | 0.6.8|
| l-line-class | 覆盖步骤条元素线的外部样式类 | 0.6.8|

## 步骤条元素插槽（Step Solt）

| 插槽名称   | 说明 | 备注   | 版本 |
|:----|:----|:----|:----|
| dot | 自定义步骤条元素内容  | 需同时设置\`custom\`属性 | 0.6.8 |
| describe | 自定义描述内容  | --- | 0.6.8 |

`