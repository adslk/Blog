(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{336:function(t,s,a){"use strict";a.r(s);var e=a(0),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-下载-git-bash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-git-bash"}},[t._v("#")]),t._v(" "),a("strong",[t._v("1.下载 Git bash")])]),t._v(" "),a("p",[t._v("网址：https://git-scm.com/downloads")]),t._v(" "),a("p",[t._v("安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！")]),t._v(" "),a("p",[a("strong",[t._v("Git Bash 绑定 user.email、user.name")])]),t._v(" "),a("p",[t._v("安装完成后，打开Git Bash，输入")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@example.com"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。")]),t._v(" "),a("h2",{attrs:{id:"_2-远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-远程仓库"}},[t._v("#")]),t._v(" "),a("strong",[t._v("2.远程仓库")])]),t._v(" "),a("p",[a("strong",[t._v("创建SSH Key：")])]),t._v(" "),a("p",[t._v("打开Git Bash并输入："),a("code",[t._v('ssh-keygen -t rsa -C "youremail@example.com"')])]),t._v(" "),a("p",[t._v("你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。")]),t._v(" "),a("p",[t._v("SSH Key创建完成后，在用户主目录下，就会产生.ssh目录，如果有，这个目录下有id_rsa和id_rsa.pub这两个文件，这两个就是SSH Key的秘钥对，"),a("strong",[t._v("id_rsa是私钥")]),t._v("，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。")]),t._v(" "),a("p",[a("strong",[t._v("在GitHub上关联")])]),t._v(" "),a("p",[t._v("登录GitHub网站\t网址：https://github.com/join?source=header-home（若无账号先注册）")]),t._v(" "),a("p",[t._v("登陆GitHub，打开“Account settings”，“SSH Keys”页面，然后，点“Add SSH Key”，填上任意Title，在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，在Key文本框里粘贴id_rsa.pub文件的内容。")]),t._v(" "),a("p",[t._v("点“Add Key”，你就应该看到已经添加的Key")]),t._v(" "),a("p",[t._v("***注意：***当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。")]),t._v(" "),a("h2",{attrs:{id:"_3-本地代码推送至终端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地代码推送至终端"}},[t._v("#")]),t._v(" 3.本地代码推送至终端")]),t._v(" "),a("p",[t._v("打开Git Bash 进入到需要上传的文件中输入命令 "),a("code",[t._v("git init")]),t._v(" 创建本地版本仓库")]),t._v(" "),a("p",[t._v("创建成功后本地文件夹中会产生隐藏文件.git")]),t._v(" "),a("p",[t._v("使用命令"),a("code",[t._v("git add .")]),t._v(" 将当前目录下的文件添加到仓库")]),t._v(" "),a("p",[t._v("使用命令"),a("code",[t._v('git commit -m "first commit"')]),t._v(" 把项目提交到仓库")]),t._v(" "),a("p",[t._v("登录GitHub网站，直接点New repository来创建一个GitHub仓库")]),t._v(" "),a("p",[t._v("![](E:\\Pictures\\Camera Roll\\截图\\Snipaste_2020-02-19_15-21-26.png)")]),t._v(" "),a("p",[t._v("打开Git Bash 进入之前建立的Git仓库路径，输入")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/adslk/test.git\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Git还有其他常用命令与其他更强大的功能，详情可以参考廖雪峰老师的Git教程。")]),t._v(" "),a("p",[t._v("网址：https://www.liaoxuefeng.com/wiki/896043488029600")])])}),[],!1,null,null,null);s.default=i.exports}}]);