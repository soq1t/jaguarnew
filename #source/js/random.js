const rns = document.querySelector('.main__card-gen-random');
const uni = document.querySelector('.main__card_gen-chance');
const uni2 = document.querySelector('.main__card_gen-footer');

document.querySelector('.header').style.backgroundImage = `url("img/header/yager${Math.round(Math.random()*4)}.jpg")`;

var uniq=Math.floor(1/(n*s)*100*1000)/1000;

function randomer() {
  var rn = Math.round(Math.random()*(n-1));
  var rs = Math.round(Math.random()*(s-1));

  rns.style.display = `inline`;
  rns.innerText = `${names[rn]} ${surnames[rs]}`
  rns.style.color = `#cb0c0c`;

  uni.style.display = `inline`;
  uni.innerText = `${uniq}%`

  uni2.style.display = `block`;
  uni2.innerText = `Not Bad ;)`
}
