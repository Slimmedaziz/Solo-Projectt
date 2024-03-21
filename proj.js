var items=document.getElementsByClassName("cell")
let table=["0","1","2"
          ,"3","4","5"
          ,"6","7","8"]
          
let finished = false
let currentTurn="X"

for (const item of items) {
  item.addEventListener("click",function(){

    if (finished) {
      return
    }

     let value=(item.getAttribute("value"))
     let i=value-1

     if (table[i]==="X" || table[i]==="O" ) {
      return  
     }
     let cellcontent=document.querySelector(`.cell[value="${value}"]`)
     cellcontent.innerHTML= currentTurn

    
     table[i]=currentTurn
     evaluate()

     if (currentTurn==="X") {
      currentTurn="O"
     }
     else currentTurn="X"
     document.getElementById("command").innerHTML = `${currentTurn} turn `

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
        var Winner ;
         if (currentTurn === "O") {
          Winner = "O";
        } else {
          Winner = "X";
        }
        finished = true
        alertify.alert(`${Winner} Won!`)

        
    }
    var  draw = true
    for (cell of table){
      if(cell !== "X" && cell !== "O"){
        draw = false 
      }
    }
    if(draw){
      finished = true
      alertify.alert("Draw")
    }
  }
}


document.getElementById("reset-btn").addEventListener("click",function(){
    reset()
}) 

function reset() {
  for (const item of items) {

    let value=(item.getAttribute("value"))
    let cellcontent=document.querySelector(`.cell[value="${value}"]`)
    cellcontent.innerHTML = ""

    table=["0","1","2"
          ,"3","4","5"
          ,"6","7","8"]
  }

  finished = true
  currentTurn = "X"
  document.getElementById("command").innerHTML = `${currentTurn} turn `
}