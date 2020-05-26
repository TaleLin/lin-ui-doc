---
title: Promisic 回调转换
---

# <H2Icon /> Promisic 回调转换

微信小程序的开发中虽然已经支持了ES6语法，但是在微信原生的API中仍然使用的还是ES5的回调函数。作为一个与时俱进的developer，我们当然使用`Promise`。所以我们为大家提供了这个Promisic函数，帮助大家来对原生的回调函数进行转换。

Promisic 搭配 async、await 味道更好哦！可以把异步API转化为同步的。

### 示例代码

::: tip
npm安装：`/miniprogram_npm/lin-ui/utils/util.js`
<br />
源码安装：`/dist/utils/util.js`
:::

```js
import { promisic } from '/dist/utils/util.js'

promisic(wx.getStorage)().then(res=>{
  console.log(res)
}).catch(err=>{
  console.err(err)
})
```

> 小程序使用async、await需开启`增强编译`。

```js
import { promisic } from '/dist/utils/util.js'

// 搭配async、await
async getStorage() {
 const res = await promisic(wx.getStorage)()
 console.log(res)
}
```