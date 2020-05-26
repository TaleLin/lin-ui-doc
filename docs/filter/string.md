---
title: String 字符
---

# <H2Icon /> String 字符

## toString

`toString()` 同 `String` 对象中 `toString` 方法。

### 语法

```wxml
string.toString(targetString)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 转换的字符串；

## valueOf

`valueOf()` 同 `String` 对象中 `valueOf` 方法。

### 语法

```wxml
string.valueOf(targetString)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 转换的字符串；

## charAt

`charAt()` 同 `String` 对象中 `charAt` 方法。

### 语法

```wxml
string.charAt(targetString, index)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 查找的字符串；
- `index`: 返回指定字符的位置

## indexOf

`indexOf()` 同 `String` 对象中 `indexOf` 方法。

### 语法

```wxml
string.indexOf(targetString,searchValue,fromIndex)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 在该字符串中查找；
- `searchValue`: 被查找的值，若找到该值，返回所在索引，若未找到该值，则返回-1；
- `fromIndex` : 开始查找的位置，可以是任意整数，默认值为 0。

:::tip 注意
`indexOf` 方法区分大小写
:::

## lastIndexOf

### 语法

```wxml
string.lastIndexOf(targetString,searchValue,fromIndex)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 在该字符串中查找；
- `searchValue`: 被查找的值，返回该值最后出现的位置的索引，若未找到该值，则返回-1；
- `fromIndex` : 开始查找的位置，可以是任意整数，默认值为 `targetString.length`。

:::tip 注意
`lastIndexOf` 方法区分大小写
:::

## slice

> slice()方法提取一个字符串的一部分，并返回一新的字符串。

### 语法

```wxml
string.slice(targetString,beginSlice,endSlice)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 在该字符串中查找；
- `beginSlice`: 从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3);
- `endSlice` : 可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。

:::tip 注意
`slice()` 提取的新字符串包括 `beginSlice` 但不包括 `endSlice`。
:::

## split 

> 使用指定的分隔符字符串将一个`String`对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。 

### 语法

```wxml
string.split(targetString,[separator[, limit]])
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 在该字符串中查找；
- `separator`: 指定表示每个拆分应发生的点的字符串;
- `limit` : 可选。一个整数，限定返回的分割片段数量。

#### 返回值

返回源字符串以分隔符出现位置分隔而成的一个 Array 


## substring

> `substring()` 返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

### 语法

```wxml
string.substring(targetString,indexStart[, indexEnd])
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 在该字符串中截取；
- `indexStart`: 需要截取的第一个字符的索引，该字符作为返回的字符串的首字母;
- `indexEnd` :一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

:::tip 提示
* 如果 `indexStart` 等于 `indexEnd`，`substring` 返回一个空字符串。
* 如果省略 `indexEnd`，`substring` 提取字符一直到字符串末尾。
* 如果任一参数小于 `0` 或为 `NaN`，则被当作 `0`。
* 如果任一参数大于 `targetString.length`，则被当作 `targetString.length`。
* 如果 `indexStart` 大于 `indexEnd`，则 `substring` 的执行效果就像两个参数调换了一样
:::

## toLowerCase

> `toLowerCase()` 将目标字符串值转为小写形式

### 语法

```wxml
string.toLowerCase(targetString)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 目标字符串

## toUpperCase

> `toUpperCase()` 将目标字符串值转为大写形式

### 语法

```wxml
string.toUpperCase(targetString)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 目标字符串

## trim

> `trim()` 从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）

### 语法

```wxml
string.trim(targetString)
```

#### 参数

- `string`: `wxs` 引入时 `module` 的名字；
- `targetString`: 目标字符串

<RightMenu />
