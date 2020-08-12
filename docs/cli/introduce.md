---
title: 详细介绍
---
# <H2Icon /> Lin UI CLI 详细介绍
   
## create 命令介绍

创建命令时会有如下选项：

1. `name` 、 `version` 、 `description` ：生成 package.json 文件内对应字段

2. `是否开启按需加载` ：当输入 `yes` 后，生成的文件 [project.config.json（微信开发者工具配置文件）](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html) 内会携带以下配置：

   ```json
   "scripts": {
     "beforeUpload": "npm run load"
   }
   ```

   此代码的主要是利用微信小程序自定义处理命令功能实现 **自动按需加载**

当进行完以上操作后，即可等待项目创建完成。

使用 `create` 命令创建的项目默认携带 **lin-ui.config.json** 文件，此文件为脚手架配置文件，此配置文件有以下配置：

- `lib` ： 配置 Lin UI 组件库文件夹的名称，默认值 `miniprogram_npm/lin-ui`

大多数情况下，此配置文件的配置内容无需任何更改，除非您使用源码方式安装，组件在其他路径的情况下时，当然如果您认为不需要此文件，您也可以删除，我们在脚手架内部已内置与微信小程序相同的默认配置。

在生成的微信开发者工具配置文件 **project.config.json** 文件中，我们已默认配置如下代码，用来防止微信小程序打包配置文件 **lin-ui.config.json** 与 **.gitignore** 文件：

```json
"packOptions": {
    "ignore": [{
        "type": "file",
        "value": "linui.config.json"
    }, {
        "type": "file",
        "value": ".gitignore"
    }]
}
```

## load 命令介绍
Lin UI CLI 是通过微信开发者工具配置文件 **project.config.json** 中 `packOptions.ignore` 与 `script` 字段中 `beforeUpload` 的特点来实现 **按需加载** ，脚手架会获取用户使用的 `pages` 中与所有 **自定义组件** 中的 Lin UI 组件，然后进行 **按需加载** 。

步骤：
1. 首先，CLI 会扫描用户所有的文件（会忽略掉 node_modules 与 miniprogram_npm 文件夹）
2. 然后通过 **app.json** 文件中 `pages` 字段匹配到用户所有使用到的页面
3. 通过 **所有文件** 与 **app.json** 中引入的文件进行交集计算，拿到用户 **所注册的与所存在** 的所有页面路径
4. 再进行用户自定义组件的获取操作，通过 `[component].json` 文件中的 `component` 字段可以确定是否为自定义组件
5. 拿到所有引用组件后，对组件进行深度遍历，拿到所使用到的组件的所有依赖的组件，至此，拿到全部使用到的组件
6. 通过与 miniprogram_npm 下的 Lin UI 组件进行差集对比，拿到所有未使用到的组件，写入 **project.config.json**
7. **按需加载** 结束

<RightMenu />
