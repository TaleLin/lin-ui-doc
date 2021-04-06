---
title: 索引列表 IndexList
---

# <H2Icon/> 索引列表 IndexList

> 使用场景：地区选择、联系人列表

## 核心概念

因索引列表元素较多，为了便于你理解文档，我会简单介绍一下索引列表各个部分的名称

首先，我们把索引列表分为 4 个部分：`Anchor`、`Content`、`Sidebar`、`Tip`

- `Anchor`——锚点，指索引列表中每一小节的标题部分
- `Content`——内容，指索引列表中每一小节的内容部分
- `Sidebar`——侧栏，指位于屏幕右侧用于索引的导航条
- `Tip`——提示，指滑动侧栏时，在屏幕上显示的提示

以上四个名词分别对应的部分如下图所示：

:::img
![height=300](/screenshots/index-list/basic-concept.png)
:::

## 基本用法

索引列表由`index-list`和`index-anchor`构成，`index-list`需包裹在`index-anchor`的外层

```wxml
<l-index-list scroll-top="{{scrollTop}}">
    <view>
        <l-index-anchor>A</l-index-anchor>
        <view>鞍山</view>
        <view>安庆</view>
        <view>安阳</view>
    </view>

    <view>
        <l-index-anchor>B</l-index-anchor>
        <view>鞍山</view>
        <view>安庆</view>
        <view>安阳</view>
    </view>
</l-index-list>
```

```javascript
// 页面js文件
Page({
  data: {
    // 页面垂直滑动的距离
    scrollTop: undefined,
  },

  // 页面监听函数
  onPageScroll(res) {
    this.setData({
      scrollTop: res.scrollTop,
    })
  },
})
```

::: warning 注意
**页面js文件中必须使用 [onPageScroll()](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object) 监听页面滚动事件，以便给scrollTop 属性传值。**
:::

## 高级用法

`Sidebar`显示的数据可通过属性`sidebar-data`自定义，否则显示为`A-Z`26 个大写英文字母。

`Anchor`显示内容可通过默认插槽自定义，否则显示为对应`Sidebar`的内容。

```wxml
<!-- 使用 sidebar-data 自定义索引内容 -->
<l-index-list sidebar-data="{{sidebarData}}" bind:linselected="onSelected">

    <!-- 使用插槽自定义 Tip -->
    <view slot="tip">
      <view>{{indexText}}</view>
    </view>

    <view>
        <!-- 使用插槽自定义 Anchor -->
        <l-index-anchor>
          <view>热门</view>
        </l-index-anchor>

        <view>鞍山</view>
        <view>安庆</view>
        <view>安阳</view>
    </view>

    <view>
        <l-index-anchor>B</l-index-anchor>
        <view>鞍山</view>
        <view>安庆</view>
        <view>安阳</view>
    </view>
</l-index-list>
```

```javascript
// 页面js文件
Page({

  data:{
    // 显示在 Tip 区域的文字
    indexText:""
  }

  // 页面监听函数
  onPageScroll(res) {
    wx.lin.setScrollTop(res.scrollTop)
  },

  // 索引被选中的监听函数
  onSelected(event){
    this.setData({
      indexText: event.detail.indexText
    })
  }
})
```

::: tip 优化
`scrollTop`的传入方式除了使用`index-list`组件的属性传入以外，还支持`wx.lin.setScrollTop(scrollTop)`。

如果对性能有极致要求，建议使用`wx.lin.setScrollTop(scrollTop)`的方式传入`scrollTop`属性。
:::

## 索引列表属性

| 参数             | 说明                                                  | 类型     | 可选值 | 默认值 | 版本号 |
| ---------------- | ----------------------------------------------------- | -------- | ------ | ------ | ------ |
| is-stick         | `Anchor`滚动到顶部时是否吸附                          | Boolean  | ---    | true   | ---    |
| scroll-top       | `onScrollTop`监听函数获取到的值（单位`px`，**必填**） | Number   | ---    |        | ---    |
| sidebar-data     | `Sidebar`显示的索引内容                               | String[] | ---    | A-Z    | ---    |
| show-sidebar     | 是否显示`Sidebar`                                     | Boolean  | ---    | true   | ---    |
| stick-offset-top | `Anchor`吸附时距离顶部的距离（单位`rpx`）             | Number   | ---    | 0      | ---    |

## 索引列表外部样式类

| 外部样式类名       | 说明                              | 备注 | 版本号 |
| ------------------ | --------------------------------- | ---- | ------ |
| l-anchor-class     | 覆盖`Anchor`整体样式              | ---  | ---    |
| l-tip-class        | 覆盖`Tip`整体样式                 | ---  | ---    |
| l-sidebar-class    | 覆盖`Sidebar`整体样式             | ---  | ---    |
| l-selected-class   | 覆盖`Sidebar`当前选择的索引项样式 | ---  | ---    |
| l-unselected-class | 覆盖`Sidebar`未选择的索引项样式   | ---  | ---    |

## 索引列表事件

| 事件名称         | 说明             | 返回值         | 备注 | 版本号 |
| ---------------- | ---------------- | -------------- | ---- | ------ |
| bind:linselected | 索引选中回调事件 | 当前选中索引值 | ---  | ---    |

## 索引列表插槽

| Slot 名称 | 说明          | 备注 | 版本号 |
| --------- | ------------- | ---- | ------ |
| 默认 slot | `Content`区域 | ---  | ---    |
| tip       | `Tip`区域     | ---  | ---    |

## 索引锚点插槽

| Slot 名称 | 说明         | 备注 | 版本号 |
| --------- | ------------ | ---- | ------ |
| 默认 slot | `Anchor`区域 | ---  | ---    |

## 索引列表 wx.lin 方法

| 方法名称            | 说明              | 返回值 | 备注 | 版本号 |
| ------------------- | ----------------- | ------ | ---- | ------ |
| wx.lin.setScrollTop | 设置`scrollTop`值 | 无     | ---  | ---    |

<RightMenu/>
