---
title: Lin UI CLI
---

# <H2Icon /> Lin UI CLI
Lin UI CLI 是一款针对于 **微信小程序** 以及 **Lin UI** 的脚手架，通过 Lin UI CLI 可以快速搭建一套带有 **按需加载** 功能和 **Lin UI** 组件库的项目模板。

<!-- ## 特性

- 提供 `create` 命令，您可以通过此命令快速搭建一套项目模板
- 提供 `load` 命令，此命令可以实现 Lin UI  **按需加载** 功能 -->

## 为什么使用脚手架？

- **减少未使用的组件为您的项目带来的累赘**
- **快速生成携带 LinUI 的项目代码**
<!-- - 快速生成主题色配置文件 -->

## 快速上手

### 创建项目
执行以下命令可以快速创建一个基于 Lin UI CLI 的项目：

```bash
# 推荐
npx lin-ui-cli create lin-ui-demo
```
or
```bash
npm install lin-ui-cli -g
lin-ui-cli create lin-ui-demo
```

:::tip
`npx` 命令会在本地创建一个临时目录，等使用完之后就会删除，不会占用空间  
`npm install -g` 全局安装会在本地保存一份安装的文件
:::

创建命令时会有如下选项：


1. `name` 、 `version` 、 `description` ：生成 package.json 文件内对应字段

2. `是否开启按需加载` ：输入 `yes`

当进行完以上操作后，即可等待项目创建完成。

当项目创建完成后，会返回如下提示语句：

```
Successfully created project lin-ui-demo, directory name is lin-ui-demo
Next: Please run cd lin-ui-demo && npm install or yarn
```

创建项目截图：

:::img
![height=100](https://cdn.talelin.com/20201217174617.png)
:::

接下来，执行一下命令进入项目目录安装所需依赖：

```bash
cd lin-ui-demo
npm install
```

### 微信开发者工具设置

使用微信小程序官方IDE打开我们的小程序项目，找到 工具 选项，点击下拉选中 构建npm ，等待构建完成即可。

:::img
![height=400](https://cdn.talelin.com/20201218093214.png)
:::

<!-- :::img
![width=400](https://cdn.talelin.com/20201218093342.png)
::: -->

接下来开启自定义处理命令：

:::tip
**这是比较重要的一步，需手动在微信开发者工具的 本地设置 里启用自定义处理命令**
:::

:::img
![height=500](https://cdn.talelin.com/20201219155259.png)
:::

接下来我们引入一个 `Button` 组件，并执行上传操作，看看 **Lin UI CLI** 会带来什么效果。
在 `app.json` 文件加入一下代码：
```json
"usingComponents": {
  "l-button": "/miniprogram_npm/lin-ui/button/index"
},
```

执行编译操作：
:::tip
每次执行编译操作时，都会执行[按需加载命令](/cli/introduce.html#load-命令介绍)，当然，您也可以在根目录执行 `npx lin-ui-cli load` 命令来实现按需加载！！
:::

:::img
![height=100](https://cdn.talelin.com/20201219155508.png)
:::

执行上传操作后，您将看到一些无用组件没有被上传：
:::img
![height=300](https://cdn.talelin.com/20201218094303.png)
![height=300](https://cdn.talelin.com/20201218094610.png)
:::

<RightMenu /> 
