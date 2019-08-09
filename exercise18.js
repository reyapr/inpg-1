function numberSum(number) {
  var result = 0
  for(let i=number;i>0;i--){
    result += i
  }
  return result
}

function numberSumRecursion(number){
  if(number === 1){
    return number
  }

  return number + numberSumRecursion(number-1)
}
// 1 2 3 4 5 
// 5 + numberSumRecursion(5-1)
// 5 + 4 + numberSumRecursion(4-1)
// 5 + 4 + 3 + numberSumRecursion(3-1)
// 5 + 4 + 3 + 2 + numberSumRecursion(2-1)
// 5 + 4 + 3 + 2 + 1


// 5+4+3+2+1
// 6+5+4+3+2+1
console.log(numberSumRecursion(5),`<========================= 15 =======================`);
console.log(numberSumRecursion(6),`<========================= 21 =======================`);
console.log(`=========================  =======================`);
console.log('')
console.log(`=========================  =======================`);

function exp(number, n){
  var result = 1
  for(let i=0;i<n;i++){
    result *= number
  }
  return result
}

console.log(exp(2, 2),`<========================= 4 =======================`);
console.log(exp(2, 3),`<========================= 8 =======================`);
console.log(exp(2, 10),`<========================= 8 =======================`);
console.log(`=========================  =======================`);
console.log('')
function expRecursion(number, n){
    // 2 , n = -1
  if(n === 0){
    return 1
  }else if(n<0){
    // number = 2 n = -2
    return 1/number * expRecursion(number ,n+1)
    /**
     * 1/2 * expRecursion(2 ,-2+1)
     * n = -1
     * 1/2 * 1/2 * expRecursion(2, -1+1)
     * 1/2 * 1/2 * 1
     */
  }

  return number * expRecursion(number, n-1)
}

// 2 pangkat -1 == 1/2
// 2 pangkat -2  == 1/4
// 2 pangkat -3 == 1/6
// 2 * expRecursion(2, 0-1)
// 2 * -1 * expRecursion(2, -1-1)
//


// 2 * 2 * 2 * 1
console.log(expRecursion(2, -1),`<========================= -1 =======================`);
console.log(expRecursion(2, -2),`<========================= -3 =======================`);
// console.log(expRecursion(2, 10),`<========================= 8 =======================`);

function numberIterator(num) {
  // Your code here
  if(num == 0){
    return '0'
  }
  return numberIterator(num-1) + num.toString()
 }
 
// numberIterator(5-1)                         + 5
// numberIterator(4-1)                  + 4    + 5
// numberIterator(3-1)           + 3    + 4    + 5
// numberIterator(2-1)      + 2  + 3    + 4    + 5
// numberIterator(1-1) + 1
// 0                   + 1  + 2  + 3    + 4    + 5

 // TEST CASES
 console.log(numberIterator(5)); // '012345'
 console.log(numberIterator(7)); // '01234567'
 console.log(numberIterator(3)); // '0123'
 console.log(numberIterator(1)); // '01'
 console.log(numberIterator(0)); // '0' 

function countLetters(word, letter) {
  if(word.length <= 0){
    return 0
  }
  if(word[0]  == letter){
    return 1 + countLetters(word.slice(1), letter)  
  }else{
    return countLetters(word.slice(1), letter)
  }
}

/**
 * var string = 04123
 * string[0] === letter
 *  1 + functio(04123, 1)
 * kalo gk ada
 *  function(4123, 1)
 */


/**
 * pertama check length kalo gk ada
 * return 0
 * 
 * cek index pertama sama apa engga? kalo sama
 *  return 1 + panggil diri sendiri tapi potong depannya 1 + 1+ 1+ 0
 * kalo gk ada 
 *  panggil diri sendiri potong 
 * 
 */

console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
// TEST CASES
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3re