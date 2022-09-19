import './sass/main.scss';
const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  // spaceBetween: 5,
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
let audioList = document.querySelector('.listing');

audioList.addEventListener('click', onClick);

function onClick(e) {
  if (!e.target.classList.contains('music__item')) {
    return;
  }
  const elemTarget = e.target;
  const playSongEl = elemTarget.querySelector('audio');

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
