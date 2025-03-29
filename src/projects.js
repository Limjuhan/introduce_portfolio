<<<<<<< HEAD
'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  console.log(event.target);

  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}

// const headerMenu = document.querySelectorAll('.header__menu__item');
// let isScroll = false;

// headerMenu.forEach((menu) => {
//   menu.addEventListener('click', (event) => {
//     event.preventDefault();

//     headerMenu.forEach((m) => m.classList.remove('active'));
//     menu.classList.add('active');

//     const targetSection = document.querySelector(menu.getAttribute('href'));

//     isScroll = true;

//     targetSection.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });

//     setTimeout(() => {
//       isScroll = false;
//     }, 1000);
//   });
// });

// const sectionObserver = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (isScroll) return;

//       if (entry.isIntersecting) {
//         headerMenu.forEach((m) => m.classList.remove('active'));
//         const id = entry.target.getAttribute('id');
//         const activeTag = document.querySelector('[href="#' + id + '"]');
//         console.log(activeTag);

//         activeTag.classList.add('active');
//       }
//     });
//   },
//   { threshold: 0.9, rootMargin: '0px' }
// );

// const sections = document.querySelectorAll('section[id], footer[id]');
// sections.forEach((section) => sectionObserver.observe(section));
=======
'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  console.log(event.target);

  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}

// const headerMenu = document.querySelectorAll('.header__menu__item');
// let isScroll = false;

// headerMenu.forEach((menu) => {
//   menu.addEventListener('click', (event) => {
//     event.preventDefault();

//     headerMenu.forEach((m) => m.classList.remove('active'));
//     menu.classList.add('active');

//     const targetSection = document.querySelector(menu.getAttribute('href'));

//     isScroll = true;

//     targetSection.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });

//     setTimeout(() => {
//       isScroll = false;
//     }, 1000);
//   });
// });

// const sectionObserver = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (isScroll) return;

//       if (entry.isIntersecting) {
//         headerMenu.forEach((m) => m.classList.remove('active'));
//         const id = entry.target.getAttribute('id');
//         const activeTag = document.querySelector('[href="#' + id + '"]');
//         console.log(activeTag);

//         activeTag.classList.add('active');
//       }
//     });
//   },
//   { threshold: 0.9, rootMargin: '0px' }
// );

// const sections = document.querySelectorAll('section[id], footer[id]');
// sections.forEach((section) => sectionObserver.observe(section));
>>>>>>> 8f9a6fb (commit.3/30)
