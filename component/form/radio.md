---
title: 单选框 Radio
---

# <H2Icon /> 单项选择器 Radio-Group

> 单选组：l-radio-group。作为多个单选项目的父容器，用过来控制单选逻辑，内部由多个`l-radio`组件组成。

# <H2Icon /> 单选项目 Radio

> 单选项目，l-radio。必须与`Radio-Group`搭配使用。


## 基本常识

l-radio必须与l-radio-group搭配使用，且每个l-radio必须指定一个`key`作为单选项目的`唯一标识`。

##  基础案例

单选组内部由多个`l-radio`组成，注意设置key。如果你的数据是动态，也可以使用wx:for进行列表渲染，通常key应该设置为
真实数据的id号，或者是数组的序号index。

### 示例代码
```wxml
<l-radio-group>
    <l-radio key="1">七秀</l-radio>
    <l-radio key="2">五毒</l-radio>
    <l-radio key="3">长歌</l-radio>
</l-radio-group>
```

## 两种模式与选中项

:::tip
单选组件支持两种模式：

1. 可以全部不选中
2. 至少选中1项

模式1 是默认模式。模式1支持`反选`，当一个radio被选中时，再次点击将取消选中，但模式2不可以。
将l-radio-group上设置`none-checked`属性设置为false可以切换到模式2。
对于模式2，为保证初始化时至少有一项被选中，l-radio-group必须设置current属性，current属性可以设置为任何一个l-radio的key。
这样，在初始化时，组件将对应的key的l-radio设置为选中状态。
注意，模式1同样可以设置current，但这不是必须的。
:::

### 示例代码

```wxml
<l-radio-group current="2" none-checked="{{false}}">
    <l-radio key="1">七秀</l-radio>
    <l-radio key="2">五毒</l-radio>
    <l-radio key="3">长歌</l-radio>
</l-radio-group>
```

## 设置radio-group布局方式

通过`placement`属性设置radio-group布局方式。

### 示例代码

```wxml
<l-radio-group placement="column">
    <l-radio key="1">七秀</l-radio>
</l-radio-group>
```

## 设置radio布局方式

通过`placement`属性设置radio布局方式。

### 示例代码

```wxml
<l-radio-group>
    <l-radio key="1" placement="right">七秀</l-radio>
</l-radio-group>
```

## 设置选中项的颜色及大小

当我们需要改变`radio`选中时的颜色时，可以通过`color`、`select-color` 属性来设置。

通过`size`属性设置radio图标大小。

### 示例代码

```wxml
<l-radio color="red" size="32" select-color="green">
长歌
</l-radio>
```

## 设置禁用

当我们需要将某一个选项禁用时，设置 `disabled` 为 `true` 即可。

### 示例代码

```wxml
<l-radio disabled="{{true}}">
七秀
</l-radio>
```

## 自定义Radio的内容部分

通过 `<slot>` 的方式可以自定义`Radio`组件的内容部分。

通过设置`custom`属性自定义左侧图标。

### 示例代码

```wxml
<l-radio custom="{{true}}">
    <image slot="custom" src="path/to/img.png" class="img"/>
    <text>七秀</text>
</l-radio>
```


## 单选组件属性（Radio Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| size | radio的大小 | String/Number | --- | 36 | 
| cell | 可绑定一个Object对象，在linchange事件触发时，将返回这个当前单选项的cell | Object | --- | --- | 
| color | radio未选中时的颜色 | String  | --- | 
| select-color | radio选中时的颜色 | String  | --- |  
| placement | 更改radio的布局方式 | String | right/left | left | 
| disabled   | 设置是否禁用 | Boolean | --- | false |


## 单选组件外部样式类（Radio ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class   | 设置radio的外部样式类 |--- | 
| l-disabled-class   | 设置radio禁用时的外部样式类 |  --- | 

## 单项选择器组件属性（Radio-Group  Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| current | 设置当前被选中的radio，其值必须是radio的key | String | --- | --- | 
| placement | 更改radio-group的布局方式 | String | row/column  | column | 
| none-checked | 为true时允许全部单选项都不选中，否则至少选择一项 | Boolean | true/false | true |

## 单项选择器事件 (Radio-Group Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linchange | 切换radio时触发  | 选中项发生变化时触发 `linchange` 事件，event.detail = {checked,key, currentKey,cell} | -    |

<RightMenu />

