function makeChai (type:string,cups:Number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masalachai",2)


function getChaiPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order) return null
    return order
}

function logChai():void{
    console.log("chai is ready")
}

function orderChai(type:string="Masala"){

}


function createChai(order:{
    type:string;
    sugar:number;
    size:"small" | "large"
}):number{
    return 4
}