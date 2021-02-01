---
title: 倒计时 Countdown
---

# <H2Icon /> 倒计时 Countdown

> 计时组件，可用于验证码、音频播放计时等场景

## 目标时间

通过`time`设置目标时间，默认值为当前日期的后一天，`time`值格式默认为日期,通过`time-type`属性修改`time`属性值的格式，可选值为`datetime`、`second`，默认为`datetime`；

### 示例代码

1 基本用法

当`time-type='datetime'`时，`time`值格式为日期,且需要大于当前日期，如果小于当前日期，组件不会开始工作；

:::img
![height=100](/screenshots/countdown/1.png)
:::

```wxml
    <l-countdown />
    <l-countdown time="2018-11-09 00:00"/>
```

2 修改`time-type`为`second`

当`time-type='second'`时，`time`属性接收一个整数，单位为秒，若传入的值小于 0 时，则会从 0 开始，目标时间为`time`的绝对值；若传入的值大于 0，则会从`time`值开始，到 0 结束。

:::img
![height=100](/screenshots/countdown/2.png)
:::

```wxml
    <l-countdown time-type="second" time="1500"  />
    <l-countdown time-type="second" time="-1500" />
```

## 自定义显示日期模板

通过`format`定义时间显示的格式,默认为`{%d}天{%h}时{%m}分{%s}秒`；

### 示例代码

:::img
![height=150](/screenshots/countdown/3.png)
:::

```wxml
    <l-countdown time-type="second" time="60"  format="{%s}秒"/>
    <l-countdown time-type="second" time="1500" format="{%m}:{%s}"/>
    <l-countdown time-type="second" time="3690" format="{%h}:{%m}:{%s}"/>
    <l-countdown time-type="second" time="-1500" />

```

## 自定义样式

通过`l-class`修改倒计时组件整体样式，通过`l-class-time`修改倒计时组件中数字区域的样式

### 示例代码

:::img
![height=50](/screenshots/countdown/4.png)
:::

```wxml
 <l-countdown l-class-time="countdown-blue" time="1500" time-type="second" l-class="countdown-text"/>
```

```wxss

.content .countdown-blue {
  width: 52rpx ;
  height: 52rpx;
  border: 2rpx solid #3683D6;
  border-radius: 50%;
  background:transparent;
  color: #3683D6;
}

.content .countdown-text {
  color: #3683D6;
}

```

## 停止计时器

通过`status`属性切换倒计时组件的计时状态，默认为`true`，表示计时器处于计时状态

## 纪念日模式

设置`countdownType="anniversary"`开启纪念日模式计时，此时计时器会计算距离设定的时间已经过去多久。可选值目前只有`anniversary`和`normal`,默认是`normal`

```wxml
<l-countdown time="2019-04-24" countdownType="anniversary" />
```

::: tip 此时
 * `time-type`必须是`datetime`
 * 
:::

## 倒计时

| 参数         | 说明                     | 类型    | 可选值               | 默认值                     |
| :----------- | :----------------------- | :------ | :------------------- | :------------------------- |
| time         | 目标时间                 | String  | 日期或者秒数         | 当前日期的后一天           |
| time-type    | 输入时间的格式           | String  | `datetime`、`second` | `datetime`                 |
| status       | 倒计时的计时状态         | Boolean | -                    | `true`                     |
| format       | 自定义显示时间格式       | String  | -                    | `{%d}天{%h}时{%m}分{%s}秒` |
| is-zero-padd | 一位数值时，是否自动补零 | Boolean | -                    | `true`                     |

## 倒计时外部样式类
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class      | 修改倒计时组件的样式     | -|
| l-time-class | 修改数字区域的样式 | 替代l-class-time |


## 已经弃用的外部样式类
以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代

| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class-time | 修改数字区域的样式 | 请使用l-time-class替代|


## 倒计时

| 事件名称 | 说明               | 返回值 | 备注 |
| :------- | :----------------- | :----- | :--- |
| bind:linend   | 倒计时结束后的事件 | -      | -    |

## 行为属性

| 参数         | 说明                     | 类型    | 可选值              | 默认值                     |
| :----------- | :----------------------- | :------ | :------------------ | :------------------------- |
| time         | 目标时间                 | String  | 日期或者秒数        | 当前日期的后一天           |
| time-type    | 输入时间的格式           | String  | `datetime`/`second` | `datetime`                 |
| status       | 倒计时的计时状态         | Boolean | -                   | `true`                     |
| format       | 自定义显示时间格式       | String  | -                   | `{%d}天{%h}时{%m}分{%s}秒` |
| is-zero-padd | 一位数值时，是否自动补零 | Boolean | -                   | `true`                     |

## 行为事件

| 事件名称    | 说明               | 返回值 | 备注 |
| :---------- | :----------------- | :----- | :--- |
| bind:linend | 倒计时结束后的事件 | -      | -    |

## 拓展

我们将倒计时组件的部分属性和方法写在了`behaviors`文件中，你还可以直接引用`behavior`到你自己的组件中。具体使用方法参考[小程序 behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)

<RightMenu />
