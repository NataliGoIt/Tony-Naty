parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/unplash.jpg":[["unplash.cf919cc8.jpg","lQob"],"lQob"],"./../images/play.png":[["play.f7bf0539.png","hKL2"],"hKL2"],"./../images/pause.png":[["pause.09e64e10.png","zg8M"],"zg8M"],"./../images/stop.png":[["stop.b76fe1d7.png","ywlw"],"ywlw"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");let e=document.querySelector(".audio");const c=document.querySelector(".player"),t=document.querySelector(".btn__play"),n=document.querySelector(".btn__prev"),r=document.querySelector(".btn__next"),s=document.querySelector(".btn__play-fa"),o=document.querySelector(".progress__container"),i=document.querySelector(".progress"),u=document.querySelector(".song"),d=document.querySelector(".cover__img"),l=document.querySelector(".btn-play"),a=document.querySelector(".music__playlist"),m=document.querySelector(".music__left"),y=document.querySelector(".music__right"),L=document.querySelector(".music__playlist-list"),S=document.querySelector(".music-3"),q=document.querySelector("#audio3"),_=document.querySelector(".music-4"),v=document.querySelector("#audio4"),f=document.querySelector(".music-5"),p=document.querySelector("#audio5"),k=document.querySelector(".music-6"),E=document.querySelector("#audio6"),T=document.querySelector(".music-7"),H=document.querySelector("#audio7"),M=document.querySelector(".music-8"),b=document.querySelector("#audio8"),g=document.querySelector(".music-9"),h=document.querySelector("#audio9"),R=document.querySelector(".music-10"),z=document.querySelector("#audio10"),B=document.querySelector(".music-11"),D=document.querySelector("#audio11"),G=document.querySelector(".music-12"),j=document.querySelector("#audio12"),w=document.querySelector(".music-13"),x=document.querySelector("#audio13");function F(){e.src=j.src,P(),u.innerHTML="22:22",Z()}function K(){e.src=x.src,P(),u.innerHTML="Feel So Good",Z()}function W(){e.src=q.src,P(),u.innerHTML="Ginger Snaps",Z()}function X(){e.src=v.src,P(),u.innerHTML="Hazel Eyes",Z()}function $(){e.src=p.src,P(),u.innerHTML="Kosmos",Z()}function A(){e.src=E.src,P(),u.innerHTML="Major Lazer style",Z()}function C(){e.src=H.src,P(),u.innerHTML="Rose Baby Rose",Z()}function I(){e.src=b.src,P(),u.innerHTML="Ruff Day",Z()}function J(){e.src=h.src,P(),u.innerHTML="Lambada",Z()}function N(){e.src=z.src,P(),u.innerHTML="Dance 1",Z()}function O(){e.src=D.src,P(),u.innerHTML="Broken Heart",Z()}function P(){c.classList.add("play"),d.classList.add("active"),e.play(),t.classList.contains("play-img")&&(t.classList.remove("play-img"),t.classList.add("pause"))}function Q(){c.classList.remove("play"),d.classList.remove("active"),e.pause(),t.classList.contains("pause")&&(t.classList.add("play-img"),t.classList.remove("pause"))}function U(e){const{duration:c,currentTime:t}=e.srcElement,n=t/c*100;i.style.width=`${n}%`}function V(c){const t=this.clientWidth,n=c.offsetX,r=e.duration;e.currentTime=n/t*r}function Y(){y.classList.remove("music__none"),y.classList.add("music__block"),m.classList.add("music__none"),m.classList.remove("music__block")}function Z(){m.classList.remove("music__none"),m.classList.add("music__block"),y.classList.add("music__none"),y.classList.remove("music__block")}function ee(){Q(),e.currentTime=0}G.addEventListener("click",F),w.addEventListener("click",K),S.addEventListener("click",W),_.addEventListener("click",X),f.addEventListener("click",$),k.addEventListener("click",A),T.addEventListener("click",C),M.addEventListener("click",I),g.addEventListener("click",J),R.addEventListener("click",N),B.addEventListener("click",O),t.addEventListener("click",()=>{c.classList.contains("play")?Q():P()}),e.addEventListener("timeupdate",U),o.addEventListener("click",V),L.addEventListener("click",Y),r.addEventListener("click",ee);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/Tony-Naty/src.4fb7e669.js.map