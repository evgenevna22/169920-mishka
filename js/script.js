"use strict";

var menuJs = document.querySelector(".main-nav__items");
var userBlock = document.querySelector(".page-header__user-block");
var openMenu = document.querySelector(".main-nav__toggle");
var btnBuy = document.querySelectorAll("a.btn-buy");
var btnWriteUs = document.querySelector(".contacts__write-btn");
var popup = document.querySelector(".page-modal");
var overlay = document.querySelector(".overlay");

menuJs.classList.remove("main-nav__items--no-js");
menuJs.classList.add("main-nav__items--opened");
userBlock.classList.remove("page-header__user-block--no-js");
userBlock.classList.add("page-header__user-block--opened");


openMenu.addEventListener("click", function () {
  if (menuJs.classList.contains("main-nav__items--closed")) {
    menuJs.classList.remove("main-nav__items--closed");
    menuJs.classList.add("main-nav__items--no-js");
    userBlock.classList.remove("page-header__user-block--closed");
    userBlock.classList.add("page-header__user-block--no-js");
  } else {
      menuJs.classList.add("main-nav__items--closed");
      menuJs.classList.remove("main-nav__items--no-js");
      userBlock.classList.add("page-header__user-block--closed");
      userBlock.classList.remove("page-header__user-block--no-js");
  }
});

openMenu.addEventListener("click", function () {
  if (openMenu.classList.contains("main-nav__toggle--open")) {
    openMenu.classList.remove("main-nav__toggle--open");
    openMenu.classList.add("main-nav__toggle--close");
  } else {
    openMenu.classList.add("main-nav__toggle--open");
    openMenu.classList.remove("main-nav__toggle--close");
  }
});

btnBuy.forEach(item => {
  item.addEventListener("click", function (event) {
  event.preventDefault();
  if (popup.classList.contains("page-modal--close")) {
    popup.classList.remove("page-modal--close");
    popup.classList.add("page-modal--show");
    overlay.classList.remove("overlay--close");
    }
  });
});

overlay.addEventListener("click", function () {
  if (overlay.classList.contains("overlay--show")) {
    popup.classList.add("page-modal--close");
    overlay.classList.add("overlay--close");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("page-modal--show")) {
      popup.classList.remove("page-modal--show");
      popup.classList.add("page-modal--close");
      overlay.classList.add("overlay--close");
    }
  }
});

btnWriteUs.addEventListener("click", function (event) {
  event.preventDefault();
});
