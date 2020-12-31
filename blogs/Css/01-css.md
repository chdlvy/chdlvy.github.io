---
title: 使用link和@import导入css样式有什么区别？
date: 2020-12-27
tags:
 - css
categories: 
 - 前端
---
+ link是XHTML标签，除了加载CSS外，还能用于定义RSS，定义rel连接属性等作用，而@import是CSS提供的，只能用来导入CSS
+ 页面在加载时，link导入的css会同时被加载，而@import会等页面被加载完后再加载
+ link是XHTML标签，无兼容问题，而@import无法兼容IE 5以下的版本
+ link方式的样式权重高于@import的权重
+ link支持JavaScript控制dom去改变样式，而@import无法被dom控制