---
title: Lin UI CLI
---

# <H2Icon /> Lin UI CLI
Lin UI CLI 是一款针对于 **微信小程序** 以及 **Lin UI** 的脚手架，通过 Lin UI CLI 可以快速搭建一套带有 **按需加载** 功能和 **Lin UI** 组件库的项目模板。

<!-- ## 特性

- 提供 `create` 命令，您可以通过此命令快速搭建一套项目模板
- 提供 `load` 命令，此命令可以实现 Lin UI  **按需加载** 功能 -->

## 为什么使用脚手架？

1. **可以按需加载组件，去掉项目中未使用的组件，减少小程序包的体积**
2. **自带 LinUI 组件库，无需再单独安装**  
3. **快速生成主题色配置文件，自定义主题色**
4. **自动安装项目依赖，自动构建 npm LinUI 依赖**
<!-- - 快速生成主题色配置文件 -->

## 快速上手

### 创建项目
执行以下命令可以快速创建一个基于 Lin UI CLI 的项目：

```bash
# 推荐
npm install lin-ui-cli -g
lin-ui-cli create lin-ui-demo
```
or
```bash
npx lin-ui-cli create lin-ui-demo
```

创建命令时会有如下选项：

1. `name` 
2. `version`
3. `description`
4. `是否开启按需加载` （默认为 **yes**）
5. `请输入需要安装的 LinUI 版本`（默认为最新版）

当进行完以上操作后，即可等待项目创建完成。

当项目创建完成后，会返回如下提示语句：

```
Successfully created project lin-ui-demo, directory name is lin-ui-demo
```

创建项目截图：

:::img
![height=300](https://cdn.talelin.com/20201222080936.png)
:::

项目工程截图：
:::img
![height=300](https://cdn.talelin.com/20201222081114.png)
:::

:::tip
- **项目创建完成后会自动安装依赖，以及自动构建 `LinUI` 的 npm 依赖，无需任何手动操作。**  
- **如果您想实现自动按需加载，还需进行[下一步操作](/cli/#微信开发者工具设置 )。**  
- **当然，您也可以手动执行按需加载命令，在项目根目录运行 `npx lin-ui-cli load` 命令即可。**
:::

### 微信开发者工具设置

开启自定义处理命令：

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
