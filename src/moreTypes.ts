// Type Assertion in TypeScript 🔍

// Kya hota hai?

// "Main jaanta hoon is variable ka type kya hai — trust karo mujhe"

// TypeScript ko manually bata dete ho ki is value ka type kya hai — compiler check nahi karta, tu responsible hai.


let response: any = "42"

let numericLength: number = (response as string).length

type book = {
    name: string
}


let bookString = `{"name":"who moved my cheese"}`
let bookObj = JSON.parse(bookString) as book


console.log(bookObj)


const inputElement = document.getElementById("username") as HTMLInputElement



let value: unknown
value = "chai"
value = [1, 2, 3, 4]
value = 2.5

if (typeof value === "string") {
    value.toUpperCase()
}


try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
}



const data: unknown = "CHAI AUR CODE"
const strData: string = data as string

type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("redirecting to admin dashboard")
        return
    }

    if (role === "user") {
        console.log("redirecting to user dashboard")
        return
    }

}

function neverReturn():never{
    while(true){
        
    }
}