---
title: px2rpx 单位转换
---

# <H2Icon /> px2rpx 单位转换

web开发中我们大部分使用css单位是px，但是在小程序中使用的则是rpx，所以可以使用这个函数在某些场景中转换对应的单位。

### 示例代码

::: tip
npm安装：`/miniprogram_npm/lin-ui/utils/util.js`
<br />
源码安装：`/dist/utils/util.js`
:::

```js
import { px2rpx } from '/dist/utils/util.js'

const rpx = px2rpx(375) // 750
```