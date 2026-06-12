function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray("MASALA")
wrapInArray(30)
wrapInArray({flavour:"GINGER CHAI"})

function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}


pair("masal",4554
) 
interface Box<T>{
    content:T 
}

const numberBox:Box<number> = {content:10}