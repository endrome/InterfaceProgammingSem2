let num = 3;
console.log(num)

let firstName: string = "max";

let earthisflat: boolean = true;
let decimal: number = 2.2;

let cookiesInJar: null = null;
let area51: undefined;

let lastName = "djaidias";

//----------------------ARRAY
let listOfStudents: string[] =  ["Max", "Chloe", "Warren"];
let listOfNums: Array<number> = [1,2,3,4];

//----------------------CREATE AN ARRAY OF ANIMALS
let AnimalNames: string[] = ["Animal1", "Animal2", "Animal3", "Animal4"]


//---------------not so fancy way for loop
/*
for(let itemIndex = 0; item < AnimalNames.length; itemIndex++){
    Let animal = AnimalName[itemIndex];
    console.log(animal)
    */
// }

AnimalNames.forEach(element => {
    console.log(element)    
});

//----------------------Classes

class Planet {
    //private name: string;
    //private mass: number;


    //constructor(name: string, mass: number) {
    //    this.name = name;
    //    this.mass = mass;
    //}
    
    //public Planet(string name, int mass) {
    //    this.name = name;
    //    this.mass = mass;
    //}


    constructor(public name: string, public mass: number) {

    }
    sayHello(str: string): string {
        return 'Say Hello ${this.name}';
    }
}


let pl: Planet = new Planet("Earth", 345);

console.log(pl.name);
console.log(pl.mass);

//
console.log(pl.sayHello("Say Hello"));
  
// Planet pl = new Planet();
//let pl: Planet = new Planet();
// pl.name = "Earth";
//pl.mass = 1

//class Product {
//   public id: string;
//   public cost: number;

//   constructor(id: string, cost: number) {
//       this.id = id;
//       this.cost = cost;
//   }

//}
//class CD extends Product {
//    public genre: string;
//    constructor(_id: string, _cost: number, genre: string) {
//        super(_id, _cost);
//       this.genre = genre;
//    }
//}
//let cd: CD = new CD();
//cd.id = "1";
//cd.cost = 10;
//let cd: CD = new CD("1", 10, "Country");
//console.log(cd);
// Book

class Product {
    public title: string;
    public author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}


class Book extends Product {
    public genre: string;
    constructor(_title: string, _author: string, genre: string) {
        super(_title , _author);
        this.genre = genre;
    }
}

let book: Book = new Book("Minecraft", "Notch", "Gaming");
console.log(book);


