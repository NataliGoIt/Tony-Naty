parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/hero.jpg":[["hero.e81a47ad.jpg","iILY"],"iILY"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e=new Swiper(".swiper",{loop:!0,grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let t=document.querySelector(".listing"),o=document.querySelectorAll(".header__burger-ikon"),n=document.querySelector(".modal-more"),s=document.querySelector(".burger-menu"),c=document.querySelector(".header");function i(e){const t=e.target;console.log(e.target);const o=t.querySelector("audio"),n=t.classList.contains("music__btn");console.log(n),t.classList.contains("music__item")&&(t.classList.contains("is-active")?(t.classList.remove("is-active"),l(o)):(t.classList.add("is-active"),r(o)),console.log(o))}function r(e){e.play()}function l(e){e.pause()}function a(){document.body.classList.add("show-modal")}function u(e){e.currentTarget===e.target&&document.body.classList.remove("show-modal")}function d(){console.log("gdsdg")}function g(e){console.log(e),e.currentTarget===e.target&&(document.body.classList.remove("open-burger-menu"),console.log(e))}t.addEventListener("click",i),n.addEventListener("click",u),o.addEventListener("click",d),s.addEventListener("click",g);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/Tony-Naty/src.6c4b17a9.js.map