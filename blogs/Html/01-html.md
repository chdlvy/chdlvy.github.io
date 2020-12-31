---
title: 常用的meta标签
date: 2020-12-27
tags:
 - html
categories: 
 - 前端
---
meta标签常常由name和content(网页内容)两个属性来定义，它可以提供有关页面的元信息，例如作者、日期和时间、网页描述、关键词、页面刷新等
+ charset，设置HTML文档的编码
```HTML
<meta charset="UTF-8">
```
+ http-equiv，设置HTTP标题信息，比如下面的代码就可以设置http的缓存过期日期
```HTML
<meta http-equiv="refresh" content="Wed,14 Oct  2020  15:00:00  GMT">
```
+ viewport，Web 开发人员可以控制视口的大小和比例
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">>
```