//funcion para generar el array de cartas
function generarTarjetas() {
    const valores = ['/img/css.png', '/img/dj.png', '/img/html.png', '/img/js.png', '/img/py.png', '/img/react.png'];
    const tarjetas = [];
    //duplicar cada valor para que haya pares
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < valores.length; j++) {
            tarjetas.push(valores[j]);
        }
    }
    console.log(tarjetas);
    return tarjetas;
}

//funcion para mezclar el array de cartas usando el algoritmo fisher-yates
function mezclarTarjetas(tarjetas) {
    for (let i = tarjetas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]]; // Intercambiar elementos
    }
}

//crear el div de tablero de juego
function crearTablero(tarjetas) {
    const tablero = document.getElementById('tablero-juego');
    tablero.classList.add('row');
    mezclarTarjetas(tarjetas);
    // Crear los divs para mostrar las cartas
    tarjetas.forEach(function(tarjeta, index) {
        const tarjetaDiv = document.createElement('div');
        tarjetaDiv.className = 'tarjeta';
        tarjetaDiv.classList.add('col-3');
        tarjetaDiv.dataset.value = tarjeta; // Almacenar el valor de la carta
        tarjetaDiv.dataset.index = index; // Almacenar el índice de la carta

        // Crear la imagen de la carta
        const img = document.createElement("img");
        img.classList.add("cover");
        img.src = 'img/question.png';

        tarjetaDiv.appendChild(img);
        tablero.appendChild(tarjetaDiv);
    });
}

//funcion para destapar las cartas
function cambiarImagen(element) {
    const newValue = element.getAttribute("data-value"); //obtiene el data-value que es la direccion de la imagen del array que cambia al dar click
    const img = element.querySelector("img"); //seleccionamos el elemento img
    img.src = newValue; //le asiganmos el nuevo src a la carta para que cambie la imagen
    return newValue; //devuelve el nuevo valor
}

//funcion para tapar las cartas que no son pares
function cambiarImagenWrong() {
    array.forEach(function(tarjeta) {
        const img = tarjeta.querySelector("img"); //selecciona los elementos img de las dos tarjetas que clickeamos
        img.src = 'img/question.png'; //asigna nuevamente la tapa a las tarjetas que clickeamos y no eran par
    });
}

const tarjetas = generarTarjetas(); //genera las tarjetas
crearTablero(tarjetas); //agrega las tarjetas al tablero

const temps = document.querySelectorAll(".tarjeta"); //seleccionamos todas las tarjetas
let card = []; //array donde se se guardaran las tarjetas
//ciclo para guardar todas las tarjetas en el array card
for (const temp of temps) {
    card.push(temp);
}

let clicks = 0; //definimos la variable click para contar los eventos click que se realizan
let paresEncontrados = 0; //variable que incremento respecto a los pares que encontremos
let tarjetasSeleccionadas = []; //array donde se guardara el data value de las tarjetas que clickemos
let array = []; //se guardara el element div de las tarjetas que clickeamos

card.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function() {
        if (!this.classList.contains("paresEncontrados") && tarjetasSeleccionadas.length < 2) {
            let apuntador = cambiarImagen(this); //el valor que retorna la funcion se guarda en apuntador
            clicks = clicks + 1; //incrementamos un click
            switch(clicks){
                case 1:
                    tarjetasSeleccionadas.push(apuntador); //introducimos el valor de la tarjeta en el array
                    array.push(this); //introducimos el div completo de la tarjeta al array
                    break;
                case 2:
                    tarjetasSeleccionadas.push(apuntador); //introducimos el valor de la tarjeta en el array
                    array.push(this); //introducimos el div completo de la tarjeta al array
                    clicks = 0; //reiniciamos los clicks
                    if (tarjetasSeleccionadas[0] == tarjetasSeleccionadas[1]){ //si los dos valores del array tarjetasSeleccionadas coincide es que hayamos un par
                        paresEncontrados = paresEncontrados + 1; //incrementamos los pares encontrados
                        document.getElementById('puntos').innerHTML = paresEncontrados; //mandamos este valor al HTML para que se muestre en la pagina
                        //funcion que agrega la clase paresEncontrados para desactivar los elementos
                        array.forEach(function(tarjetaEncontrada) {
                            tarjetaEncontrada.classList.add("paresEncontrados");
                        });
                        //funcion que filtra las tarjetas encontradas del array card
                        card = card.filter(function(tarjetaNoEncontrada) {
                            return !tarjetaNoEncontrada.classList.contains("paresEncontrados");
                        });
                        tarjetasSeleccionadas = []; //deja vacio el array 
                        array = []; //deja vacio el array
                    } 
                    else { //en caso de que no sea par
                        setTimeout(() => { //asignamos un segundo de espera para realizar las acciones
                            for(i=2; i>0; i--){ //recorre dos veces la funcion para que realize el cambio de imagen en los dos elementos
                                cambiarImagenWrong();
                            }  
                            tarjetasSeleccionadas = []; //deja vacio el array 
                            array = []; //deja vacio el array
                        }, 1000);
                    }
            }
        }
    });
});

//reiniciar el juego
var reset = document.getElementById("btn-reiniciar");
reset.addEventListener("click", function() {
    let opcion = confirm("Estas seguro de reiniciar el juego?");
    if (opcion == true) {
        window.location.reload();
	}
});