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
createObserver("lottie-container-1", "./img/animation/dracon.json");
createObserver("lottie-container-2", "./img/animation/dracon.json");
createObserver("lottie-container-3", "./img/animation/dracon.json");
createObserver("lottie-container-4", "./img/animation/dracon.json");

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
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".advantages__card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("flipped");
      }
    });
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
});

const cards = document.querySelectorAll(".card");

if (cards) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
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


// ============================= АНІМАЦІЯ ПОЯВИ ХАДЕР =================================================
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const firstSection = document.querySelector(".hero__button-box");

  window.addEventListener("scroll", function () {
    const firstSectionBottom = firstSection.getBoundingClientRect().bottom;

    if (firstSectionBottom <= 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
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

  document.querySelectorAll(".tabs-popup__title").forEach(tab => {
    tab.addEventListener("click", function () {
      // Зняти клас _tab-active з усіх вкладок
      document.querySelectorAll(".tabs-popup__title").forEach(t => t.classList.remove("_tab-active"));
      // Додати клас _tab-active до натиснутої вкладки
      this.classList.add("_tab-active");
      // Оновити URL кнопки
      updateChooseButtonLink();
    });
  });

  updateChooseButtonLink();
});


