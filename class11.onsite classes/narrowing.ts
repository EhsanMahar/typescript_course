// // mumber ka method .toFixed
// // let num=18.5;
// // let num2=num.toFixed(5)
// // console.log(num);


// let num1=20;
// let num2=num1.toFixed(4);
// console.log(num2);

//example more
// let result=20;
// let result1=result.toFixed(5);
// console.log(result1);






// // let num=18;
// // let num2=num.toFixed(3);
// // console.log(num);



// //uppercase
// // let a="Ehsan";
// // let b=a.toUpperCase()
// // console.log(b);


// //lowercase
// // let a="Ehsan";
// // let b=a.toLowerCase()
// // console.log(b);


// // let a="hamzah";
// // a[0].toLocaleUpperCase() + a.slice(1);
// // let b=a.toLocaleLowerCase();
// // console.log(b);



// let name1="Ehsan";
// let b=name1.toLocaleUpperCase();
// console.log(b);



// let intro="Ismail";
// console.log(intro.toLocaleUpperCase());

// let boy="AMIR";
// console.log(boy.toLowerCase());


// let names="sufyan";
// console.log(names.toUpperCase());

// let name1="farman";
// // console.log(name1.charAt(2).toUpperCase());
// console.log(name1.charAt(5).toLowerCase());


// let boy="ismail";
// console.log(boy.toLocaleUpperCase());







// //Narrowing //typescript main hoti hai

// let a:string|number;
// a=10;//Narrowing
// let b=a.toFixed(3);
// console.log(b);


// // a="ehsan";  //Narrowing
// // let c=a.toLocaleUpperCase();
// // console.log(c);



//ANarrowing
// let example:number|string;
// example="EHSAN";
// example=12;
// let result=example.toFixed(4)
// console.log(result);



// let intro:string|number;
// intro="Ehsan"
// let intro1=intro.toLocaleUpperCase();
// console.log(intro1);

























 
// //typeof also called typecard
// // let num1="18";
// // console.log(typeof num1);



// // let num=15;
// // console.log(typeof num =="boolean");


// //Math.random() //yeh random number generate kry ga 0.00 sy leke 0.99

// // let random=Math.random()
// // console.log(random);


// // console.log(Math.random());



// // let random=Math.random() *100
// // console.log(random);


// // let random=Math.random() *10
// // console.log(random);

// // let random=Math.random();
// // let a=random>0.6 ? "Hamzah" :16
// // console.log(a);


// // let random=Math.random();
// // console.log(`My random number is : ${random}`);

// // let a=random>0.6 ? "Hamzah" :16
// // console.log(a);


// let random=Math.random();

// let a=random>0.6 ? "Hamzah" :16
// console.log(a);

// if(typeof a=="string"){
//     console.log("Narrowing-string");
    
// }
// else{
//     console.log("Narrowing is number");
  
// }




//null  =>represent as a empty
// let age:null|number|string=null;
// let salary:null|number=null;



//Structural typing
//interface //yeh object ki type bnany k liye use hota hai or type ilias ka alternate form hai or yeh sirf ts k andr hoti hai


// interface User {
//     name:string;
//     age:number;
//     address:{
//         city:string
//         state:string
//     }
// }let User1:User={
//     name:"Hamzah",
//     age:23,
//     address:{
//         city:"Karachi",
//         state:"Sindhi"
//     }
// }

// console.log(User1);

// //type ilias k andr hm hr kism ki data type bna sgty hain or interface k andr sirf object ki data type bna sgty hain

// interface intro{
//     name:string;
//     age:number;
//     cast:string;
//     address:{
//         state:string;
//         town:string
//     }
// }
// let intro1:intro={
//     name:"Ehsan",
//     age:18,
//     cast:"Mahar",
//     address:{
// state:"Sindhi",
// town:"london town",
//     }
// }
// console.log(intro1);



//Structural typing
// interface deal1{
//     food:string
// }
// interface deal2 {
//     food:string
//     drink:string //?optional bna diya
// }

// let ehsan:deal1={
//     food:"Biryani"
// }
// let bro:deal2={
//     food:"Karhaye",
//     drink:"Dew"
// }


//Extra properties are allowed
// let ehsanTable:deal1=bro

//Extra properties are  notallowed

// // let broTable:deal2=ehsan
// console.log(ehsanTable);

//stale object wo object jo pehly hi sy bna ho
//fresh  object wo object jo pehly  sy na bna ho

//jahan curly bracket ho ga wo fresh object ho ga or jahan nhi ho gi to wo stale object ho ga


//H.W //Async


