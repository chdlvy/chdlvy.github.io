(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{519:function(t,a,s){"use strict";s.r(a);var r=s(6),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),s("p",[t._v("​\txss全称是Cross Site Scripting（跨站脚本攻击），就是将恶意脚本代码植入到页面中从而实现盗取用户信息等操作；XSS的攻击方式分为两种类型："),s("strong",[t._v("反射型")]),t._v("和"),s("strong",[t._v("存储型")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"反射型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),s("p",[t._v("​\t当发出请求时，XSS代码出现在url中，作为输入提交到服务器端，服务器端解析后响应，XSS代码随响应内容一起传回给浏览器，最后浏览器解析执行XSS代码")]),t._v(" "),s("h4",{attrs:{id:"存储型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),s("p",[t._v("​\t步骤与反射型类似，区别在于它会把提交的XSS代码存储到服务器端（数据库、内存、文件系统等），下次请求时目标页面时不用再提交XSS代码。")]),t._v(" "),s("h4",{attrs:{id:"预防措施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防措施"}},[t._v("#")]),t._v(" 预防措施")]),t._v(" "),s("ol",[s("li",[t._v("对用户输入的数据进行编码")]),t._v(" "),s("li",[t._v("对用户的输入进行过滤\n"),s("ol",[s("li",[t._v("移除用户输入的Style节点、Script节点、Iframe节点。")]),t._v(" "),s("li",[t._v("移除用户输入的和事件相关的属性。")])])]),t._v(" "),s("li",[t._v("使用DOM Parse转换，校正不配对的DOM标签")])]),t._v(" "),s("h3",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),s("p",[t._v("​\tCSRF全称是Cross-site request forgery（跨站请求伪造）")]),t._v(" "),s("h4",{attrs:{id:"攻击原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#攻击原理"}},[t._v("#")]),t._v(" 攻击原理")]),t._v(" "),s("p",[t._v("​\t用户A浏览并登录信任网站B，登录后在用户A处生成B的cookie，在不登出A的情况下访问危险网站C，此时C要求访问B网站，发送一个请求，该请求会带着之前生成的cookie访问安全网站B。")]),t._v(" "),s("h4",{attrs:{id:"预防措施-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防措施-2"}},[t._v("#")]),t._v(" 预防措施")]),t._v(" "),s("ol",[s("li",[t._v("Token验证")])]),t._v(" "),s("blockquote",[s("p",[t._v("即服务器发送给客户端一个token，让客户端提交的表单中带着这个token，如果这个 token 不合法，那么服务器拒绝这个请求")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Referer验证")])]),t._v(" "),s("blockquote",[s("p",[t._v("即页面请求来源，只接受本站的请求，如果不是本站的就拦截")])]),t._v(" "),s("h3",{attrs:{id:"二者区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二者区别"}},[t._v("#")]),t._v(" 二者区别")]),t._v(" "),s("h4",{attrs:{id:"区别一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别一"}},[t._v("#")]),t._v(" 区别一：")]),t._v(" "),s("ul",[s("li",[t._v("CSRF：需要先登录网站A，获取cookie")]),t._v(" "),s("li",[t._v("XSS：不需要登录")])]),t._v(" "),s("h4",{attrs:{id:"区别二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别二"}},[t._v("#")]),t._v(" 区别二：")]),t._v(" "),s("ul",[s("li",[t._v("CSRF：利用网站A的漏洞去请求网站A的api")]),t._v(" "),s("li",[t._v("XSS：直接向网站A注入js代码，然后执行js代码篡改网站A的内容")])])])}),[],!1,null,null,null);a.default=v.exports}}]);