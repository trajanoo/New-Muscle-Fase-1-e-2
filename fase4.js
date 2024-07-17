const cards = document.querySelectorAll(".card")

let cardOne, cardTwo;

function flipCard(e) {
  let clickedCard = e.target
  if(clickedCard !== cardOne) {
    clickedCard.classList.add("flip")
    if(!cardOne) {
      return cardOne = clickedCard;
    }
    cardTwo = clickedCard
    let cardOneImg = cardOne.querySelector("img")
    matchCards(cardOneImg, cardTwoImg)
  } 
}

function matchCards()

cards.forEach(card => {
  card.addEventListener("click", flipCard);
});