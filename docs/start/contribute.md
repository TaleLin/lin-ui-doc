---
title: 贡献指南
---

# <H2Icon /> 贡献指南

这篇指南会指导你如何为 LinUI 贡献一份自己的力量，请在你要提 pull request 之前花几分钟来阅读一遍这篇指南。

## 开发流程

我们所有的工作都会放在[GitHub](https://github.com/TaleLin/lin-ui)上。不管是核心团队的成员还是外部贡献者的 pull request 都需要经过同样流程的 review。

## 分支管理

基于我们的 发布周期，我们长期维护两个分支 develop 和 feature。如果你要修一个 bug，那么请发 pull request 到 develop；如果你要提一个增加新功能的 pull request，那么请基于 feature 分支来做。

## Bugs && Issue

如果您想要发现的 Bug 快速解决和提出新的想法及新增 API 得以实现，提出 [Github Issue](https://github.com/TaleLin/lin-ui/issues) 会是一种优雅的方式。我们也欢迎您来提出 Issue,不过在提 Issue 时请仔细按照Issue Template描述所遇到的 Bug 或者需求。

## Pull Request

如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这篇文章来学习：

[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

LinUI 团队会尽快处理您所提的 Pull Request ，review 并合并代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。

在您发送 Pull Request 之前，请确保您是按照一下流程进行的：

1. clone最新的`develop`做修改。
2. 在src文件夹下对应的组件进行修改。
3. 运行 npm run build 命令。
4. 填写规范的 commit 消息并提交 Pull Request(当前分支=>develop)。

<RightMenu />