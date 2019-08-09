let listItem = [0,1,2,3,44,9,8,5]
let bulan = 'AprilASDNASJDKJQBWEMASDANSDBANSDBMNASD-21391U3ASDNASDBNA'

// console.log(listItem[listItem.length-1])

// console.log(listItem.sort((p1,p2)=>{
//   return p2 - p1
// }))

var fruits = ["Banana", "Orange", "Apple", "Mango","Mango","Mango","Mango","Mango","Mango","Mango","Mango","Mango"];
fruits.splice(0, 0, "Lemon", "Kiwi")
fruits.push('grape')


var hari = 'hari rabu'

// console.log(hari.split('a'))
// ['ha','i ','abu']

fruits[0]
fruits[1]

fruits.push(8)
console.log(fruits)

//sesuatu 

var fruits = [2,4,6] //  4 6 , 2 6, 2 4
//1 looping j=1 4
//2 looping
//3 looping
var arr = []

for(i=0;i<fruits.length;i++){
  var hasilKali = 1
    for(j=2;j<fruits.length;j++){
      if (i !== j){
        hasilKali = hasilKali*fruits[j]
      }
    }
    console.log(hasilKali) //24 //12 //8
}



/* 
 banana i = 0
 banana j = 0
 orange j = 1
 apple j = 2
 mango*? j = 3...?

 orange i = 1
 banana j = 0
 orange j = 1
 apple j = 2
 mango*? j = 3..?

 apple i = 2
 banana j = 0
 orange j = 1
 apple j = 2
 mango j = 3..?


1. munculuin selain dari indexnya2
 contoh [0,1,2,3]q
saat index[0] munculin 1 2 3
saat index[1] munculin 0 2 3


2. kalikan nilai yang didapat selain diposisi index
contoh [2,4,5
saat index[0]  4 * 5
saat index[1] = 2 * 5
saat index[2] = 2 * 4

3. outputnya simpan kedalam array pake push
[]
push(20)
push(10)
push(8)
[20,10,8]



    1. rabu  1 
    2. jumat i 2 3 4 5 6
    3. senin 


*/

