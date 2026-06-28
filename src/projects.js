'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

// 카테고리별 카운트 자동 계산
function updateCounts() {
  const allProjects = document.querySelectorAll('.project');
  document.querySelectorAll('.category').forEach((btn) => {
    const type = btn.dataset.category;
    const countEl = btn.querySelector('.category__count');
    if (!countEl || !type) return;
    const count = type === 'all'
      ? allProjects.length
      : [...allProjects].filter((p) => p.dataset.type === type).length;
    countEl.textContent = count;
  });
}

updateCounts();

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;

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
