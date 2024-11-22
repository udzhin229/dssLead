/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/
// import lottie from "lottie-web";

// lottie.loadAnimation({
//   container: document.getElementById("lottie-container-1"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "../img/animation/dracon.json",
// });

// lottie.loadAnimation({
//   container: document.getElementById("lottie-container-2"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "../img/animation/dracon.json",
// });

import lottie from "lottie-web";

// Функція для завантаження анімації
function playLottieAnimation(containerId, path) {
  lottie.loadAnimation({
    container: document.getElementById(containerId),
    renderer: "svg",
    loop: false, // Один цикл анімації
    autoplay: true,
    path: path,
  });
}

// Налаштування Intersection Observer
const observerOptions = {
  root: null, // Відстежуємо вікно перегляду
  threshold: 0.5, // Запускається, коли 50% елемента потрапляє у видиму область
};

// Створюємо обсервер для запуску анімації при скролі
function createObserver(elementId, animationPath) {
  let animationPlayed = false; // Перевірка, чи анімація вже програлась
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animationPlayed) {
        // Коли елемент з'являється у видимій частині екрана і ще не програвався
        playLottieAnimation(elementId, animationPath);
        animationPlayed = true; // Анімація програється тільки один раз
      }
    });
  }, observerOptions);

  const target = document.getElementById(elementId);
  if (target) {
    observer.observe(target); // Відстежуємо елемент
  }
}

// Запускаємо обсервери для кожної анімації
createObserver("lottie-container-1", "/img/animation/dracon.json");
createObserver("lottie-container-2", "/img/animation/dracon.json");
createObserver("lottie-container-3", "/img/animation/dracon.json");
createObserver("lottie-container-4", "/img/animation/dracon.json");

function handleScroll() {
  const block = document.querySelector('.falling-block');
  const blockPosition = block?.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (blockPosition < screenPosition) {
    block.classList.add('active'); // Додає клас для анімації падіння
  }
}

window.addEventListener('scroll', handleScroll);


// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window["FLS"] = true;

// Підключення основного файлу стилів
import "../scss/style.scss";

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
// flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit();
/* Форматування чисел */
// import './libs/wNumb.min.js';

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "До/Після"
Документація: https://template.fls.guru/template-docs/modul-do-pislia.html
Сніппет (HTML): ba
*/
// import './libs/beforeafter.js';

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Бігучий рядок" (Alpha)
Документация:
Сниппет (HTML):
*/
// import './libs/keywords.js'

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
import "./libs/popup.js";

/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */
import "./libs/select.js";

/* Модуль роботи з календарем */
// import './files/forms/datepicker.js'

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
// import './libs/watcher.js'

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функції роботи скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонрі сітка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна: 
Сніппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================
// document.addEventListener("DOMContentLoaded", function () {
//   const cards = document.querySelectorAll(".advantages__card");

//   // const observer = new IntersectionObserver((entries) => {
//   //   entries.forEach((entry) => {
//   //     if (entry.isIntersecting) {
//   //       entry.target.classList.add("flipped");

//   //       // Добавляем задержку в 1 секунду перед добавлением класса active
//   //       const accents = document.querySelectorAll(".card-back-list__item-text-accent");
//   //       accents.forEach((accent) => {
//   //         accent.classList.add("active");
//   //       });
//   //       // setTimeout(() => {
//   //       //   const accents = document.querySelectorAll(".card-back-list__item-text-accent");
//   //       //   accents.forEach((accent) => {
//   //       //     accent.classList.add("active");
//   //       //   });
//   //       // }, 500);
//   //     }
//   //   });
//   // });

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("flipped");
  
//           const accents = document.querySelectorAll(".card-back-list__item-text-accent");
//           accents.forEach((accent) => {
//             accent.classList.add("active");
//           });
  
//           // Остановить наблюдение после первой активации
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 } // Измените значение на желаемую точку видимости (например, 50%)
//   );

//   cards.forEach((card) => {
//     observer.observe(card);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const cards = document.querySelectorAll(".advantages__card");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Используем кастомный флаг, чтобы избежать повторных анимаций
//         if (!entry.target.dataset.animated) {
//           entry.target.classList.add("flipped");
//           entry.target.dataset.animated = "true"; // Устанавливаем флаг

//           const accents = document.querySelectorAll(".card-back-list__item-text-accent");
//           accents.forEach((accent) => {
//             accent.classList.add("active");
//           });
//         }
//       }
//     });
//   });

//   cards.forEach((card) => {
//     observer.observe(card);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const leftCard = document.querySelector(".advantages__card.left");
  const rightCard = document.querySelector(".advantages__card.right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Обработка для левой карточки
        if (entry.target.classList.contains("left") && !entry.target.dataset.animated) {
          entry.target.classList.add("flipped");
          entry.target.dataset.animated = "true"; // Флаг для предотвращения повторной анимации

          const accents = document.querySelectorAll(".advantages__card.left .card-back-list__item-text-accent");
          accents.forEach((accent) => {
            accent.classList.add("active");
          });
        }

        // Обработка для правой карточки
        if (entry.target.classList.contains("right") && !entry.target.dataset.animated) {
          entry.target.classList.add("flipped");
          entry.target.dataset.animated = "true"; // Флаг для предотвращения повторной анимации

          const accents = document.querySelectorAll(".advantages__card.right .card-back-list__item-text-accent");
          accents.forEach((accent) => {
            accent.classList.add("active");
          });
        }
      }
    });
  });

  // Наблюдение за карточками
  if (leftCard) observer.observe(leftCard);
  if (rightCard) observer.observe(rightCard);
});


