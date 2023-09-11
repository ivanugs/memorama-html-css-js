//funcion para generar el array de cartas
function generarTarjetas() {
    const valores = ['A', 'B', 'C', 'D', 'E', 'F'];
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
        img.classList.add("cover");;
        img.src = 'img/question.png';

        tarjetaDiv.appendChild(img);
        tablero.appendChild(tarjetaDiv);
    });
}

const tarjetas = generarTarjetas();
crearTablero(tarjetas);