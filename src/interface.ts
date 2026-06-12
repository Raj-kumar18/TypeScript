type ChaiOrder = {type:string;sugar:number;strong:boolean}

function makeChai(order:ChaiOrder){
    console.log(order)
}

function serveChai(order:ChaiOrder){
    console.log(order)
}

type TeaRecipe = {
    water:number;
    milk:number
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk=50;
// }

interface CupSize {
size:"SMALL" | "LARGE"
}

class Chai implements CupSize{
    size: "SMALL" | "LARGE" = "LARGE"
}


type Response = {ok:true} | {ok:false}

// class msRes implements Response{
//     ok:boolean = true
// }

type TeaType = "masalachai" | "ginerchai" 

function orderChai (t:TeaType){
    console.log(t)
}


type BaseChai = {teaLeave:number}
type extra = {masala:number}

type MasalaChai = BaseChai & extra

const cup : MasalaChai ={
    teaLeave:2,
    masala:1
}



type User = {
    username:string;
    bio?:string
}

const u1 : User = {username:"RAJ KUMAR"}
const u2:User = {username:"HARSH",bio:"HARSH>.Ai"}

type Config={
    readonly appName:string
    version:number
}

const cfg:Config = {
    appName:"Masterji",
    version:1
}