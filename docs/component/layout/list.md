---
title: 列表 List
---

# <H2Icon /> 列表 List

## 列表左侧内容

通过 `title` 和 `desc` 属性设置列表左侧的内容和描述，内容和描述布局方式是上下左对齐。

### 示例代码

![](http://imglf6.nosdn0.126.net/img/VVpkaDA0b3BNODVOcHNZakFPOTdkTWQxYXNPYW1rY0dVRmprYUxHbzI1U2tEeGhrUGNDSVB3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
    <l-list title="购物车" />
    <l-list title="购物车" desc="查看我的购物车"/>
```

## 列表右侧内容

列表右侧内容可设置的有文本和跳转的图标，分别通过下面的属性设置：

- `right-desc` 设置列表右侧的文本；
- `is-link` 设置是否显示跳转的图标，默认为`true`,可选值`true` 和 `false`；
- `link-type` 设置跳转类型，默认为 `navigateTo`,可选值为 `navigateTo`、`redirectTo`、`reLaunch`、`switchTab`；
- `url` 设置跳转的路径

除此之外，还可以监听`lintap`事件，自定义点击后的事件处理逻辑。



## 带图标或图片的列表

通过 `icon` 和 `image` 属性设置显示的图标或图片的内容，当同时设置 `icon` 和 `image` 时，优先展示 `image`。

通过外部样式类 `l-class-icon` 覆盖默认 `icon` 的样式，外部样式类 `l-class-image` 覆盖默认 `image` 的样式。

::: tip 注意事项
 * 使用本地图片时，最好使用绝对路径。
:::

### 示例代码

![](http://imglf6.nosdn0.126.net/img/VVpkaDA0b3BNODZzY0hNeG9XdWhIcU5YQ3A0NHdxVkZTcE1lYWphUnNrVlAraTZwTFR3SDNRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
    <l-list title="购物车" icon="cart" is-link="{{false}}"/>
    <l-list title="消息" icon="notification" />
    <l-list title="客厅" image="/pages/layout/images/badroom-active.png" />
```

## 自定义图标的列表

通过 `icon` 和 `image` 属性设置显示的图标或图片的内容，当同时设置 `icon` 和 `image` 时，优先展示 `image`。

通过外部样式类 `l-class-icon` 覆盖默认 `icon` 的样式，外部样式类 `l-class-image` 覆盖默认 `image` 的样式。

```wxml
  <l-list title="药品" icon="yaopin" l-class-icon="iconfont" />
  <l-list title="用药" icon="yongyao" l-class-icon="iconfont" />
  <l-list title="首页" icon="shouye" l-class-icon="iconfont" />
```
::: tip 注意事项
 * 需要保证自定义的字体图标的文件存在于项目中；具体操作方式可看[icon-自定义图标][1]
:::


## 带标签的列表

  通过`tag-content`设置显示的标签的内容，不设置的内容时标签不显示，默认显示位置为列表左边。

  标签相关的属性有，作用分别如下：
  - `tag-content` 设置显示的标签的内容；
  - `tag-position` 设置标签显示的位置，可选值为 `right`、`left`,默认为 `left`；
  - `tag-color` 设置标签的颜色,接收表示颜色的值；
  - `tag-shape` 设置标签的形状，可选值为 `circle` 、 `square`，默认为 `square`；
  - `tag-plain` 设置标签是否镂空， 可选值为 `false` 、`true`，默认为 `false`,当设置为`true`时，`tag-color`修改的是字体的颜色。

### 示例代码

![](http://imglf6.nosdn0.126.net/img/VVpkaDA0b3BNODVOcHNZakFPOTdkTmpnb0U3V1VNWDgyZ1pVZjFqcWp5dENGMGRjUjZkUnNRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
  <l-list title="购物车" icon="cart" tag-content="购物车" />
  <l-list title="购物车" icon="cart" tag-content="购物车" tag-color="#F4516c"/>
  <l-list title="消息" icon="notification" tag-content="消息" tag-position="right"/>
  <l-list title="消息" icon="notification" tag-content="消息" tagShape="circle" tag-position="right"/>
```

## 带徽标的列表

  通过`badge-count`设置徽标的数值，不设置的内容时徽标不显示，或者设置`dotBadge={{true}}`时显示圆点徽标，默认显示位置为列表左边。

  徽标相关的属性有，作用分别如下：
  - `badge-position` 设置徽标显示的位置，可选值为 `right`、`left`,默认为 `left`；
  - `badge-max-count` 设置徽标数字最大值，超过最大值时显示${max-count}+;
  - `badge-count-type`  数字的显示方式, 可选值为`overflow`、`limit`、`custom`,默认值为`overflow`。

### 示例代码

![](http://imglf6.nosdn0.126.net/img/VVpkaDA0b3BNODZzY0hNeG9XdWhIcWhoU0tiRGhvcWJ5eTd6dmRwTlpYaEdoUHZ5Z0VWbFF3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
  <l-list title="生成我的海报" dot-badge="{{true}}" />
  <l-list title="消息" icon="notification"
    badge-count="999" badge-position="right" />
    
```

## 自定义子节点的列表

可以通过 `slot`的方式自定义左右两半部分的内容，`slot="left-section"`时自定义的是左半部分的内容，`slot="right-section"`时自定义的是右半部分的内容

### 示例代码

![](http://imglf5.nosdn0.126.net/img/VVpkaDA0b3BNODZzY0hNeG9XdWhIbXZWVFllQ0JuK0VTRW9uRTJBMXVlSG45WGduTk9ENXB3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```wxml
 <l-list right-desc="生成我的海报">
    <view slot="left-section">
        <l-radio value="看一看" />
    </view>
  </l-list>
  <l-list title="允许陌生人查看十条朋友圈">
    <view slot="right-section">
          <switch />
    </view>
   </l-list>

```

## 列表属性（List Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| icon	| 列表组件中`icon`类型	| String | - | - |
| icon-color	| 列表组件中`icon`的颜色	| String | - | - |
| icon-size	| 列表组件中`icon`的大小	| String | - | 28 |
| image	| 列表组件中图片资源  |	String | - | - |
| title	| 列表组件中左侧文本的内容 |	String | - | - |
| desc	| 列表组件中左侧描述文本的内容 |	String	| - |-|
| right-desc	| 列表组件中右侧描述文本的内容 |	String	| - |-|
| tag-position	| 标签显示的位置 | String |	`right`/`left` | `left` |
| tag-content | 标签的内容 | String | - | - |
| tag-shape | 标签的形状 | String | `square `、 `circle` | `square ` |
| tag-color |  标签的颜色 | String | - | - |
| tag-plain | 标签是否镂空 | Boolean | - | `false` | 
| badge-position | 徽标显示的位置 | String | `left`/`right`/`top`/`bottom`| `right` |
| badge-count-type | 徽标数字的显示方式 | String | `overflow`/`limit`/`custom`| `overflow` |
| dot-badge | 显示圆点徽标 | Boolean | `false`/`true` | `false` |
| badge-count | 徽标的数值 | String | - | - |
| badge-max-count | 徽标数字最大值，超过最大值时显示${max-count}+ | Number   | -----   | 99   | 
| is-link |  是否显示跳转的图标 | Boolean | `false`/`true` | `true` |
| link-type | 设置跳转类型 | String | `navigateTo`/`redirectTo`/`reLaunch`/`switchTab`| `navigateTo`|
| url | 设置跳转的路径 | String | - | - |
| gap | 设置list内左右两侧内容距list两边的间距 | Number | - | - |
| left-gap || 设置list内左侧内容距list左边的间距 | Number | - | - |
| right-gap || 设置list内右侧内容距list右边的间距 | Number | - | - |
| is-hover | 是否显示hover效果 | Boolean | --- | true |

## 列表外部样式类 (List ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖列表组件的整体样式 |  - | 
| l-right -class| 覆盖列表组件的右侧内容样式|  - |
| l-content-class| 覆盖列表组件左侧文本的样式 |  - |
| l-desc-class | 覆盖列表组件左侧描述文本的内容 |  - |
| l-icon-class | 覆盖列表组件中`icon`的样式 |  - |
| l-image-class | 覆盖列表组件中图片的样式 |  - |

## 列表事件（List Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap  | 当点击列表时触发   | ---------   | --------   | 

 [1]: http://doc.mini.7yue.pro/component/basic/icon.html
<RightMenu />