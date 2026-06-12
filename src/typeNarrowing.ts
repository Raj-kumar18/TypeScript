function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai..`
    } else {
        return `chai order ${kind}`
    }
}


function serveChai(msg?: string) {
    if (msg) {
        return `servng ${msg}`
    }
    return `servng default masala chai`
}


function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai`
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`
    }

    return `chai order ${size}`
}


class kulhadChai {
    serve() {
        return `serving kulhad chai`
    }
}
class Cutting {
    serve() {
        return `serving cutting chai`
    }
}

function serve(chai: kulhadChai | Cutting) {
    if (chai instanceof kulhadChai) {
        return chai.serve()
    }
}


type chaiOrder = {
    type: string
    sugar: number
}


function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" && obj != null && typeof obj.type === "string" && typeof obj.type === "number"
    )
}


function serveOrder(item:chaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar}`
    }
    return `serving custom chai : ${item}`
}

type MasalaChai = {type:"masala",spicelevel:number}
type GinerChai = {type:"Giner",amount:number}
type IlachiChai = {type:"Ilachi",aroma:number}


type chai = MasalaChai | GinerChai | IlachiChai

function MakeChai(order:chai){
    switch (order.type) {
        case "Giner":
            return `GinerChai`
            break;
    
        default:
            break;
    }
}



function brew(order:MasalaChai|GinerChai){
    if("spicelevel" in order){
        //
    }
}


// any     = TypeScript band karo — sab chalta hai 😈
// unknown = TypeScript on hai — pehle prove karo kya hai 🔒