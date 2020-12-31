//导航栏
const nav = [
    { text: '主页', link: '/' },
    { 
        text: '前端',
        items: [
                { text: 'Html', link: '/blogs/Html/01-html.md' },
                { text: 'Css', link: '/blogs/Css/01-css.md' },
                { text: 'JavaScript', link: '/blogs/Js/01-js.md'},
                { text: 'Vue', link: '/blogs/Vue/01-vue.md'}
            ]
    },
    { text: 'Git', link: '/blogs/Git/01-git.md'},
    { text: '公益', link: '/thanks/' },
    { 
        text: '作者',
        items: [
            {text:'联系作者',link:'/docs/About/contact.md'},
            {text:'关于作者',link:'/docs/About/about.md'},
            {text:'为什么',link:'/docs/About/why.md'}
        ]
    },
    { text: 'Github', link: 'https://github.com/CHD731/Blog.git' },
    ]
module.exports = nav