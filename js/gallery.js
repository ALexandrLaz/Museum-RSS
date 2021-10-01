const pictureInnerContainer = document.querySelector('.galery-grid');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = ["assets/img/galery/galery2.jpg", "assets/img/galery/galery1.jpg", "assets/img/galery/galery7.jpg", "assets/img/galery/galery9.jpg", "assets/img/galery/galery8.jpg", "assets/img/galery/galery10.jpg", "assets/img/galery/galery4.jpg", "assets/img/galery/galery3.jpg", "assets/img/galery/galery15.jpg", "assets/img/galery/galery6.jpg", "assets/img/galery/galery5.jpg", "assets/img/galery/galery12.jpg"];

window.onload = function(){
  shuffle(arr);

  arr.map((item, id) => {
    const img = document.createElement('img');
    img.classList.add('galery-picture');
    img.id = `galery-pic${id+1}`
    img.src = `${item}`;
    img.alt = `galery${id}`;
    pictureInnerContainer.append(img);
  });
  
}