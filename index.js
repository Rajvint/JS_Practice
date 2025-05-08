
// <======= Video 1 ======>
let firstBatch = 5
let secondBatch = 10
let count1 = firstBatch +secondBatch
console.log(count1)

let myAge = 24
console.log(myAge)


// <======= Video 2 ======>
let humanDogRatio = 7
let myDogAge = myAge*humanDogRatio
console.log(myDogAge)

// <======= Video 3 ======>
let bonusPoint = 50
console.log(bonusPoint)

bonusPoint = bonusPoint + 50
console.log(bonusPoint)

bonusPoint = bonusPoint - 75
console.log(bonusPoint)

bonusPoint = bonusPoint + 45
console.log(bonusPoint)

// <======= Video 4 ======>

function increment() {
    console.log("button was clicked")
}

// <======= Video 5 ======>
// setting up the race 
function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()

// <======= Video 6 ======>
function printnum(){
    console.log(42)
}
printnum()

// <======= Video 7 ======>
let lap1 = 34
let lap2 = 33
let lap3 = 36

let sumlaps = lap1 + lap2 +lap3
 function sumlap(){
     console.log(sumlaps)
 }
sumlap()

// <======= Video 8 ======>
let lapsCompleted = 0
// Create a function that increments the lapsCompleted variable with one
function lapincrement(){
    lapsCompleted = lapsCompleted +1 
    console.log(lapsCompleted)
}
lapincrement()
lapincrement()
lapincrement()

// <======= Video 9 ======>
let count2 = 0
let countEl = document.getElementById("count-el")
function increment(){
    count2 = count2 + 1
    countEl.innerText = count2
    console.log(count2)
}
// function save(){
//     console.log(count2)
// }
// save()

// <======= Video 10 ======>
let username = "Jhone"
let message = "you have three new notifications"

console.log(message + ", " + username)

// <======= Video 12 ======>
let welcomeEl = document.getElementById("welcome-el")
let names = "Rajvi"
let greeting1 = "Hi, my name is "
let myGreeting = greeting1 +  names
welcomeEl.innerText = myGreeting
welcomeEl += "Tilwani"
console.log(myGreeting)

// <======= Video 13 ======>
let saveEL = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
let count3 = 0
console.log(saveEL)

 function increment (){
    count3+= 1
    countEl.textContent = count3
 }
 function save (){
    let countStr = count3 + "- "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count3 = 0
 }

// practice task 1
let firstName = "Rajvi "
let lastName = "Tilwani"
let greeting = "Hi there"
let fullName = firstName + lastName
// console.log(fullName)

function greet (){
  console.log(greeting + ", " + firstName)
}
greet()

// practice task 2
let myPoints = 3
function add3Points(){
   myPoints = myPoints + 3
   // console.log (myPoints)
}
function remove1Points(){
   myPoints = myPoints - 1
   // console.log (myPoints)
}
add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
console.log(myPoints)

// practice task 3
console.log("2" + 2) 
console.log(11 + 7) 
console.log(6 + "5") 
console.log("My points: " + 5 + 9) 
console.log(2 + 2) 
console.log("11" + "14")


// practice task 4
let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)
function purchase(){
   console.log("Something went wrong, please try again")
   errorParagraph.textContent = "Something went wrong, please try again"
}

// practice task 5 
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")
// add function 
function add(){
   let result = num1 + num2
   sum.textContent =  "sum: " + result
}
// add()

// subtract function 
function subtract(){
   let result = num1 - num2
   sum.textContent =  "sum: " + result
}

// divide function 
function divide(){
   let result = num1 / num2
   sum.textContent =  "sum: " + result
}

// multiply function 
function multiply(){
   let result = num1 * num2
   sum.textContent =  "sum: " + result
}

// practice task 6