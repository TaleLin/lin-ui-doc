---
title: 宫格 Grid
---

# <H2Icon /> 宫格 Grid

> 基础宫格布局，常见应用场景为微信支付页面。

宫格共包含 2 个组件： `grid` 、 `grid-item` ，这两个组件必须配合使用。

## 基本使用

`grid` 包裹在所有 `grid-item` 最外层， `grid` 下的所有 `grid-item` 属于同一个 `grid`;

`grid-item` 用于设置每一个宫格元素的内容及事件。

### 示例代码

![默认](http://imglf5.nosdn0.126.net/img/VVpkaDA0b3BNODVOcHNZakFPOTdkUDN1dGVnVWt6dlVnOU5IWXE4Z2w5UGNDcnVtSHJvUUt3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
<l-grid>
    <l-grid-item key="one" slot="one">
        <view class="num">3</view>
        <view class="text">助力</view>
     </l-grid-item>
    <l-grid-item key="two" slot="two">
        <view class="num">134</view>
        <view class="text">点赞</view>
    </l-grid-item>
    <l-grid-item key="three" slot="three">
        <view class="num">1648</view>
        <view class="text">评论</view>
    </l-grid-item>
</l-grid>
```

::: tip 注意事项
 * 必须在 `grid-item` 上设置 `slot`和 `key`,且两者值必须相等。因为在微信小程序中`slot`属性不能被获取到，所以必须设置一个和`slot`值一样的 `key`，以便于将子组件的元素插入到合适的位置。
:::

## 设置边框

默认边框不显示，`grid` 提供了三个属性设置边框显示，这三个属性接收的值是布尔值，分别如下：

- `show-border="{{true}}"` 显示所有的边框；
-  `show-row-border="{{true}}"` 显示横向边框；
- `show-col-border="{{true}}"` 显示纵向边框；

### 示例代码

![设置边框](http://imglf3.nosdn0.126.net/img/VVpkaDA0b3BNODVOcHNZakFPOTdkTHVFbGJVdmk0Ym51TUlmMVVkTlBCSjhrYTAyL05WWktnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
<l-grid l-class="grid" show-border="{{true}}">
    <l-grid-item 
      wx:for="{{grids1}}" wx:key="{{index}}" key="{{index}}" slot="{{index}}">
        <l-icon name="{{item.image}}" />
        <view class="text">{{item.text}}</view>
    </l-grid-item>
</l-grid>
```

## 设置每行数目

默认每行3个宫格，可以使用 `row-num` 自定义每行显示的宫格数目。

### 示例代码

![设置每行数目](http://imglf5.nosdn0.126.net/img/VVpkaDA0b3BNODVOcHNZakFPOTdkSjhOdXF0TVQxVmk5Q2ZuNDl4WmNmaDRldkk2SmZEejBBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
<l-grid l-class="grid" row-num="4" show-col-border="{{true}}">
    <l-grid-item 
      wx:for="{{grids2}}" wx:key="{{index}}" key="{{index}}" slot="{{index}}">
        <l-icon name="{{item.image}}" />
        <view class="text">{{item.text}}</view>
    </l-grid-item>
</l-grid>
```

## 宫格属性 (Grid Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| rowNum | 每行显示的宫格数目 | String | -  | `3` |
| show-border  | 控制是否显示所有的边框 | Boolean | `false` |
| show-row-border | 控制是否显示横向边框 | Boolean | `false` |
| show-col-border | 控制是否显示纵向边框 | Boolean | `false` | - |
| is-hover | 是否显示hover效果 | Boolean | --- | true |

## 宫格外部样式类（Grid ExternalClasses ）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 外部样式类，设置整体宫格样式 | - |


## 宫格事件 (Grid Events）

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:lintap | 点击`grid`整体时的事件 | 在 `e.detail` 中,返回当前点击 `grid-item` 的索引、key、cell | - |

## 宫格元素属性 (GridItem Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| key | `grid-item`显示所需，必填 | String	| - | - |
| slot | `key`一致，必填 | String| - | - |
| cell | 用于存放gridItem数据| 对象 | - | {} |


## 宫格元素外部样式类（GridItem ExternalClasses）
| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
|  l-grid-item-class | 外部样式类，覆盖每个宫格元素的样式 | 取代l-grid-item |

## 已经弃用的外部样式类

以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。

| 外部样式类名 | 说明 | 备注 |
| :--------- | :----------------- | :----- |
| l-grid-item | 外部样式类，覆盖每个宫格元素的样式 | 请使用l-grid-item-class替代 |

## 宫格元素事件 (GridItem Events）

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:linitemtap | 监听点击`grid-item`的事件 | 在 `e.detail` 中,返回当前点击 `grid-item` 的索引、key、cell | - |

<RightMenu />
