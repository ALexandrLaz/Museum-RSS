let button = document.querySelector('.tickets-amount input[type=button]');
let buy = document.querySelector('.buy');
button.addEventListener('click', show);

function show(){
  buy.style.display = "block";
}
