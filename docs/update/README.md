# <H2Icon /> 更新日志

最新版本：`0.8.1`

### [v0.8.1](https://github.com/TaleLin/lin-ui/compare/0.8.0...0.8.1) (2020-05-21)


### ⚠ BREAKING CHANGES

* **IndexList:** sidebar 样式整体变大

### Features

* **CombinedTabs:** 新增 l-content-class 外部样式类 ([10db1a5](https://github.com/TaleLin/lin-ui/commit/10db1a52a3f1ad56732f377650c0e03a3cf1bcf9)), closes [#283](https://github.com/TaleLin/lin-ui/issues/283)
* **Tabs:** 新增 content-height 属性 ([a8510ca](https://github.com/TaleLin/lin-ui/commit/a8510ca1f8320e8a82a8c519e2944b87490f6921)), closes [#703](https://github.com/TaleLin/lin-ui/issues/703)


### Bug Fixes

* **IndexList:** 修复点击侧边栏页面不跳转 ([1f4ef2d](https://github.com/TaleLin/lin-ui/commit/1f4ef2d1b01411299453d1fc57fe47d7beace218))


### Code Refactoring

* **IndexList:** 将 sidebar 整体扩大 ([c8fe69f](https://github.com/TaleLin/lin-ui/commit/c8fe69fce4459c53da71b35c2e19d77e9a0d997e))




## [v0.8.0](https://github.com/TaleLin/lin-ui/compare/0.7.2...0.8.0) (2020-05-11)

### Bug Fixes

* **Collapse:** 修复内容区域动态添加内容后不显示的问题 ([#794](https://github.com/TaleLin/lin-ui/issues/794)) ([cb03200](https://github.com/TaleLin/lin-ui/commit/cb032004d1b712ae0d822f7f63b548d9c237526a))
* **StatusShow:** 修复status_show组件在非全屏下的显示问题 ([#787](https://github.com/TaleLin/lin-ui/issues/787)) ([00c0440](https://github.com/TaleLin/lin-ui/commit/00c04400c33eb2b85ad77efe8c13c6ee20a366c5))
* **Tag:** 修复禁用状态下仍能触发 lintap 事件的问题 ([#795](https://github.com/TaleLin/lin-ui/issues/795)) ([31e6a47](https://github.com/TaleLin/lin-ui/commit/31e6a47c1e2d3fb94bf5f1c0483db16e7b903ec4))
* **Textarea:** 修改 Textarea 组件默认宽度，由固定700rpx 改为 默认100% ([#749](https://github.com/TaleLin/lin-ui/issues/749)) ([af3830d](https://github.com/TaleLin/lin-ui/commit/af3830d592f0b1e85d4d4e3a822dce5564ed7383))

### Features

* **IndexList:** 新增 IndexList 索引列表组件 ([#790](https://github.com/TaleLin/lin-ui/issues/790)) ([6367a84](https://github.com/TaleLin/lin-ui/commit/6367a84f597ea0313ae21ef49904ac91b4c53564))
* **Popup:** 修改animation和contentAlign属性名；添加l-panel-class ([0ae0a6c](https://github.com/TaleLin/lin-ui/commit/0ae0a6c084b98ce9e4ca8c6be5bcae540128a94f))
* **Progress:** 新增 Progress 组件 ([#789](https://github.com/TaleLin/lin-ui/issues/789)) ([115eb62](https://github.com/TaleLin/lin-ui/commit/115eb62ac3defcfb210c210107ac7e9fa6d7f4e8))
* **SearchBar:** 属性 address 更名为 front-text ([4b7a833](https://github.com/TaleLin/lin-ui/commit/4b7a8339aeff853cd3cac9f26fd186c4dfbeda6b))
* **SearchBar:** 添加 lintap 事件 API ([b19415d](https://github.com/TaleLin/lin-ui/commit/b19415d7d1ca07b561b6de5962f99fa44cd4bef4))
* **Tabs:** 新增标签栏 slot ([#784](https://github.com/TaleLin/lin-ui/issues/784)) ([d47ce22](https://github.com/TaleLin/lin-ui/commit/d47ce227415881f9fb2b47f25ccd5ec679b01be1))
* **Util:** 新增 NodeUtil 工具类 ([#788](https://github.com/TaleLin/lin-ui/issues/788)) ([978406a](https://github.com/TaleLin/lin-ui/commit/978406a9ebf851cfbdbb030314f02700807fba7d))

### BREAKING CHANGES

* **SearchBar:** 属性 address 废弃



## v0.7.6 (2020.04.24)

1. `A` 新增<a href="/component/animation/transition.html">过渡</a>（transition）组件
2. `A` 新增<a href="/component/layout/collapse.html">折叠面板</a>（collapse）组件
3. `F` 修复textarea组件文本域自动增高不起作用的问题
4. `F` 修复step组件参数校验错误的问题
5. `F` 修复action-sheet组件内部使用了标签选择器的问题
6. `U` message组件提供top属性用于自定义弹出位置
7. `F` 修复tabs组件在 iphone6 Plus 真机存在切换tab内容闪现的问题

## v0.7.5 (2020.03.23)

1. `F` 修改rules组件不能正确校验的的问题
2. `F` 修复segment组件滚动时获取属性报错的问题

## v0.7.4 (2020.03.13)

1. `A` 新增<a href="/component/layout/sticky.html">吸顶容器</a>（sticky）组件

## v0.7.3 (2020.02.23)

1. `A` 新增<a href="/component/form/form.html">表单</a>（form）组件
2. `A` 新增 button 组件 l-label-class 外部样式类
3. `F` 修复 action-sheet 组件设置图标后大小超出的问题

## v0.7.2（2020.01.12）

1. `A` 新增<a href="/component/view/skeleton.html">骨架屏</a>（skeleton）组件
2. `A` 新增<a href="/component/layout/album.html">相册</a>（album）组件
3. `F` 修复 textarea 组件无法调节文本输入区域高度的问题（#599）
4. `D` 删除 segment 组件销毁时的初始化方法 (#666)
5. `F` 修复 popup 组件底部弹出没有弹入动画的问题 (#670)
6. `F` 修复 crad 组件在某些类型下设置 imadge-mode 属性无效的问题（#659）

## v0.6.13（2019.12.04）

1. `F` 修复tag组件带icon的使用方式 (属性icon-name改为icon) [#618](https://github.com/TaleLin/lin-ui/issues/618)
2. `F` 修复statusShow组件custom属性未声明的问题[#619](https://github.com/TaleLin/lin-ui/issues/619)
3. `F` 修复gird组件切换grid-item的name后，内容不能正确显示的问题
4. `A` 增加popup组件关闭时的动画[#622](https://github.com/TaleLin/lin-ui/issues/622)
5. `A` 增加loading组件非全屏模式下的外部样式l-container-class[#640](https://github.com/TaleLin/lin-ui/issues/640)
6. `F` 混合标签页组件设置scrollable时无高度问题 [#643](https://github.com/TaleLin/lin-ui/issues/643)
7. `F` image-picker新增maxImageSize属性及linoversize事件
8. `F` image-picker组件isPreview属性更新为preview

## v0.6.12（2019.11.24）

1. `A` card组件新增image的image-mode属性 [#584](https://github.com/TaleLin/lin-ui/issues/584)
2. `F` 修复counter组件最大值无禁用效果的问题
3. `R` 优化badge组件优化type='limit'模式下的显示方式
4. `F` 修复checkbox-group无法触发选中/取消点击事件的问题 [#601](https://github.com/TaleLin/lin-ui/issues/601)

## v0.6.11（2019.11.14）

1. `R` 重构<a href="/component/view/steps.html">steps</a>组件
2. `F` 修复water-flow组件在数据为[]不刷新的问题

## v0.6.8（2019.10.27）

1. `U` image-picker组件linclear事件新增返回current和all
2. `F` 修复loading组件外部样式类l-class使用问题


## v0.6.7（2019.10.17）

1. `F` 修复popup组件在隐藏情况下插槽内容覆盖页面内容的问题
2. `A` 重构CheckBox组件，增强自定义性
3. `F` 修复toast组件不可穿透
4. `F` 修复tabs组件iconSize属性不起作用
5. `A` image-picker组件url属性支持传入一组包含key的对象

## v0.6.6（2019.09.29）

1. `F` 修复utils文件

## v0.6.5（2019.09.26）

1. `A` 增加grid、list等组件的hover效果
2. `A` 优化badge组件撑开后的显示效果

## v0.6.4（2019.09.23）

1. `A` 增加utils函数库

## v0.6.2 (2019.09.13)

1. `A` badge、price组件增加mode模式。原`count`属性废弃，改为`value`。
2. `A` bage组件增加shape属性。
3. `S` 优化radio图标默认大小。

## v0.6.1 (2019.09.09)

1. `A` 修改部分组件有关icon的属性。
2. `A` toast、message组件支持wx.lin.hide方法。
3. `A` 优化tag组件镂空状态下显示效果
4. `A` 优化`search-bar`组件布局效果、增加`l-class`外部样式类
5. `A` 优化tabs、segment组件横向滑动效果,修复postion为fixed时不生效的问题

## v0.6.0 (2019.08.28)

1. `A` 统一action-sheet、mask、popup、message等组件的z-index值为777；其中loading组件修改为776；同时增加zIndex属性方便修改。
2. `A` 优化dialog、toast组件的居中显示。
3. `A` 去除price组件前后插槽。
4. `A` 增加count-selector组件对初始化时的最大（小）值校验。
5. `A` 优化count-selector组件输入框内数字超出后的显示。
6. `A` 增加dialog组件content-color属性。
7. `F` 修复loademore组件在某些场景下未自适应的问题。
8. `A` 新增button的l-icon-class外部样式类（可以自定义图标了哦😯）。
9. `A` 重构radio组件，详见<a href="/component/form/radio.html">radio文档</a>。
10. `F` 修复wx.lin在跳转页面后失效的问题。
11. `A` 新增名称为error的图标。
12. `A` 增加status-show、loading、loadmore、popup组件wx.lin的调用方法。

## v0.5.15 (2019.08.20)

1. `A` 修复water-flow组件在当前最新版开发工具报错的问题。

## v0.5.14 (2019.08.14)

1. `A` input组件增加hide-label属性
2. `A` 增加`count-selector`组件事件返回参数
3. `A` tag组件增加`cell`属性

## v0.5.13 (2019.08.04)

1. `A` water-flow组件新增刷新功能
2. `A` price组件增加color、blod、size属性
3. `A` tag组件新增touch、reading属性
4. `A` button组件新增bgColor属性

## v0.5.12（2019.07.26）

1. `A` 新增tag组件size属性可选值

## v0.5.9（2019.07.24）

1. `F` 修复按需加载缺少文件的问题

## v0.5.8（2019.07.14）

1. `F` 修复water-flow组件npm安装报错问题

## v0.5.7（2019.07.14)

1. `A` price组件新增autofix、reserve-digit属性
2. `A` card组件支持自适应宽度

## v0.5.6（2019.07.03）

1. `A` countdown新增isClearInterval属性
2. `A` 新增show-row属性来控制input下边栏的显隐，并增加input经典案例demo

## v0.5.5（2019.06.30）

1. `F` 修复icon图表unicde码冲突问题
2. `F`修复动态设置数据时数据更新问题

## v0.5.4（2019.06.25）

1. `F` 修复search-bar组件缺少点击取消事件的bug

## v0.5.3（2019.06.21）

1. `F` 修复button组件special属性下样式bug

## v0.5.1（2019.06.21）

1. `F` 修复water-flow组件引起的npm编译bug

## v0.5.0（2019.06.19）

1. `A` 新增 布局组件 <a href="/component/layout/water-flow.html">Water-flow 瀑布流</a>
2. `F` 移除不需要的依赖包

## v0.4.4（2019.05.13）

1. `F` segment组件引入错误

## v0.4.3（2019.05.12）

1. `A` 新增toast 设置偏移量的问题
2. `F` 修复popup引入错误

## v0.4.2（2019.05.29）

1. `A` countdown组件增加正计时功能
2. `F` 修复search-bar组件缺少方法

## v0.4.1（2019.05.22）

1. `F` 修复按需加载实现失败的bug
2. `F` 修复button组件点击触发两次事件的问题

## v0.4.0（2019.05.15）

1. `A` 新增 表单组件 <a href="/component/view/steps.html">Steps 步骤条</a> 

## v0.3.0（2019.05.08）

1. `F` 修复 `check-box` 组件默认和选中的问题
2. `A` 新增 表单组件 <a href="/component/form/rate.html">Rate 评分</a> 

## v0.2.0（2019.05.01）

1. `F` 修复 修复`countdown`组件日期在ios下格式错误导致的组件不显示
2. `F` 修复 `tabs`组件在key为数字开头时找不到组件的问题
3. `A` 新增 导航组件 <a href="/component/nav/segment.html">Segment 选项卡</a> 


## v0.1.0 (2019.04.24)

1. `F` 修复 `popup`组件的动画优化 

## v0.0.1-alpha.21 (2019.04.20)

1. `F` 修复 修改`tabbar`的属性，新增`isNav`属性
2. `F` 修复 更改`toast`组件定时器bug
3. `A` 新增 新增`toast`和`dialog`的`success`回调，
4. `F` 修复 `image-picker`外部样式类覆盖问题

## v0.0.1-alpha.20 (2019.04.15)

1. `F` 修复 倒计时组件在页面隐藏或销毁时未销毁的问题
2. `F` 修复 `tabs`装饰线动画效果，在自定义激活装饰线下样式位置错乱，`tabs` 默认背景色、添加动画，修改`tabs`在`scrollable`时非等宽不生效 
3. `A` 新增 增加了`checkbox`的`detail`属性，`linchange`事件返回的数据增加一个`all`字段来展示所有的选中项
4. `F` 修复 修复`message`定时器bug
5. `F` 修复 更改`count-selector`输入框事件响应
6. `F` 修复 `Avatar`的`icon`值默认值

## v0.0.1-alpha.19 (2019.03.21)

1. `F` 修复 README里微信公众号名称和图片大小
2. `A` 新增 tabs新增非等宽标签设置
3. `A` 新增 <a href="/component/shopping/search.html">Search-bar组件</a> 
4. `F` 修复 image-picker组件，将tempFilePaths属性改为urls，并增加clear属性
5. `A` 新增 Action-sheet适配iphoneX
6. `F` 修复 Avatar头像的尺寸问题
7. `F` 修复 List默认样式
8. `U` 更新 删除所有组件内的wxs文件，替换为js实现

## v0.0.1-alpha.18 (2019.03.20)

1. `F` 修复 demo里<a href="/component/view/popup.html">Popup组件</a> 引入命名错误
2. `A` 新增 优化表单组件，新增文本错误提示方式
3. `A` 新增 Notice-bar组件的事件返回参数

## v0.0.1-alpha.17 (2019.03.18)

1. `F` 修复 表单组件 <a href="/component/form/input.html">Input 输入框 </a> 的清除图标,增加新的slot插槽
2. `F` 修复 校验数字类型错误 


## v0.0.1-alpha.16 (2019.03.07)

1. `U` 更新 操作反馈组件，`dialog`组件可以支持更多的外部样式类。
2. `U` 更新 基础组件 <a href="/component/basic/icon.html">Icon 图标</a> ，支持自定义图标
3. `F` 修复 组件rules的bug 
4. `F` 修复 表单组件 <a href="/component/form/textarea.html">Textarea 输入框</a> 

## v0.0.1-alpha.15 (2019.03.06)

1. `A` 新增 Lin UI的小程序文档入口，可以跳转Lin Doc。
3. `U` 更新 视图组件，`popup`组件可以设置mask的背景色。
3. `U` 更新 代码示例中，`className`过滤器的描述。
4. `U` 更新 demo的目录结构。
5. `F` 修复 表单组件 <a href="/component/form/textarea.html">Textarea 多行文本框</a> 
6. `F` 修复 表单组件 <a href="/component/form/input.html">Input 输入框</a> 
7. `F` 修复 导航组件 <a href="/component/nav/tab-bar.html">TabBar 底部导航栏</a> 

## v0.0.1-alpha.14 (2019.03.01)

1. `A` 新增 电商专题组件 <a href="/component/shopping/count-selector.html">countSelect 数量选择器</a> 
1. `U` 更新 代码示例的icon
2. `F` 修复 表单组件 <a href="/component/form/textarea.html">Textarea 多行文本框</a> 

## v0.0.1-alpha.13 (2019.02.18)

1. `A` 新增 电商专题组件 <a href="/component/shopping/price.html">Price 价格</a> 
2. `A` 新增 表单组件 <a href="/component/form/image-picker.html">ImagePicker 图片选择器</a> 

## v0.0.1-alpha.12 (2019.02.13)

1. `A` 新增 布局组件 <a href="/component/layout/card.html">Card 卡片</a> 
2. `U` 更新 Lin UI在 `NPM`上的包名变更为 `lin-ui`
3. `F` 修复 组件 组合标签高度问题，小程序示例代码内标题错误等问题。

## v0.0.1-alpha.11 (2019.02.03)

1. `A` 新增 导航组件 <a href="/component/nav/tab-bar.html">tabBar 底部导航栏</a> 
2. `A` 新增 布局组件 <a href="/component/layout/grid.html">Grid 宫格</a> 
3. `A` 新增 布局组件 <a href="/component/layout/list.html">List 列表</a> 

<RightMenu />
