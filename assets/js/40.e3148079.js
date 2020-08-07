(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{408:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"消息提示-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息提示-message"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v("  消息提示 Message")],1),t._v(" "),s("blockquote",[s("p",[t._v("用于主动操作后的消息反馈。")])]),t._v(" "),s("h2",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[t._v("Message组件有以下两种用法：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("常规组件的使用方式，通过更改传入的属性值来控制"),s("code",[t._v("Message")]),t._v("的显示和隐藏。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("wx.lin.showMessage(object)")]),t._v("，使用"),s("code",[t._v("wx.lin.showMessag")]),t._v("的调用时，与组件的使用一致，需要在json文件中引入组件，且在wxml中写入"),s("code",[t._v("Message")]),t._v("组件。")])])]),t._v(" "),s("p",[s("code",[t._v("wx.lin.showMessage")]),t._v("接受的参数是个对象，里面包含了与消息提示相关的属性。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("第一种用法小程序基础库版本 "),s("code",[t._v("2.6.1")]),t._v(" 开始支持。")])]),t._v(" "),s("h3",{attrs:{id:"示例代码（第一种用法）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码（第一种用法）"}},[t._v("#")]),t._v(" 示例代码（第一种用法）")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- wxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("lintap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("操作"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{content}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'消息提示'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"示例代码（第二种用法）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码（第二种用法）"}},[t._v("#")]),t._v(" 示例代码（第二种用法）")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'消息提示'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"显示消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示消息"}},[t._v("#")]),t._v(" 显示消息")]),t._v(" "),s("p",[t._v("通过设置"),s("code",[t._v("show")]),t._v("属性为"),s("code",[t._v("true")]),t._v("显示消息（第一种用法使用该属性）,设置为"),s("code",[t._v("fasle")]),t._v("隐藏消息。")]),t._v(" "),s("h3",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- wxml --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("lintap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("操作"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{content}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'消息提示'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"消息内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息内容"}},[t._v("#")]),t._v(" 消息内容")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("content")]),t._v("属性设置消息提示的内容，此处文字建议不超过十个。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmdSN2pYa0o3U0wwbDdRNkhuMFR6b0pGN2R0NldnWDM1ZXFqK3RibDdjM2Z3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",alt:"提示类型"}})]),t._v(" "),s("h3",{attrs:{id:"示例代码-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"提示类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示类型"}},[t._v("#")]),t._v(" 提示类型")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("type")]),t._v("属性设置为"),s("code",[t._v("primary")]),t._v("、"),s("code",[t._v("success")]),t._v("、"),s("code",[t._v("warning")]),t._v("、"),s("code",[t._v("error")]),t._v("创建不同类型的消息提示。默认值为"),s("code",[t._v("primary")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmdSN2pYa0o3U0wwbWhGL2tYSlpwdHJOMms0eWpNQ0JaaUMyeXZVbWM3LzZBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",alt:"提示类型"}})]),t._v(" "),s("h3",{attrs:{id:"示例代码-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"消息提示时长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息提示时长"}},[t._v("#")]),t._v(" 消息提示时长")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("duration")]),t._v("属性设置消息提示时长。默认值为"),s("code",[t._v("1500ms")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        duration："),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"消息图标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息图标"}},[t._v("#")]),t._v(" 消息图标")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("icon")]),t._v("属性设置消息内的图标的名称。默认图标为对应"),s("code",[t._v("type")]),t._v("的图标，当"),s("code",[t._v("type")]),t._v("为primary 时无图标。")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("image")]),t._v("属性设置消息文字前的自定义图片。通过"),s("code",[t._v("l-image-class")]),t._v("属性可更改自定义图片的样式。")]),t._v(" "),s("h3",{attrs:{id:"示例代码-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        duration："),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"消息提示属性（message-attributes）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息提示属性（message-attributes）"}},[t._v("#")]),t._v(" 消息提示属性（Message Attributes）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("显示与隐藏消息")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("fasle")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息提示类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("primary/warning/success/error")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("primary")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息显示的时长")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1500")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息图标")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("type")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息图标的大小")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon-color")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息图标的颜色")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息前的自定义图片")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息调用成功后的回调函数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("top")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("消息弹出时距离视窗顶部的距离（单位"),s("code",[t._v("rpx")]),t._v("）")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])]),t._v(" "),s("h2",{attrs:{id:"消息提示外部样式类-message-externalclasses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息提示外部样式类-message-externalclasses"}},[t._v("#")]),t._v(" 消息提示外部样式类 (Message ExternalClasses)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖消息区域自定义外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-image-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖消息前自定义图片的自定义外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);