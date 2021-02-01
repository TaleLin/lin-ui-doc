---
title: 日历 Calendar
---

# <H2Icon /> 日历 Calendar

> 用于选择年月日，可自定义需要选择的时间范围。

## 基本用法

日历组件可以通过`show`设置是否显示，可选值为`true/false`，默认为`false`。

### 示例代码

```wxml
<l-calendar show="{{ true }}" />
```

## 自定义颜色

日历组件默认继承`Lin UI`的官方主题色，当然你也可以通过`color`属性来修改为你喜欢的主题色。

### 示例代码

```wxml
<l-calendar show="{{ true }}" color="#f60" />
```

## 日历类型

通过 type 属性可以设置日历的类型，可选值 single（单个日期）、multiple（多个日期）、range（范围），默认值 single。

### 选择多个日期
```wxml
<l-calendar show="{{ true }}" type="multiple" />
```

### 选择日期区间
```wxml
<l-calendar show="{{ true }}" type="range" />
```

## 自定义日期文案

通过传入 `formatter` 函数可以对日历上每一格的内容进行格式化。

### 示例代码

```wxml
<l-calendar formatter="{{ formatter }}"></l-calendar>
```

```js
{
  formatter(day) {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();
    
    const tody = new Date();
    const tody_month = tody.getMonth() + 1;
    const tody_date = tody.getDate();
  
    if (month === 10 && date === 1) {
      day.topInfo = '国庆节';
    }
    
    if (month === tody_month && date === tody_date) {
      day.text = '今天';
    }
  
    if (day.type === 'start') {
      day.bottomInfo = '入住';
    } else if (day.type === 'end') {
      day.bottomInfo = '离店';
    }
  
    return day;
  }
}
```


## 自定义日期可选范围

通过 min-date 和 max-date 定义日历的范围。

### 示例代码
```wxml
<l-calendar
  show="{{ show }}"
  min-date="{{ minDate }}"
  max-date="{{ maxDate }}"
/>
```
```js
Page({
  data: {
    show: false,
    minDate: new Date(2020, 2, 2).getTime(),
    maxDate: new Date(2020, 10, 10).getTime()
  }
});
```

## 自定义可选日期的数量

通过设置 max-select/min-select 可以控制日历最多/至少选择的天数，该属性只有 type 为 multiple 和 range 时有效。

### 示例代码
```wxml
<l-calendar type="range" max-select="{{ 3 }}" />

<l-calendar type="multiple" min-select="{{ 3 }}" />
```

## 自定义超过可选数量的提示语句

通过设置 max-limit-message 可以控制当日历选择天数超过可选数量的提示语句，该属性只有 type 为 multiple 和 range 时有效。

### 示例代码
```wxml
<l-calendar type="range" max-select="{{ 3 }}" max-limit-message="您选择的日期范围超出可选天数"/>
```

## 自定义不足必选数量的提示语句

通过设置 min-limit-message 可以控制当日历选择天数不足必选数量的提示语句，该属性只有 type 为 multiple 和 range 时有效。

### 示例代码
```wxml
<l-calendar type="range" min-select="{{ 3 }}" max-limit-message="日期范围必须大于3天"/>
```

## 自定义按钮文字

通过设置 confirm-text 属性可以修改确认按钮的文字。

```wxml
<l-calendar show="{{ show }}" type="range" confirm-text="完成" />
```

## 隐藏按钮

通过设置 show-confirm 属性可以隐藏/显示确认按钮。show-confirm 默认值为：true

```wxml
<l-calendar show="{{ show }}" show-confirm="{{ false }}" confirm-text="完成" />
```

## 日历组件属性

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 控制日历组件的显示和隐藏 | Boolean | true/false | false | 
| type | 选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间 | String | single/multiple/range | single | 
| color | 主题色 | String |  | lin UI主题色 | 
| default-date | 默认选中日期，type为 multiple 或 range 时为数组 | String/Number/Date | 当前日期 | 
| format | 日期格式 | String | - | yyyy-MM-dd | 
| formatter | 日期内容格式化函数 | function | - | - | 
| min-date | 设置可选最小日期 | String/Number/Date | - | - | 
| max-date | 设置可选最大日期 | String/Number/Date | - | - |
| min-select | 设置最少可选天数 | String/Number | - | - | 
| max-select | 设置最多可选天数 | String/Number | - | - |
| show-confirm | 是否显示确认按钮 | Boolean | true/false | true |
| confirm-text | 确认按钮的文字 | String | - | 确认 |
| max-limit-message | 日期选择天数超出 max-select 时的提示文字 | String | - | 选择天数不能超过 xx 天 |
| min-limit-message | 日期选择天数不足 min-select 时的提示文字 | String | - | 选择天数不能少于 xx 天 |
| show-title | 是否显示日历标题 | Boolean | true/false | true |
| show-subtitle | 是否展示日历副标题（年月） | Boolean | true/false | true |


## Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过 formatter 属性可以自定义 Day 对象的内容。

| 格式   | 说明 | 类型 |
|:----|:----|:----|
| date | 日期对应的 Date 对象 | Date | 
| value | 所选日期的 value | [] / String | 
| type | 日期类型，可选值为 selected、start、middle、end、disabled | string | 
| text | 中间显示的文字 | string |
| topInfo | 上方的提示信息 | string | 
| bottomInfo | 下方的提示信息 | string |


## 插槽

| 插槽名    | 说明    | 备注 |
|:----|:----|:----|:----|
| title |  自定义标题  | --  |
| footer |  自定义底部区域内容  | --  |


## 日历组件事件

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linselect |   选中任意日期触发  | event.detail = { current: Date } | -    |
| bind:linunselect |   当 type 为 multiple 时,点击已选中的日期时触发  | event.detail = { current: Date } | -    |
| bind:linconfirm | 日期选择完成后触发，若 show-confirm 为 true，则点击确认按钮后触发  | event.detail = {value: Date | Date[]} | -    |

<RightMenu />
