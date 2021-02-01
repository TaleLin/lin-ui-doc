---
title: 标签页 Tabs
---

# <H2Icon /> 标签页 Tabs

> 选项卡切换组件

标签页需`tabs`和`tabpanel`两个组件关联使用。

`tabpanel`用于设置每一个标签的名称、以及标签下对应的内容；

`tabs` 包裹在所有tabpanel最外层，`tabs`下的所有`tabpanel`属于同一个标签页。

::: warning
为便于下文的说明，在这里约定以下定义：
* 标签栏 ：标签页顶部，可点击切换的区域；
* 标签栏装饰线 ： 标签栏灰色的线；
* 标签选中时装饰线 : 选中状态下标签栏下面蓝色的线
:::

## 等宽标签

默认为等宽标签，在 `tabs` 上设置 `equal-width` 为 `false` 时，取消等宽标签，此时宽度为 `文本内容 + 左右各20rpx的padding`;

默认激活的是第一个标签页，通过`tabs`组件上设置`active-key="{\{key}}"`配置初始状态时激活的选项卡。

当标签数过多时可在 `tabs` 上设置 `scrollable` 为 `true` 时开启滚动标签栏。

必须在 `tabpanel` 组件中传入 `tab` 、 `key` 、 `slot` 属性，其中：

- `tab` 是标签栏显示的文字；

- `key` 为每个标签栏的标识，对应 `tabs` 中的 `active-key` ；

- 受小程序的限制，必须传属性 `slot` 且值的内容与 `key` 保持一致；

- `tabpanel` 标签中包裹的内容为标签栏对应的内容。

### 示例代码

```wxml
      <l-tabs bind:linchange="changeTabs">
        <l-tabpanel tab="京东物流" key="one" slot="one">
          <view class="tab-content">京东物流</view>
        </l-tabpanel>
        <l-tabpanel tab="品牌" key="two" slot="two">
          <view class="tab-content">品牌</view>
        </l-tabpanel>
        <l-tabpanel tab="接口" key="three" slot="three">
          <view class="tab-content">接口</view>
        </l-tabpanel>
        <l-tabpanel tab="面板" key="four" slot="four">
          <view class="tab-content">面板</view>
        </l-tabpanel>
      </l-tabs>
```

:::img
![height=200](/screenshots/tabs/1.png)
:::


## 标签页位置

默认标签栏位置在顶部，可通过在 `tabs` 上设置 `placement` 属性切换标签栏位置，可选值有 `top`/`left`/`right`/`bottom`。

## 标签动画

在 `tabs` 上设置 `animated` 为 `true` 时开启标签页切换动画，默认不开启。


## 滑动切换标签

在` tabs` 设置`swipeable` 为 `true` 时，支持滑动内容部分切换标签。


