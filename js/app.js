//
//  VARIABLES
//

const cards = document.getElementsByClassName('card');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeIcon = document.getElementById('closeIcon');
let request = new XMLHttpRequest();
let response;

// AJAX Request to randomuser.com to get users!

request.onreadystatechange = function () {
  if (request.readyState === 4) {
    response = JSON.parse(request.responseText);
    console.log(response);
  }
};

request.open('GET', 'https://randomuser.me/api/?results=12');
request.send();

//Event Handlers

for (i=0 ; i < cards.length ; i++) {
  let card = cards[i];
  card.addEventListener('click', ()=> {
    overlay.style.visibility = 'visible';
    modal.style.visibility = 'visible';
  });
}

function closer() {
  let overlayState = overlay.style.visibility;
  if (overlayState === 'visible') {
    overlay.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';
  }
}

overlay.addEventListener('click', ()=> {
  closer();
});

closeIcon.addEventListener('click', ()=> {
  closer();
});

//
//  FUNCTIONS
//

//  Card rewriting FUNCTIONS

function cardRewriter(card) {
  let picture = card.getElementsByClassName('employee--pic');
  let name = card.getElementsByClassName('employee--name');
  let email = card.getElementsByClassName('employee--email');
  let loc = card.getElementsByClassName('employee--location');

  // let apiName = response.results[0].name.first;

  console.log(response.results)

  // name = apiName;
}

cardRewriter(cards[0]);
