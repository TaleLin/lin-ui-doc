---
title: Array 数组
---

# <H2Icon /> Array 数组

## join

> 将数组通过连接符连接，并返回连接后的字符串

### 语法

```wxml
array.join(targetArray,spearator)
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `spearator` ： 可选，将数组转成字符串时的连接符

## pop

> 移除数组的最后一个元素

### 语法

```wxml
array.pop(targetArray)
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；

#### 返回值

返回一个对象：
- `item` ：移除的对象
- `newArray` ：移除元素后的数组

## push

> 在数组最后追加一个或多个元素，返回新的数组

### 语法

```wxml
array.push(targetArray,element1[, ...[, elementN]])
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `element` ：要追加的元素

## reverse

> 数组倒序

### 语法

```wxml
array.reverse(targetArray)
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；

## shift

> 移除数组的第一个元素

### 语法

```wxml
array.shift(targetArray)
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；

#### 返回值

返回一个对象：
- `item` ：移除的对象
- `newArray` ：移除元素后的数组

## slice

### 语法

```wxml
array.slice(targetArray[,beginSlice[, endSlice]])
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `beginSlice` 从该索引（以 0 为基数）处开始提取目标数组中的元素
- `endSlice` 在该索引（以 0 为基数）处结束提取数组元素

## concat

> 合并数组，返回一个新的数组

### 语法

```wxml
array.concat(targetArray[,value1[, value2[, ...[, valueN]]]])
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `valueN`：要合并的数组

## splice

> 通过移除或替换数组存在的元素，或新增元素来改变数组内容

### 语法

```wxml
array.splice(targetArray,start[, deleteCount[, item1[, item2[, ...]]]])
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `start` ：开始改变数组的元素的索引，默认为0。如果大于数组的长度，实际的起始索引将设置为数组的长度。如果为负数，将从数组长度-`start`的位置开始，如果绝对值大于数组长度，则将其设置为0。
- `deleteCount` ： 可选，从数组中移除元素的个数；
- `item` ：可选，添加进数组的元素，从 `start` 索引开始。

## unshift

> 在数组开始加一个或多个元素，返回新的数组

### 语法

```wxml
array.unshift(targetArray,element1[, ...[, elementN]])
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `elementN` ： 要插入的元素。

## indexOf

### 语法

```wxml
array.indexOf(targetArray)
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `searchValue`: 被查找的值，若找到该值，返回所在索引，若未找到该值，则返回-1；
- `fromIndex` : 开始查找的位置，可以是任意整数，默认值为 0。

:::tip 注意
`indeOf` 方法区分大小写
:::

## lastIndexOf

### 语法

```wxml
array.lastIndexOf(targetArray)
```

#### 参数

- `array` : `wxs`引入时 `module` 的名字；
- `targetArray` ： 目标数组；
- `searchValue`: 被查找的值，返回该值最后出现的位置的索引，若未找到该值，则返回-1；
- `fromIndex` : 开始查找的位置，可以是任意整数，默认值为 `targetArray.length`。

:::tip 注意
`lastIndexOf` 方法区分大小写
:::
<RightMenu />
