
function numberProcessing(arr){
  var mean = 0
  var min = Math.min(...arr)
  var max = Math.max(...arr)
  var evens = []
  var odds = []
  for(j=0; j<arr.length; j++){
    mean += arr[j]/arr.length
    if((arr[j] % 2) != 1){
      evens.push(arr[j])
    }else{
      odds.push(arr[j])
    }
  }
  return (`Mean: ${mean = Math.round(mean)},  Min: ${min}, Max: ${max}, Evens: ${evens}, Odds: ${odds}`)
}
 
//  console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
 // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0


 const findMax = (arr) => {
  var highestNum = 0 // 10
  for(var i=0;i<arr.length;i++){ // ([1, 3, 5, 1, 2, 8, 10, 0, 3]
    if(arr[i]>highestNum){
      highestNum = arr[i]
    }
  }
  return highestNum
 }
// tanpa sort bisa jauh lebih simple
/*
  algoritma
 

*/

 console.log(findMax([1, 3, 5, 1, 2, 8, 10, 0, 3]))

const sortArr = () => {
  var turn = true

  while(turn){
    turn = false
    for(i=0;i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        var tukar = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = tukar
        turn = true
      }
    }
  }
  return arr

}



var pindahAngka = [2,1]  // [2,1]

pindahAngka[0] = pindahAngka[0] + pindahAngka[1]

pindahAngka[1] = pindahAngka[0]-pindahAngka[1]

pindahAngka[0] = pindahAngka[0] - pindahAngka[1]

console.log(pindahAngka) 

// gak boleh pake method array
// gak boleh ada looping
// gak boleh ada variable baru 
// pindahkan 2 ke 1  1 ke 2 tanpa bikin array baru