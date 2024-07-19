const dialog = document.querySelector("#configDialog");

function abrirDialog() {
    dialog.showModal();
}

function fecharDialog() {
    dialog.close();
}


const cards = document.querySelectorAll(".card");
let cardOne, cardTwo;
let disableDeck = false;

// Embaralhar as cartas
function shuffleCards() {
  const cardImages = [
    'imagensfase4/imagem1.png',
    'imagensfase4/imagem1.png',
    'imagensfase4/imagem2.png',
    'imagensfase4/imagem2.png',
    'imagensfase4/imagem3.png',
    'imagensfase4/imagem3.png',
    'imagensfase4/imagem4.png',
    'imagensfase4/imagem4.png',
    'imagensfase4/imagem5.png',
    'imagensfase4/imagem5.png',
    'imagensfase4/imagem6.png',
    'imagensfase4/imagem6.png',
    'imagensfase4/imagem7.png',
    'imagensfase4/imagem7.png',
    'imagensfase4/imagem8.png',
    'imagensfase4/imagem8.png'
    
  ];

  cardImages.sort(() => Math.random() - 0.5); // Embaralha o array

  cards.forEach((card, index) => {
    const imgTag = card.querySelector('img');
    imgTag.src = cardImages[index];
  });
}

function flipCard(e) {
  let clickedCard = e.target.closest(".card");
  
  if (clickedCard !== cardOne && !disableDeck && !clickedCard.classList.contains("flip")) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      cardOne = clickedCard;
    } else {
      cardTwo = clickedCard;
      disableDeck = true;
      let cardOneImg = cardOne.querySelector("img").src;
      let cardTwoImg = cardTwo.querySelector("img").src;
      matchCards(cardOneImg, cardTwoImg);
    }
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    setTimeout(() => {
      cardOne.classList.add("matched");
      cardTwo.classList.add("matched");
      resetCards();
    }, 1000);
  } else {
    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      resetCards();
    }, 1000);
  }
}

function resetCards() {
  [cardOne, cardTwo] = [null, null];
  disableDeck = false;
}

cards.forEach(card => {
  card.addEventListener("click", flipCard);
});

// Embaralha as cartas quando a página é carregada
window.addEventListener("load", shuffleCards);
