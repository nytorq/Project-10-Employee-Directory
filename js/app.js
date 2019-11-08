//
//  VARIABLES
//
const users = [
  {
    firstName: '',
    lastName: '',
    fullName: function () {
      firstName.concat(" ", lastName);
    },
    email: '',
    phone: '',
    birthday: '',
    location: {
      city: '',
      state: '',
      country: '',
      street: {
        number: null,
        name: '',
      },
      zipcode: null
    },
    picture: ''
  }

];

const cards = document.getElementsByClassName('card');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeIcon = document.getElementById('closeIcon');
let request = new XMLHttpRequest();
let response;

function cardRewriter(card) {
  let picture = card.getElementsByClassName('employee--pic');
  let name = card.getElementsByClassName('employee--name');
  let email = card.getElementsByClassName('employee--email');
  let loc = card.getElementsByClassName('employee--location');
  let apiFirstName = response.results[i].name.first;
  let apiLastName = response.results[i].name.last;
  let apiEmail = response.results[i].email
  let apiCity = response.results[i].location.city;
  let apiPicture = response.results[i].picture.medium;
  name[0].innerText = apiFirstName.concat(" ", apiLastName);
  name[0].innerText = apiFirstName.concat(" ", apiLastName);
  email[0].innerText = apiEmail;
  loc[0].innerText = apiCity;
  picture[0].src = apiPicture;
}

function modalPopulator(modal, target) {
  let picture = modal.getElementsByClassName('employee--pic');
  let name = modal.getElementsByClassName('employee--name');
  let email = modal.getElementsByClassName('employee--email');
  let loc = modal.getElementsByClassName('employee--location');
  let apiFirstName = response.results[i].name.first;
  let apiLastName = response.results[i].name.last;
  let apiEmail = response.results[i].email
  let apiCity = response.results[i].location.city;
  let apiPicture = response.results[i].picture.medium;
  name[0].innerText = apiFirstName.concat(" ", apiLastName);
  name[0].innerText = apiFirstName.concat(" ", apiLastName);
  email[0].innerText = apiEmail;
  loc[0].innerText = apiCity;
  picture[0].src = apiPicture;
}

// AJAX Request to randomuser.com to get users!

request.onreadystatechange = function () {
  if (request.readyState === 4) {
    response = JSON.parse(request.responseText);
    for (i=0 ; i<cards.length ; i++) {
      cardRewriter(cards[i]);
    }
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
    cardRewriter(modal);
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
