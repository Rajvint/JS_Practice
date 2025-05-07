
// <======= Video 1 ======>
// let firstBatch = 5
// let secondBatch = 10
// let count = firstBatch +secondBatch
// console.log(count)

// let myAge = 24
// console.log(myAge)


// <======= Video 2 ======>
// let myAge = 24
// let humanDogRatio = 7
// let myDogAge = myAge*humanDogRatio
// console.log(myDogAge)

// <======= Video 3 ======>
// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// <======= Video 4 ======>

// function increment() {
//     console.log("button was clicked")
// }

// <======= Video 5 ======>
// setting up the race 
// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// <======= Video 6 ======>
// function printnum(){
//     console.log(42)
// }
// printnum()

// <======= Video 7 ======>
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// let sumlaps = lap1 + lap2 +lap3
//  function sumlap(){
//      console.log(sumlaps)
//  }
// sumlap()

// <======= Video 8 ======>
// let lapsCompleted = 0
// // Create a function that increments the lapsCompleted variable with one
// function lapincrement(){
//     lapsCompleted = lapsCompleted +1 
//     console.log(lapsCompleted)
// }
// lapincrement()
// lapincrement()
// lapincrement()

// <======= Video 9 ======>
// let count = 0
// let countEl = document.getElementById("count-el")
// function increment(){
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// }
// function save(){
//     console.log(count)
// }
// save()

// <======= Video 10 ======>
// let username = "Jhone"
// let message = "you have three new notifications"

// console.log(message + ", " + username)

// <======= Video 11 ======>
// let names = "Rajvi"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + names
// console.log(myGreeting)

// <======= Video 12 ======>
// let welcomeEl = document.getElementById("welcome-el")
// let names = "Rajvi"
// let greeting = "Hi, my name is "
// let myGreeting = greeting +  names
// welcomeEl.innerText = myGreeting
// welcomeEl += "Tilwani"
// console.log(myGreeting)

// <======= Video 13 ======>
    let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEL)

 function increment (){
    count+= 1
    countEl.textContent = count
 }
 function save (){
    let countStr = count + "- "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
 }