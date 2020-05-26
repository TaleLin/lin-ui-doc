---
title: Classnames
---

# <H2Icon /> classnames

`classnames` 适用于 `wxml` 中，用于动态设置 `class` 的值。通过条件配置返回符合条件的字符串。

## 示例代码
```js
classnames('foo', 'bar'); // => 'foo bar'
classnames('foo', { bar: true }); // => 'foo bar'
classnames({ foo: true }, { bar: true }); // => 'foo bar'
classnames({ 'foo-bar': false }); // => 报错
classnames({ foo: true, bar: true }); // => 'foo bar'
classnames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

```

:::tip 提示
* `classnames` 运行环境是在 `wxml` 中，在传入的是参数为对象时， `key` 用单引号 `''` 包含，会报语法错误
* 在 `wxml` 中使用时，需要用 `{{}}` 包裹
:::





<RightMenu />
