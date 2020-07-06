---
title: 徽章 Badge
---

# <H2Icon/> 徽章 Badge

> 出现在按钮、图标旁的数字或文字标记。

## 显示徽标

通过设置`show`属性设置是否显示徽标。默认值为`true`。

### 示例代码

```wxml 
<l-badge value="10" show="{{true}}">
  <!-- 插槽内的内容位于徽标左下角 -->
  <image src="/images/icon.png" />
</l-badge>
```

## 数字徽标

通过`value`属性设置徽标内显示的内容。

通过`mode`属性设置徽标内显示的内容类型，可选值为`number`、`text`，默认值为`number`。

### 示例代码

```wxml 
<l-badge value="10">
  <!-- 插槽内的内容位于徽标左下角 -->
  <image src="/images/icon.png" />
</l-badge>

<l-badge value="文字" mode="text">
  <image src="/images/icon.png" />
</l-badge>
```

## 徽标形状

通过`shape`属性设置徽标形状，可选值为`circle`、`horn`，默认值为`horn`。

### 示例代码

```wxml 
<l-badge value="10" shape="circle">
  <!-- 插槽内的内容位于徽标左下角 -->
  <image src="/images/icon.png" />
</l-badge>
```

## 数字显示方式

通过`number-type`属性设置徽标内数字的显示方式。可选值为`overflow`、`ellipsis`、`limit`,默认值为`overflow`。

* 设置`number-type`为`overflow`，超过`max-count`会显示为`${max-count}+`。通过`max-count`属性修改数字最大值，`max-count`默认值为`99`。
* 设置`number-type`为`ellipsis`，超过`max-count`会显示为`...`。通过`max-count`属性修改数字最大值，`max-count`默认值为`99`。
* 设置`number-type`为`limit`时数字大于1000显示为`${value/1000}k`。

![数字显示方式](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmlUN01tNTlJaXhTVmFCS1krN1p5T3pPQ3FTSEVER05NYjRabWg5aTF5VnZ3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码

```wxml
<l-badge value="100" max-count="99">
  <image src="/images/icon.png" />
</l-badge>
 
<l-badge value="1200" number-type="limit">
  <image src="/images/icon.png" />
</l-badge>
```

## 自定义徽标内容

可在微信小程序项目内的wxs文件中自定义内容格式化函数,具体用法可参考以下示例代码。Lin-UI也提供了内置的wxs格式化函数，具体用法参考Lin-UI的<a href="/filter/">filter</a>文档。

### 示例代码

```wxml 
<wxs src="../index.wxs" module="count" />
<l-badge value="count.overCount(100)">
  <image src="/images/icon.png" />
</l-badge>
```


```js
//wxs文件
var countFlow = function(count) {
  if (count > 99) {
    var finalCount = '99++'
  }
  return finalCount
}

module.exports = {
  overCount: overCount
};
```

## 红点徽标

通过`dot`属性设置徽标为红点徽标。

:::tip
`dot`属性权重大于`value`属性。
:::

![红点徽标](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmlUN01tNTlJaXhTYXF5ckNOMmR2VDg5TDhyamtISjhsTlpTQ2cwZkpQMTNBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

### 示例代码

```wxml
<l-badge dot="{{true}}">
  <image src="/images/icon.png" />
</l-badge>
```

## 徽标属性（Badge Attributes）
| 参数   | 说明   | 类型   | 可选值   | 默认值    | 
|:----|:----|:----|:----|:----|
| show   | 是否显示徽标   | Boolean   | -----   | true   | 
| mode   | 徽标显示的内容类型   | String   | number/text  | number   | 
| shape   | 徽标形状   | String   | circle/horn  | horn   | 
| value   |  徽标显示的内容  | String   | ----   | ---  | 
| number-type   |  数字的显示方式  | String   | overflow/limit/ellipsis  | overflow  | 
| max-count | 数字最大值，超过最大值时显示${max-count}+    | Number   | -----   | 99   | 
| dot  | 是否为红点徽标   | Boolean   | -----   | false   | 


## 徽标外部样式类 (Badge ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 覆盖徽标区域的外部样式类   | ---   | 

## 徽标插槽 (Badge Slot)

| 插槽名称    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| -  | 自定义徽标左下角显示内容  | ---   | 

## 徽标事件（Badge Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 点击徽标时触发的事件   | ----   | --------   | 

  [1]: http://doc.mini.7yue.pro/start/

<RightMenu />