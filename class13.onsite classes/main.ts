// //Polymorphysm
// // class Animal {
// //     name: string;


// //     constructor(name: string) {
// //         this.name = name
// //     }

// //     makeSound() {
// //         console.log("General Sound!");

// //     }
// // }


// // // let a1=new Animal("Tun Tun!");

// // class Cat extends Animal {
// //     eyeColor: string;
// //     constructor(name: string, color: string) {
// //         super(name)

// //         this.eyeColor = color
// //     }


// //     meow() {
// //         console.log("Meow Meow");

// //     }
// // }
// // let c1 = new Cat("Meow", "Meow");
// // console.log(c1);



// // class Dog extends Animal { }

// // let d1 = new Dog("tommy");
// // d1.makeSound();

// // //




// //Encapsulation
// class  Parent{
//    public parentName:string="Usama" //public lgaye ma lgaye koi frq nhhi prhta 
//     private secret:string="xyz"
//    protected cardPinCode:number=1234
// }

// class Children extends Parent{
//     name:string

//     constructor(name:string){
//         super()
//         this.name=name
//     }

// }

// let c1=new Children("Ali")
// c1.parentName









interface IDraw{
    draw:()=>void
    color:()=>void

}

class Circle implements IDraw{
    draw(){
        console.log("Drawing");
        
    }
    color(){
        console.log("");
        
    }
}


class Triangle implements IDraw{
    draw(){
        console.log("Triangle");
        
    }
    color(){
        console.log('');
        
    }  
}



//Abstract classes and members
//Static member
