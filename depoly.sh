#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# 使用現有的 `gh-pages` 分支來部署
git add -A
git commit -m 'deploy' 

# Push 到 GitHub Pages，確保分支名稱正確
# 如果要部署到 https://<USERNAME>.github.io/<REPO>，`gh-pages` 分支是正確的
git push -f origin main:gh-pages

cd -
