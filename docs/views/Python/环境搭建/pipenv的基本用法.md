---
title: pipenv 的基本用法
date: 2020-02-02
tags:
 - 环境搭建
categories: 
 - Python
---

## 1.常见命令

安装： pip install pipenv

pipenv 需要和项目绑定

创建虚拟环境：pipenv install

开启虚拟环境：pipenv shell

安装python包：pipenv install 包名

卸载python包：pipenv uninstall 

查询相关包依赖关系：pipenv graph

查看虚拟环境安装路径：pipenv --venv

退出虚拟环境：exit

建议通过github来查询相关pipenv命令



## 2.更换国内镜像源操作

使用记事本方式打开创建的虚拟环境pipfile文件

将url的值更换为镜像源的网址

使用记事本方式打开创建的虚拟环境pipfile.lock文件

将url的值更换为镜像源的网址

常见的国内镜像源网址：

阿里云：http://mirrors.aliyun.com/pypi/simple/

豆瓣：http://pypi.douban.com/simple/

清华大学：https://pypi.tuna.tsinghua.edu.cn/simple/

中国科学技术大学：https://pypi.mirrors.ustc.edu.cn/simple/



## 3.设置虚拟环境为开发工具的默认解释器

在pycharm中的File--->Settings--->Project中选择Project Interpreter

进一步选择你创建的虚拟环境

