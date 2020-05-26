---
title: 外部样式类使用
---

# <H2Icon /> 外部样式类使用

微信小程序官方文档中指出，在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的。

详情参考微信[小程序组件模板和样式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)相关章节。

所以在使用外部样式类去覆盖组件原有的样式属性时只能通过提高外部样式优先级的方法进行覆盖。

本章建议在传入的外部样式类css属性后添加`!important`提高样式的优先级，供各位开发者参考使用。

例如更改button组件的文本颜色：

```wxml
<l-button l-class="button">按钮</l-button>
```

```wxss
.button{
  color:#333 !important;
}
```