::: tip 注意事项
* `swiperable` 的实现是基于微信原生swiper组件，当设置 `placement` 为： `top` 和 `bottom` 时，默认高度为 `150px` 。
* 考虑到用户使用场景多样，我们并没有解决swiper组件高度自适应的问题，具体解决方式可以参考：
  - [微信小程序swiper高度自适应，swiper的子元素高度不固定](https://developers.weixin.qq.com/community/develop/doc/00026c2d424a78c7eb27249a25b004)
  - [微信小程序swiper高度动态适配 | 微信开放社区](https://developers.weixin.qq.com/community/develop/doc/00008aaf4a473056d1c69a8b253c04?highLine=swiper%25E8%2587%25AA%25E9%2580%2582%25E5%25BA%2594%25E9%25AB%2598%25E5%25BA%25A6)
:::

## 图标标签

在`tabpanel`上设置`icon`时，可以在标签栏上添加图标，默认图标大小为`28rpx`,颜色与字体颜色一致。

通过在`tabpanel`上设置`icon`属性设置每个标签页显示图标类型，可配置图标类型同`Icon`组件一致，


## 图片资源

使用`image`配置图片资源的样式，可配置项有：
- `defaultImage` :未选中时的图片资源,
- `activeImage` ：选中时的图片资源
- `picPlacement` 可以更改图片、图标的相对于文字的位置，默认为 `top`

## 标签初始样式

- 标签栏位置在顶部和底部时的默认高度为 `80rpx` ，宽度等分，开启 `scrollable` 时，最小宽度为 `160rpx`;
- 标签栏位置在左边或右边时，默认宽度为 `160rpx`，高度等分,开启 `scrollable` 时，最小高度为 `80rpx`;
- 可通过 `l-header-class` 、 `l-active-class` 、 `l-inactive-class` 覆盖默认标签栏样式。

::: tip 注意:
* 标签栏选中时装饰线的样式默认为：
  - background:#333333;
  - width/height: 4rpx;
* 在覆盖标签栏选中时装饰线的样式，通过修改以上属性来覆盖修改。
:::

## 标签属性

| 参数              | 说明                                          | 类型    | 可选值                        | 默认值       |
| :---------------- | :-------------------------------------------- | :------ | :---------------------------- | :----------- |
| active-key        | 默认激活tabs的key                             | String  | -                             | 默认为第一个 |
| placement         | 标签位置                                      | String  | `top`/`left`/`right`/`bottom` | `top`        |
| animated          | 是否使用动画切换标签                          | Boolean | `false`                       |
| animated-for-line | 是否使用动画切换装饰线                        | Boolean | `false`                       |
| swipeable         | 是否支持滑动切换标签                          | Boolean | `false`                       |
| scrollable        | 是否滚动标签栏                                | Boolean | `false`                       | -            |
| active-color      | 设置激活状态标签的文本和图标颜色              | String  | 表示颜色的是16进制            | -            |
| inactive-color    | 设置未激活状态标签的文本和颜色                | String  | 表示颜色的是16进制            | -            |
| has-line          | 设置是否显示标签下的装饰线                    | Boolean | -                             | `true`       |
| content-height    | 内容区域高度                                  | Number  | -                             | -            |
| badge-count-type  | 数字的显示方式                                | String  | `overflow`/`limit`/`custom`   | `overflow`   |
| dot-badge         | 显示圆点徽标                                  | Boolean | `false`/`true`                | `false`      |
| badge-count       | 徽标的数值                                    | String  | -                             | -            |
| badge-max-count   | 徽标数字最大值，超过最大值时显示${max-count}+ | Number  | -----                         | 99           |


## 标签外部样式类
| 外部样式类名        | 说明                                   | 备注                    |
| :------------------ | :------------------------------------- | :---------------------- |
| l-header-class      | 外部样式类，覆盖标签栏整体样式         | 替代l-class-header      |
| l-active-class      | 外部样式类，覆盖标签激活状态样式       | 替代l-class-active      |
| l-inactive-class    | 外部样式类，覆盖标签默认状态样式       | 替代l-class-inactive    |
| l-line-class        | 外部样式类，覆盖标签选中时装饰线的样式 | 替代l-class-line        |
| l-header-line-class | 外部样式类，覆盖标签栏装饰线的样式     | 替代l-class-header-line |
| l-tabimage-class    | 外部样式类，覆盖标签图片的样式         | 替代l-class-tabimage    |
| l-content-class     | 外部样式类，覆盖标签内容样式           | 替代l-class-content     |
| l-tabpanel-class    | 外部样式类，覆盖面板内容样式           | -                       |
| l-badge-class       | 覆盖徽标的样式                         | ---                     |

## 已经弃用的外部样式类

以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。

| 外部样式类名        | 说明                                   | 备注                          |
| :------------------ | :------------------------------------- | :---------------------------- |
| l-class-header      | 外部样式类，覆盖标签栏整体样式         | 请使用l-header-class替代      |
| l-class-active      | 外部样式类，覆盖标签激活状态样式       | 请使用l-active-class替代      |
| l-class-inactive    | 外部样式类，覆盖标签默认状态样式       | 请使用l-inactive-class替代    |
| l-class-line        | 外部样式类，覆盖标签选中时装饰线的样式 | 请使用l-line-class替代        |
| l-class-header-line | 外部样式类，覆盖标签栏装饰线的样式     | 请使用l-header-line-class替代 |
| l-class-tabimage    | 外部样式类，覆盖标签图片的样式         | 请使用l-tabimage-class替代    |
| l-class-content     | 外部样式类，覆盖标签内容样式           | 请使用l-content-class替代     |

## 标签页属性

| 参数         | 说明                                                | 类型   | 可选值                        | 默认值 |
| :----------- | :-------------------------------------------------- | :----- | :---------------------------- | :----- |
| key          | 对应 `active-key`，必填                             | String | -                             | -      |
| tab          | 选项卡头显示文字                                    | String | -                             | -      |
| sub-key      | 混合选项卡时，选项卡竖向key                         | String | -                             | -      |
| sub-tab      | 混合选项卡时，选项卡竖向显示文字                    | String | -                             | -      |
| slot         | `key`一致，有`sub-key`时则与`sub-key`保持一致，必填 | String | -                             | -      |
| icon         | 设置标签栏图标类型                                  | String | -                             | -      |
| icon-size    | 设置标签栏图标的大小                                | String | -                             | 28     |
| picPlacement | 设置图片、图标的相对于文字的位置                    | String | `top`/`left`/`right`/`bottom` | `top`  |
| image        | 设置标签栏图片资源                                  | Object | `{activeImage,defaultImage}`  | -      |


## 标签页事件

| 事件名称       | 说明                | 返回值                | 备注 |
| :------------- | :------------------ | :-------------------- | :--- |
| bind:linchange | `tab`切换的回调事件 | 当前激活标签页的`key` | -    |

<RightMenu />
