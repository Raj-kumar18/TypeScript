interface Chai {
    flavour:string
    price:number
    milk?:boolean
}

const masala:Chai = {
    flavour : "masala",
    price:30,
    milk:false
}


interface Shop {
    readonly id:number
    name:string
}

const s : Shop = {
    id:1,
    name:"RAJ SHOP"
}


interface DiscountCalculator {
    (price:number) : number
}

const apply50: DiscountCalculator = (p)=> p*0.5

interface TeaMachine{
    start():void;
    stop():void
}

const machine:TeaMachine={
    start(){
        console.log("START")
    },
    stop(){
        console.log("STOP")
    }
}
//INDEX SIGNATURING

interface ChaiRating {
    [flavor:string]:number
}


const rating:ChaiRating={
    masala:4.5,
    giner:4.2
}

interface User{
    name:string
}

interface User{
    age:number
}

const u:User={
    name:"HITES",
    age:42
}

interface A {a:string}
interface B {b:string}

interface c extends A,B{}



