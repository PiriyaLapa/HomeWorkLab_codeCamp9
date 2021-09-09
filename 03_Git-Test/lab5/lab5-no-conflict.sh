#!/bin/sh

# Clear old dir
sudo rm -r /tmp/test

# Create dir
mkdir /tmp/test;
# Change dir
cd /tmp/test;
# Init git repo
git init;
# Add remote repo
git remote add origin git@github.com:piriya/test.git
# Create a file
echo "m1" > test.txt
# Add to staging and commit to master
git add test.txt;
git commit -m 'm1';
# Push to remote repo
#git push origin master

# Create new branch "develop" and switch to that new branch
git checkout -b develop;
# Edit file to be different than master
echo "d1" >> test.txt;
# Add to staging
git add test.txt;
# Commit changes
git commit -m "Edited test.txt in develop";
# Push to remote repo
#git push origin develop;

# Merge develop to master
git checkout master;
git merge develop;
