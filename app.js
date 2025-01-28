let numeroSecreto = 0; // Se llama a la función para que se ejecute y se guarde el número generado en la variable numeroSecreto 
let intentos = 0; // Se inicializa la variable intentos en 1, por que al menos una vez la persona va a tener que hacerlo 
//Posteriormente se le quito el valor a las variables ya que todo quedo ensamblado en la función de condicionesIniciales
let listaNumerosSorteados = []; // Se crea un array vacio para guardar los números sorteados
let numeroMaximo = 100; // Se crea una variable para el número máximo y dar una condición de salida
let maximosIntentos = 6; // Se crea una variable para el número máximo de intentos y dar una condición de salida

function asignarTextoElemento (elemento, texto) { //Las funciones pueden definir parametros, además quedan guardadas en el navegador y se ejecutan cuando se les llama. 
// La función puede definir parametros que se le pasan al llamarla
    let elementoHTML = document.querySelector(elemento); // Se necesita un puente oara trabajar el html desde js en este caso document.querySelector (dom)
    elementoHTML.innerHTML = texto; // Se cambia el contenido de h1 por el titulo que queremos
    return; // Se finaliza la función
}

function verificarIntento() {
    // alert('Click desde el botón'); Ejempro de alerta para verificar que el botón funciona
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);  // Se guarda en la variable el valor ingresado por el usuario
    /*console.log(typeof(numeroDeUsuario));
    console.log (numeroSecreto); // Se imprime en consola el número generado aleatoriamente 
    /*console.log (typeof (numeroSecreto));
    console.log(numeroDeUsuario); // Se imprime en consola el valor ingresado por el usuario
    console.log(numeroDeUsuario === numeroSecreto); // Se imprime en consola si el valor ingresado por el usuario es igual al número generado aleatoriamente
    console.log (intentos); // Se imprime en consola el valor de intentos para verificar que funcione*/
    if (numeroDeUsuario === numeroSecreto) { // Se crea una condición para comparar si el valor ingresado por el usuario es igual al número generado aleatoriamente
        asignarTextoElemento ('p', `¡Felicidades! ¡Adivinaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!¡JUEGA DE NUEVO!`); //TS y Operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled'); // Se habilita el botón de reiniciar 'Nuevo Juego'
    } else {
        //El ususario no adivino el número secreto.
        if (numeroDeUsuario > numeroSecreto) { // Se crea una condición para comparar si el valor ingresado por el usuario es mayor al número generado aleatoriamente
            asignarTextoElemento ('p', '¡El número secreto es menor!'); // Se cambia el contenido de p por el mensaje que queremos
        } else {
            asignarTextoElemento ('p', '¡El número secreto es mayor!'); // Se cambia el contenido de p por el mensaje que queremos
        }
        intentos++; // Se incrementa la variable intentos en 1 
        if (intentos > maximosIntentos) {
            asignarTextoElemento('p',`¡Lo siento!, se acabaron los intentos. El número secreto era ${numeroSecreto}. Puedes volver a intentarlo con un nuevo juego.`); 
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        limpiarCaja(); // Se llama a la función para que se ejecute y se limpie la caja de texto
    }
    // Comparación (True.False - Booleano)
    return;
} // Se crea una función para que al dar click en el botón seleccionado en el html aparezca un alert, modificando previamente el html con el onclick

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // Se limpia el contenido de la caja de texto 
} // Se crea una función para que al dar click en el botón seleccionado en el html se limpie la caja de texto

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //Solo se pide el return por que la variable quedo por fuera de la función
    //console.log(numeroGenerado); // Para ver los avances en consola
    console.log(listaNumerosSorteados); // Para ver los avances en consola
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) { // Se crea una condición para comparar si la longitud de la lista de números sorteados es igual al número máximo
        asignarTextoElemento('p','¡Ya no hay números disponibles!'); // Se crea una alerta para indicar que ya no hay números disponibles
    } else { 
    //Si el número generado ya esta en la lista de números sorteados
        if (listaNumerosSorteados.includes(numeroGenerado)) { // Se crea una condición para comparar si el número generado aleatoriamente ya esta en la lista de números sorteado}
        return generarNumeroSecreto();
    //let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1; // Se genera un número aleatorio entre 1 y numeroMaximo 
        } else { 
        listaNumerosSorteados.push(numeroGenerado); // Se agrega el número generado a la lista de números sorteados
        return numeroGenerado; // Se retorna el número generado aleatoriamente
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento ('h1', 'NÚMERO SECRETO AB'); // Se llama a la función para que se ejecute (solo en eventos) y se cambie el contenido de h1 por el titulo que queremos
    asignarTextoElemento ('p', `¡Te reto a que adivines el número secreto que esta entre el 1 y el ${numeroMaximo}, tienes ${maximosIntentos} intentos para lograrlo!`); // Se cambia el contenido de p por el titulo que queremos
    numeroSecreto = generarNumeroSecreto(); // Se llama a la función para que se ejecute y se guarde el número generado en la variable numeroSecreto
    intentos = 1; // Se inicializa la variable intentos en 1, por que al menos una vez la persona va a tener que hacerlo
}


function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja(); // Se llama a la función para que se ejecute y se limpie la caja de texto
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Reiniciar el contador de intentos
    condicionesIniciales(); // Se llama a la función para que se ejecute y se muestren las condiciones iniciales en el html
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // Se deshabilita el botón de reiniciar 'Nuevo Juego' con sus parametros especificos

}

condicionesIniciales(); // Se llama a la función para que se ejecute y se muestren los mensajes iniciales en el html