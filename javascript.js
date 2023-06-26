 //const fruits = ["banana","orange","apple"]

// //fruits.push ("lemon")


// function myfruits(){
// let numOfFruits=0;

// for(let i = 0;i<numOfFruits.length;i++){
//     sum+=numOfFruits[i]

// }
// return numOfFruits;
// }
// myfruits();
// console.log(myfruits())
// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//   console.log(points[i]);
//   let j = Math.floor(Math.random() * i)
//   let k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }
// let x = Math.round(9.5)
// console.log(x)



// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
// let text = "";
// for(const i of fruits.entries()){
// text+=i;
// }
// let x = ~ 5
// console.log(x);

// function myFunction(){
//     const message ="alert";
//     message.innerHTML="hello";
//     let x = "";
//     try{
//         if(x=="")throw"empty";{
//         if(isNaN(x))throw "not a number";
//         x = Number(x);
//         if(x<5) throw "too low";
//         if(x<10) throw "too high";    


//         }
        
//     }
//     catch(err) {
//            message.innerHTML = "input is"+err;
//     }
  
  
// }
// const person = {
//     firstName:"John",
//     lastName:"Doe",

//     fullName:function(){
//         return this.firstName + " " + this.lastName;
//     }
// };



// console.log(person.fullName());

class Animal {

    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    livingthings(live){
        return  live + this.type;
    }
}

let myPet = new Animal("Dog","Pet animal");

console.log(myPet)

const add = (function(){
let counter  = 0;
return function(){
    counter+=1;
    return counter;
}
})();

console.log(add());