// TODO: Seleção de elementos
const multiplicationFomr = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations");


// TODO: Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1 ; i <= multiplicatorNumber ; i++) {
        const result = number * i;
        
        const template = `
        <div class="row">
            <div class="operator">
            ${number} x ${i} =
            </div>
            <div class="result">${result}</div>
        </div>`

        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row);
    };

    multiplicationTitle.innerHTML = number;
}


// TODO: Eventos
multiplicationFomr.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value

    if (!multiplicationNumber || !multiplicationNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});