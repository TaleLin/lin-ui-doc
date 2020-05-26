
<p align="center">
  <!-- <a href="http://doc.mini.7yue.pro/"> -->
    <img
      class="QR-img" src="http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEZWVFhTU3I2YnRTVnB6VHZsbHR0SzJtMHNCK28rUE41QzljaFBmdmc2ZUFBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">
  <!-- </a> -->
</p>

<div align="center"> <span class="logo" > Lin UI </span> </div>

<div class="row" />

<div align="center">
  <span class="desc" >Fantastic native based Mini-Programe components</span> 
</div>

<div align="center">

![](https://img.shields.io/badge/build-passing-00d508.svg)
![](https://img.shields.io/badge/license-MIT-3963bc.svg)

</div>

<div align="center">

![](https://img.shields.io/badge/less-^2.7.3-00d508.svg)
![](https://img.shields.io/badge/eslint-^5.0.1-00d508.svg)
![](https://img.shields.io/badge/cli-0.0.1.alpha.1-3963bc.svg)
![](https://img.shields.io/badge/npm-v3.0.0+-00d508.svg)
![](https://img.shields.io/badge/gulp-v3.9.1-00d508.svg)
![](https://img.shields.io/badge/node-v8.11.0+-00d508.svg)

</div>


# <H2Icon />简介

> Lin UI 是基于 **微信小程序原生语法** 实现的组件库。遵循简洁，易用的设计规范。


在如今这个移动互联网时代，技术创新将带来商业模式的完全颠覆，伴随着小程序的诞生，移动互联网行业也迎来了新一波的浪潮。<br/>
无数大小公司纷纷开始开发自己的小程序产品，前端的技术栈要求里也新增了 `微信小程序` 这项技能。

另一方面，软件开发的过程中，部分功能或视图的实现是一个重复性的工作，微信小程序从诞生到现在，不过两年时间（2017/1/09 ~ 2019/2/12），生态圈对比 `Vue`, `React` 来说实在过于单调， 而且很少有在设计和实用性上都很突出的产品，能够在实际开发中帮助到开发者的产品更是屈指可数。<br />

所以，我们在深思熟虑后，决定要动手设计并开发一个与小程序相匹配的组件库。与其他组件库不同的是，我们除了提供基本的组件外，还会提供 `wxs模块` 、`高级组件` 、 `电商组件模块` 等等。
例如，在电商项目里常用的 `SKU联动选择` ，`城市选择器` 等。不过，为了尽快发布与开发者们见面，我们先完成了基本的组件部分，剩余的高级内容将在当前版本稳定后，提上日程。

## 特性

 - **简单易用**

组件采用微信小程序的原生语法编写，只需要熟悉初级的 `HTML` 、 `CSS` 、 `JavaScript` 和 `微信小程序` 相关知识就能上手开发，同时既可以一次性加载所有的代码，也可以选择只加载使用到的某些组件的代码。

 - **规范统一**

遵循统一的 `设计规范` ，`接口标准` 和 `事件冒泡机制` ，减少开发者查阅文档的时间成本，提升开发效率。

 - **文档丰富**

为了能让更多开发者接触之初，就能够熟练的用Lin-UI开发自己的小程序应用，我们对每个组件的 `属性` 、 `事件` 、`用法` 、和 `案例` 上都做了详尽的描述。

 - **扩展性强**

支持 `按需引入` 和 `自定义的主题色` ，生成多种风格，满足个性化产品需求；同时还具有很强的 `扩展性` ，轻松实现组件的二次开发。
 
 - **支持第三方库框架**

支持第三方框架，`taro`，`mpvue`。

## 小结
  与微信小程序一样，Lin UI 目前还处于不断完善的过程中，我们会关注微信官方的每一次更新，以及收集更多用户的反馈，致力于打造一个更好的小程序UI库！<br/>



<p class="action">
  <a href="/start/" class="action-button">快速开始 →</a>
</p>

<style>

.center {
  text-align:center;
  display:flex;
  width: 100%;
  font-size: 36px;
  flex-direction: row;
  align-items: center;
  justify-content:center;  
  margin-bottom: 20px;
  margin-top: 20px;
}

.logo {
  font-size: 32px;
  font-weight: bold;
  color: #333;
}

.desc {
  font-size: 20px;
}

.row {
  height: 1px;
  width: 95%;
  background: #eee;
  margin: 5px auto 20px;
}

.action {
  text-align:center;
  margin-top: 50px;
}

.action-button {
  display: inline-block;
  font-size: 16px;
  color: #fff;
  padding: 5px 15px;
  line-hight: 45px;
  background-color: #3683d6;
  border-radius: 4px;
  transition: background-color .1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}

.QR-wrapper{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;  
  margin-bottom: 50px;
  margin-top: 50px;
}

.QR-img{
  height: 200px;
  width:200px;
}
</style>

<RightMenu />