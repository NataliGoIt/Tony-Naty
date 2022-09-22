import './sass/main.scss';
const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  spaceBetween: 3,
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   // slideShadows: true,
  // },
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
  openModal = document.querySelectorAll('.music__item-more'),
  backdrop = document.querySelector('.modal-more');
// console.log(openModal);
// openModal.addEventListener('click', onOpenModal);
audioList.addEventListener('click', onClick);
function onClick(e) {
  const elemTarget = e.target;
  console.log(e.target);
  const playSongEl = elemTarget.querySelector('audio');
  const thisClick = elemTarget.classList.contains('music__btn-more');
  console.log(thisClick);
  if (thisClick) {
    onOpenModal();
    console.log('wow');
  } else if (!elemTarget.classList.contains('music__item')) {
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
// openModal.addEventListener('click', onOpenModal);
// else if (e.target.querySelector('.music__item-more')) {
//     onOpenModal();
//   }
function onOpenModal() {
  document.body.classList.add('show-modal');
}
function onCloseModal(e) {
  if (e.currentTarget === e.target) {
    document.body.classList.remove('show-modal');
  }
}
