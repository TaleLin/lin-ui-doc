---
title: 过渡 Transition
---

# <H2Icon /> 过渡 Transition

> 通过使用transition给元素添加进入、离开的动画效果。

## 基础用法
将元素包裹在 transition 组件内，通过 show 属性控制元素的显示隐藏。当元素显示/隐藏时，会有相应的过渡动画。
```wxml
<l-transition show="{{ show }}">
  林间有风
</l-transition>
```

## 动画类型
transition 组件提供多种内置的动画效果，可以通过 name 字段指定动画类型。
```wxml
<l-transition show="{{ show }}" name="fade-in">
  林间有风
</l-transition>

<l-transition show="{{ show }}" name="slide-up">
  林间有风
</l-transition>
```

## 动画时长
transition 组件可以通过设置 duration 的值来控制动画的时间，duration 可以接收一个数值或者对象：{enter: 1000, leave: 2000}

```wxml
<l-transition show="{{ show }}" name="fade-in" duration="600">
  林间有风
</l-transition>
```

```wxml
<l-transition show="{{ show }}" name="fade-in" duration="{{ { enter: 300, leave: 1000 } }}">
  林间有风
</l-transition>
```

## 动画事件
transition 组件提供了动画执行各状态的事件函数。

1. linbeforeenter 入场动画开始之前触发
2. linenter 入场动画开始之后、结束之前触发
3. linafterenter 入场动画结束之后触发
4. linbeforeleave 出场动画开始前触发
5. linleave 出场动画开始之后、结束之前触发
6. linafterleave 出场动画结束之后触发

```wxml
<l-transition
      show="{{ show }}"
      bind:linbeforeenter="beforeEnter"
      bind:linenter="entering"
      bind:linafterenter="afterEnter"
      bind:linbeforeleave="beforeLeave"
      bind:linleave="leaving"
      bind:linafterleave="afterLeave"
      name="slide-left"
>
  林间有风
</l-transition>
```

```js
{
  beforeEnter() {
    console.log('入场动画准备开始')
  },

  entering() {
    console.log('入场动画正在进行中')
  },

  afterEnter() {
    console.log('入场动画完成')
  },

  beforeLeave() {
    console.log('出场动画准备开始')
  },

  leaving () {
    console.log('出场动画正在进行中')
  },

  afterLeave() {
    console.log('出场动画完成')
  },
}
```

## 高级用法
transition 在动画的不同阶段会有不同的样式 class，如果 transition 内置的动画不能满足你的需要，完全可以通过外部样式类自定义过渡效果。在使用自定义动画时，需要给 transition 设置 `name=""`。

### 案例1. SKU 选择弹框
```wxml
<l-transition
        show="{{ show }}"
        duration="400"
        name=""
        l-class="case-custom-class"
        l-enter-active-class="lin-enter-active-class"
        l-leave-active-class="lin-leave-active-class"
        l-enter-class="lin-enter-class"
        l-leave-to-class="lin-leave-to-class"
>
  <view class="sku">
    <view class="sku-card-container">
      <l-card l-class="sku-card"
              image="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1549701108&di=d141540da70a7f92abd6f90ffef7460c&src=http://ztd00.photos.bdimg.com/ztd/w=700;q=50/sign=0b1f180b5a43fbf2c52ca4238045bbbd/b7fd5266d0160924665b9f18dd0735fae6cd34b2.jpg"
              title="新疆精选苹果"
              type="primary">
        <view class="sku-card-content">
          <view>新疆苹果,又名塞威氏苹果,蔷微科,落叶乔木。</view>
          <view class="sku-card-price">
            <l-price unit="￥" value="666"></l-price>
          </view>
        </view>
      </l-card>
    </view>
    <view class="sku-tag-container">
      <view class="sku-tag-title">规格分类</view>
      <view class="sku-tag-list">
        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">试用装1个</l-tag>
        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">散装5kg装（约4-5个）</l-tag>
        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">散装10kg装（约9-11个）</l-tag>
        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">散装12kg装（约10-12个）</l-tag>
        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">小号 1 箱装（约8kg）</l-tag>
        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">中号 1 箱装（约12kg）</l-tag>
        <l-tag l-class="tag-item" bg-color="#eee" font-color="#333" size="mini">大号 1 箱装（约16kg）</l-tag>
      </view>
    </view>
    <view class="sku-action">
      <l-button width="100%" class="sku-action-container" l-class="sku-action-item" l-label-ckass="sku-action-item" shape="square" bind:tap="closeCase" data-name="2">确定</l-button>
      <l-button width="100%" class="sku-action-container" l-class="sku-action-item" l-label-ckass="sku-action-item" shape="square" plain bind:tap="closeCase" data-name="2">取消</l-button>
    </view>
  </view>
</l-transition>

```
```js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
  },

  openCase() {
    this.setData({
      show: true
    });
  },

  closeCase() {
    this.setData({
      show: false
    });
  }

})

```

