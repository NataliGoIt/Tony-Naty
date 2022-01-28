import './sass/main.scss';
let audio = document.querySelector('.audio');

const player = document.querySelector('.player'),
playBtn = document.querySelector('.btn__play'),
prevBtn = document.querySelector('.btn__prev'),
nextBtn = document.querySelector('.btn__next'),
btnLpayPause = document.querySelector('.btn__play-fa'),

progressContainer = document.querySelector('.progress__container'),
progress = document.querySelector('.progress'),
title = document.querySelector('.song'),
cover = document.querySelector('.cover__img'),
btnPlay = document.querySelector('.btn-play'),

musicPlaylist = document.querySelector('.music__playlist'),
musicLeft = document.querySelector('.music__left'),
musicRight = document.querySelector('.music__right'),
musicBtnLpaylist = document.querySelector('.music__playlist-list'),

// music1 = document.querySelector('.music-1'),
// audio1 = document.querySelector('#audio1'),

// music2 = document.querySelector('.music-2'),
// audio2 = document.querySelector('#audio2'),

music3 = document.querySelector('.music-3'),
audio3 = document.querySelector('#audio3'),

music4 = document.querySelector('.music-4'),
audio4 = document.querySelector('#audio4'),

music5 = document.querySelector('.music-5'),
audio5 = document.querySelector('#audio5'),

music6 = document.querySelector('.music-6'),
audio6 = document.querySelector('#audio6'),

music7 = document.querySelector('.music-7'),
audio7 = document.querySelector('#audio7'),

music8 = document.querySelector('.music-8'),
audio8 = document.querySelector('#audio8'),

music9 = document.querySelector('.music-9'),
audio9 = document.querySelector('#audio9'),

music10 = document.querySelector('.music-10'),
audio10 = document.querySelector('#audio10'),

music11 = document.querySelector('.music-11'),
audio11 = document.querySelector('#audio11'),

music12 = document.querySelector('.music-12'),
audio12 = document.querySelector('#audio12'),

music13 = document.querySelector('.music-13'),
audio13 = document.querySelector('#audio13')



music12.addEventListener('click', onAudioHG)
function onAudioHG(){
    audio.src = audio12.src;
    playSong();
    title.innerHTML = "22:22";
    onPlaulistBtnList();
}
music13.addEventListener('click', onAudioTh)
function  onAudioTh(){
    audio.src = audio13.src;
    playSong();
    title.innerHTML = "Feel So Good";
    onPlaulistBtnList();
}

// music1.addEventListener('click', onAudioOne);
// function  onAudioOne(){
//     audio.scr = audio1.src;
//     playSong();
//     title.innerHTML = "22:22";
//     onPlaulistBtnList();
// }

// music2.addEventListener('click', onAudioToo);
// function  onAudioToo(){
//     audio.scr = audio2.src;
//     playSong();
//     title.innerHTML = "Feel So Good";
//     onPlaulistBtnList();
// }
music3.addEventListener('click', onAudioThree)
function  onAudioThree(){
    audio.src = audio3.src;
    playSong();
    title.innerHTML = "Ginger Snaps";
    onPlaulistBtnList();
}
music4.addEventListener('click', onAudiofour)
function  onAudiofour(){
    audio.src = audio4.src;
    playSong();
    title.innerHTML = "Hazel Eyes";
    onPlaulistBtnList();
}

music5.addEventListener('click', onAudioFive)
function  onAudioFive(){
    audio.src = audio5.src;
    playSong();
    title.innerHTML = "Kosmos";
    onPlaulistBtnList();
}
music6.addEventListener('click', onAudioSixe)
function  onAudioSixe(){
    audio.src = audio6.src;
    playSong();
    title.innerHTML = "Major Lazer style";
    onPlaulistBtnList();
}
music7.addEventListener('click', onAudioSeven)
function  onAudioSeven(){
    audio.src = audio7.src;
    playSong();
    title.innerHTML = "Rose Baby Rose";
    onPlaulistBtnList();
}
music8.addEventListener('click', onAudioEight)
function  onAudioEight(){
    audio.src = audio8.src;
    playSong();
    title.innerHTML = "Ruff Day";
    onPlaulistBtnList();
}
music9.addEventListener('click', onAudioNine)
function  onAudioNine(){
    audio.src = audio9.src;
    playSong();
    title.innerHTML = "Lambada";
    onPlaulistBtnList();
}
music10.addEventListener('click', onAudioTen)
function  onAudioTen(){
    audio.src = audio10.src;
    playSong();
    title.innerHTML = "Dance 1";
    onPlaulistBtnList();
}
music11.addEventListener('click', onAudioElemen)
function  onAudioElemen(){
    audio.src = audio11.src;
    playSong();
    title.innerHTML = "Broken Heart";
    onPlaulistBtnList();
}


// const songs = [
 
// ]

// console.log(songs);
// песня по умолчанию

// let songIndex = 2;


// init
// function lodaSong(song){
//     title.innerHTML = song;
//     audio.src = `./audio/${song}.mp3`;
//     audio.play();                             
// }
// lodaSong(songs[songIndex]);

function playSong(){
    player.classList.add('play')
    cover.classList.add('active')
    audio.play()
    
}

function pauseSong(){
    player.classList.remove('play')
    cover.classList.remove('active')
    audio.pause()
    
}
playBtn.addEventListener('click', () =>{
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})
// nextBtn.addEventListener('click', nextSong)
// function nextSong(){
//     songIndex++

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

function updateProgress(e){
const {duration, currentTime} = e.srcElement
const progressPercent = (currentTime / duration) * 100
progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration

}
progressContainer.addEventListener('click', setProgress)

// audio.addEventListener('ended', nextSong)

musicBtnLpaylist.addEventListener('click', onPlaulistBtn)
 
function onPlaulistBtn (){
    musicRight.classList.remove('music__none')
    musicRight.classList.add('music__block')
    musicLeft.classList.add('music__none')
    musicLeft.classList.remove('music__block')
}
function onPlaulistBtnList (){
    musicLeft.classList.remove('music__none')
    musicLeft.classList.add('music__block')
    musicRight.classList.add('music__none')
    musicRight.classList.remove('music__block')
}


// musicPlaylist.addEventListener('click', onClick)
// function onClick(e){
//     let elem = e.target;
//     let elemSrc = elem.getAttribute('src');
//     audio.src = elemSrc;

    
//     console.log(elem);
//     console.log(elemSrc);
//     console.log(audio);
    

// }