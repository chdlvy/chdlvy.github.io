// import {nav} from '../modules/nav'
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')
module.exports = {
  "title": "CHD'note",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/img/panda.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  themeConfig: {
    nav,//导航
    subSidebar: 'auto',
    sidebar,//侧边栏
    
    "type": "blog",
    "blogConfig": {
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      }
    ],
    logo: '/img/panda.jpg',
    "search": true,
    "searchMaxSuggestions": 10,
    // "lastUpdated": 2020-12-31,
    "author": "Mr.chen",
    authorAvatar: '/img/panda.jpg',
    "record": "ICP 备案",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}