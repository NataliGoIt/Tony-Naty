import './sass/main.scss';
// let audioList = document.querySelectorAll('.music__item');
// console.log(audioList);
// function opa(...elm) {
//   console.log(elm[3]);
// }
// opa(audioList);
// let audio = document.querySelector('.audio');

// const player = document.querySelector('.player'),
// playBtn = document.querySelector('.btn__play'),
// prevBtn = document.querySelector('.btn__prev'),
// nextBtn = document.querySelector('.btn__next'),

// progressContainer = document.querySelector('.progress__container'),
// progress = document.querySelector('.progress'),
// title = document.querySelector('.song'),
// cover = document.querySelector('.cover__img'),
// btnPlay = document.querySelector('.btn-play'),

// musicPlaylist = document.querySelector('.music__playlist'),
// musicLeft = document.querySelector('.music__left'),
// musicRight = document.querySelector('.music__right'),
// musicBtnLpaylist = document.querySelector('.music__playlist-list'),
// videoNew = document.querySelectorAll('.new__video'),

// // music1 = document.querySelector('.music-1'),
// // audio1 = document.querySelector('#audio1'),

// // music2 = document.querySelector('.music-2'),
// // audio2 = document.querySelector('#audio2'),

// music3 = document.querySelector('.music-3'),
// audio3 = document.querySelector('#audio3'),

// music4 = document.querySelector('.music-4'),
// audio4 = document.querySelector('#audio4'),

// music5 = document.querySelector('.music-5'),
// audio5 = document.querySelector('#audio5'),

// music6 = document.querySelector('.music-6'),
// audio6 = document.querySelector('#audio6'),

// music7 = document.querySelector('.music-7'),
// audio7 = document.querySelector('#audio7'),

// music8 = document.querySelector('.music-8'),
// audio8 = document.querySelector('#audio8'),

// music9 = document.querySelector('.music-9'),
// audio9 = document.querySelector('#audio9'),

// music10 = document.querySelector('.music-10'),
// audio10 = document.querySelector('#audio10'),

// music11 = document.querySelector('.music-11'),
// audio11 = document.querySelector('#audio11'),

// music12 = document.querySelector('.music-12'),
// audio12 = document.querySelector('#audio12'),

// music13 = document.querySelector('.music-13'),
// audio13 = document.querySelector('#audio13')

// // videoIndex = 0;

// // lodaSong(songs[songIndex])
// // console.log(videoNew);
// // videoNew.forEach

// music12.addEventListener('click', onAudioHG)
// function onAudioHG(){
//     songIndex = 0;
//     audio.src = audio12.src;
//     playSong();
//     title.innerHTML = "22:22";
//     onPlaulistBtnList();

// }
// music13.addEventListener('click', onAudioTh)
// function  onAudioTh(){
//     songIndex = 1;
//     audio.src = audio13.src;
//     playSong();
//     title.innerHTML = "Feel So Good";
//     onPlaulistBtnList();

// }

// // music1.addEventListener('click', onAudioOne);
// // function  onAudioOne(){
// //     audio.scr = audio1.src;
// //     playSong();
// //     title.innerHTML = "22:22";
// //     onPlaulistBtnList();
// // }

// // music2.addEventListener('click', onAudioToo);
// // function  onAudioToo(){
// //     audio.scr = audio2.src;
// //     playSong();
// //     title.innerHTML = "Feel So Good";
// //     onPlaulistBtnList();
// // }
// music3.addEventListener('click', onAudioThree)
// function  onAudioThree(){
//     songIndex = 2;
//     audio.src = audio3.src;
//     playSong();
//     title.innerHTML = "Ginger Snaps";
//     onPlaulistBtnList();

// }
// music4.addEventListener('click', onAudiofour)
// function  onAudiofour(){
//     audio.src = audio4.src;
//     playSong();
//     title.innerHTML = "Hazel Eyes";
//     onPlaulistBtnList();
//     songIndex = 3;
// }

