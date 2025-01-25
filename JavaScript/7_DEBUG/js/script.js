// TODO: 1 - strict
// "use strict";

// opa = "teste";

// const opa = "Teste";

// const undefined = 10;

// delete [].length;

// TODO: 2 - console.log
// let a = 1;
// let b = 2;

// if (a === 1) {
//     a = b + 2;
// };

// console.log(a);

// for (let i = 0; i < b ; i++) {
//     a = a + 2;
//     console.log(a);
// };

// if (a > 5) {
//     a = 25;
// };

// console.log(a);

// TODO: 3 - debugger
// let A = 1;
// let B = 2;

// if (A === 1) {
//     A = B + 2;
//     console.log(A)
// };

// debugger;

// for (let i = 0 ; i < B ; i++) {
//     A = A + 2
//     console.log(A)
// }

// console.log("Executou o loop")

// debugger;

// if (A) {
//     A = 25;
//     console.log(A)
// };

// TODO: 4 - Tratamento de dados
// function checkNumber (n) {
//     const result = Number(n);

//     if (Number.isNaN(result)) {
//         console.log("Valor incorreto! Por Favor, digite um número valido.")
//         return;
//     }

//     console.log("Valor correto!");
//     return result;
// }

// checkNumber(5);
// checkNumber("10");
// checkNumber({});
// checkNumber("teste");

// TODO: 5 - exceptions
// let x = 10;

// if (x != 11) {
//     throw new Error ("O valor de x não pode ser diferente de 11");
// }

// TODO: 6 - Try Catch
// try {
//     const soma = x +y;
// } catch (error) {
//     console.log(`Erro no programa ${error}`)
// }

// TODO: 7 - Finally

try {
    const value = checkNumber("asd")

    if(!value){
        throw new Error("Valores inválidos");
    }

} catch (error) {
    console.log(`Opa, aconteceu um problema: ${error}`)
} finally {
    console.log("O código foi executado!")
}

// TODO: 8 - Assertion
function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error("O Array precisa ter elementos;")
    } else {
        console.log(`O Array tem ${arr.length} elementos`)
    }
}

checkArray([1, 2, 3]);