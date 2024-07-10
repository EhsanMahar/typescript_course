"use strict";
// //OOP
// // Object oriented programming
// class House{
//     ownerName:string;
//     readonly adress:string;
//     // numberOfDoors:number=2;
//     constructor (name:string,ads:string){
//        this.ownerName=name
//     this.adress=ads
//     }
//     bell(){
//         console.log(this.adress,this.ownerName,"Ding Dong");
//     }
// }
// // let h1 = new House();
// // // console.log(h1["adress"]);
// // console.log(h1.adress);
// let h1 = new House("Hamzah","A11"); //Hamzah
// let h2 = new House("Umar","A22"); //Umar 
// // let h3 = new House("Noor","A33"); //Noor
// // console.log(h3);
// //prototypes h.w
// // h1.ownerName="Arham";
// // console.log(h1.ownerName);
// //  h1.adress="B223"
// //  console.log(h1.adress);
//  h1.bell();
// h2.bell();
// // class Society{
// //     name:string="Ehsan";
// //     lastName:string="Ali";
// // }
// // let h2= new Society();
// // // console.log(h2.name,h2.lastName);
// // console.log(h2.name);
// // console.log(h2["name"]);
class Animal {
    constructor(aniName) {
        this.name = aniName;
    }
    eat() {
    }
}
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.eyeColor = color;
    }
    meow() {
        console.log("Meow Meow");
    }
}
let c1 = new Cat("Cat", "blue");
console.log(c1);
c1.meow();
