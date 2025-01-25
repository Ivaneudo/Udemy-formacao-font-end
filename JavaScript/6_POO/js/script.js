// TODO: 1 - Metodos
// const animal = {
//     nome: "Ceará",
//     latir: function () {
//         console.log("Au Au")
//     }
// }

// console.log(animal.nome)

// animal.latir()

// TODO: 2 - Aprofundando em metodos
// const pessoa = {
//     nome: "Ivaneudo",
//     getnome: function () {
//         return this.nome;
//     },

//     setnome: function (novoNome) {
//         return this.nome = novoNome;
//     }
// };

// console.log(pessoa.nome);
// console.log(pessoa.getnome());

// pessoa.setnome("Neudo")

// console.log(pessoa.getnome())

// TODO: 3 - Prototype

// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);

// console.log(Object.getPrototypeOf(arr));

// TODO: 4 - Mais sobre Prototype

// const myObject = {
//     a: "b"
// };

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// TODO: 5 - Classes basicas
// const cachorro = {
//     raca: null,
//     patas: 4
// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);

// bulldog.raca = "bulldog";

// console.log(bulldog, bulldog.patas);

// TODO: 6 - Funções construtoras
// function criarCachorro (nome, raca) {
//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const Ceara = criarCachorro("Ceará", "Vira lata");

// console.log(Ceara);

// const jack = criarCachorro("Jack", "Poodle");

// console.log(jack);

// console.log(Object.getPrototypeOf(jack));

// TODO: 7 - Funções como classes
// function Cachorro(nome, raca) {
//     this.nome = nome,
//     this.raca = raca
// };

// const husky = new Cachorro("Ozzy", "husky");

// console.log(husky);

// function Gato(nome, patas) {
//     this.nome = nome,
//     this.patas = patas
// }

// const gatonew = new Gato("Pichu", 4);

// console.log(gatonew);

// TODO: 8 - Metodos na função construtora
// Cachorro.prototype.uivar = function () {
//     console.log("Auuuuuu!");
// };

// husky.uivar();

// TODO: 8 - Classes ES6
// class CachorroClasse {
//     constructor (nome, raca) {
//         this.nome = nome, 
//         this.raca = raca;
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador")

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// TODO: 9 - Mais sobre classes
// class caminhao{
//     constructor (eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao () {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//     }
// }

// const scania = new caminhao(6, "PretoF");

// console.log(scania);

// scania.descreverCaminhao();

//caminhao.motor = 4; //! Nós não podemos adiconar nada desse maneira.

// const c2 = new caminhao (6, "Azul");

// console.log(c2);

// console.log(c2.motor)

// caminhao.prototype.motor = 4.0;

// const c3 = new caminhao (6, 'Vemelho');

// console.log(c3);

// console.log(c3.motor);

// TODO: 11 - override
// class Humano {
//     constructor (nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const ivaneudo = new Humano ("Ivaneudo", 18);

// console.log(ivaneudo);

// Humano.prototype.idade = "Não definida";

// console.log(ivaneudo.idade)

// console.log(Humano.prototype.idade);

// const santana = new Humano ("Santana");

// console.log(santana);

// TODO: 12 - Symbols
// class Aviao {
//     constructor (marca, turbinas) {
//         this.marca = marca;
//         this.turbinas = turbinas;
//     }
// }

// const asas = Symbol(); //? Usado para colocar algo dentro da Classe sem que esteja diretamente dentro da classe

// Aviao.prototype[asas] = 2;

// const boeing = new Aviao ("Boeing", 10);

// console.log(boeing);

// console.log(boeing[asas]);

// TODO: 13 - Getter e setter
class Post {
    constructor (titulo, descricao, tags) {
        this.titulo = titulo;
        this.descrecao = descricao;
        this.tags = tags;
    }

    get exibirTitulo () {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags (tags) {
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post ("Algum post", "É um post sobre programação");

console.log(myPost)

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "progromação, javascript, js";

console.log(myPost);

// TODO: 14 - Herança
class Mamiferos {
    constructor (patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamiferos {
    constructor (patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo (4, "Shark");

console.log(shark);

// TODO: 15 - instanceof
console.log(shark instanceof Lobo);

console.log(shark instanceof Mamiferos);

console.log(Lobo instanceof Mamiferos);

console.log(new Lobo(4, "Teste") instanceof Mamiferos);

console.log(new Post("a", "b") instanceof Lobo);