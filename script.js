//funcion para generar el array de cartas
function generateCards() {
    const values = ['A', 'B', 'C', 'D', 'E', 'F'];
    const cards = [];
    //duplicar cada valor para que haya pares
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < values.length; j++) {
            cards.push(values[j]);
        }
    }
    return cards;
}

//funcion para mezclar el array de cartas
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // Intercambiar elementos
    }
}

//crear el div de tablero de juego
function createTablero(cards) {
    const tablero = document.getElementById('row');
    tablero.classList.add('row')

    // Revolver las cartas
    shuffleCards(cards);

    // Crear los divs para mostrar las cartas
    cards.forEach(function(card, index) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.classList.add('col-3')
        cardDiv.dataset.value = card; // Almacenar el valor de la carta
        cardDiv.dataset.index = index; // Almacenar el índice de la carta

        // Crear la imagen de la carta
        const img = document.createElement("img");
        img.src = 'img/question.jpg';

        cardDiv.addEventListener('click', flipCard);
        cardDiv.appendChild(img);
        tablero.appendChild(cardDiv);
    });
}


//funcion para voltear una carta
function flipCard(event) {
    const cardDiv = event.target;
    const cardValue = cardDiv.dataset.value;
    const cardIndex = cardDiv.dataset.index;
    
    cardDiv.textContent = cardValue; //mostrar el valor de la carta
}

const cards = generateCards();
createTablero(cards);