```wxss
.case-custom-class{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /*height: 80%;*/
  background-color: #ffffff;
  border-top: 2rpx solid #ccc;
  border-radius: 20rpx 20rpx 0 0;
  z-index: 1;
  box-shadow: 0 -1px 40px rgba(0,0,0,.3);
}


.lin-enter-active-class,
.lin-leave-active-class {
  bottom: 0;
}

.lin-enter-class,
.lin-leave-to-class {
  bottom: -100%;
}

.sku-card{
  box-shadow: none !important;
}

.sku-card-content{
  margin-top: 10rpx;
  color: #666;
  font-size: 26rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

.sku-card-price{
  margin-top: 10rpx;
}

.sku-tag-title{
  padding-left: 20rpx;
  margin-bottom: 20rpx;
}

.sku-tag-list{
  display: flex;
  flex-wrap: wrap;
}

.tag-item{
  margin: 10rpx;
}

.sku-action{
  display: flex;
  margin-top: 20rpx;
}

.sku-action-container{
  flex: 1;
}

.sku-action-item{
  width: 100% !important;
}

```

```json
{
  "usingComponents": {
    "l-transition":"/dist/transition/index",
    "l-button":"/dist/button/index",
    "l-card": "/dist/card/index",
    "l-price": "/dist/price/index",
    "l-tag": "/dist/tag/index",
    "l-icon": "/dist/icon/index"
  }
}
```

### 案例2. 遮照页
```wxml
<l-transition
    show="{{ show }}"
    duration="300"
    name=""
    l-class="case-custom-class"
    l-enter-active-class="lin-enter-active-class"
    l-leave-active-class="lin-leave-active-class"
    l-enter-class="lin-enter-class"
    l-leave-to-class="lin-leave-to-class"
  >
  <l-status show type="cart" full-screen="{{false}}" bind:lintap="closeCase"/>
</l-transition>
```

```js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
  },

  openCase() {
    this.setData({
      show: true
    });
  },

  closeCase() {
    this.setData({
      show: false
    });
  }

})

```

```wxss
.case-custom-class{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}


.lin-enter-active-class,
.lin-leave-active-class {
  left: 0;
  top: 0;
}

.lin-enter-class,
.lin-leave-to-class {
  left: -100%;
  top: -100%;
}

```

```json
{
  "usingComponents": {
    "l-transition":"/dist/transition/index",
    "l-status":"/dist/status/index"
  }
}
```

## 动画属性（Transition Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| name |	动画类型 |	String	| 见下方动画类型 | fade |
| show|    是否展示组件      |  boolean  | true/false | true |
| duration |	动画时长，单位为毫秒 | number/object | -  | 300 |
| custom-style |	自定义样式 |	String	| - | - |

## 动画事件 (Transition Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linbeforeenter | 进入前触发 | -    | - |
| bind:linenter | 进入中触发 | -    | - |
| bind:linafterenter | 进入后触发 | -    | - |
| bind:linbeforeleave | 离开前触发 | -    | - |
| bind:linleave | 离开中触发 | -    | - |
| bind:linafterleave | 离开后触发 | -    | - |



## 动画外部样式类 (Transition ExternalClasses)

| 外部样式类名    | 说明    | 备注 |
| :--------- | :----------------- | :----- |
| l-class | 根节点样式类 | --- | 
| l-enter-class | 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。 | --- |
| l-enter-active-class | 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。 | --- |
| l-enter-to-class | 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 linenterclass 被移除)，在过渡/动画完成之后移除。 | --- |
| l-leave-class | 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。 | --- |
| l-leave-active-class | 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 | --- |
| l-leave-to-class | 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 linleaveclass 被删除)，在过渡/动画完成之后移除。 | --- |

## 动画类型 (Transition Type)

| 名称    | 说明     |
| :--------- | :-----------------  |
| fade | 淡入  | 
| fade-up | 	上滑淡入  | 
| fade-down | 下滑淡入  | 
| fade-left | 左滑淡入  | 
| fade-right | 	右滑淡入  | 
| slide-up | 上滑进入  | 
| slide-down | 下滑进入  | 
| slide-left | 左滑进入  | 
| slide-right | 右滑进入  | 

<RightMenu /> 
