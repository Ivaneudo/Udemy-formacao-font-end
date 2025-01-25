// TODO: 1 - var, let e const
// var x = 10;
// var y = 15

// if (y > 10) {
//     var x = 5;

//     console.log(x)
// }

// console.log(x);


// let a = 10;
// let b = 15;

// if (b >=15) {
//     let a = 5

//     console.log(a);
// }

// console.log(a);

// function logNome() {
//     const name = "Ivaneudo";

//     console.log(name);
// }

// const name = "Gustavo";

// console.log(name)

// logNome()

// TODO: 2 - Arrow functions
// const soma = function(a,b) {
//     return a + b
// };

// const arrwSum = (a, b) => a + b;

// console.log(soma(5, 5));
// console.log(arrwSum(5, 5));

// const greeting = (name) => {
//     if (name) {
//         return `Hello ${name}`
//     } else {
//         return `Hello`
//     }
// }

// console.log(greeting("Ivaneudo"));
// console.log(greeting());

// const user = {
//     name: "Theo",
//     sayUserName () {
//         setTimeout(function() {
//             console.log(this);
//             console.log(`Username: ${this.name}`)
//         }, 1000);
//     },
//     sayuserNameArrow() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(`Username: ${this.name}`)
//         },2000)
//     }
// };

// user.sayUserName()
// user.sayuserNameArrow()

// TODO: 3 - filter
// ! Vai percorrer todos os elementos do array removendo todos os elementos desnecessarios
const arr = [1, 2, 3, 4, 5, 6]
 const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
 })

 console.log(highNumbers)

 const users = [
    {name: "Matheus", available: false},
    {name: "Ivaneudo", available: true},
    {name: "Maria", available: false},
    {name: "João", available: true},
    {name: "Kleber", available: false},
 ];

 const availableUser = users.filter((user) => user.available);

 console.log(availableUser);

//  TODO: 4 - Map
// ! percorre todo o array e modifica o que precisamos
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"},
];

products.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true
    }
});

console.log(products)

// TODO: 5 - Template literals
const userName = "Ivaneudo";
const age = 18;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);

// TODO: 6 - Destructuring
const fruits = ["Maçã", "Mamão", "Laranja"];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f2);
console.log(f3);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periférico",
    color: "Cinza",
};

const {name: productName, price, category, color} = productDetails;

console.log(`O nome do produto é ${productName}, ele cursa R$${price} e é da cor ${color}`);

// TODO: 7 - spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3)

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = {nam: "Gol"};
const carBrand = {brand: "VW"};
const otherInfos = {km: 1000000, price: 4999};

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car)

// TODO: 8 - Classes
class product {
    constructor (name, price) {
        this.name = name,
        this.price = price
    }

    productwithDiscount (discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new product("Camisa gola V", 20);

console.log(shirt);
console.log(shirt.productwithDiscount(10));
console.log(shirt.productwithDiscount(15));

// TODO: 9 - Herança
class ProductiwthAttributes extends product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
        
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductiwthAttributes("Chapéu", 29.99, ["Preto", "Amarelo", "Verde"]);

console.log(hat);

console.log(hat.name);

hat.showColors();