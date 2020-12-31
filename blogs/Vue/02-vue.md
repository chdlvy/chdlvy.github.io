---
title: 生命周期详解
date: 2020-12-27
tags:
 - vue
 - 框架
categories: 
 - 前端
 - 框架
---
每个vue实例都有自己的生命周期，就是从开始创建、编译模板、渲染、更新、删除等所有过程，称之为Vue的生命周期。

也可以说是在vue实例中定义一些函数，在某个时刻进行回调
### 图解：
![vue](../images/vue/life.jpg)

各个生命周期的作用：
| 生命周期 | 作用 |
| :--: | :--: |
| beforeCreate | 在实例创建之后，组件属性生效之前 |
| create | 实例已经创建完，属性也绑定，但是挂载还没开始，$el还不能用 |
| beforeMount | 在挂载开始之前被调用：相关的 render 函数首次被调用 |
| mounted | el被vm.$el替换，并挂载到实例上之后调用该函数 |
| beforeUpdate | 数据更新时调用，发生在虚拟 DOM 打补丁之前。 |
| updated | 组件数据更新之后 |
| activited | 被 keep-alive 缓存的组件激活时调用。 |
| deactivated | 被 keep-alive 缓存的组件停用时调用。 |
| beforeDestroy | 组件销毁前调用 |
| destoryed | 组件销毁后调用 |