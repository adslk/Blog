#!/usr/bin/env sh

# 确保脚本抛出遇到的错误 
set -e

# 输入打包命令后，在public目录中会出现生成的静态文件 

npm run build

# 安装web服务器，Apache或者Nginx都可，不然系统中是没有/var/www/html/这个目录 
# 将生成的静态文件转移到/var/www/html/，这样该目录下的内容就能通过IP来访问

cp -r /d/Code_Space/Vue/blog/my-blog/public/* /d/Code_Space/Vue/blog/gh-pages

# 将静态文件推送到Github的仓库中 

git add -A 
git commit -m 'deploy'
git pull origin master
git push -u origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO> 
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 如果发布到个人服务器中 
# echo 'www.xxx.xxx' > CNAME

cd -
cd /d/Code_Space/Vue/blog/gh-pages/ 
git add -A 
git commit -m "Finally ushered in a new deployment `date +%Y-%m-%d`" 
git pull origin master
git push -u origin master
