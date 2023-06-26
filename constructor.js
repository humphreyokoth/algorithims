// class Car {

//     constructor(name,year){
//         this.name =name;
//         this.year = year;
//     }
//     age(){
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myCar = new Car("Ford",2014);

//console.log("My car is " +  myCar.age() +  "years old");

// Class Inheritance
class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return "i have a " + this.carname;
    }
}
class Model extends Car {

    constructor(brand,mod){
        super(brand);
        this.model =mod;

    }
    show(){
        return this.present() + ',it is a ' + this.model;
    }
}

let myCar1 = new Model("Ford","Mustang");
console.log(myCar1.show());
