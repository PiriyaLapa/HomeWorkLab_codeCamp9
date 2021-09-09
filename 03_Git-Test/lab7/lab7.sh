#!/bin/sh

# Clear old dir
sudo rm -r /tmp/test

# Create dir
mkdir /tmp/test
# Change dir
cd /tmp/test
# Init git repo
git init
# Add remote repo
git remote add origin git@github.com:piriya/test.git
# Create a file
touch test.html test.css test.css test.js
# Create .gitignore
touch .gitignore
# Add to staging
git add .
# Commit changes
git commit -m 'Initialized'
# Push to remote
git push origin master

# Ignore .html files and push to remote
echo "**/*.html" >> .gitignore
git rm --cached test.html
git push origin master

# Ignore .css files and push to remote
echo "**/*.css" >> .gitignore
git rm --cached test.css
git push origin master

# Ignore .js files and pish to remote
echo "**/*.js" >> .gitignore
git rm --cached test.js
git push origin master
