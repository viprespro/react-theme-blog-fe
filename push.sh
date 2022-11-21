#!/bin/bash

git add .

echo -n "enter git message:" ---：
read msg
if [ -z $msg ]; then
  msg="upd: update files"
fi
git commit -m"$msg"
git pull -r
git push origin main
git push git@github.com:viprespro/react-theme-blog-fe.git main -f
