---
title: HTML5和HTML4的区别
date: 2020-12-27
tags:
 - html
categories: 
 - 前端
---
HTML4.01 基于 SGML，所以需要对 DTD 进行引用，才能让浏览器知道该文档所使用的文档类型。

而 HTML5 不是基于 SGML 语言的，因此不需要 DTD ，它是一种全新的标记语言，有自己的解析规则。

它们的语法规则上也有很大的区别
+ HTML5的文档类型声明只使用`<!DOCTYPE html>`即可。
+ 新增元素：section, video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。(新增了语义化标签)
+ input的新类型：email,url,number,rang,DataPickers
+ 废除元素：acronym, applet, basefont, big, center, dir, font, frame, frameset, isindex, noframes, strike, tt。
+ 新的属性：ping（用于 a 与 area）, charset（用于 meta）, async（用于 script）。
+ 新增的全局属性：contentEditable,designMode,hidden,spellcheck,tableindex