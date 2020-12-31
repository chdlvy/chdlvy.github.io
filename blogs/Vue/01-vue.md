---
title: 父子组件间的通信
date: 2020-12-27
tags:
 - vue
 - 框架
categories: 
 - 前端
 - 框架
---
## 父传子
当子组件需要父组件上的数据时，就需要父组件给子组件传数据。

我们可以通过`prop`向子组件传递数据(props可以是对象也可以是数组)，首先我们先了解一下props
### props的写法
> props是注册组件时与template同级的属性。
1. 类型限制
```javascript
props: {
          msg1:String,
          msg2:Array,
          msg3:Object,
}
```
2. 提供一些默认值,以及必传值
```javascript
props: {
          cmessage: {
	type:String,
	default: 'aaa',//没传值的时候显示
	required:true//必须传值，不然报错
	}
}
```
> 注意：当类型是对象或者数组时，默认值必须是一个函数

#### 当父组件给子组件传数据的时候只需要使用cpn组件，并用v-bind动态绑定父组件中保存数据的变量就好了
```Html
<div id="app">
    <cpn :cmessage="message" :cmovies = "movies"></cpn>
    <!--如果不用v-bind,vue会把movies当成一个字符串传给cmovies-->
    <!--用v-bind，vue会把movies当成一个变量来赋值给cmovies-->
</div>

<template id="cpn">
        <div>
            <ul>
                <li v-for="item in cmovies">{{item}}</li>
            </ul>
            <p>{{cmessage}}</p>
            <p>{{cmovies}}</p>
        </div>
</template>

<script>
const cpn = {
    template: '#cpn',
    props: {
        cmessage: {
            type:String,
            default: 'aaa',
            required:true
        },
        cmovies: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
//创建vue实例
const app = new Vue({
        el:'#app',
        data: {
            movies: ['海王','海贼王','海尔兄弟'],
            message: '你好'
        },
        //注册组件
        components: {
            cpn
        }
});
</script>
```
## 子传父
假如我点击子组件(a1)时要显示一些数据，这个时候子组件(a1)需要向父组件发送数据，父组件再向服务器发送请求拿到对应的数据，数据拿到之后传给显示数据的子组件(b)，这就是子传父。

首先在子组件中的`methods`写个方法，方法中用`this.$emit(‘事件名’,发射的数据)`来发射事件(发射给父组件)，当然父组件接收需要用`v-on`来接收(`v-on`不仅可以监听dom事件，也可以用于组件间的自定义事件)，用v-on接收要`@自定义事件名=”方法”`。可以在方法中输出接收的值，看看是否接收到。具体的看下面这个例子：
```Html
<div id="app">
        <!-- 监听当子组件发射了nameclick就执行cpnClick方法 -->
        <cpn1 @nameclick="cpnClick"></cpn1>
    </div>

    <template id="cpn">
        <div>
            <!-- 点击button执行事件 -->
            <button @click="btnclick(name)">click</button>
        </div>
    </template>

    <script src="./vue.js"></script>
    <script>
        const cpn1 = {
            template: '#cpn',
            data() {
                return {
                    name: 'Tom'
                }
            },
            methods: {
                btnclick(name) {
                    //将name作为参数发射事件
                    this.$emit('nameclick',name);
                }
            }
        }
        const app = new Vue({
            el: '#app',
            components: {
                cpn1
            },
            methods: {
                cpnClick(name) {
                    console.log(name)
                }
            }
        })
    </script>
```
> 注意，发射事件名时必须全部小写，否则会导致监听不到