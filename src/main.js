'use strict';

//   스크롤 내릴시 header 색상변화
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const rect = header.getBoundingClientRect();

  if (rect.height < window.scrollY) {
    header.classList.add('header--Changed');
  } else {
    header.classList.remove('header--Changed');
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
document.addEventListener('scroll', () => {
  let opacity = 1 - window.scrollY / home.offsetHeight;
  opacity = Math.max(0, opacity);

  home.style.opacity = opacity;
});

// 화살표버튼 스크롤 내릴시 등장 처리
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  let opacity = window.scrollY / (home.offsetHeight / 2);

  arrow.style.opacity = opacity;
});

// 사이즈 줄어들시 메뉴들 숨김.버튼 보이기
const menuBtn = document.querySelector('.header__menuBtn');
const headerMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function () {
  headerMenu.classList.toggle('show');
});

// Navbar 메뉴 클릭시 메뉴닫기
headerMenu.addEventListener('click', function () {
  headerMenu.classList.remove('show');
});
