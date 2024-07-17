let letraSecreta = generarLetraSecreta();
let intentos = 1;
console.log(letraSecreta);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let letraDeUsuario = document.getElementById('valorUsuario').value;

    console.log(letraSecreta);
    if (letraDeUsuario === letraSecreta) {
        asignarTextoElemento('p', `¡Felicidades! Has logrado ${intentos} intentos`);
    } else {
        if  (letraDeUsuario.charCodeAt(0) > letraSecreta.charCodeAt(0)) {
            asignarTextoElemento('p', 'la letra secreta es menor');
        } else {
            asignarTextoElemento('p', 'la letra secreta es mayor');
        }
        intentos++;
        return;
    }
}



function generarLetraSecreta(){
    const codigoAscii = Math.floor(Math.random() * 26) + 65;
    const letra = String.fromCharCode(codigoAscii);
    return letra;
}

