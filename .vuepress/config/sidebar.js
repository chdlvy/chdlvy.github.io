const FE = [
  {
    title: 'HTML',
    children: [
      {title: '常用的meta标签',path:'/blogs/Html/01-html.md'},
      {title: '语义化的理解',path:'/blogs/Html/02-html.md'},
      {title: 'src和href的区别',path:'/blogs/Html/03-html.md'},
      {title: 'HTML5和HTML4的区别',path:'/blogs/Html/04-html.md'}
    ]
  },
  {
    title: 'CSS',
    children: [
      {title: '使用link和@import导入css样式有什么区别？',path:'/blogs/Css/01-css.md'},
      {title: '如何实现居中对齐？',path:'/blogs/Css/02-css.md'},
      {title: '对媒体查询的理解',path:'/blogs/Css/03-css.md'},
      {title: 'px，rem，em的区别？',path:'/blogs/Css/04-css.md'},
      {title: 'BFC的理解',path:'/blogs/Css/05-css.md'},
      {title: '盒模型的理解',path:'/blogs/Css/06-css.md'}
    ]
  },
  {
    title: 'Javascrip',
    children: [
      {title: '数据类型',path:'/blogs/Js/01-js.md'},
      {title: 'typeof和instanceof',path:'/blogs/Js/02-js.md'},
      {title: '为什么let和const定义的变量不会在window上？',path:'/blogs/Js/03-js.md'},
      {title: 'this',path:'/blogs/Js/04-js.md'},
      {title: '深浅拷贝',path:'/blogs/Js/05-js.md'},
      {title: 'call、apply和bind的区别',path:'/blogs/Js/06-js.md'},
      {title: 'async和await',path:'/blogs/Js/07-js.md'},
      {title: '正则表达式',path:'/blogs/Js/08-js.md'},
      {title: '防抖与节流',path:'/blogs/Js/09-js.md'},
      {title: '微任务与宏任务',path:'/blogs/Js/10-js.md'}
    ]
  },
  {
    title: 'Vue',
    children: [
      {title: '父子组件间的通信',path:'/blogs/Vue/01-vue.md'},
      {title: '生命周期详解',path:'/blogs/Vue/02-vue.md'}
    ]
  },
  {
    title: 'Git',
    children: [
      {title: 'Git的基本操作',path:'/blogs/Git/01-git.md'}
    ]
  },
  {
    title: '浏览器',
    children: [
      {title: 'Event Loop',path:'/blogs/Borwser/01-borwser.md'}
    ]
  }
]
  module.exports = {
    '/blogs/': FE
  }