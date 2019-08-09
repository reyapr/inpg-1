var radioVal = ''
    let arr = ['toyota','honda','suzuki']
    var number = 2
    let datalist = document.querySelector('input[list=datalistId]')

    datalist.addEventListener('input', (e)=>{
      radioVal = e.target.value
    })

    function test(e) {
      let divList = document.querySelector('#list')
      let li = document.createElement('li')
      let text = document.createTextNode(radioVal)
      li.appendChild(text)
      divList.appendChild(li)
      number++
      return false
    }
    for(let i=0;i<arr.length;i++){
      let divList = document.querySelector('#list')
      let li = document.createElement('li')
      let text = document.createTextNode(arr[i])
      li.appendChild(text)
      divList.appendChild(li)
    }