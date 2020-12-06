---
title: Lin UI CLI
---

# <H2Icon /> Lin UI CLI
Lin UI CLI 是一款针对于 **微信小程序** 以及 **Lin UI** 的脚手架，通过 Lin UI CLI 可以快速搭建一套带有 **按需加载** 功能和 **Lin UI** 组件库的项目模板。

## 特性

- 提供 `create` 命令，您可以通过此命令快速搭建一套项目模板
- 提供 `load` 命令，此命令可以实现 Lin UI  **按需加载** 功能

## 快速上手

### 新项目引入

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

当项目创建完成后，会返回如下提示语句：

```
Successfully created project lin-ui-demo, directory name is lin-ui-demo
Next: Please run cd lin-ui-demo && npm install or yarn
```

到此一个基于 Lin UI 的微信小程序项目已经安装完成，在每次上传之前会触发 **按需加载** 功能，无用组件或文件将不会被打包。

### 旧项目迁移

首先，您在进行此操作前需有一个基于 Lin UI 的微信小程序项目，并在 **本地设置** 中勾选 `使用npm模块` 选项。
打开小程序的项目根目录，执行下面的命令（如果使用了云开发，需要进入 miniprogram 文件夹下执行下面的命令）。

```sh
npm init -y
```

接着，继续执行下面的命令。
```sh
npm install lin-ui-cli
```

<br/>


在微信开发者工具配置文件 **project.config.json** 文件里写入以下代码：

```json
"scripts": {
    "beforeUpload": "npx lin-ui-cli load"
}
```

创建 **lin-ui.config.json** [配置文件](#linui-config-json-attributes）)（可选），在文件里写入：
```json
{
  "lib": "miniprogram_npm/lin-ui"
}
```

到此 Lin UI CLI 脚手架已经安装完成，在每次上传之前会触发 **按需加载** 功能，无用组件或文件将不会被打包。


## lin-ui.config.json (Attributes）

| 参数            | 说明                                                       | 类型   | 可选值 | 默认值          |
| :-------------- | :--------------------------------------------------------- | :----- | :----- | :-------------- |
| lib      | 配置 Lin UI 组件所在路径      | String | -      | miniprogram_npm/lin-ui          |

<RightMenu /> 
