 
 
 
function square (angka) {
  // Your code here
  return angka * angka
}

function pi () {
  // Your code here
  return 3.14
  // logicnya punya pi
}
  

function getArea() {
  var area = pi() * square(7);
  area = Math.floor(area)

  return area

} // 153.86

// 153.86


function checkNumIsAvailable(num, array){ // num =5 , array = [1,2,3,6]
  var checkArrayIncludeNum = false 
  
  for(var i=0; i<array.length; i++){
    if(num === array[i]){ // num = 5  array[i] = 4
      checkArrayIncludeNum = true
    }
  }

  return checkArrayIncludeNum
}

console.log(checkNumIsAvailable(5, [1,2,3,6])) 





let lastIndexDari = (huruf, arrayDariHuruf) => {// 'a', asdj2kl31asd))
  var checkArrayIncludeHuruf = -1  //0 // 9
  
  for(var i=0; i<arrayDariHuruf.length; i++){
    if(huruf === arrayDariHuruf[i]){
      checkArrayIncludeHuruf = i
    }
  }

  return checkArrayIncludeHuruf
}

 // 0  // -1

console.log(lastIndexDari('a','asdj2kl31asd'),"<=========== last Index") // 9



let indexDari = (huruf, arrayDariHuruf) => {
  var checkArrayIncludeHuruf = -1 // 2 
  
  for(var i=0; i<arrayDariHuruf.length; i++){
    if(huruf === arrayDariHuruf[i]){ // i =0
      checkArrayIncludeHuruf =  i
      return checkArrayIncludeHuruf
    }
  }

  return checkArrayIncludeHuruf
}

console.log(indexDari('a','sdj2kl31sd'),"<========== index of") // -1

