const flavourChai:string[] = ["Masala","Adrak"]
const chaiPrice:number[] = [10,20]

const rating:Array<number> = [4.5,3,6]

type chai = {
    name:string;
    price:number
}

const menu : chai[] = [
    {name:"Masala",price:15},
    {name:"Adrak",price:25},
]


const cities : readonly string[] = ["Delhi","Patna"]

//THREE DIMENSIONAL ARRAY

const table:number[][] = [
    [1,2,3],
    [4,5,6]
]


let chaiTuple : [number,string]

chaiTuple=[25,"mskmdsk"]


const location:readonly [number,string] = [2,"TWO"]

const chaiItems:[name:string ,price:number] = ["RAJ",30]


//ENUMS

enum cupsize {
    SMALL,
    LARGE
}

const size = cupsize.LARGE



enum Status {
    PENDING =10,
    SERVED, //11
    CANCELED //12
}


// enum chaiType {
//     MASALA = "masala"
//     GINGER = "giner"
// }


// function makeChai(type:chaiType){
//     console.log(`Making ${type}`)
// }



// makeChai(chaiType.GINGER)


// enum RandomEnum {
//     ID=1,                     // NOT A GOOD PRACTISE
//     NAME="chai"
// }

const enum Sugar {
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

const s = Sugar.HIGH






