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
    tablero.classList.add('row')

    // Revolver las cartas
    mezclarTarjetas(tarjetas);

    // Crear los divs para mostrar las cartas
    tarjetas.forEach(function(tarjeta, index) {
        const tarjetaDiv = document.createElement('div');
        tarjetaDiv.className = 'tarjeta';
        tarjetaDiv.classList.add('col-3')
        tarjetaDiv.dataset.value = tarjeta; // Almacenar el valor de la carta
        tarjetaDiv.dataset.index = index; // Almacenar el índice de la carta

        // Crear la imagen de la carta
        const img = document.createElement("img")
        img.classList.add("cover");
        img.src = 'img/question.png';

        tarjetaDiv.appendChild(img);
        tablero.appendChild(tarjetaDiv);
    });
}

function cambiarImagen(element) {
    const newValue = element.getAttribute("data-value");
    const img = element.querySelector("img");
    img.src = newValue;
    return newValue;
}

function cambiarImagenWrong() {
    const img = document.getElementById("point");
    img.src = 'img/question.png';
}

function addAtributoSelector(element){
    const img = element.querySelector("img");
    img.setAttribute("id","point");
}

function removeAtributoSelector(){
    const element = document.getElementById("point");
    element.removeAttribute("id");
}

const tarjetas = generarTarjetas();
crearTablero(tarjetas);
const card = document.querySelectorAll(".tarjeta");
let clicks = 0;
let contenedor;

card.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function() {
        const apuntador = cambiarImagen(this);
        clicks = clicks + 1;
        switch(clicks){
            case 1:
                contenedor = apuntador;
                addAtributoSelector(this);
                break;
            case 2:
                addAtributoSelector(this);
                clicks = 0;
                if (contenedor == apuntador){
                    console.log("Bien hecho apa");
                    for(i=2; i>0; i--){
                        removeAtributoSelector();
                    }
                    //punto mas en label de html para que muestre los pares que lleva
                }else{
                    setTimeout(() => {
                        for(i=2; i>0; i--){
                            cambiarImagenWrong();
                            removeAtributoSelector();
                        }  
                    }, 1000);
                }
        }
    });
});

