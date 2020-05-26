---
title: 图标 Icon
---

# <H2Icon /> 图标 Icon

> 语义化的矢量图形

## 图标库

![1](http://imglf3.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEdTViN1FVZFFIWGpmVG4xZERSNG5xRFBJYmQ5b3Z2Vi9BPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg)

> 更多图标请移步示例小程序中查看


## 图标类型

通过在`<l-icon/>`上设置图标组件的`name`属性,来指定要使用的图标。
::: tip 
提示：`name`属性为必填。
:::

### 示例代码

```wxml
<l-icon name="add"/>
```

![默认](http://imglf4.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEdWNwankwZ1k1TlBiS01kemg0UUF3a3dxL05IYXZ5NDdnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

## 图标样式

您还可以通过`color`和`size`属性分别设置不同颜色和大小的图标，以适用于不同的场景。

### 示例代码

- 修改图标颜色

```wxml
<l-icon name="setting" color="#34BFA3"/>
<l-icon name="setting" color="#F4516C"/>
<l-icon name="setting" color="#FFE57F"/>
```

![修改图标颜色](http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEcjYweE1jLzkvZk5DYlpBNzc0TFBjZkY3aklNUlZsODFBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

- 修改图标大小（单位：rpx）

```wxml
<l-icon name="user" size="30"/>
<l-icon name="user" size="40"/>
<l-icon name="user" size="50"/>
```

![修改图标大小](http://imglf5.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEa29ON28vWDI3dlJTbWdlK2d0YkJMVXNnUStndjA0ZzBRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

## 自定义图标

通过外部样式类的方式来实现自定义图标：

1 将从iconfont下载的 `css` 代码放进 ` wxss` 中；通过`@font-face`定义字体， `font-family`必须为：`iconfont`

2 设置带有`content`属性的 `class` 名为 `l-icon-name:before`的格式，（`name`是用来设置icon组件的`name`属性的,），如：`.l-icon-duihao:before`

3 在`wxml`中设置`l-class`属性为`iconfont`，`name`为在步骤2中设置的`name`，以步骤2为例，在`wxml`中的`name`需要设置为`duihao`

4 如果在项目中遇到自定义`iconfont`与lin-ui内置`iconfont`相冲突问题,请看[这里](/start/QA.html#关于自定义iconfont与lin-ui内置的iconfont相冲突的问题)；


### 示例代码

```wxss
@font-face {
    font-family: "iconfont";
    src: url('iconfont.eot?t=1569576441125');
    /* IE9 */
    src: url('iconfont.eot?t=1569576441125#iefix') format('embedded-opentype'),
        /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALEAAsAAAAABmQAAAJ2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApsgQ0BNgIkAwgLBgAEIAWEbQczG7YFEdWLabK/IpJj9xskBUKoNvS0NL2fGoOTvFXum2pguSRiYn8/GG5DaXACAAAAAMTDf/ul9/2Zv5kQKkCVrAwqghIpRFWhgFWrXGVlhOrxLIGE3s4HAJLZEzyAsxqH7ZCZ1Y6uPUw0KtBmEvkAkyShINPA8ugzLM226lvgQfR1phk9NgnO77V0DrTvr8ffawGQQyYJVm4WHaNOmNAk48F/85Q9Sr/sNwUOp12gQO6Acrnn8rkUB5YGdM6xKLICCb1h7IIXeJ9Ah3FNsd2xc4rMXhaIh+5cUwoBWWbpIjQa9mbxjmqleoPzNvp+/F0UKnViV526vXPT+g/rZPHj38WAQEECOlwjoYlMnGtMnJAEoyUdiWyaY5UHP/ytwCSOqhfsr7NLu8AoFDyT0BM9amkFcjI8jtVJZ1J1DfRL54S9/b01Hi5CWczxymP7LhTcwuEGfTAbP82iFb0ao/lSICNCT4BZdNCSGv+03/hQPnmRGXx60YKWTAnKrp3BLxIO7MiG2DZWWRM2uirjk5ZW6NCBVtgz4PtUzfD9ZEIxfFeuNmMZkmKWmKlN1DotoKFYQ4d5e4c7DXokidyOOS8AQp/3qPQ4RNLnIzFTv6E24j8a+iKhw4XgzE7UwTM0RC/tX6bu2NU108flNwzvtbG8OKK/YHEKS55k5XSNHbbEhvgZClJF7dikAo9hXQ857ZjRMRnJs0xTbXpT0h2b8xgaohftX0zdsWswmL7y+RuG99pYR02d8wWL0+gil8gGEGvFPqjmUV6Jn6FAqlA7NlGBWVjXQ5zNs2Z0TIwTYmcpdXrpUEWyvWr7gXzWgK0Vjj3pyfMDEekcAAAA') format('woff2'),
        url('iconfont.woff?t=1569576441125') format('woff'),
        url('iconfont.ttf?t=1569576441125') format('truetype'),
        /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('iconfont.svg?t=1569576441125#iconfont') format('svg');
    /* iOS 4.1- */
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
}

.l-icon-duihao:before {
    content: "\e63c";
}
```

```wxml
<!-- 下面的示例代码，虽然两个icon的name都为duihao
但是由于第二个设置了l-class属性，所以显示为不同的icon
只是做个示例，不要纠结name和图标相对应的问题 -->

<!-- lin-ui组件的duihao icon -->
<l-icon name='duihao' />
<!-- 自己从iconfont下载的duihao icon -->
<l-icon name='duihao' l-class='iconfont' />
```

## 图标属性（Icon Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| name |	图标的名称，必填 |	String	| - | - |
| color|    图标的颜色      |  String  | - | 默认为主题色 |
| size |	图标的大小（单位：rpx）| Number | - | `40rpx` |

## 图标外部样式类 (Icon ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 覆盖图标的外部样式类 | --- | 

<RightMenu />