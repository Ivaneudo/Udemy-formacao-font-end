// TODO: 1 - Adicionando eventos
const btn = document.querySelector("#my-buttom");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});

// TODO: 2 - Removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// TODO: 3 - Argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.offsetX);
    console.log(event.pointerType);
});

// TODO: 4 - Propagando eventos
const containerBtn = document.querySelector("#btn-conteiner");

const btnInseideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento1 1");
});

btnInseideContainer.addEventListener("click", (e) => {
    e.stopPropagation(); //! Usado para não desparar dois eventos juntos/Para não despararo evento dentro do seu elemento pai.
    console.log("Evento1 2");
});

// TODO: 5 - Ações default
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página");
});

// TODO: Eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Clicou na telca ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Soltou a telca ${e.key}`);
});

// TODO: 6 - Eventos do mouse 
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
});

// TODO: 7 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo: ${e.x}`);
    // console.log(`No eixo: ${e.y}`);
})

// TODO: 8 - Eventos por scroll
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
        console.log("Já passamos de 200px")
    }
});

// TODO: 9 - Evento por foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", () => {
    console.log("Entrou no input")
})

input.addEventListener("blur", () => {
    console.log("Saiu do input")
})

// TODO: 11 - Evento de carregamento
window.addEventListener("load", () => {
    console.log("A pagina carregou.");
})

// ! Não é recomendado a utilização.
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Testando"
})

// TODO: 12 - Técnica de debounce
const debounce = (f, delay) => {
    let timeout

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    }
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms");
}, 400))