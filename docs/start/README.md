---
title: 快速开始
---

# <H2Icon />快速上手

Lin UI 致力于给小程序开发者提供愉悦的开发体验。
> 在开始之前，推荐先学习微信官方的[小程序开发文档][1]，并正确安装和配置了 Node.js v8或以上。 同时，我们假设你已了解关于 HTML、CSS 和 JavaScript 的初级知识，并且已经熟悉并阅读了[小程序自定义组件][3]。

## 安装

Lin UI提供两种安装方法，满足不同开发者的需求。如果您需要使用`npm`安装，请确保您已经在本机安装了`npm`。

### 方式一： 使用npm安装 （推荐）

打开小程序的项目根目录，执行下面的命令（如果使用了云开发，需要进入miniprogram文件夹下执行下面的命令）。

```base
npm init
```
此时，会生成一个package.json文件，命令行里会以交互的形式让你填一些项目的介绍信息，你可以耐心填完，当然也可以忽略，全部按回车键来快速完成项目初始化。
::: tip 注意事项
- 1.执行npm init进行初始化，此时会生成一个package.json文件，如果不进行npm init，在构建npm的时候会报一个错误：`没有找到 node_modules 目录`
- 2.不建议使用cnpm，这样会带来一些未知的错误。如果网络情况不佳，可以使用下面的命令行更换为淘宝源。
```bash
npm config set registry https://registry.npm.taobao.org 
```
:::
接着，继续执行下面的命令。
```base
npm install lin-ui
```

执行成功后，会在根目录里生成项目依赖文件夹 `node_modules/lin-ui` （小程序IDE的目录结构里不会显示此文件夹）。
<br/>
然后用小程序官方IDE打开我们的小程序项目，找到 `工具` 选项，点击下拉选中 `构建npm` ，等待构建完成即可。
<img-wrapper>
  <img src="http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZEa3ErKzdJRGVNckFIWUZrS0ZKeWNOUnpxSXh5MlRKQU9Jakh6WnRXenVRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>
出现上图所示的结果后，可以看到小程序IDE工具的目录结构里多出了一个文件夹 `miniprogram_npm`（之后所有通过 `npm ` 引入的组件和 `js` 库都会出现在这里），打开后可以看到 `lin-ui` 文件夹，也就是我们所需要的组件。
<img-wrapper>
  <img src="http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEVCVEZMbkRGRHZaRWdTWE9UMzd1Y3ZkN2dHUjBHY2xSS1daZjl0QTkvOVVBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0">
</img-wrapper>

### 方式二：下载代码

直接通过git下载  `Lin UI`  源代码，并将 `dist` 目录（Lin-UI 组件库）拷贝到自己的项目中。

```base
git clone https://github.com/TaleLin/lin-ui.git
```

## 使用组件
> 下文会简单介绍一个`Lin UI` 组件的引入和使用。

使用前，确保该组件已经在你的项目目录结构里。
<br />
以icon组件为例，只需要在使用页面的json文件中引入icon对应的自定义组件即可。
<br />
组件路径：`path/to/${组件名称}/index`
::: tip
例如：
<br/>
npm安装：`/miniprogram_npm/lin-ui/icon/index`
<br />
源码安装：`/dist/icon/index`
:::

```json
{
  "usingComponents": {
    "l-icon": "path/to/icon/index"
  }
}
```

然后在wxml中直接使用该组件。
```wxml
<l-icon name="add"> </l-icon>
```

## 自定义配置

> 考虑到开发者在面临不同到项目时，需求和行业的不同。Lin UI 设计规范上支持一定程度上的样式定制，以满足业务和品牌上多样化的视觉需求。

同时，可以通过对 `components.json` 进行配置，来编译生成相对应的组件。
<br />
为满足自定义的需求，首先我们要去下载 `Lin UI` 源码。

```base
git clone https://github.com/TaleLin/lin-ui.git
```
安装相关依赖

```base
npm install
```

完成以上两步是对 `Lin UI` 进行自定义配置的基础要求。

### 全局样式更改
> Lin UI 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量，所有样式变量可以在这里找到。

 - 组件样式变量
找到根目录，打开`config/style/_base.less`文件

```less
// Color 
@default-color          : @theme-color;
@success-color          : #34BFA3;
@warning-color          : #FFE57F;
@error-color            : #F4516C;
@disabled-color         : #DEE2E6;
@selected-color         : fade(@default-color, 90%);
@tooltip-color          : #fff;
@subsidiary-color       : #80848f;
@rate-star-color        : #f5a623;

// Text
@title-color            : #0e0e0e;
@text-color             : #888;

```
 
- 主题色更改

同样打开根目录，打开`config/style/_theme.less`文件，看到文件中定义了一个变量 `@theme-color` ，如果有主题色修改的需求，更改它即可。
```less
// 主题色

@theme-color            : #2c61b4;                      // 主题色

```

其他
更改完成后，在Lin UI下的根目录里打开终端执行如下所示命令

```bash
npm run build
```

根目录下的 `dist` 文件夹即是编译后的自定义组件。

### 按需加载组件

> 按需加载组件需要您配置config文件下的component.json文件

例如只需要 `button` 和 `loading` 两个组件，在`component.json`填入需要的组件名，如下所示代码：

```json
{
  "components": [
    "button",
    "loading"
  ]
}
```

配置完成后，在 `Lin UI` 下的根目录里打开终端执行

```bash
npm run build
```

此时dist文件夹下面会生成button和loading两个组件及其所依赖的组件。

``` 
├── dist
│   └── button.                             // button组件
│    ├── index.wxml                         // 组件wxml文件
│    ├── index.wxss                         // 组件wxss文件
│    ├── index.json                         // 组件json文件
│    └── index.js                           // 组件js文件
│   └── loading                             // loading组件
```
根目录下的 `dist` 文件即是编译后的自定义组件，使用时将他拷贝到自己的项目里即可。


  [1]: https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101612
  [2]: http://es6.ruanyifeng.com/
  [3]: https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/

<RightMenu />