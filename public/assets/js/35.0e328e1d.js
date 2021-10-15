(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{539:function(t,s,e){"use strict";e.r(s);var v=e(6),a=Object(v.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在javascript中，任务被分为两种，一种的微任务(microTask)，也叫"),e("code",[t._v("Jobs")]),t._v("，另一种叫宏任务(macroTask)，也叫"),e("code",[t._v("Task")])]),t._v(" "),e("h2",{attrs:{id:"宏任务-task"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-task"}},[t._v("#")]),t._v(" 宏任务(Task)：")]),t._v(" "),e("p",[t._v("宏任务是由宿主(node、浏览器等)发起的。在 JavaScript 中，大部分的任务都是在主线程上执行，为了让这些事件有条不紊地进行，JS 引擎需要对它们的执行顺序做一定的安排，V8 其实采用的是队列的方式来存储这些同步任务，即先进来的先执行。")]),t._v(" "),e("h3",{attrs:{id:"宏任务具体事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宏任务具体事件"}},[t._v("#")]),t._v(" 宏任务具体事件：")]),t._v(" "),e("ul",[e("li",[t._v("script 全部代码，即 js 脚本执行")]),t._v(" "),e("li",[t._v("setTimeout、setInterval、setImmediate（只有 IE10 支持）")]),t._v(" "),e("li",[t._v("I/O 用户交互、网络请求、文件读写完成事件等")]),t._v(" "),e("li",[t._v("UI rendering 渲染事件")])]),t._v(" "),e("h2",{attrs:{id:"微任务-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微任务-jobs"}},[t._v("#")]),t._v(" 微任务(Jobs)：")]),t._v(" "),e("p",[t._v("微任务是由javascript自身发起的")]),t._v(" "),e("p",[t._v("如果异步回调也像宏任务一样进行队列的入队操作，那这些回调会在宏任务全部执行完后才执行，那如果宏任务很长，就导致回调无法进行(应用卡顿)，这时候微任务就出现了。")]),t._v(" "),e("p",[t._v("为了避免这些问题，v8引入了微任务的解决方式，在每个宏任务中定义一个微任务队列，每执行完一个宏任务就检查其中的微任务队列，若队列里面为空则执行下一个微任务，不为空的话就依次执行微任务，然后再执行下一个宏任务。")]),t._v(" "),e("h3",{attrs:{id:"微任务具体事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微任务具体事件"}},[t._v("#")]),t._v(" 微任务具体事件：")]),t._v(" "),e("ul",[e("li",[t._v("Promise、fetch API")]),t._v(" "),e("li",[t._v("Object.observe （废弃）")]),t._v(" "),e("li",[t._v("MutationObserver")]),t._v(" "),e("li",[t._v("process.nextTick（Node 独有）")]),t._v(" "),e("li",[t._v("V8 的垃圾回收")])]),t._v(" "),e("blockquote",[e("p",[t._v("了解后可以去看看"),e("RouterLink",{attrs:{to:"/blogs/Borwser/01-borwser.html"}},[t._v("Event Loop")])],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);