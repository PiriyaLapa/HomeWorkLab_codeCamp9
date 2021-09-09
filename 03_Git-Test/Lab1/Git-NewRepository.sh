#  Generate and pull test to REAMDE.md file
echo "# Git-Test" >> README.md
# Generate git init in local 
git init
# add README.md file to Local git
git add README.md
# push commit
git commit -m "first commit"
# Generate branch master
git branch -M master
# Connecting remote with Github
git remote add origin https://github.com/PiriyaLapa/Git-Test.git
# Tracking with branch's master
git push -u origin master
