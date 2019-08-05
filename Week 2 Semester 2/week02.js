var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num = 3;
console.log(num);
var firstName = "max";
var earthisflat = true;
var decimal = 2.2;
var cookiesInJar = null;
var area51;
var lastName = "djaidias";
//----------------------ARRAY
var listOfStudents = ["Max", "Chloe", "Warren"];
var listOfNums = [1, 2, 3, 4];
//----------------------CREATE AN ARRAY OF ANIMALS
var AnimalNames = ["Animal1", "Animal2", "Animal3", "Animal4"];
//---------------not so fancy way for loop
/*
for(let itemIndex = 0; item < AnimalNames.length; itemIndex++){
    Let animal = AnimalName[itemIndex];
    console.log(animal)
    */
// }
AnimalNames.forEach(function (element) {
    console.log(element);
});
//----------------------Classes
var Planet = /** @class */ (function () {
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
    function Planet(name, mass) {
        this.name = name;
        this.mass = mass;
    }
    Planet.prototype.sayHello = function (str) {
        return 'Say Hello ${this.name}';
    };
    return Planet;
}());
var pl = new Planet("Earth", 345);
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
var Product = /** @class */ (function () {
    function Product(title, author) {
        this.title = title;
        this.author = author;
    }
    return Product;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(_title, _author, genre) {
        var _this = _super.call(this, _title, _author) || this;
        _this.genre = genre;
        return _this;
    }
    return Book;
}(Product));
var book = new Book("Minecraft", "Notch", "Gaming");
console.log(book);
