---
title: 复选框 Checkbox
---

# <H2Icon /> 复选框组件 Checkbox-Group

> 单项选择器，与原生组件`Checkbox-Group`用法类似，内部由多个`l-checkbox`组件组成。

# <H2Icon /> 复选框 Checkbox

> 单选项目，与原生组件`Checkbox`用法类似,内部传入slot。与`Checkbox-Group`搭配使用。


## 基础案例

单项选择器内部由多个`l-checkbox`组成，`linchange`事件能监听到选中项的变化。

### 示例代码

```wxml
<l-checkbox-group bind:linchange="onChangeTap" >
  <l-checkbox
    wx:for-items="{{items}}"
    wx:key="{{item.value}}"
    key="{{item.value}}"
    checked="{{item.isChecked}}"
    disabled="{{item.disabled}}">
    {{item.value}}
  </l-checkbox>
</l-checkbox-group>
```

```js
  data: {
    items: [
      { value: '美国', isChecked: false, disabled: false },
      { value: '中国', isChecked: false, disabled: false },
      { value: '巴西', isChecked: false, disabled: false },
      { value: '日本', isChecked: false, disabled: false },
      { value: '英国', isChecked: false, disabled: false },
      { value: '法国', isChecked: false, disabled: false },
    ]
  }
  
```

## 单个Checkbox布局方式

根据具体需求，选择最佳的标签对齐方式（选中图标和内容部分）。

`placement` 默认值是 `left` ，即Checkbox的选中图标居左显示。值为 `right` 时，图标居右显示。

## 多个Checkbox布局方式

根据具体需求，选择最佳的多个`Checkbox`组件对齐方式，需要设置`Checkbox-Group`组件的`placement`属性。

`placement` 默认值是 `column` ，可选项为 `row/column `。


### 示例代码

```wxml
<l-checkbox-group bind:linchange="onChangeTap" >
  <l-checkbox  placement="right"  key="1">中国</l-checkbox>
  <l-checkbox  placement="right"  key="2">美国</l-checkbox>
</l-checkbox-group>
```

## 设置选中项的颜色

当我们需要改变`checkbox`选中时的颜色时，可以通过`color` 属性来设置

### 示例代码

```wxml
<l-checkbox key="中国"  color="red" >中国</l-checkbox>
<l-checkbox key="美国"  selected-color="blue">美国</l-checkbox>
<l-checkbox key="日本"  disabled-color="#333">日本</l-checkbox>

```

## 设置禁用

当我们需要将某一个选项禁用时，设置 `disabled` 为 `true` 即可。

### 示例代码

```wxml
<l-checkbox key="中国"  disabled="{{true}}" >中国</l-checkbox>
```

## 更改Checkbox的大小

通过给checkbox的size属性设值可以改变checkbox的大小

### 示例代码

```wxml
<l-checkbox-group bind:linchange="onChangeTap" >
  <l-checkbox size="42rpx" placement="right"  key="1">中国</l-checkbox>
  <l-checkbox size="42rpx"  placement="right"  key="2">美国</l-checkbox>
</l-checkbox-group>
```

## 自定义checkbox的按钮部分

通过 `<slot>` 的方式可以自定义`Checkbox`组件的按钮部分，在此之前需要将`custom`设置为`{{true}}`

### 示例代码

```wxml
<l-checkbox key="中国" custom="{{true}}"  disabled="{{true}}" >
  <image class="checkbox-img" src="path/to/img.png" slot="icon"/>
  中国
</l-checkbox>
```

## 设置最多、最少选项

通过 min/max 两个属性来设置复选框 最少/最多 可选个数

### 示例代码

```wxml
<l-checkbox-group bind:linchange="onChangeTap" min-selected="{{2}}" max-selected="{{4}}">
  <l-checkbox
    wx:for-items="{{items}}"
    wx:key="{{item.value}}"
    key="{{item.value}}"
    checked="{{item.isChecked}}"
    disabled="{{item.disabled}}">
    {{item.value}}
  </l-checkbox>
</l-checkbox-group>
```

```js
  data: {
    items: [
      { value: '美国', isChecked: false, disabled: false },
      { value: '中国', isChecked: false, disabled: false },
      { value: '巴西', isChecked: false, disabled: false },
      { value: '日本', isChecked: false, disabled: false },
      { value: '英国', isChecked: false, disabled: false },
      { value: '法国', isChecked: false, disabled: false },
    ]
  }
  
```

## 复选框组件属性（Checkbox Attributes）

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
| :----| :---- | :---- | :---- | :---- |
| placement | checkbox 按钮的位置 | String | left/right | left |
| custom | 是否自定义图标内容 | Boolean | true/false | false |
| key | checkbox唯一id | String| --- | --- |
| cell | 可绑定一个Object对象，在linchange事件触发时，将返回这个当前单选项的cell | Object | --- | --- |
| size | checkbox的大小 | String | --— | 38rpx |
| disabled | 设置是否禁用 | Boolean | true/false | false |
| select-color | checkbox选中时的颜色 | String | #3963BC |
| disabled-color |checkbox禁用时的颜色 |String | #cccccc |
| color | checkbox未选中时的颜色 | String| #cccccc |
| checked | 当前checkbox是否选中| Boolean | true/false | false |                                                                          | String  | toast/message/text | -      |


## 复选框组件外部样式类（Checkbox ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 设置checkbox的外部样式类 |  |  
| l-disabled-class   | 设置checkbox禁用时的外部样式类 |  | 

## 复选框组组件外部样式类（CheckboxGroup ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- | 
| l-class| checkbox-group的外部样式类 | --- |
                              

## 复选框容器组件属性 (Checkbox-Group Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| placement | 更改checkbox的flex布局 | String | row/column  | column | 
| min-selected | 最少选中个数 | Number | ---  | --- | 
| max-selected | 最多选中个数 | Number | ---  | --- | 


## 复选框组件事件 (Checkbox-Group Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linchange | 点击时触发            | 选中项发生变化时触发 `linchange` 事件，event.detail = {key: 选中项Checkbox的key, cell: checkbox-group传入的cell属性，checked: 按钮切换后的状态} | -    |
| bind:linout | 当设置了min-selected或者max-selected，选中数量不满足要求时触发 linout 事件 |event.detail = {key:当前点击checkbox的key, limitNumber: 选项个数限制的值, type: 数量溢出的类型，可选值 overflow_max_selected/overflow_min_selected}| --  |
<RightMenu />
