# 5. Destructuring in JavscriptForReactPart1.html  file 
## Exercise 5.7
	1  ถ้าเรามี Object
		let user = {
			name: 'John',
			years: 30
		}
		
		ให้เขียน Destructring assignnment ที่ให้
		1. property ที่ชื่อ Name ไปอยูในตัวแปร name
		2. property ที่ชื่อ years ไปอยู่ในตัวแปร age
		3. property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)

## 5.7
	1 ถ้าเรามี Object ชื่อ salaries
	   let salaries = {
		   'John':100,
		   'Pete':300,
		   'Mary': 250
	   }
	   ให้สร้าง function topSalary(salries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
	   1. ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
	   2.หลายคน ก็ให้คคืนใคึรก็ได้สักคน
	
# 2. Prototaylap inheritance in javascriptForReactPart2.html  file
## 2.7 แบบฝึกหัด	
	1. ในยรรทัดที่มีเลข 1 2 และ 3 จะได้คค่าออกมาเป็นอะไร
	let animal = {
	  jumps: null
	};

	let rabbit = {
	  __proto__: animal,
	  jumps: true
	};
	alert( rabbit.jumps ); // ? (1)

	delete rabbit.jumps;

	alert( rabbit.jumps ); // ? (2)

	delete animal.jumps;

	alert( rabbit.jumps ); // ? (3)
## 2.7.2 แบบฝึกหัด
	2. ใช้__proto__ในการกำหนด prototype object ดังนี้
	pockets -> bed -> table ->heade
		
		let head = {
			glasses;1
		};

		let table = {
			pen:3
		};

		let bed = {
			sheet;1,
			pillow:2
		};

		let pockets = {
			money:2000
		};
	
## 2.7 แบบฝึกหัด 
		3. การเขียนโค๊ดแบบนี้ object ไหนะจะเป็นคนได้ property full ไป
			let naimal ={
				eat() {
					this.full = true;
				}
			};

			let rabbit = {
				__proto__:animal
			};

			rabbit.eat();

	
## By
	Name: piriya Lapa
	Codecamp: 9 online