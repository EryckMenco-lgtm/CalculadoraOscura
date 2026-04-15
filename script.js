const inputNumero1 = document.getElementById("inputNumero1");
const inputNumero2 = document.getElementById("inputNumero2");

const btnSuma = document.getElementById("btn-suma");
const btnResta = document.getElementById("btn-rest");
const btnMult = document.getElementById("btn-mult");
const btnDiv = document.getElementById("btn-div");
const btnTema = document.getElementById("btn-tema");

const parrafoResultado = document.getElementById("Resultado");


function cambiarTema() {
    document.body.classList.toggle("oscuro")
}
btnTema.addEventListener("click", cambiarTema);

function suma() {
    const valor1 = parseInt(inputNumero1.value)
    const valor2 = parseInt(inputNumero2.value)

    parrafoResultado.innerText = valor1 + valor2
};
btnSuma.addEventListener("click", suma);

function restar() {
    const valor1 = parseInt(inputNumero1.value)
    const valor2 = parseInt(inputNumero2.value)

    parrafoResultado.innerText = valor1 - valor2
};
btnResta.addEventListener("click", restar);

function multi() {
    const valor1 = parseInt(inputNumero1.value)
    const valor2 = parseInt(inputNumero2.value)

    parrafoResultado.innerText = valor1 * valor2
};
btnMult.addEventListener("click", multi);

function div() {
    const valor1 = parseInt(inputNumero1.value)
    const valor2 = parseInt(inputNumero2.value)

    if (valor2 === 0) {
        parrafoResultado.innerText = "No se puede dividir por 0";
        alert("No se puede dividir por 0")
return;
}
parrafoResultado.innerText = valor1 / valor2
};

btnDiv.addEventListener("click", div);

function noDatos() {

    if (inputNumero1.value === "" || inputNumero2.value === "") {
            parrafoResultado.innerText = "Llena los campos.";
            alert("Llena los campos.")
        return;
    }

}
btnMult.addEventListener("click", noDatos);
btnSuma.addEventListener("click", noDatos);
btnResta.addEventListener("click", noDatos);
btnDiv.addEventListener("click", noDatos);