// music5.addEventListener('click', onAudioFive)
// function  onAudioFive(){
//     audio.src = audio5.src;
//     playSong();
//     title.innerHTML = "Kosmos";
//     onPlaulistBtnList();
//     songIndex = 4;
// }
// music6.addEventListener('click', onAudioSixe)
// function  onAudioSixe(){
//     audio.src = audio6.src;
//     playSong();
//     title.innerHTML = "Major Lazer style";
//     onPlaulistBtnList();
//     songIndex = 5;
// }
// music7.addEventListener('click', onAudioSeven)
// function  onAudioSeven(){
//     audio.src = audio7.src;
//     playSong();
//     title.innerHTML = "Rose Baby Rose";
//     onPlaulistBtnList();
//     songIndex = 6;
// }
// music8.addEventListener('click', onAudioEight)
// function  onAudioEight(){
//     audio.src = audio8.src;
//     playSong();
//     title.innerHTML = "Ruff Day";
//     onPlaulistBtnList();
//     songIndex = 7;
// }
// music9.addEventListener('click', onAudioNine)
// function  onAudioNine(){
//     audio.src = audio9.src;
//     playSong();
//     title.innerHTML = "Lambada";
//     onPlaulistBtnList();
//     songIndex = 8;
// }
// music10.addEventListener('click', onAudioTen)
// function  onAudioTen(){
//     audio.src = audio10.src;
//     playSong();
//     title.innerHTML = "Dance 1";
//     onPlaulistBtnList();
//     songIndex = 9;
// }
// music11.addEventListener('click', onAudioElemen)
// function  onAudioElemen(){
//     audio.src = audio11.src;
//     playSong();
//     title.innerHTML = "Broken Heart";
//     onPlaulistBtnList();
//     songIndex = 10;
// }

// const songs = [
// {
//     src: audio12.src,
//     title: "22:22"
// },
// {
//     src: audio13.src,
//     title: "Feel So Good"
// },
// {
//     src: audio3.src,
//     title: "Ginger Snaps"
// },
// {
//     src: audio4.src,
//     title: "Hazel Eyes"
// },
// {
//     src: audio5.src,
//     title: "Kosmos"
// },
// {
//     src: audio6.src,
//     title: "Major Lazer Style"
// },
// {
//     src: audio7.src,
//     title: "Rose Baby Rose"
// },
// {
//     src: audio8.src,
//     title: "Ruff Day"
// },
// {
//     src: audio9.src,
//     title: "Lambada"
// },
// {
//     src: audio10.src,
//     title: "Dance 1"
// },
// {
//     src: audio11.src,
//     title: "Broken Heart"
// },
//     ]

// // console.log(songs);
// // песня по умолчанию

// let songIndex = 0;

// // init
// function lodaSong(song){
//     audio.src= song.src;
//     title.innerHTML = `${song.title}`;

// }

// function playSong(){
//     player.classList.add('play')
//     cover.classList.add('active')
//     audio.play()
//     if(playBtn.classList.contains('play-img')){
//         playBtn.classList.remove('play-img')
//         playBtn.classList.add('pause')
//     }

// }

// function pauseSong(){
//     player.classList.remove('play')
//     cover.classList.remove('active')
//     audio.pause()
//     if(playBtn.classList.contains('pause')){
//         playBtn.classList.add('play-img')
//         playBtn.classList.remove('pause')
//     }
// }
// playBtn.addEventListener('click', () =>{
//     const isPlaying = player.classList.contains('play')
//     if(isPlaying){
//         pauseSong()
//     }else{
//         playSong()
//     }
// })
// nextBtn.addEventListener('click', nextSong)
// function nextSong(){
//     songIndex ++

//     if(songIndex > songs.length -1){
//         songIndex = 0
//     }

//     lodaSong(songs[songIndex])
//     playSong()
// }
// prevBtn.addEventListener('click', prevSong)
// function prevSong(){
//     songIndex--

//     if(songIndex < 0){
//         songIndex = songs.length -1
//     }

//     lodaSong(songs[songIndex])
//     playSong()
// }

// function updateProgress(e){
// const {duration, currentTime} = e.srcElement
// const progressPercent = (currentTime / duration) * 100
// progress.style.width = `${progressPercent}%`
// }
// audio.addEventListener('timeupdate', updateProgress)

// function setProgress(e){
//     const width = this.clientWidth
//     const clickX = e.offsetX
//     const duration = audio.duration

//     audio.currentTime = (clickX / width) * duration

// }
// progressContainer.addEventListener('click', setProgress)

// audio.addEventListener('ended', nextSong)

// musicBtnLpaylist.addEventListener('click', onPlaulistBtn)

// function onPlaulistBtn (){
//     musicRight.classList.remove('music__none')
//     musicRight.classList.add('music__block')
//     musicLeft.classList.add('music__none')
//     musicLeft.classList.remove('music__block')
// }
// function onPlaulistBtnList (){
//     musicLeft.classList.remove('music__none')
//     musicLeft.classList.add('music__block')
//     musicRight.classList.add('music__none')
//     musicRight.classList.remove('music__block')
// }

// btnStop.addEventListener('click', onStop)
// function onStop(){
//     pauseSong();
//     audio.currentTime = 0;
// }
// musicPlaylist.addEventListener('click', onClick)
// function onClick(e){
//     let elem = e.target;
//     let elemSrc = elem.getAttribute('src');
//     audio.src = elemSrc;

//     console.log(elem);
//     console.log(elemSrc);
//     console.log(audio);

// }
