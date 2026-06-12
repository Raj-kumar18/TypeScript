//OOPS IN TS


// class User{
//     name:string; // ye object ke propery hai
//     age:number;

//     constructor(name:string,age:number){
//         this.name = name,
//         //^          ^
//         // object    construstor ka
//         //ki property     paramerter
//         this.age = age

//     }

//     greet() : string{
//         return `Hello, I am ${this.name}`;
//     }
// }


// let user = new User("raj",18)
// console.log(user.greet)



//SHORTHAND CONSTRUCTOR

class User {
    constructor(
        public name: string,
        public age: number
    ) { }
}

let user = new User("Raj", 18);
console.log(user.name); // "Raj" ✅




//ACCESS MODIFIER

class BankAccount {
    public accountHolder: string;//sbke liye accessible hai 
    private balance: number;//sirf class ke andar                                                                      
    protected bankName: string;//class + child class meine he accessible hai 

    constructor(holder: string, balance: number) {
        this.accountHolder = holder;
        this.balance = balance;
        this.bankName = "SBI";

    }

    //private balance ko access krene ka tarika 

    getBalance(): number {
        return this.balance //✔ class ke andar accessible hai 
    }


}


let acc = new BankAccount("Raj kumar", 30000)
console.log(acc.accountHolder) // ✔ public
// console.log(acc.balance) //error dega kyunki wo privae hai 
console.log(acc.getBalance());   // ✅ method se access



//Inheritance

class Animal {
    name: string;


    constructor(name: string) {
        this.name = name
    }

    makeSound(): string {
        return `${this.name} makes a sound`;
    }

}


class Dog extends Animal {
    breed: string

    constructor(name: string, breed: string) {
        super(name) //paren constructor ko call kro
        this.breed = breed
    }

    //Method override - parent ke method replace kro

    makeSound(): string {
        return `${this.name} barks! 🐕`;

    }

}

let dog = new Dog("Bruno","Labra")

console.log(dog.makeSound())




//GETTER OR SETTER