const cards = document.querySelectorAll(".card");

if (cards) {
  cards.forEach((card) => {
    // Для устройств с курсором: при наведении
    card.addEventListener("mouseenter", () => {
      card.classList.add("flipped");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("flipped");
    });

    // Для тач-устройств: при первом касании
    card.addEventListener("touchstart", (event) => {
      // Убираем предыдущее "переворачивание" на всех карточках, если нужно
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("flipped");
        }
      });

      // Переворачиваем текущую карточку
      if (card.classList.contains("flipped")) {
        
      } else {
        card.classList.add("flipped"); // Переворачиваем
      }

      // Предотвращаем вызов клика или других событий
      event.preventDefault();
    });
  });
}




// ======================== ПІДКРЕСЛЕННЯ ЗАГОЛОВКІВ =======================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("_active");
      }
    });
  },
  { threshold: 0.5 }
);

// Вибір всіх заголовків з класом .title-box
const titleBoxes = document.querySelectorAll(".bg-title-effect");
const titlesLineBg = document.querySelectorAll(".title-line");
titleBoxes.forEach((titleBox) => {
  observer.observe(titleBox);
});

titlesLineBg.forEach((titleLineBg) => {
  observer.observe(titleLineBg);
});


// ============================= СВЕЧЕНИЕ КАРТОЧЕК =================================================
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const cardFronts = document.querySelectorAll(".founders__slide-card-front");
  const cardBacks = document.querySelectorAll(".founders-card-back");

  cards.forEach((card, index) => {
    const imgBack = card.getAttribute("data-imgback");

    if (imgBack) {
      // Проверяем, что передняя и задняя стороны существуют по этому индексу
      if (cardFronts[index]) {
        cardFronts[index].style.setProperty("--imgfront", `url(../${imgBack})`);
      }

      if (cardBacks[index]) {
        cardBacks[index].style.setProperty("--imgback", `url(../${imgBack})`);
      }
    }
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector(".hero-thumb");
//   const rightImages = document.querySelectorAll(".right-parallax");
//   const leftImages = document.querySelectorAll(".left-parallax");

//   if (container && (rightImages.length > 0 || leftImages.length > 0)) {
//     const containerHeight = container.offsetHeight;
//     const containerWidth = container.offsetWidth;
//     const minDistance = 50; // Минимальное расстояние между изображениями

//     const placedPositions = [];

//     function generateRandomPosition(minLeft, maxLeft, minTop, maxTop) {
//       let position;
//       let isTooClose;

//       do {
//         const randomLeft = Math.random() * (maxLeft - minLeft) + minLeft;
//         const randomTop = Math.random() * (maxTop - minTop) + minTop;
//         position = { left: randomLeft, top: randomTop };

//         isTooClose = placedPositions.some(pos => {
//           const dx = pos.left - position.left;
//           const dy = pos.top - position.top;
//           return Math.sqrt(dx * dx + dy * dy) < minDistance;
//         });
//       } while (isTooClose);

//       placedPositions.push(position);
//       return position;
//     }

//     function processImages(images, minLeft, maxLeft) {
//       images.forEach(img => {
//         const topOffset = 100;
//         const bottomOffset = 35;
//         const minTop = topOffset;
//         const maxTop = containerHeight - bottomOffset;

//         const { left, top } = generateRandomPosition(minLeft, maxLeft, minTop, maxTop);

//         img.style.position = "absolute";
//         img.style.left = `${left}px`;
//         img.style.top = `${top}px`;

//         const secpar = (Math.random() * 10 + 5).toFixed(1);
//         img.style.setProperty("--secpar", `${secpar}s`);

//         // Генерируем случайные значения амплитуды для каждого изображения
//         const amplitude = (Math.random() * 6 + 3).toFixed(1); // от 3px до 8px
//         const smallAmplitude = (Math.random() * 5 + 2).toFixed(1); // от 1px до 3px

//         img.style.setProperty("--amplitude", `${amplitude}px`);
//         img.style.setProperty("--small-amplitude", `${smallAmplitude}px`);
//       });
//     }

//     const minLeftRight = containerWidth * (2 / 3);
//     const maxLeftRight = containerWidth - 30;

//     const minLeftLeft = 30;
//     const maxLeftLeft = containerWidth / 3;

//     processImages(rightImages, minLeftRight, maxLeftRight);
//     processImages(leftImages, minLeftLeft, maxLeftLeft);
//   }
// });


// ============================= АНІМАЦІЯ ПОЯВИ ХЕДЕР =================================================
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const firstSection = document.querySelector(".hero__button-box");
  const burgerMenu = document.querySelector(".header-mb__button-wrapper");
  const authNav = document.querySelector(".header__auth-nav.auth-nav");

  window.addEventListener("scroll", function () {
    const firstSectionBottom = firstSection.getBoundingClientRect().bottom;

    if (firstSectionBottom <= 0) {
      header.classList.add("scrolled");
      burgerMenu.classList.add("visible");

      // Добавляем gap к родителю, если у burgerMenu есть класс visible
      if (authNav) {
        authNav.style.gap = "30px";
      }
    } else {
      header.classList.remove("scrolled");
      burgerMenu.classList.remove("visible");

      // Убираем gap у родителя, если класс visible убран
      if (authNav) {
        authNav.style.gap = ""; // Убираем значение gap
      }
    }
  });
});


