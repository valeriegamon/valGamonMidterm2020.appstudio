/*
function calcAvgSquare(num1, num2, num3) {
  return (((num1 + num2 + num3)/3) * Math.pow(num1,2))
  }
function randomMultiply(chosen, random) {
  return chosen*random
}

let optionsss = prompt('Do you want to do a "random multiplication" or a "average calculation"?')
number1 = ""
number2 = ""
number3 = ""
let randommmm = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 

if (optionsss == 'random multiplication') {
        number1 = Number(prompt("Enter a RANDOM number"))
        
        alert(`The result of multiplying the random number ${randommmm} with ${number1} is ${randomMultiply(number1, randommmm)}.`)
        
} else if (optionsss == 'average calculation') {
        number1 = Number(prompt("Enter a FIRST number"))
        number2 = Number(prompt("Enter a SECOND number"))
        number3 = Number(prompt("Enter a THIRD number"))

        alert(`The answer is ${calcAvgSquare(number1, number2, number3)}.`)
        
  } else {
        alert("Sorry buddy.")
        number1 = ""
        number2 = ""
        number3 = ""
  }
*/