function threeStepsAB (huruf) {
  for(i=0;i<huruf.length;i++){
    if(huruf[i]==='a'&&huruf[i+4]==='b'){
      return true
    }
    else if(huruf[i]==='b'&&huruf[i+4]==='a'){
      return true
    }
    else{
      return false
    }
  }
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false

console.log('')
console.log("=================================== threeStepsAB ===================================")
console.log('')

function gcd(firstNumber, secondNumber) {
  // dapetin min number dari first dan second
  // loop from the min number to 0
  // check it can divide with firstNumber and secondNumber
  // if it can, return the number
 var hasil =0 //1 // 2 //4
  for(var i=0; i < firstNumber; i++){
      if(firstNumber % i === 0 && secondNumber % i === 0){
          hasil=i;
      }
  }
  return hasil
}


// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1


console.log('')
console.log("=================================== gcd ===================================")
console.log('')

function isPrime (number) {
  for(var i=2; i<=number; i++){
   if(number == i){
     return true
   }
   else if(number%i == 0){
     return false
   }
  }       
}

// TEST CASES
console.log(isPrime(25)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false

console.log('')
console.log("=================================== isPrime ===================================")
console.log('')