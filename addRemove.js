let valueInput = '' // apel
      let id = 0
      let removeid = 0
      let inputDataList = document.getElementById('inputDatalist')
      let removeData = document.getElementById('removeData')

      inputDataList.addEventListener('input', (e)=>{
        valueInput = e.target.value
      })  
      removeData.addEventListener('input', (e)=>{
        removeid = e.target.value
      })  
      function test(){
        id++
        let li = document.createElement('li')
        // <li></li>
        let text = document.createTextNode(valueInput)
        // apel
        li.appendChild(text) // <li>apel</li>
        li.setAttribute('id',id)
        document.getElementById('list-dari-opt').appendChild(li)
      }
      function remove(){
        console.log(removeid)
        let childToRemove = document.getElementById(removeid)
        console.log(childToRemove)
        document.getElementById('list-dari-opt').removeChild(childToRemove)
      }