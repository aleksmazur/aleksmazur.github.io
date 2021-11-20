const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__progress-per'),
      scales = document.querySelectorAll('.skills__progress-scale span');

percents.forEach( (item, i) => {
    scales[i].style.width = item.innerHTML;
});