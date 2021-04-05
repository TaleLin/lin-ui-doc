---
title: 
---

# <H2Icon /> 表单 Form

> 由输入框、文本框、单选框、多选框、评分控件组成，用以收集、校验、提交数据。适用于账号注册、用户信息填写等表单页面。

## 基础案例
用户信息表单。
```wxml
<l-form name="student" l-form-btn-class="l-form-btn-class" bind:linsubmit="submit">
    <l-form-item label="姓名:" name="studentName">
        <l-input id="studentName" value="{{student.name}}" hide-label show-row="{{false}}"/>
    </l-form-item>

    <l-form-item label="年龄:" name="studentAge">
        <l-input id="studentAge" value="{{student.age}}" hide-label show-row="{{false}}"/>
    </l-form-item>

    <l-form-item label="地址:" name="studentAddress">
        <l-input id="studentAddress" value="{{student.address}}" hide-label show-row="{{false}}"/>
    </l-form-item>


    <view slot="submit">
        <l-button>提交</l-button>
    </view>
    <view slot="reset">
        <l-button type="default" plain>重置</l-button>
    </view>
</l-form>

```
```wxss
.l-form-btn-class{
    display: flex;
    justify-content: space-around;
    margin-top: 10rpx;
}
```
```javascript
Page({
  data: {
    student: {
      name: '',
      age: '',
      address: ''
    },
  },
  submit(event){
    const {detail} = event;
    /*
      detail 返回三个参数
      1、values: 各表单项的value值
      2、errors: 各表单项验证后的返回的错误信息数组
      3、isValidate: 表单是否验证通过的boolean值
      具体格式示例：
      detail = {
         values: {
             studentName: "",
             studentAge: "",
             studentAddress: ""
         },
         errors: {
             studentName: [],
             studentAge: [],
             studentAddress: []
         },
         isValidate: true
      }
    */
  },
  onLoad: function () {
    wx.lin.initValidateForm(this)
  },
})
```
:::img
![height=200](/screenshots/form/image1.png)
:::

在 form 组件中，每一个表单域由一个 form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 `Input`、`Checkbox`、`Radio`、`Rate`、`TextArea` 。
form-Item 中只能使用 Lin-UI 的表单元素，不能使用其他UI组件或者小程序的原生组件。

表单使用需要有以下注意：

1. 使用 form 组件时需要在 onLoad 中调用 `wx.lin.initValidateForm(this)`进行初始化。

2. 需要给 form 组件设置 name 属性。当用户手动提交表单的时候需要传入表单 name。例： `<l-form name="student"></l-form>`。

3. 需要给 form-Item 设置 name 属性。name 的值将作为提交表单时返回的 Key 。例： `<l-form-item name="studentName"></l-form-item>`。

4. 每一个表单控件必须设置一个 id 属性，且属性值必需与 form-Item 的 name 属性值相同。id属性用于通过selectComponent获取表单域的值。
例：`<l-form-item name="studentName"><l-input id="studentName"/></l-form-item>`



## 使用更多表单项

### 示例代码

```wxml
<l-form name="form" bind:linsubmit="submit" l-form-btn-class="l-form-btn-class">
    <l-form-item label="填写姓名:" name="name">
        <l-input id="name" value="{{name}}" hide-label show-row="{{false}}"/>
    </l-form-item>
    <l-form-item label="选择歌曲:" name="music" >
        <l-checkbox-group bind:linchange="change" id="music" placement="row">
            <l-checkbox
                l-class="l-checkbox-color"
                wx:for="{{items}}"
                wx:key="{{item.id}}"
                placement="{{position}}"
                key="{{item.name}}"
                checked="{{item.checked}}"
            >
                {{item.name}}
            </l-checkbox>
        </l-checkbox-group>
    </l-form-item>
    <l-form-item label="选择性别:" name="sex">
        <l-radio-group current="{{sex}}" id="sex" placement="row">
            <l-radio key="0">
                男
            </l-radio>
            <l-radio key="1">
                女
            </l-radio>
        </l-radio-group>
    </l-form-item>
    <l-form-item label="自我评分:" name="score">
        <l-rate id="score" value="{{score}}" />
    </l-form-item>
    <l-form-item label="性格描述:" name="desc">
        <l-textarea border="{{false}}" id="desc" value="{{desc}}" />
    </l-form-item>

    <view slot="submit">
        <l-button>提交验证</l-button>
    </view>
    <view slot="reset">
        <l-button type="default" plain>重置</l-button>
    </view>
</l-form>
```

