
let toyota = {
  model: 'yaris',
  type: 'hatchback',
  price: 259000000
}
let honda = {
  model: 'crv',
  type: 'suv',
  price: 569000000
}
let toyota_suv = {
  model: 'rush',
  type: 'suv',
  price: 269000000
}
let suzuki = {
  model: 'xpander',
  type: 'mpv',
  price: 279000000
}
let suzuki_mpv = {
  model: 'ertiga',
  type: 'mpv',
  price: 279000000
}
let toyota_mpv = {
  model: 'avanza',
  type: 'mpv',
  price: 279000000
}

let mitsubitshi = {
  model: 'mirage',
  type: 'hatchback',
  price: 219000000
}


let andri = {
  name: 'cissy',
  cars: [
    {
      type: 'yaris',
      price: 259000000
    },
    {
      type: 'jazz',
      price: 269000000
    },
    {
      type: 'swift',
      price: 239000000
    }
  ],
  address: 'jkt'
}
// 1
const getCarPriceOver250 = (orang) => {


}

let carsOver250 = getCarPriceOver250(andri)
console.log(carsOver250)
/**
 * munculin mobil cissy yang harganya di atas 250.000.000
 * harga mobil kepunyaan cissy di atas 250jt ada dua 1. yaris 2. jazz
 */

// 2
let beliMobilBaruDenganHargaSesuaiKantong = (orang, tokoMobil) =>{
  // <= 600jt
  let uang = orang.uang - 200000000
  let mobil = []
  for(let i=0;i<tokoMobil.length;i++){
    if(tokoMobil[i].type !== 'mpv' && uang-tokoMobil[i].price >= 0){
      uang-=tokoMobil[i].price
      mobil.push(tokoMobil[i].model)
    }
  }
  uang+=200000000
  return {
    uang,
    garasi: mobil
  }
}

let cars = [toyota, honda, suzuki, mitsubitshi]

let andra = {
  uang: 800000000,
  garasi: []
}
/**
 * andra mau beli mobil, tapi dia gak suka mpv karna andra single
 * dan dia punya budget 800jt, tapi uangnya ingin di tabung 200jt
 * mobil apa aja yang akan dibeli andra?
 * 
 * let andra = {
  uang: {uang sudah berkurang}
  garasi: [nama mobil masuk sini]
}
 */

carsOver250 = beliMobilBaruDenganHargaSesuaiKantong(andra, cars)
console.log(carsOver250,`<========================= carsOver250 =======================`);



let listOfCars = [toyota, honda, suzuki, mitsubitshi, toyota_mpv, toyota_suv, suzuki_mpv]

let groupingTheCarByType = (cars) => {
  let grouped = {}
  for(let i=0;i<listOfCars.length;i++){
    let carType = listOfCars[i].type
    let carModel = listOfCars[i].model
    if(grouped[carType] === undefined){
      grouped[carType] = [carModel]
    }
    else{
      grouped[carType].push(carModel)
    }
  }
  return grouped
}

let groupedCar = groupingTheCarByType(listOfCars)

/**
 * beberapa dalam list mobil mempunyai tipe yang sama
 * sekarang coba group mobil2 tersebut dengan tipe yang sama
 * ke dalam object
 * {
 *  mpv: [nama2 list mobil toyota ],
 *  suv: [nama2 list mobil mitsubishi],
 *  hatchback: []
 * } 
 */