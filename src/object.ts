// let user :{name:string,age:number} = {
//     name:"raj",
//     age:15
// }




//NESTED OBJECT

interface Address {
    city: string,
    state: string
}

interface User {
    readonly id: number
    name: string,
    age: number,
    email?: string,
    address: Address
    
}

let user: User = {
    id: 15151,
    name: "raj",
    age: 15,
    email: "drajkumar01223@gmail.com",
    address: {
        city: "Patna",
        state: "Bihar"
    }
}


//Object Function ke andar

function greet(user: User): string {
    return `Hello ${user.name}, age ${user.age}`;
}


// Interface extend karna

interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

let dog: Dog = { name: "Bruno", breed: "Labrador" }; // ✅

// Type extend karna — & (intersection) use karo

// type Animal = {name:string}
// type Dog = Animal & {breed:string}


// let dog: Dog = { name: "Bruno", breed: "Labrador" }; // ✅



// Union Types — Sirf Type kar sakta hai

type ID = string | number


let id1: ID = "abc123";  // ✅
let id2: ID = 123;       // ✅



// Primitive Types — Sirf Type kar sakta hai

type Name = string;
type Ag = number;
type isActive = boolean


// Interface — sirf objects ke liye
// interface Name = string;   // ❌ Error


// Tuple — Sirf Type kar sakta hai


type point = [number, string]

let p: point = [10, "TEN"]


// Interface — jab object ka structure banana ho
// Type — jab union, primitive, ya complex types banana ho

//Real World Example 🌍

//Interface - API response object

// interface ApiResponse = {
//     data:User[];
//     status:number,
//     message:string
// }

// // Type — multiple types possible hain
// type Status = "success" | "error" | "pending";
// type ID = string | number;



// Interface → Objects ke liye — classes, API responses
// Type      → Sab kuch ke liye — union, primitives, tuples

// Confuse ho toh → Interface use karo objects ke liye
//                   Type use karo baaki sab ke liye



// Bina Partial — sab fields zaroori hain

let user3:Partial<User> = {name:"rajj"}
let user2: Partial<User> = {};             // ✅ khali bhi chalta hai

//Partial ka Real World Use — Update API 🌍

//update function - sirf jo fields update karne hao wo bhej

function validateUser(id:number,updates:Partial<User>){
    //database meine update karo
}


validateUser(1,{name:"Raj kumar"})
validateUser(1,{age:19})






type chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingrridents: string[]
}

type BasicChaiInfo = Pick<chai, "name" | "price">

const chaiInfo : BasicChaiInfo = {
    name:"Lemon Tea",
    price:30
}

type chaiNew ={
        name: string;
    price: number;
    isHot: boolean;
    Secretingrridents: string[]
}

type PublicChai = Omit<chai,"Secretingrridents">