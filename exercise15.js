


var list = {
  0: "lexus",
  1: "toyota"
}

var nama = "roda"

var orang = {
  nama: 'cissy',
  roda: 'cissy@gmail.com',
  cars: ['honda brio', 'avanza']
}

var kendaraan = ['supra', 'supra', 'toyota']

var paketHemat = {
  ayam: 'ayam bakar',
  sambal: 'sambal taliwang',
  lalaban: 'kol goreng',
}

paketHemat['ayam'] // ayam kabar

for(var key in paketHemat){
  console.log(key,"<= key")
  console.log(paketHemat[key],`<========================= key =======================`);
}

// var kendaraanUnik = []

// for(var i=0;i<kendaraan.length;i++){
//   unique[kendaraan[i]] = 1
// }




// console.log(kendaraanUnik,`<========================= unique =======================`);


var kendaraan ={
  supra: 1,
  toyota: 1,
}


var key = 'nama'

orang['nama'] = 'nama baru'
// console.log(orang,`<=========================  =======================`);   

var listOrang = [{
  nama: 'udin',
  kendaraan: "sapu terbang"
},{
  nama: 'cissy',
  kendaraan: "motor bebek"
},]


// Latihan 1

function grouping (scores) {
  var object = {
    pass: [],
    fail: []
  }
  for(i=0;i<scores.length;i++){
    if(scores[i]>=75){
      object['pass'].push(scores[i])
    }
    else{
      object['fail'].push(scores[i])
    }
  }
  return object
}


list = [
  [1,2,3,4],
  [1,2,3]
]

// list[i= 2][j =]

var string = ''

for(var i=0;i<list.length;i++){
  for(var j=0;j<list[i].length;j++){
    string+=list[i][j]
  }
}
console.log(string,`<========================= string =======================`);
// '1234123'

var hasil = {
  passed: [],
  failed: []
}

for(i=0; i<scores.length; i++){
  if(scores[i]>74){
    hasil.passed.push(scores[i])   
    }else{
    hasil.failed.push(scores[i])
  }
}
return hasil

// d bawah sini

// { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

// console.log(grouping([]));


function convert (data) {
  var result = []
  for (var i=0; i<data.length; i++){
      var output = {
          id : data[i][0],
          firstName : data[i][1],
          lastName : data[i][2],
          email : data[i][3],
      }
    result.push(output)
  }
  return result
}

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));
/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/


// let queue = ['dimitry','crystal','cissy','udin','supratman','budi']

let makanan = ['puding','kue','kue','ayam','lalaban','tahu','tempe','puding','tempe','tahu','tahu','tahu','tahu','ayam']


const countFoods = (array) => {

}

countFoods(makanan)  


/*

kalau ada makanan lebih dari 4 ubah jadi banyak
{
  puding: 2,
  kue: 2,
  lalaban: 1,
  tahu: 'buanyak?'
  tempe: 2,
  ayam: 2
}
*/



function grouping (scores) {  // dari sini jelaskan scores isinya apa
  var hasil = {
    passed: [],
    failed: []
  }
  
  for(i=0; i<scores.length; i++){ // 3
    if(scores[i]>74){ // 
      hasil.passed.push(scores[i])   
    }else{
      hasil.failed.push(scores[i])
    }
  }
  return hasil
}

console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));

console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
