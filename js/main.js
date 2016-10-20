// 2. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// 3. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.
var cardEar = document.getElementById("card-content");
var btnEar = document.getElementById("create-card");
var cardCounter = 0;

document.addEventListener("click", function(){
  // console.log("click here: ", event.target.className);
  // console.log("trying to get here: ", document.getElementsByClassName("deleteMe")[0].className);
  if (event.target.className == document.getElementsByClassName("deleteMe")[0].className){
    event.target.parentElement.remove();
  };
});

var cardText = cardEar.addEventListener("keyup", function(){
  // if(event.keyCode == 13){
    // event.preventDefault();
    console.log("text: ", cardEar.value);
    return cardEar.value;
  // }
});

btnEar.addEventListener("click", function(){
  addCard(cardEar.value);
})

var newCard = document.getElementById("outputGoesHere")

function addCard(text){
  cardCounter++;
  var cardDom = "";
  cardDom += '<article class="dynamo"><h1>New Card ';
  cardDom += cardCounter + '</h1><section><p>'
  cardDom += text
  cardDom +='</p></section><button class="deleteMe">Delete Me!</button></article>';
  newCard.innerHTML += cardDom;
}

// function removeCard(card){
  // console.log("removeCard Fired: ");

// }