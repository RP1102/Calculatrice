let fullExpression = 0
let currentCount = document.getElementById("result")

let value
let operator
let numbers = document.getElementsByClassName('number')

let ops = document.getElementsByClassName('operator')

let ac = document.getElementById("ac")

// POUR LE BOUTON CLEAR
function clear(){
    currentCount.textContent = ""
}
ac.addEventListener("click", clear)

// POUR LES BOUTONS CHIFFRÉS
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = selectValue;
}

function selectValue() {
  value = this.value;
  currentCount.textContent += value
  console.log("current value :" + currentCount.textContent);
  console.log("current full expression : " + fullExpression)
}

// POUR LES BOUTONS D'OPERATION
for(let i = 0; i < ops.length; i++){
    ops[i].onclick = selectOperator;
}

function selectOperator(){
    operator = this.value
    console.log(operator)
    switch (operator){
        case "-":
            fullExpression -= Number(currentCount.textContent)
            console.log("current value :" + currentCount.textContent);
            console.log("current full expression : " + fullExpression)
            clear()
            console.log("current value after clear():" + currentCount.textContent);
            break
        case "+":
            fullExpression += Number(currentCount.textContent)
            console.log("current value :" + currentCount.textContent);
            console.log("current full expression : " + fullExpression)
            clear()
            console.log("current value after clear():" + currentCount.textContent);
            break
        case "÷":
            fullExpression / Number(currentCount.textContent)
            console.log("current value :" + currentCount.textContent);
            console.log("current full expression : " + fullExpression)
            clear()
            console.log("current value after clear():" + currentCount.textContent);
            break
        case "x":
            fullExpression = 1 * Number(currentCount.textContent)
            console.log("current value :" + currentCount.textContent);
            console.log("current full expression : " + fullExpression)
            clear()
            break
        case "=":
            fullExpression += Number(currentCount.textContent)
            console.log("current value :" + currentCount.textContent)
            console.log("current full expression : " + fullExpression)
            currentCount.textContent = fullExpression
            fullExpression = 0
            break
        default:
            console.log("error")
            currentCount.textContent = "error"
    }
    
    

}































// let zero = {
//     val: 0,
//     btn: document.getElementById("zero")
// }


// let one = {
//     val: 1,
//     btn: document.getElementById("one")
// }

// let two = {
//     val: 2,
//     btn: document.getElementById("two")
// }

// let three = {
//     val: 3,
//     btn: document.getElementById("three")
// }

// let four = {
//     val: 4,
//     btn: document.getElementById("four")
// }

// let five = {
//     val: 5,
//     btn: document.getElementById("five")
// }

// let six = {
//     val: 6,
//     btn: document.getElementById("six")
// }

// let seven = {
//     val: 7,
//     btn: document.getElementById("seven")
// }

// let eight = {
//     val: 8,
//     btn: document.getElementById("eight")
// }

// let nine = {
//     val: 9,
//     btn: document.getElementById("nine")
// }













































// function press(){
//     currentCount.textContent += "0"
// }



// let one = {
//     val: 1,
//     getValue: function(){
//         return this.val
//     }
// }


// let sept = document.getElementById("seven")
// sept.addEventListener("click", function(){
//     let val = sept.innerText
//     currentCount.textContent += val
// })


// let values = document.getElementsByClassName("number")

// let buttonSet = document.querySelector("")

// let two = {
//     val: 2,
//     id: "two",
//     createBtn: function(){
//         const btnTwo = document.createElement("button")
//         btnTwo.setAttribute("id",this.id)
//         btnTwo.innerHTML = this.val
//         btnTwo.append()
//     }
// }
