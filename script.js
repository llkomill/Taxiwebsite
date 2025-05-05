// Добавляем тень при скролле
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});
// Плавный скролл к якорям
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
          document.querySelector(targetId).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});


// Автоматическая подсветка меню
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a');

  function setActiveLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Поправка на шапку
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Запускаем при загрузке
});

// Функция для проверки видимости элемента
function checkVisibility() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
      }
  });
}

// Запускаем при загрузке и скролле
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);

// Проверка видимости элементов
function checkVisibility() {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
      }
  });
}

// Кнопка "Наверх"
document.addEventListener('DOMContentLoaded', function() {
  // Создаем кнопку динамически
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.className = 'back-to-top';
  backToTop.title = 'Наверх';
  backToTop.innerHTML = '↑';
  document.body.appendChild(backToTop);

  // Показываем/скрываем при скролле
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // Плавный скролл при клике
  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

