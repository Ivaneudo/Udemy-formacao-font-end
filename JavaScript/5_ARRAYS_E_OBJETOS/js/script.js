// TODO: 1 - Arrays
// const lista = [1, 2, 3, 4 ,5]

// console.log(lista);

// console.log(typeof lista);

// const itens = ["Ivaneudo", true, 3.4, 18]

// console.log(itens)

// TODO: 2 - mais sobre arrays
// const arr = ["a", "b", "c", "d", "e"];

// console.log(arr[0])

// console.log(arr[4])

// console.log(arr[100])

// TODO: 3 - propriedades
// const numbers = [5, 3, 4];

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "Ivaneudo";

// console.log(myName.length);

// TODO: 4 - métodos
// const numbers = [5, 3, 4];

// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "Algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase());

// console.log(text.indexOf("g"));

// TODO: 5 - objetos
// const person = {
//     name: "Ivaneudo",
//     age: 18,
//     job: "Programador"
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person)

// TODO 6 - criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 20000
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.km;

// console.log(car);

// TODO: 7 - Mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// };

// Object.assign(obj2, obj); //! O assign é usado para implementear os atributos do obj no obj2.

// console.log(obj2);

// TODO: 8 - Conhecendo melhor o objeto
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2)); //! consiguimos ver todas as chaves dentro do objto

// console.log(Object.entries(obj)); //! conseguimos ver as chaves e valores dentro delas
// console.log(Object.entries(obj2));

// TODO: 9 - Mutação
// const a = {
//     name: "Ivaneudo"
// }

// const b = a; //! Isso pode ser um tiro no pé, isso aqui faz com que os dois objetos fiquem "interligados" tudo o que acontece com um, vai acontecer com outro.

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 31;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// TODO: 10 - loop em array
// const users = ["Matheus", "João", "Pedro", "Miguel"];

// for(let i = 0 ; i < users.length ; i++) {
//     console.log(`Listando o usuário: ${users[i]}`);
// }

// TODO: 11 - push e pop
// const array = ["a", "b", "c"];

// console.log(array);
// console.log(array.length);

// array.push("d");

// console.log(array);
// console.log(array.length);

// array.pop()

// console.log(array);
// console.log(array.length);

// const arrayRemovido = array.pop();

// console.log(arrayRemovido);

// array.push("z", "x", "y");

// console.log(array);

// TODO: 12 - shift e unshift
// const letters = ["a", "b", "c"];

// const letter = letters.shift();

// console.log(letters);

// console.log(letter);

// letters.unshift("p", "q", "r");

// letters.unshift("z");

// console.log(letters);

// TODO: 13 - indexOf e lastlndesOf
// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);

// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Mamão"));

// TODO: 14 - slice
// ! mostra um lista de intervalo entre os dois números colocados dentro da função slice.
// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20); //! Esse intevalo não existe, então retorna uma lista vazia.

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);

// console.log(subArray4);

// TODO: 15 - forEach
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//     console.log(`O número é ${numero}`);
// });

// const posts = [
//     {title: "Primeiro post", category: "PHP",},
//     {title: "Segundo post", category: "JavaScript",},
//     {title: "Terceiro post", category: "Python",},
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria ${post.category};`);
// });

// TODO: 16 - includes
// const brands = ["BMW", "VW", "Fiat"]

// console.log(brands.includes("Fiat"));

// console.log(brands.includes("KIA"));

// if (brands.includes("BMW")) {
//     console.log("Há carros da marca BMW")
// }

// TODO: 17 - reverse
// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse();

// console.log(reverseTest);

// TODO: 18 - trim
// const trimTest = "   testando \n  "

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// TODO: 19 - padstart
// const testPadstart = "1";

// console.log(testPadstart);
// const newNumber2 = testPadstart.padEnd(3, "0");

// console.log(newNumber2);
// const newNumber = testPadstart.padStart(10, "0");



// console.log(newNumber);

// TODO: 20 - split
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);

// TODO: 21 - join
// const fraseDeNovo = arrayDaFrase.join(" ");

// console.log(fraseDeNovo);

// const itensParaComprar = ["Cadeira", "Monitor", "Mouse vertical"]

// const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")};`;

// console.log(fraseDeCompra);

// TODO: 22 - repeat
// const palavra = "Testando \n";

// console.log(palavra.repeat(8))

// TODO: 23 - rest operator

// const somaInfinita = (...args) => {
//     let total = 0;

//     for (let i = 0 ; i < args.length ; i++) {
//         total += args[i];
//     }

//     return total;
// };

// console.log(somaInfinita(1, 2, 3));
// console.log(somaInfinita(1, 2, 3, 3898, 3, 6, 7));
// console.log(somaInfinita(1, 2));

// TODO: 24 - for ...of
// const somaInfinita2 = (...args) => {
//     let total = 0;

//     for (num of args) {
//         total += num;
//     }

//     return total;
// };

// console.log(somaInfinita2(2, 3, 5));
// console.log(somaInfinita2(2, 3));

// TODO: 25 - destructuring em objetos
// const userDetails = {
//     fistName: "Ivaneudo",
//     lastName: "Carvalho",
//     job: "Programador"
// };

// const {fistName, lastName, job} = userDetails;

// console.log(fistName, lastName, job);

// ? renomear variaveis
// const {fistName: primeiroNome} = userDetails;

// TODO: 26 - destructuring com arrays
// const mylist = ["Avião", "Submarino", "Carro"];

// const [veiculoA, veiculoB, veiculoC] = mylist;

// console.log(veiculoA)
// console.log(veiculoB)
// console.log(veiculoC)

// TODO: 27 - json
// const myJson = `{"nome": "Ivaneudo", "age": 18, "skills": ["GitHub", "JavaScript", "Git"]}`;

// console.log(myJson);
// console.log(typeof myJson);

// TODO: 28 - JSON para objeto e objeto para JSON
// const myObject = JSON.parse(myJson);

// console.log(myObject);

// console.log(myObject.name);

// console.log(typeof myObject);

// ? jason invalido
// const badJson = `{"name": Matheus, "age": 31}`;

// const myBadObject = JSON.parse(badJson);

// console.log(myBadObject); 

// myObject.isOpenToWork = true;

// console.log(myObject)

// const myNewJson = JSON.stringify(myObject);

// console.log(myNewJson);

// console.log(typeof myNewJson);