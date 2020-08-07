(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{407:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"模态框-dialog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模态框-dialog"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 模态框 Dialog")],1),t._v(" "),s("blockquote",[s("p",[t._v("保留当前页面，弹出一个对话框，告知用户并承载相关操作。")])]),t._v(" "),s("h2",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[t._v("Dialog组件有以下两种用法：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("常规组件的使用方式，通过更改传入的属性值来控制"),s("code",[t._v("Dialog")]),t._v("的显示和隐藏。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("wx.lin.showDialog(object)")]),t._v("，使用"),s("code",[t._v("wx.lin.showDialog")]),t._v("的调用时，与组件的使用一致，需要在json文件中引入组件，且在wxml中写入"),s("code",[t._v("Dialog")]),t._v("组件。")])])]),t._v(" "),s("p",[t._v("`wx.lin.showDialog接受的参数是个对象，里面包含了与消息提示相关的属性。")]),t._v(" "),s("h3",{attrs:{id:"示例代码（第二种用法）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码（第二种用法）"}},[t._v("#")]),t._v(" 示例代码（第二种用法）")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showDialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     \n      title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标题"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这个是提示框"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户点击确定'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户点击取消'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"模态框类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模态框类型"}},[t._v("#")]),t._v(" 模态框类型")]),t._v(" "),s("p",[t._v("模态框可通过设置"),s("code",[t._v("type")]),t._v("属性为"),s("code",[t._v("alert")]),t._v("或者"),s("code",[t._v("confirm")]),t._v("来控制模态框的类型为 "),s("code",[t._v("提示框")]),t._v(" 和 "),s("code",[t._v("确认框")]),t._v(" ，不设置则显示状态默认为"),s("code",[t._v("alert")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 提示框 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("     \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这个是提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--确认框 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("     \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这个是确认框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("img-wrapper",[s("img",{attrs:{src:"http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMNzY0YWVBSFRIeVVHaGVqZXd4VlZFazJHbnFUVG02eXNnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg"}})]),t._v(" "),s("h2",{attrs:{id:"无标题的模态弹框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无标题的模态弹框"}},[t._v("#")]),t._v(" 无标题的模态弹框")]),t._v(" "),s("p",[t._v("模态框可以通过设置 "),s("code",[t._v("show-title")]),t._v(" 属性为"),s("code",[t._v("true")]),t._v("、"),s("code",[t._v("false")]),t._v("来控制组件标题的显示和隐藏，不设置则显示状态默认为"),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"示例代码-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 无标题提示框 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show-title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{false}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这个是无标题提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 无标题确认框 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show-title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{false}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这个是无标题确认框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("img-wrapper",[s("img",{attrs:{src:"http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMNEFTbXhwZXBBdEgzSlAvNk1vV2Vhd0g5ckNRZC9XODZ3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg"}})]),t._v(" "),s("h2",{attrs:{id:"修改按钮文字和颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改按钮文字和颜色"}},[t._v("#")]),t._v(" 修改按钮文字和颜色")]),t._v(" "),s("p",[t._v("模态框的按钮支持 "),s("code",[t._v("文本内容")]),t._v(" 和 "),s("code",[t._v("字体颜色")]),t._v(" 的修改， 设置 "),s("code",[t._v("confirm-text")]),t._v(" 和 "),s("code",[t._v("cancel-text")]),t._v(" 可以更改模态框两个按钮的文本， "),s("code",[t._v("confirm-color")]),t._v(" 和 "),s("code",[t._v("cancel-color")]),t._v(" 则可以更改他们的字体颜色。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[t._v("提示框只需设置 "),s("code",[t._v("confirm-text")]),t._v("和  "),s("code",[t._v("confirm-color")]),t._v("。")])])]),t._v(" "),s("h3",{attrs:{id:"示例代码-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("提问"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PHP是最好的语言吗？"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("confirm-text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("confirm-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#f60"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cancel-text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cancel-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#999"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("img-wrapper",[s("img",{attrs:{src:"http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMNyt3UHhTNitiaE5rRndPbWlZbXg5QnhtZ1RLOU4yZm9nPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg"}})]),t._v(" "),s("h2",{attrs:{id:"设置子节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置子节点"}},[t._v("#")]),t._v(" 设置子节点")]),t._v(" "),s("p",[t._v("我们在使用的组件的时候，可以根据使用场景,自由的在遮罩层组件内插入 "),s("code",[t._v("image")]),t._v("、 "),s("code",[t._v("view")]),t._v("、 "),s("code",[t._v("text")]),t._v(" 等子节点，当然，你也可以在其中插入 "),s("code",[t._v("自定义组件")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[t._v("不建议在组件中传入多个子节点。")]),t._v(" "),s("li",[t._v("子节点默认是垂直居中显示。")])])]),t._v(" "),s("h3",{attrs:{id:"示例代码-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-4"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("confirm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show-title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{false}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("dio-img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/path/to/example.gif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("img-wrapper",[s("img",{attrs:{src:"http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMMUtPV201QVJ0MjcrdjZsdHFtK2xNVFlXcm01SzRmZDhBPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg"}})]),t._v(" "),s("h2",{attrs:{id:"锁定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锁定"}},[t._v("#")]),t._v(" 锁定")]),t._v(" "),s("p",[t._v("模态框设置 "),s("code",[t._v("locked")]),t._v(" 属性为 "),s("code",[t._v("false")]),t._v(" 时，点击背景可隐藏模态框组件，默认为 "),s("code",[t._v("true")]),t._v(" ， 即点击背景无法关闭该组件。")]),t._v(" "),s("h3",{attrs:{id:"示例代码-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-5"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-wxml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-wxml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-dialog")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show-title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{false}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("locked")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{locked}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这个是提示框"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"模态框参数-（dialog-attributes）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模态框参数-（dialog-attributes）"}},[t._v("#")]),t._v(" 模态框参数 （Dialog Attributes）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("控制模态框的显示")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置模态框的类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("alert/confirm")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("alert")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置模态框的标题")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("提示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("title-color")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置标题的颜色")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("#45526b;")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置模态框的内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("locked")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置背景是否为锁定态")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("show-title")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示模态框的标题")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("confirm-text")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("确定按钮的文本")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("确定")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("confirm-color")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("确定按钮的颜色")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("#3683d6")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-text")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的文本")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("取消")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-color")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的颜色")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("#45526b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("is-hover")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示hover效果")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),s("h2",{attrs:{id:"模态框外部样式类-dialog-externalclasses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模态框外部样式类-dialog-externalclasses"}},[t._v("#")]),t._v(" 模态框外部样式类 (Dialog ExternalClasses)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-title-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog头部的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-content-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog内容的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-cancel-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog取消按钮的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-confirm-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog确定按钮的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("l-bg-class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置dialog遮罩的外部样式类")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])])])]),t._v(" "),s("h2",{attrs:{id:"模态框事件-（dialog-events）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模态框事件-（dialog-events）"}},[t._v("#")]),t._v(" 模态框事件 （Dialog Events）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lintap")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当点击背景时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("---------")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linconfirm")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当点击确定时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("confirm")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bind:lincancel")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当点击取消时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("cancel")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--------")])])])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);