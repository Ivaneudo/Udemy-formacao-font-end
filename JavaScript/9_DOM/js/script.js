// TODO: 1 - Movendo-se pelo DOM 
// console.log(document.body);

// console.log(document.body.childNodes[1]);

// console.log(document.body.childNodes[1].childNodes);

// console.log(document.body.childNodes[1].childNodes[1].textContent);

// TODO: 2 - Selecionando por tag
const listItens = document.getElementsByTagName("li");

// console.log(listItens)

// TODO: 3 - Selecionando por id
const title = document.getElementById("title");

// console.log(title);

// TODO: 4 - Selecionando por class
const product = document.getElementsByClassName("product");

// console.log(product)

// TODO: 5 - Selecionando os elementos por CSS
const productsQuery = document.querySelectorAll(".product");

// console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

// console.log(mainContainer);

// TODO: 6 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

//! "header" onde vai ser inserido. "p" o que vai ser inserido e "title" antes de que vai ser inserido 
header.insertBefore(p, title);

// TODO: 7 - appendChild
const navLinks = document.querySelector('nav ul');

const li = document.createElement("li");

navLinks.appendChild(li)

// TODO: 8 - repalceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título"

//! O 1º é o que vai ser adicionado. O 2º é o que vai ser substituido.
header.replaceChild(h2, title)

// TODO: 9 - createTextNodes
const myText = document.createTextNode("Criando mais um título de dentro do JS");

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3)

mainContainer.appendChild(h3)

// TODO: 10 - Trabalhando com atributos
const firstLink = navLinks.querySelector("#home");

console.log(firstLink);

//! Adiciona um link onde antes é apenas um #
firstLink.setAttribute("href", "https:github.com/Ivaneudo");

//! Faz o link abrir em outra aba do navegador
firstLink.setAttribute("target", "blanck");

// TODO: 11 - Altura e largura 
const footer = document.querySelector("footer");

//! Considerando as bordar
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

//! Desconsiderando as bordas
console.log(footer.clientWidth)
console.log(footer.clientHeight)

// TODO: 12 - Posição do elemento
const product1 = product[0];

console.log(product1.getBoundingClientRect());

// TODO: 13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";
mainContainer.style.border = "3.5px solid blue";


// TODO: 14 - Estilizanod de vaios itens
for(const li of listItens) {
    li.style.background = "red"
}
