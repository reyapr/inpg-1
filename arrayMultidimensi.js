var kendaraan = [['motor','becak','bajaj'],['camry','jazz','supra']] 

// console.log(kendaraan[1][1],"<========== array becak")



// output  => ['motor','becak','bajaj','camry','jazz','supra']


var kendaraan = [
  ['motor','becak','bajaj'],
  ['camry','jazz','supra']
] 
var result = []
for(i=0; i<kendaraan.length; i++){ // 0 // 1
    for(j=0; j<kendaraan[i].length; j++){ // 0 1
        result.push(kendaraan[i][j])
    }
}

let arrayMultidimensi = [
  ['1-1','2-1'], // 2 <= index ke 0
  ['1-2', '2-2','3-2'],  // 
  [ 'motor', ['kucing','harimau'] ]
 ]
let result2 = []
'ini namanya tipe data string'

for(var i=0;i<arrayMultidimensi.length;i++){
  arrayMultidimensi[i]

  for(var j=0;j<arrayMultidimensi[i].length;j++){
    arrayMultidimensi[i][j] // 1-1 2-1 || 1-2 2-2 3-2 || motor [kucing, harimau]

    if((typeof arrayMultidimensi[i][j]) !== 'string'){
      for(var k=0; k<arrayMultidimensi[i][j].length;k++){
        result2.push(arrayMultidimensi[i][j][k]) // 1 - 1 | 2 - 1 | 1 - 2 | 2 - 2 3 - 2 | m o t o r kucing harimau
       } 
    }else{
      result2.push(arrayMultidimensi[i][j])
    } 

  }
}

// 1 1 2
// 1 2 0
// 1 2 1
// 1 2 2
// 2 0 0
// 2 0 1
// 2 0 2
// 2 0 3
// 2 0 4
// 2 1 0
// 2 1 1



// console.log(arrayMultidimensi[0][0][0],`<========================= arrayMultidimensi[0][0][0] =======================`);
// console.log(result2,`<========================= result2 =======================`);
// 1-1 2-1 kucing



let test = [
  ['a','b','c'],
  ['d','e','f', [ 'g', 'h' ]],
  2,
  3
]
 // do first loop 
 // ['a','b','c']  ['d','e','f', [ 'g', 'h' ]], 2, 3
 // second loop
  // aa b c d e f [g h] 2 3
  //third looping
  // a b c d e f g h 2 3





// algoritma 
/*
Masuk ke var mobil menggunakan loop, liat semua nilainya
  diff now true
  Masuk ke var motor liat semua sementara melihat ke var mobil
    Jika ada nilai yang sama change diff to false
    
  jika it's diff true push the value


*/
var mobil = ['camry','jazz','supra']
var motor = ['beat','supra','mio'] // camry // jazz

// for(var i=0;i<mobil.length;i++){
//   var diff = false // mobil[i] => camry jazz supra
//   for(var j=0; j<motor.length;j++){
//     if(mobil[i]== motor[j]){ //supra == beat? | supra == supra? | supra == mio?
//       diff = false
//     }
//   }
//   if( diff == true){
//     motor.push(mobil[i])
//   }
// }

// for(var i=0;i<mobil.length;i++){
//   if(motor.indexOf('camry')== -1){
//     motor.push(mobil[i])
//   }
// }


console.log([...new Set(mobil.concat(motor))])

