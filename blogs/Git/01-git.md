---
title: Git的基本操作
date: 2020-12-27
tags: 
 - Git
categories:
 - Git
---
+ 初始化仓库，执行完后该目录下会出现一个.git的隐藏文件
```sh
git init
```
要想对该文件夹进行版本控制，就要先追踪。
+ 文件跟踪
```sh
git add '文件名' //跟踪一个文件
git add . //批量跟踪文件
```
然后提交到本地仓库
+ 提交到本地仓库
```sh
git commit              
git commit -m '提交信息'     //提交文件到本地仓库
```
最后我们可以推送到远程仓库去(远程仓库也可以是github)
+推送到远程仓库
```sh
//git push <remote> <branch>
git push origin master //将master分支推送到origin服务器
```
+ 克隆现有仓库
```sh
//git clone <url>
git clone https://github.com/libgit2/libgit2
```
这会在当前目录下创建一个名为`libgit2`的目录，并在这个目录下初始化一个`.git`文件夹， 从远程仓库拉取下所有数据放入`.git`文件夹，然后从中读取最新版本的文件的拷贝。 如果你进入到这个新建的`libgit2`文件夹，你会发现所有的项目文件已经在里面了
> 有时我们想从github下载别人的项目到本地，可以用这个命令
+ 查看文件状态
```sh
git status
```
+ 比较当前文件和暂存区域的差异
```sh
git diff
```