```javascript
  data: { 
    name: '王大锤', 
    sex: '', 
    music: '',
    score: '',
    desc: '',
    items: [
      {
        id: 1,
        name: '青瓷',
        checked: false
      },
      {
       id: 2,
       name: '双棍',
       checked: false
      },
      {
        id: 3,
        name: '明天',
        checked: false
    }]
  },
  onLoad: function () {
   wx.lin.initValidateForm(this)
  },
  change(e) {
    let items = this.data.items;
    items.forEach(item => {
      if(item.name == e.detail.key) {
        item.checked = e.detail.checked;
      }
    });
    this.setData({
      items: items
    });
  }
```
:::img
![height=250](/screenshots/form/image2.png)
:::


## 更改表单域的布局方式

通过设置 label-placement 切换表单项的布局方式。 默认值是 `row` ，即label与内容项同行显示。值为 `column` 时，label显示在内容项上方。

### 示例代码

```wxml
<l-form-item label="填写姓名:" name="name" label-placement="column">
    <l-input id="name" value="{{name}}" hide-label show-row="{{false}}"/>
</l-form-item>
```

## 设置表单域标签的文字对齐方式

通过设置 align-items 更改表单域标签内容文字的对齐方式。默认值是 `start` ，可选项为 `start/center/end `。


### 示例代码

```wxml
<l-form-item label="填写姓名:" name="name" align-items="start">
    <l-input id="name" value="{{name}}" hide-label show-row="{{false}}"/>
</l-form-item>
```

## 设置表单域标签的宽度

通过设置 label-width 属性来修改表单域标签的宽度。

### 示例代码

```wxml
<l-form-item label="填写姓名:" name="name" label-width="300rpx">
    <l-input id="name" value="{{name}}" hide-label show-row="{{false}}"/>
</l-form-item>
```

## 自定义表单域标签的内容

通过设置 label-slot 为 true， 使用具名插槽 label 自定义表单域标签的内容。

### 示例代码

```wxml
<l-form-item label="填写姓名:" name="name" label-slot>
    <view slot="label">插槽姓名:</view>
    <l-input id="name" value="{{name}}" hide-label show-row="{{false}}"/>
</l-form-item>
```

