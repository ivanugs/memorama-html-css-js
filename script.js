// Función para generar una matriz de cartas
function generateCards() {
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cards = [];
    
    // Duplicar cada valor de carta para que haya pares
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            cards.push(cardValues[j]);
        }
    }
    
    return cards;
}

// Función para mezclar el array de cartas
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // Intercambiar elementos
    }
}

// Función para crear el tablero del juego
function createGameBoard(cards) {
    const gameBoard = document.getElementById('game-board');
    
    // Mezclar las cartas
    shuffleCards(cards);
    
    // Crear elementos div para representar las cartas
    cards.forEach(function(card, index) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.dataset.value = card; // Almacenar el valor de la carta en un atributo de datos
        cardDiv.dataset.index = index; // Almacenar el índice de la carta en un atributo de datos
        cardDiv.textContent = '?'; // Mostrar un signo de interrogación en la carta
        
        // Agregar un manejador de eventos para hacer clic en la carta
        cardDiv.addEventListener('click', flipCard);
        
        gameBoard.appendChild(cardDiv);
    });
}

// Función para voltear una carta
function flipCard(event) {
    const cardDiv = event.target;
    const cardValue = cardDiv.dataset.value;
    const cardIndex = cardDiv.dataset.index;
    
    cardDiv.textContent = cardValue; // Mostrar el valor de la carta
    
    // Aquí puedes agregar lógica para verificar si dos cartas coinciden
    // y realizar otras acciones del juego
    
    // Ejemplo: setTimeout(function() { cardDiv.textContent = '?'; }, 1000);
}

const cards = generateCards();
createGameBoard(cards);