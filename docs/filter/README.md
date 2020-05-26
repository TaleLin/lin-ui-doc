---
title: 快速上手
---

# <H2Icon /> 快速上手

## 使用场景

在微信小程序中，`wxml` 的数据绑定仅支持简单运算，例如：三元表达式、算数运算、逻辑判断、字符串运算；不支持复杂的计算，比如： `Array` 的 `join` 、 `pop` 、`slice` ，`String` 的 `indexOf` 等方法。但在实际开发中，需要在`wxml`中使用上述方法的场景还是挺多的。

因此我们将数组、字符串的常用方法封装到[WXS][1]中，以方便在 `wxml` 中的使用。除此之外，还会封装一些常用的业务函数，比如：补零函数、动态设置class等。

## 快速使用

过滤器使用时，你可以在`wxml`中使用，也可以在`wxs`中封装自己的业务逻辑中使用，两种使用场景下的引入方式是不同的。

### 在wxml中使用

必须先引入，再使用。以使用 `String` 为例如下：

```wxml
<wxs src="../../../dist/filter/string.wxs" module="string"/>
```

:::tip 注意事项

- `src` 是相对路径
- `module` 值用于调用过滤器的方法
  :::

  ### 在wxs中使用

必须先引入，再使用。以使用 `String` 为例如下：

```wxml
var string = require("../../../dist/filter/string.wxs");
```

:::tip 注意事项
- `require` 是相对路径
  :::

## 基础过滤器

### String
- <a href="/filter/string.html#tostring">toString</a>
- <a href="/filter/string.html#valueof">valueOf</a>
- <a href="/filter/string.html#charat">charAt</a>
- <a href="/filter/string.html#indexof">indexOf</a>
- <a href="/filter/string.html#lastindexof">lastIndexOf</a>
- <a href="/filter/string.html#slice">slice</a>
- <a href="/filter/string.html#split">split</a>
- <a href="/filter/string.html#substring">substring</a>
- <a href="/filter/string.html#tolowercase">toLowerCase</a>
- <a href="/filter/string.html#touppercase">toUpperCase</a>
- <a href="/filter/string.html#trim">trim</a>

### Array

- <a href="/filter/array.html#join">join</a>
- <a href="/filter/array.html#pop">pop</a>
- <a href="/filter/array.html#push">push</a>
- <a href="/filter/array.html#reverse">reverse</a>
- <a href="/filter/array.html#shift">shift</a>
- <a href="/filter/array.html#slice">slice</a>
- <a href="/filter/array.html#concat">concat</a>
- <a href="/filter/array.html#splice">splice</a>
- <a href="/filter/array.html#unshift">unshift</a>
- <a href="/filter/array.html#indexOf">indexOf</a>
- <a href="/filter/array.html#lastIndexOf">lastIndexOf</a>



### 判断数据类型过滤器

- <a href="/filter/is.html">isNumber</a>
- <a href="/filter/is.html">isString</a>
- <a href="/filter/is.html">isObject</a>
- <a href="/filter/is.html">isBoolean</a>
- <a href="/filter/is.html">isFunction</a>
- <a href="/filter/is.html">isDate</a>
- <a href="/filter/is.html">isArray</a>
- <a href="/filter/is.html">isRegExp</a>


### 业务型过滤器

- <a href="/filter/classnames.html">设置class</a>



## 未来计划

微信小程序从 `2.4.4` 开始支持WXS响应事件以提升频繁用户交互在小程序上的体验，但目前版本覆盖率比较低，具有兼容性问题。随着小程序`2.4.4` 以上版本使用率提升，我们会封装一些常用的WXS响应事件。

[1]: https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/
<RightMenu />