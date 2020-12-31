---
title: 对媒体查询的理解
date: 2020-12-27
tags:
 - css
categories: 
 - 前端
---
媒体查询是通过查询当前属于哪种设备，让网页能够在不同的设备下正常的预览，非常适合 web 网页应对不同型号的设备而做出对应的响应适配。
### 如何使用？
媒体查询包含一个可选的媒体类型和，满足 CSS3 规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特征，最终会被解析为 true 或 false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是 true，那么该媒体查询的结果为 true. 那么媒体查询内的样式将会生效。
```HTML
<!-- 在link标签中的媒体查询 -->
<link rel="stylesheet" media="(max-width="500px")" href="style.css" />

<!-- 样式表中的媒体查询 -->
<style type="text/css" media="all">
@import url(style.css) screen, print;
@media (max-width="800px"){
	.item {
		display: 'none'
	}
}
</style>
```