// ===================== ДИНАМІЧНЕ ПЕРЕНАПРАВЛЯННЯ ЮЗЕРА ПРИ ВИБОРІ КЛАСА У ПОПАПІ ===============================
document.addEventListener("DOMContentLoaded", function () {
  const chooseButton = document.querySelector(".tabs-popup__button-choose");

  const partner = "https://dss-leads.partner.alanbase.com";
  const advertiser = "https://dss-leads.advertiser.alanbase.com";

  function updateChooseButtonLink() {
    const activeTab = document.querySelector(".tabs-popup__title._tab-active");

    if (activeTab) {
      chooseButton.onclick = function () {
        if (activeTab.classList.contains("tabs-popup1")) {
          window.location.href = partner;
        } else if (activeTab.classList.contains("tabs-popup2")) {
          window.location.href = advertiser;
        }
      };
    }
  }

  function updateTabContent() {
    const activeTabIndex = [...document.querySelectorAll(".tabs-popup__title")].findIndex(tab => tab.classList.contains("_tab-active"));
    document.querySelectorAll(".tabs-popup__body").forEach((content, index) => {
      content.style.display = index === activeTabIndex ? "block" : "none";
    });
  }

  document.querySelectorAll(".tabs-popup__title").forEach(tab => {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".tabs-popup__title").forEach(t => t.classList.remove("_tab-active"));
      this.classList.add("_tab-active");
      updateChooseButtonLink();
      updateTabContent();
    });
  });

  updateChooseButtonLink();
  updateTabContent();
});



// ================================== АНІМАЦІЯ ПОЯВИ ДРАКОНІВ =========================================// Функція для запуску анімації
function startAnimation(container) {
  if (!container.classList.contains('animate')) {
    container.classList.add('animate');

    const items = container.querySelectorAll('.webmaster-tabs__item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 3600);
    });
  }
}

// Отримуємо кнопки та контейнери з анімаціями
const buttons = document.querySelectorAll('.webmaster-tabs__button');
const animationContainers = document.querySelectorAll('.tabs__body-animation-wrapper');

// Додаємо обробник кліку для кожної кнопки
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const correspondingContainer = animationContainers[index];
    if (correspondingContainer) {
      startAnimation(correspondingContainer);
    }
  });
});

// ==================================== АНІМАЦІЯ ЗГОРЯННЯ =====================================================
document.querySelectorAll('.board-bottom__item').forEach(item => {
  // Анімація для десктопів
  item.addEventListener('mouseenter', () => {
    if (!item.classList.contains('animation-played')) {
      triggerAnimation(item);
    }
  });

  // Анімація для мобільних пристроїв
  item.addEventListener('touchstart', () => {
    if (!item.classList.contains('animation-played')) {
      triggerAnimation(item);
    }
  });
});

// Функція для запуску анімації
function triggerAnimation(item) {
  item.classList.add('is-burning'); 
  

  setTimeout(() => {
    item.classList.add('is-burnt'); 
    item.classList.add('animation-played'); 
  }, 1000);
}



// ====================================== АНІМАЦІЯ ХИТАННЯ ДОШКИ ========================================
document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.animate-board');
  const chains = document.querySelectorAll('.not-cpa__content-chain-left, .not-cpa__content-chain-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        board.classList.add('animate');
        chains.forEach(chain => chain.classList.add('animate-chain'));
      }
    });
  }, {
    threshold: 0.10
  });

  observer.observe(board);
});


// =================================== ПІДСВІЧУВАННЯ АКТИВНОГО ПОСИЛАННЯ В ХЕДЕРІ ===================================
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const menuItems = document.querySelectorAll('.menu-nav__item');

  const updateActiveItemOnScroll = () => {
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => {
      const link = item.querySelector('.menu-nav__link');
      item.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveItemOnScroll);
});


// ======================================= ВІДПРАВКА ФОРМИ ====================================================
document.getElementById('submitBtn').addEventListener('click', async () => {
  // Отримання даних з форми
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    socials: formData.get('socials'),
    nickname: formData.get('nickname'),
  };

  console.log(data)
//   const webhookUrl = "https://rest-api.bitrix24.com/rest/1/doutwqkjxgc3mgc1/";

//   fetch(webhookUrl, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(result => {
//     console.log("Успішно:", result);
// })
// .catch(error => {
//     console.error("Помилка:", error);
// });
});