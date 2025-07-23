@echo off

REM ==== Step 1: Push source code to main branch ====
echo 📦 Committing and pushing source code to main...

git add .
set /p commitMessage=Enter commit message: 
git commit -m "%commitMessage%"
git push origin main

IF ERRORLEVEL 1 (
    echo ❌ Failed to push to main branch. Aborting.
    exit /b
)

REM ==== Step 2: Build the Jekyll site ====
echo 🔨 Building site with GitHub config...
bundle exec jekyll build --config _config.yml,_config_github.yml

IF ERRORLEVEL 1 (
    echo ❌ Build failed. Check for errors.
    exit /b
)

REM ==== Step 3: Deploy _site/ to gh-pages ====
echo 🚀 Preparing to deploy _site to gh-pages...


REM Remove old .git folder if it exists
IF EXIST _site\.git rmdir /s /q _site\.git

cd _site

git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy full site update"
git remote add origin https://github.com/StatSolver/Portfolio2.git
git push -f origin gh-pages

cd ..

echo ✅ All done! Source pushed to main and site deployed to gh-pages.
pause
