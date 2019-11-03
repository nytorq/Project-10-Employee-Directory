const cards = document.getElementsByClassName('card');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeIcon = document.getElementById('closeIcon');

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
