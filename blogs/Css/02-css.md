---
title: 如何实现居中对齐？
date: 2020-12-27
tags:
 - css
categories: 
 - 前端
---
+ inline(行内)居中，垂直居中可以通过高度和行高相等实现
```CSS
.item {
    /* 水平居中 */
    text-align: center;
    /* 垂直居中 */
    height: 100px;
    line-height: 100px;
}
```
+ block(块级)元素可以使用`margin:auto`
```CSS
.item {
    margin: auto;
}
```
+ 绝对定位元素,结合`left`和`margin`实现居中,必须提前知道尺寸,兼容性好
```CSS
.parent{
        position: relative;
        border: 1px solid #000;
        height: 200px;
}
.item {
        width: 80px;
        height: 40px;
        background-color: #ff0000;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -20px; 
        margin-left: -40px;
}
```
+ 利用`translate`配合绝对定位实现居中，不需要提前知道尺寸但是兼容性不好
```CSS
.parent{
            position: relative;
            border: 1px solid #000;
            height: 140px;
}
.item {
            background-color: #ff0000;
            
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
}
```
+ 利用绝对定位配合`margin: auto`，不需要提前知道尺寸而且兼容性好
```CSS
.parent{
        position: relative;
        border: 1px solid #000;
        height: 140px;
}
.item {
        width: 50px;
        height: 50px;
        background-color: #ff0000;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
}
```
+ table方法,不常用
```CSS
.item{
    display:table;
    margin:0 auto;
    border:1px solid red;
}
```
+ flex布局，目前主流的方法
```CSS
.item {
    display: flex;
    /* 水平居中 */
    justify-content: content;
    /* 垂直居中 */
    flex-direction: column;
}
```
+ grid布局，将`grid`和`margin`配合使用，兼容性较差，不推荐使用
```CSS
 .parent{
            display: grid;
            border: 1px solid #000;
            height: 140px;
}
.item {
            background-color: #ff0000;
            margin: auto;
}
```