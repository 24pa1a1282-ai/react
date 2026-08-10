// function sum(a,b){
//     return a+b
// }
// sum(1,2)

// const students = ["Ravi","Raju","Kamal","Ramesh","tree","hvjcd","gaysgdjqwg"]
// console.log(students[0])

//Map Method
// students.map((student)=>{
//     console.log(student)
// })

// const ele = [29,77,35,104,567,323,458 ,2]

//Reduce Function
// const sum  = ele.reduce((acc , sum)=>{
//    return acc + sum 
// },0)

// console.log("Total Sum is : " + sum)

// Find Method
// const findele = ele.find((number)=>{
// return number>100
// })
// console.log(findele)

//Filter method
// const findele = ele.filter((number)=>{
// return number>100
// })
// console.log(findele)


//Event Handler

// function addition(){

// const num1 = Number(document.getElementById("num1").value)
// const num2 = Number(document.getElementById("num2").value)

// const sum = num1 + num2

// document.getElementById('result').innerHTML = sum
// }


//Event Listeners

const btn = document.getElementById('btnn')
btn.addEventListener("click" ,()=>{
   const num1 = Number(document.getElementById("num1").value)
const num2 = Number(document.getElementById("num2").value)

const sum = num1 + num2

document.getElementById('result').innerHTML = sum
})