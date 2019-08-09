console.log("")
console.log("================================== Compare Numbers ==================================================")
console.log("")

function compareNumbers (firstNumber, secondNumber) {
  if(firstNumber < secondNumber){
    return true
  }else if(firstNumber > secondNumber){
    return false
  }else return -1
  
}
console.log(compareNumbers(8, 8)); 

// TEST CASES
console.log(compareNumbers(5, 8)); // true
console.log(compareNumbers(5, 3)); // false
console.log(compareNumbers(4, 4)); // -1
console.log(compareNumbers(3, 3)); // -1
console.log(compareNumbers(17, 2)); // false

console.log("")
console.log("================================== reverString 1 ==================================================")
console.log("")


function reverseString (text) {
  // Your code here
  var textReverse = '' //'h'
    
  for(var i=0; i<text.length; i++){
    textReverse = t
    
    ext[i]+textReverse; // 
  }
  return textReverse
}

console.log(reverseString('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseString('John Doe')); // eoD nhoJ
console.log(reverseString('I am a bookworm')); // mrowkoob a ma I
console.log(reverseString('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseString('Super')); // repuS

console.log("")
console.log("================================== reverString 2 ==================================================")
console.log("")

function reverseString(text){
  var revstr = '';

  for(var i=text.length-1; i>=0; i--){//decrementing
      revstr = revstr+ text[i];
  }
  return revstr;
}

// TEST CASES
console.log(reverseString('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseString('John Doe')); // eoD nhoJ
console.log(reverseString('I am a bookworm')); // mrowkoob a ma I
console.log(reverseString('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseString('Super')); // repuS


console.log("")
console.log("================================== sortByCharacter ==================================================")
console.log("")

function sortByCharacter (text) {
  var array = text.split('')
  var flag = true
  while(flag){
    flag = false
    for(i=0; i < array.length; i++){
      if(array[i]>array[i+1]){
        var temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
        flag = true
      }
    }
  }
 return array.join()
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'


console.log("")
console.log("================================== isArithmeticProgression ==================================================")
console.log("")


function isArithmeticProgression (numbers) {
 var selisih = numbers[0]-numbers[1] // -2
  var temp = false
  for(var i = 2; i < numbers.length-1; i++){
    var selisih2 = numbers[i]-numbers[i+1]
    if(selisih2 == selisih){ //NaN == selisih
      temp = true;
    }
    else{
      return false
    }  
  }
 
  return temp
}

// TEST CASES
console.log(isArithmeticProgression([1, 1, 3, 4, 5, 6, 7, 8])); // false
console.log(isArithmeticProgression([2, 4, 6, 12, 24, 2,4])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false



console.log("")
console.log("================================== isArithmeticProgression Emir =================================================")
console.log("")
