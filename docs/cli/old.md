---
title: 旧项目迁移
---

# <H2Icon /> 旧项目迁移

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
  "beforeCompile": "npx lin-ui-cli load"
}
```

创建 **lin-ui.config.json** [配置文件](#linui-config-json-attributes）)（可选），在文件里写入：
```json
{
  "lib": "miniprogram_npm/lin-ui"
}
```

到此 Lin UI CLI 脚手架已经安装完成，在每次编译之前会触发 **按需加载** 功能，无用组件或文件将不会被打包。

<RightMenu /> 
