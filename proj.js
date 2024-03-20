var items=document.getElementsByClassName("map")
let table=["0","1","2"
          ,"3","4","5"
          ,"6","7","8"]
let currentTurn="X"          
for (const item of items) {
  item.addEventListener("click",function(){
     let value=(item.getAttribute("value"))
     let mapcontent=document.querySelector('.map[value="value"]')
     mapcontent.innerHTML= currentTurn

     let i=value
     table[i]=currentTurn
     if (currentTurn==="X") {
      currentTurn="O"
     }
     else currentTurn="X"


  })
  function evaluate(){

    if (//rows
      (table[0]===table[1] && table[1]===table[2]) ||
      (table[3]===table[4] && table[4]===table[5]) ||
      (table[6]===table[7] && table[7]===table[8]) ||
      //cols
      (table[0]===table[3] && table[3]===table[6]) ||
      (table[1]===table[4] && table[4]===table[7]) ||
      (table[2]===table[5] && table[5]===table[8]) ||
      //diag
      (table[0]===table[4] && table[4]===table[8]) ||
      (table[2]===table[4] && table[4]===table[6]) 
      ){
        
    }
  }
}