## 带验证的表单案例
通过在 form-Item 上设置 rules 属性，给表单项添加验证规则。rules 接收一个验证对象或者由多个验证对象组成的数组。
form组件使用了开源库 [async-validator](https://github.com/yiminghe/async-validator) 来实现表单验证。可以快速使用 async-validator 内置的常用验证，也可以自定义验证函数。

验证时机： form组件可以实时验证，也可以在用户提交时统一‍验证。通过 trigger 设置表单项验证的时机，可选值 blur/change。trigger 默认为空，此时表单不会实时验证，可在提交时统一校验。trigger 可以传入一个数组或字符串，例： `trigger:blur`、`trigger:['blur','change']`

提示方式： 验证器提供了三种提示错误的方式：message 、 toast 和 text ，通过设置 form-Item 的 tip-type 值为 `message` 或 `toast` 或 `text` 修改提示方式。默认值为 `toast`。
**注意：** 使用 message 和 toast 的方式需要在配置文件中引用组件。


### 基础校验

使用内置常用验证函数，例如：长度验证、必填验证、邮箱验证、自定义正则验证等。

```wxml
<l-form name="loginForm" bind:linsubmit="submit" l-form-btn-class="l-form-btn-class">
    <l-form-item label="账号:" name="loginFormLoginId" rules="{{loginForm.loginIdRules}}">
        <l-input id="loginFormLoginId" value="{{loginForm.loginId}}" hide-label show-row="{{false}}"/>
    </l-form-item>

    <l-form-item label="密码:" name="loginFormPassword" rules="{{loginForm.passwordRules}}">
        <l-input id="loginFormPassword" value="{{loginForm.password}}" hide-label show-row="{{false}}"/>
    </l-form-item>

    <view slot="submit">
        <l-button>注册</l-button>
    </view>
    <view slot="reset">
        <l-button type="default" plain>重置</l-button>
    </view>
</l-form>
```
```javascript
Page({
  data: {
    loginForm: {
      loginId: '',
      password: '',
      loginIdRules:{
        type: 'email',
        required: true,
        message: '邮箱地址不合法',
        trigger: 'change'
      },
      passwordRules: [
        { required: true, message: '请输入登录密码', trigger: 'blur' },
        { min: 8, max: 20, message: '密码长度在8-20个字符之间', trigger: 'blur' },
        { pattern: '^[A-Za-z0-9]+$', message: '密码必须由数字字母组成',trigger: 'blur'}
      ],
    }
  }
})
```

:::img
![height=200](/screenshots/form/image3.png)
:::

### 自定义校验

通过设置 validator 函数自定义验证规则，validator 接收四个参数。rule 表示当前的验证规则，value 表示当前验证的值，callback 为回调函数，source 为整个表单的数据。
若验证不通过调用`callback(false)`,若验证通过 调用`callback()`。

```wxml

<l-form name="register" l-form-btn-class="l-form-btn-class">
    <l-form-item tip-type="text" label="登录账号:" name="loginId" rules="{{loginIdRules}}">
        <l-input id="loginId" value="{{register.loginId}}" hide-label show-row="{{false}}"/>
    </l-form-item>

    <l-form-item tip-type="text" label="登录密码:" name="password" rules="{{passwordRules}}">
        <l-input id="password" value="{{register.password}}" hide-label show-row="{{false}}"/>
    </l-form-item>
    <l-form-item tip-type="text" label="确认密码:" name="confirm" rules="{{confirmRules}}">
        <l-input id="confirm" value="{{register.confirm}}" hide-label show-row="{{false}}"/>
    </l-form-item>

    <view slot="submit">
        <l-button>注册</l-button>
    </view>
    <view slot="reset">
        <l-button type="default" plain>重置</l-button>
    </view>
</l-form>

```

```js

data: {
  register: {
    loginId: '',
    password: '',
    confirm: ''
  },
  loginIdRules: {
    type: 'email',
    required: true,
    message: '邮箱地址不合法',
    trigger: 'blur'
  },
  passwordRules: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
    { min: 8, max: 20, message: '密码长度在8-20个字符之间', trigger: 'blur' },
    { pattern: '^[A-Za-z0-9]+$', message: '密码必须由数字字母组成',trigger: 'blur'}
  ],
  confirmRules: [
    {
      validator(rule, value, callback,source) {
        const {password,confirm} = source;
        if(password !== confirm) {
          callback(false);
        }
        callback()
      },
      message: '两次密码输入不一致',
      trigger: 'change'
    }
  ]
}
```
:::img
![height=250](/screenshots/form/image4.png)
:::

### 复杂表单的校验案例
```wxml

<l-form is-submit-validate="{{isSubmitValidate}}" name="ruleForm" bind:linsubmit="submit" l-form-btn-class="l-form-btn-class">
    <l-form-item label="登录账号:" name="ruleName" rules="{{nameRules}}">
        <l-input id="ruleName" value="{{ruleForm.name}}" hide-label show-row="{{false}}"/>
    </l-form-item>
    <l-form-item rules="{{musicRules}}" label="选择歌曲:" name="ruleMusic" >
        <l-checkbox-group bind:linchange="change2" id="ruleMusic" placement="row">
            <l-checkbox
                l-class="l-checkbox-color"
                wx:for="{{items2}}"
                wx:key="{{item.id}}"
                placement="{{position}}"
                key="{{item.name}}"
                checked="{{item.checked}}"
            >
                {{item.name}}
            </l-checkbox>
        </l-checkbox-group>
    </l-form-item>
    <l-form-item label="选择性别:" name="ruleSex">
        <l-radio-group id="ruleSex" placement="row">
            <l-radio key="0">
                男
            </l-radio>
            <l-radio key="1">
                女
            </l-radio>
        </l-radio-group>
    </l-form-item>
    <l-form-item rules="{{scoreRules}}" label="自我评分:" name="ruleScore">
        <l-rate id="ruleScore" value="{{ruleForm.score}}" />
    </l-form-item>
    <l-form-item rules="{{descRules}}" label="性格描述:" name="ruleDesc">
        <l-textarea border="{{false}}" id="ruleDesc" value="{{ruleForm.desc}}" />
    </l-form-item>

    <view slot="submit">
        <l-button>提交验证</l-button>
    </view>
    <view slot="reset">
        <l-button type="default" plain>重置</l-button>
    </view>
</l-form>
```

```js
  data: {
    ruleForm: {
      name: '',
      music: '',
      sex: '',
      desc: '',
      score: ''
    },
    items: [
      {id: 1,name: '青瓷',checked: false},
      {id: 2,name: '双棍',checked: false},
      {id: 3,name: '明天',checked: false}
    ],
    items2: [
      {id: 1,name: '青瓷',checked: false},
      {id: 2,name: '双棍',checked: false},
      {id: 3,name: '明天',checked: false}
    ],
    tipType: 'toast',
    isSubmitValidate: false,
    alignType: 'start',
    nameRules: [
      { required: true, message: '请输入真实姓名', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
    descRules: { min: 10, max: 50, message: '请输入10到50个字符的自我描述', trigger: 'change' },
    musicRules: [
      { type:'array', required: true, message: '歌曲必选', trigger: 'change' },
    ],
    scoreRules: [
      { type:'number',required: true, message: '请选择评分', trigger: 'blur' },
      {
        validator(rule, value, callback) {
          if(value < 3) {
            callback(false);
          } else {
            callback()
          }
        },
        message: '评分必须大于等于3分',
        trigger: 'change'
      }
    ]
  }
```
:::img
![height=250](/screenshots/form/image5.png)
:::

## 校验规则属性

| 参数       | 说明                         | 类型    | 可选值 | 默认值   |
| :--------- | :--------------------------- | :------ | :----- | :------- |
| enum       | 枚举类型                     | String  | -      | -        |
| len        | 字段长度                     | Number  | -      | -        |
| max        | 最大长度                     | Number  | -      | -        |
| message    | 校验错误提示文案             | String  | -      | -        |
| min        | 最小长度                     | Number  | -      | -        |
| pattern    | 正则表达式校验               | String  | -      | -        |
| required   | 是否必选                     | Boolean | -      | `false`  |
| type       | 内建校验类型                 | String  | 见下表 | `string` |
| whitespace | 必选时，空格是否会被视为错误 | Boolean | -      | `false`  |

更多高级用法可研究 [async-validator](https://github.com/yiminghe/async-validator)

::: tip 
提示：`pattern`属性的值需是 `String`，传入正则时，微信小程序不识别，会导致传入的 `pattern` 是个空的对象。
:::

## 内置校验类型

| 参数    | 说明                         |
| :------ | :--------------------------- |
| string  | 字符串                       |
| number  | 数字                         |
| boolean | 布尔                         |
| method  | 方法                         |
| regexp  | 正则                         |
| integer | 整数                         |
| float   | 浮点数字                     |
| array   | 数组                         |
| object  | 对象                         |
| enum    | 枚举类型，值必须存在 enum 中 |
| date    | 日期                         |
| url     | 网址                         |
| email   | 邮箱                         |
| hex     | 16进制                       |


## 手动提交或重置表单

通过`wx.lin.submitForm('formName')`方法， 传入对应表单`form` 的 `name` 属性提交表单 。

通过`wx.lin.resetForm('formName')`方法， 传入对应表单`form` 的 `name` 属性重置表单 。




## 表单容器组件属性

| 参数               | 说明           | 类型    | 可选值     | 默认值 | 版本号 |
| :----------------- | :------------- | :------ | :--------- | :----- | ------ |
| name               | 表单的name     | String  | ---        | ---    | ---    |
| is-submit-validate | 提交时是否校验 | Boolean | true/false | true   | ---    |

## 表单容器组件外部样式类
| 外部样式类名           | 说明                 | 备注 | 版本号 |
| :--------------------- | :------------------- | ---- | :----- |
| l-form-container-class | form的外部样式类     | ---  | ---    |
| l-form-btn-class       | 按钮容器的外部样式类 | ---  | ---    |
| l-form-submit-class    | 提交按钮的外部样式类 | ---  | ---    |
| l-form-reset-class     | 重置按钮外部样式类   | ---  | ---    |
                              

## 表单容器组件事件

| 事件名称       | 说明               | 返回值                                                                                                                                    | 备注 | 版本号 |
| :------------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :--- | ------ |
| bind:linsubmit | 点击提交按钮时触发 | 点击提交时触发 `linsubmit` 事件，event.detail = {values: 整个表单项的value, errors: 表单内各字段的校验结果，isValidate: 表单是否验证通过} | -    | ---    |
| bind:linreset  | 点击重置按钮时触发 | --                                                                                                                                        | -    | -      |



## 表单项组件属性

| 参数            | 说明                 | 类型         | 可选值             | 默认值 | 版本号 |
| :-------------- | :------------------- | :----------- | :----------------- | ------ | :----- |
| label           | form-item 的文字内容 | String       | --                 | --     | --     |
| label-placement | 文字内容所在区域     | String       | row/column         | row    | --     |
| align-items     | 文字对齐方式         | String       | start/end/center   | start  | --     |
| label-width     | 文字内容的宽度       | String       | ---                | 200rpx | --     |
| label-slot      | 是否开启文字内容插槽 | Boolean      | true/false         | false  | --     |
| name            | name                 | String       | --                 | --     | --     |
| rules           | 表单项的验证规则     | Object/Array | --                 | --     |
| tip-type        | 验证提示类型         | String       | text/toast/message | text   | --     |


## 表单项组件外部样式类
| 外部样式类名         | 说明                              | 备注                       | 版本号 |
| :------------------- | :-------------------------------- | -------------------------- | :----- |
| l-form-item-class    | form-item的外部样式类             |                            | --     |
| l-form-label-class   | form-item文字区域的外部样式类     |                            | --     |
| l-form-content-class | form-item内容区域的外部样式类     |                            | --     |
| l-error-text-class   | form-item校验错误提示的外部样式类 | 当 tip-type 为 text 时有效 | --     |

## 插槽 (Form Slot)

| 插槽名       | 说明               |
| :----------- | :----------------- |
| submit       | 提交按钮           |
| reset        | 重置按钮           |
| submit-front | 提交按钮之前的区域 |
| reset-front  | 重置按钮之前的区域 |
| reset-behind | 重置按钮之后的区   |


<RightMenu />
