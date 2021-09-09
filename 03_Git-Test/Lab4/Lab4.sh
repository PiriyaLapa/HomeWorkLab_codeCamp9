 # ใหม่ด้วย git branch
 #checkout ไป branch ใหม่
 git checkout -b develop
 #  สร้าง ไฟล์ .text.
echo 'new file text' >> test.txt 
  # แก้ไข ไฟล์ .txt
echo 'second line text' >> test.txt 
# add new file to new branch
git add test.txt
# chamge commit 
git commit -m 'update new file to new branch'
 #check branch origin 
 git branch -vv
  # connect new Branch origint
  # upload file ขึ้น branch ใหม่
git push -u origin develop
  
  # สลับกลับมา master
  git checkout master

  # ดูการเปลี่ยนแปลงที่เกิดขึ้น
  # On github have new branch is develop

  # ลบ branch ด้วย git branch -d branch_name
  git branch -d develop

  # ลอง ใช้คำสั่ง git checkout -b branch_name
git checkout -b branch_name
  # สร้างไฟล์ .txt upload
  echo 'test.txt to branch_name' >> branch_name.txt

  # สลับมา master
git checkout master
  # ดูการเปลี่ยนแ
  # git have generated new branch on github
  
