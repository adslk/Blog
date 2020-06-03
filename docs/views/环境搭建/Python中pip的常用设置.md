---
title: Python中pip的常用设置
date: 2020-01-15
tags:
 - Python
categories:
 - 环境搭建
---

## 1.查看pip默认安装路径

使用 'python -m site' 命令

```
C:\Users\******>python -m site
sys.path = [
    'C:\\Users\\*****',
    'D:\\Code\\Python\\Python36\\python36.zip',
    'D:\\Code\\Python\\Python36\\DLLs',
    'D:\\Code\\Python\\Python36\\lib',
    'D:\\Code\\Python\\Python36',
    'D:\\Code\\Python\\Python36\\lib\\site-packages',
]
USER_BASE: 'C:\\Users\\******\\AppData\\Roaming\\Python' (doesn't exist)
USER_SITE: 'C:\\Users\\******\\AppData\\Roaming\\Python\\Python36\\site-packages' (doesn't exist)
ENABLE_USER_SITE: True
```



其中这里有几点说明：

①我们看见这里的USER_BASE 和USER_SITE其实就是用户自定义的启用Python脚本和依赖安装包的基础路径。

②其中USER_BASE表示就是在C盘这个目录下的Python.exe启动程序路径以及pip,esay-install,markdown等脚本，（我们已经是安装好了Anaconda Python，这个C盘又是什么鬼，不想用它啊），而这个C盘的Python.exe启动程序路径其实就是我们在安装Anaconda的时候一个分身，更准确的说，其实就是简单的Python程序，并不是什么IDE这种级别的可以类似Eclipse这样去操作编译丰富的功能窗口，只是简单类似shell的一样的存在。

所以要改。

③其中的USER_SITE其实就是用户如果调用C盘路径下的python.exe中的脚本pip文件去下载，就会将site-package的默认安装到这个C盘路径下。

## 2.修改默认pip安装路径

使用cmd命令：python -m site -help

就会出现

```
C:\Users\*****>python -m site -help
D:\Code\Python\Python36\lib\site.py [--user-base] [--user-site]

Without arguments print some useful information
With arguments print the value of USER_BASE and/or USER_SITE separated
by ';'.

Exit codes with --user-base or --user-site:
  0 - user site directory is enabled
  1 - user site directory is disabled by user
  2 - uses site directory is disabled by super user
      or for security reasons
 >2 - unknown e
```

打开查询得到的.py文件找到如下内容

```python
import sys
import os
import builtins
import _sitebuiltins

# Prefixes for site-packages; add additional prefixes like /usr/local here
PREFIXES = [sys.prefix, sys.exec_prefix]
# Enable per user site-packages directory
# set it to False to disable the feature or True to force the feature
ENABLE_USER_SITE = None

# for distutils.commands.install
# These values are initialized by the getuserbase() and getusersitepackages()
# functions, through the main() function when Python starts.
USER_SITE = None
USER_BASE = None
```

修改其中84、85行内容，即“USER_SITE = None”，“USER_BASE = None”的内容。

> 注意
>
> USER_SITE = "F:\Anaconda\lib\site-packages"
> 这个是你要安装下载的site-packages的路径。
>
> 
>
> 而执行下载的pip等脚本路径是由USER_BASE决定，并且一定一定要换到同样的有pip脚本的路径下，哪怕你路径也请写到
>
> F:\Anaconda
> 当然这里最好写成
>
> USER_BASE = "F:\Anaconda\Scripts"
>
> 版权声明：本文为CSDN博主「JustinXTT」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
>
> 原文链接：https://blog.csdn.net/mukvintt/article/details/80908951

## 3.windows中pip换源的方法

在C盘用户文件夹的根目录下新建名为pip的文件夹

在pip文件夹下新建pip.ini文件，并在其中添加如下代码：

```
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```

其中镜像源可以替换，常见的国内镜像源有：

V2EX：[http://pypi.v2ex.com/simple](https://link.jianshu.com/?t=http:/pypi.v2ex.com/simple)

豆瓣：[http://pypi.douban.com/simple](https://link.jianshu.com/?t=http:/pypi.douban.com/simple)

中国科学技术大学：[http://pypi.mirrors.ustc.edu.cn/simple](https://link.jianshu.com/?t=http:/pypi.mirrors.ustc.edu.cn/simple/)

清华：https://pypi.tuna.tsinghua.edu.cn/simple