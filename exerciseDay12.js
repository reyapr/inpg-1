// Latihan 1.

var people = [
  [1, 'Dimitri', 'Hacktiv8'],
  [2, 'Dhani', 'Hacktiv8'],
  [3, 'Icha', 'Hacktiv8']
];
for(i=0 ; i < people.length; i++){
  // console.log('ID: ' + people[i][0]+' Name: '+ people[i][1]+ ' Company: ' + people[i][2])
  // atau
  // console.log(`ID: ${people[0][0]} Name: ${people[i][1]} Company: ${people[i][2]}`)
}
//ID: 1 Name: Dimitri Company: Hacktiv8

var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
  // ['dimitri:dimitri@mail.com:male', 'icha:icha@mail.com:female', 'windi:windi@mail.com:female']
  // loop array
  // waktu index 0 'dimitri:dimitri@mail.com:male'.split(':')
  //   ['dimitri', 'dimitri@mail.com','male']
  // waktu index 1 'icha:icha@mail.com:female'.split(':')
  //   ['icha','icha@mail.com', 'female']

var arr = text.split(",")
var result = []

// console.log(arr,"<=============== ARR")

for(i=0; i<arr.length; i++){
  result[i] = arr[i].split(":")
}

// console.log(result)

var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]
var modus = 1
var amount = 4
for(i=0 ; i < numbers.length ; i++){
    sameNumbers = 0 //4
 for(j= 0; j < numbers.length ; j++){
    if(numbers[i]=== numbers[j]){ // 1 === 
      sameNumbers++
    }
 }
 if(sameNumbers > amount){
   amount = sameNumbers
   modus = numbers[i]
 }
}
console.log(modus)
// cari modus
// output 1

let textTanpaDash = 'text1text2text3text4' 

//'text1-text2-text3-text4'

result = '' 
increment = 0
for(var i=0;i<textTanpaDash.length;i++){
  increment+=1
  if(increment%5==0 && i!==textTanpaDash.length-1){
    result+= textTanpaDash[i] + '-'
  }else{
    result+=textTanpaDash[i]
  }
}
console.log(result)

//////////////////////// batas suci

function removeSpaces (text) {
  let result = ''
  for(var i=0;i<text.length;i++){
    if(text[i]!== ' ') result+=text[i]
  }
  return result
}

function updateVowels (text) {
  // Code to update vowels
  let result = ''
  var vocals = 'aeiou'
  var afterVocal = 'bfjpv' 
  for(var i=0;i<text.length;i++){ //kapal
    let indexVocal = vocals.indexOf(text[i]) // 0
    if( indexVocal !== -1){
      result+= afterVocal[indexVocal]
    }else{
      result+=text[i]
    }
  }
  return result
}

// aBcdeFghiJklmnoPqrstuVwxyz
// abefijopuv



var password = 'kapal'; //  dJmJtrJw
var noSpaces = removeSpaces(password);
var encryptedPassword = updateVowels(noSpaces);

console.log(encryptedPassword);