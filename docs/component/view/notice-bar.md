---
title: 通告栏 NoticeBar
---

# <H2Icon/> 通告栏 NoticeBar

> 滚动播放的消息提示。

## 是否显示通告栏

通过`show`属性设置是否显示通告栏。默认值为`true`。

:::img
![height=50](/screenshots/notice-bar/1.png)
:::

### 示例代码

```wxml
<l-notice-bar show="{{true}}">我是通告栏</l-notice-bar>
```

### 通告栏类型

通过`type`属性设置通告栏类型为`still`（静止），`roll`（字幕滚动），`swip`（轮播）。默认值为`still`。

当通告栏的类型为`swip`时，轮播的内容需通过`swip-arr`属性传入。

:::img
![height=50](/screenshots/notice-bar/2.png)
:::

### 示例代码

```wxml
<l-notice-bar show="{{true}}" 
              type="still">
              我是通告栏</l-notice-bar>
<l-notice-bar show="{{true}}" 
              type="roll">
              我是通告栏我是通告栏我是通告栏我是通告栏
</l-notice-bar>
<l-notice-bar show="{{true}}" 
              type="swip" 
              swip-arr="{{arr}}">
</l-notice-bar>
```

## 滚动速度系数

通过设置`speed`属性可设置字幕滚动速度系数和轮播速度系数。默认值为`1500`。

::: tip 注意事项
滚动速度仅在`type`设置为`swip`和`roll`时生效。`speed`数值越小速度越快，数值越大速度越慢。
:::

### 示例代码

```wxml
<l-notice-bar show="{{true}}" 
              type="roll" 
              speed="2000">
    我是通告栏我是通告栏我是通告栏我是通告栏
</l-notice-bar>
<l-notice-bar 
    show="{{true}}" 
    type="swip" 
    swip-arr="{{arr}}" 
    speed="2000">
</l-notice-bar>
```

## 通告栏图标

通过`front-icon-name`设置位于通告栏头部的图标名称。`front-icon-size`和`front-icon-color`属性设置头部图标的颜色和大小。

通过`end-icon-name`设置位于通告栏尾部的图标名称。`end-icon-size`和`end-icon-color`属性设置尾部图标的颜色和大小。

:::img
![height=50](/screenshots/notice-bar/3.png)
:::

### 示例代码

```wxml
<l-notice-bar 
    show="{{true}}" 
    type="still" 
    front-icon-name="notification" 
    end-icon-name="close" 
    front-icon-size="20"
    front-icon-color="#3683D6"> 
  我是通告栏
</l-notice-bar>
```

## 可关闭通告栏

通过`close`属性可设置通告栏为可关闭通告栏。默认值为`false`。

### 示例代码

```wxml
<l-notice-bar show="{{true}}" close="{{true}}">我是通告栏</l-notice-bar>
```

## 动态修改通告栏内容
如果你的通告栏内容不是写死在 wxml 文件中，而是在运行过程中会**动态修改**的（比如通过 API 请求修改通告栏内容），那么你需要在修改通告栏内容之后调用 `linFlush()` 开放函数刷新一下，通告栏滚动动画才会正常显示。

##### 示例代码
```wxml
<l-notice-bar id="my-notice-bar">{{content}}<l-notice-bar/>
```

```js
getNoticeBar(){
  // 模拟 API 获取内容
  let apiContent = wx.request("...");

  this.setData({
    content: apiContent
  },()=>{
    // 获取 notice-bar 组件实例
    const noticeBarComponent = this.selectComponent("#my-notice-bar");
    // 刷新组件动画
    noticeBarComponent.linFlush();
  });
}
```


## 通告栏属性

| 参数             | 说明               | 类型    | 可选值          | 默认值 |
| :--------------- | :----------------- | :------ | :-------------- | :----- |
| show             | 是否显示通告栏     | Boolean | ----            | true   |
| type             | 通告栏类型         | String  | still/swip/roll | still  |
| speed            | 轮播（滚动）速度   | Number  | ----            | 1500   |
| swip-arr         | 轮播内容           | Array   | ---             | ---    |
| close            | 可关闭通告栏       | Boolean | ---             | false  |
| front-icon-name  | 通告栏头部图标名称 | String  | ---             | ---    |
| front-icon-size  | 通告栏头部图标大小 | Number  | ---             | ---    |
| front-icon-color | 通告栏头部图标颜色 | String  | ---             | ---    |
| end-icon-name    | 通告栏尾部图标名称 | String  | ---             | ---    |
| end-icon-size    | 通告栏尾部图标大小 | Number  | ---             | ---    |
| end-icon-color   | 通告栏尾部图标颜色 | String  | ---             | ---    |

## 通告栏外部样式类

| 外部样式类名 | 说明                             | 备注 |
| :----------- | :------------------------------- | :--- |
| l-class      | 覆盖通告栏区域的自定义外部样式类 | ---  |
| l-icon-class | 覆盖通告栏图标的自定义外部样式类 | ---  |

## 通告栏事件
 
| 事件名称        | 说明                             | 返回值         | 备注                       |
| :-------------- | :------------------------------- | :------------- | :------------------------- |
| bind:lintap     | 点击通告栏信息触发的事件         | e.detail.index | 在`type`为`swip`时有返回值 |
| bind:linicontap | 点击通告栏文字后的图标触发的事件 | ---            | ---                        |

## [开放函数](https://doc.mini.talelin.com/start/open-function.html)
| 函数名   | 说明                                                         | 备注 |
| :------- | :----------------------------------------------------------- | :--- |
| linFlush | 修改通告栏内容之后，需要调用该函数刷新，滚动动画才能正常显示 |      |

<RightMenu />
