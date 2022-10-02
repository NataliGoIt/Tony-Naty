import './sass/main.scss';
const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let audioList = document.querySelector('.listing'),
  openBurger = document.querySelectorAll('.header__burger-ikon'),
  backdrop = document.querySelector('.modal-more'),
  backdropBurger = document.querySelector('.burger-menu'),
  header = document.querySelector('.header'),
  scrolTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrolTop.classList.remove('scroll-top-hiden');
    scrolTop.classList.add('scroll-top-show');
  } else {
    scrolTop.classList.add('scroll-top-hiden');
    scrolTop.classList.remove('scroll-top-show');
  }
});
scrolTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
// console.log(openModal);
// openModal.addEventListener('click', onOpenModal);
audioList.addEventListener('click', onClick);
function onClick(e) {
  const elemTarget = e.target;
  console.log(e.target);
  const playSongEl = elemTarget.querySelector('audio');
  const thisClick = elemTarget.classList.contains('music__btn');
  console.log(thisClick);
  // if (thisClick.classList.contains('is-active')) {
  // } else
  if (!elemTarget.classList.contains('music__item')) {
    return;
  }
  if (elemTarget.classList.contains('is-active')) {
    elemTarget.classList.remove('is-active');
    pauseSong(playSongEl);
    // console.log(playSongEl);
  } else {
    elemTarget.classList.add('is-active');
    playSong(playSongEl);
  }

  console.log(playSongEl);
}

function playSong(audio) {
  audio.play();
}

function pauseSong(audio) {
  audio.pause();
}
// function playSong() {
//   player.classList.add('play');
//   audio.play();
//   if (pauseImg.classList.contains('play-pause')) {
//     pauseImg.classList.remove('play-pause');
//     playImg.classList.add('play-pause');
//   }
// }
// function pauseSong() {
//   player.classList.remove('play');
//   audio.pause();
//   if (playImg.classList.contains('play-pause')) {
//     pauseImg.classList.add('play-pause');
//     playImg.classList.remove('play-pause');
//   }
// }

// playBtn.addEventListener('click', () => {
//   const isPlaying = player.classList.contains('play');
//   if (isPlaying) {
//     pauseSong();
//   } else {
//     playSong();
//   }
// });
backdrop.addEventListener('click', onCloseModal);

function onOpenModal() {
  document.body.classList.add('show-modal');
}
function onCloseModal(e) {
  if (e.currentTarget === e.target) {
    document.body.classList.remove('show-modal');
  }
}
openBurger.addEventListener('click', onOpenBurgerMenu);
backdropBurger.addEventListener('click', onCloseBurgerMenu);
function onOpenBurgerMenu() {
  // document.body.classList.add('open-burger-menu');
  console.log('gdsdg');
}
function onCloseBurgerMenu(e) {
  console.log(e);
  if (e.currentTarget === e.target) {
    document.body.classList.remove('open-burger-menu');
    console.log(e);
  }
}
