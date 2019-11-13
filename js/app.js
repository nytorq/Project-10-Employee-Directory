//
//  VARIABLES
//

// const users = [
//   {
//     firstName: '',
//     lastName: '',
//     fullName: function () {
//       firstName.concat(" ", lastName);
//     },
//     email: '',
//     phone: '',
//     birthday: '',
//     location: {
//       city: '',
//       state: '',
//       country: '',
//       street: {
//         number: null,
//         name: '',
//       },
//       zipcode: null
//     },
//     picture: ''
//   }
//
// ];

const cards = document.getElementsByClassName('card');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeIcon = document.getElementById('closeIcon');
const typeAhead = document.getElementById('typeAhead');
let request = new XMLHttpRequest();
let response;

// function cardWriter(object, i = 0) {
//   let picture;
//   let name;
//   let email;
//   let loc;
//   if (i === null) {
//     picture = object.getElementsByClassName('employee--pic');
//     name = object.getElementsByClassName('employee--name');
//     email = object.getElementsByClassName('employee--email');
//     loc = object.getElementsByClassName('employee--location');
//   } else {
//     picture = object[i].getElementsByClassName('employee--pic');
//     name = object[i].getElementsByClassName('employee--name');
//     email = object[i].getElementsByClassName('employee--email');
//     loc = object[i].getElementsByClassName('employee--location');
//   }
//   let apiPicture = response.results[i].picture.medium;
//   let apiFirstName = response.results[i].name.first;
//   let apiLastName = response.results[i].name.last;
//   let apiEmail = response.results[i].email
//   let apiCity = response.results[i].location.city;
//   picture[0].src = apiPicture;
//   name[0].innerText = apiFirstName.concat(" ", apiLastName);
//   email[0].innerText = apiEmail;
//   loc[0].innerText = apiCity;
//   if (object[i].lastElementChild.className.includes('birthday')) {
//     let phone = object.getElementsByClassName('employee--phone');
//     let apiPhone = response.results[i].cell;
//     console.log(phone);
//     phone[0].innerText = apiPhone;
//   }
// }

// function modalPopulator(modal, target) {
//   let picture = modal.getElementsByClassName('employee--pic');
//   let name = modal.getElementsByClassName('employee--name');
//   let email = modal.getElementsByClassName('employee--email');
//   let loc = modal.getElementsByClassName('employee--location');
//   let apiFirstName = response.results[i].name.first;
//   let apiLastName = response.results[i].name.last;
//   let apiEmail = response.results[i].email
//   let apiCity = response.results[i].location.city;
//   let apiPicture = response.results[i].picture.medium;
//   name[0].innerText = apiFirstName.concat(" ", apiLastName);
//   name[0].innerText = apiFirstName.concat(" ", apiLastName);
//   email[0].innerText = apiEmail;
//   loc[0].innerText = apiCity;
//   picture[0].src = apiPicture;
// }

// AJAX Request to randomuser.com to get users!

// request.onreadystatechange = function () {
//   if (request.readyState === 4) {
//     response = JSON.parse(request.responseText);
//     for (i=0 ; i<cards.length ; i++) {
//       cardWriter(cards, i);
//     }
//   }
// };
//
// request.open('GET', 'https://randomuser.me/api/?results=12');
// request.send();

//Event Handlers

for (let i=0 ; i < cards.length ; i++) {
  cards[i].addEventListener('click', ()=> {
    overlay.style.visibility = 'visible';
    modal.style.visibility = 'visible';
    cardWriter(modal, i);
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
// let searchString;
typeAhead.addEventListener('input', () =>{
  let searchString;
  searchString = typeAhead.value;
  // console.log(searchString);
})





// 1. Extract the search input's value and store it in a variable, searchString.
// 2. Go to the first user's piece of data, name for example, and store that into a variable, criteria
// 3. See if searchString is found within criteria
// 4. If it is found, make that card you're current
