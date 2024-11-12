/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.swiper')) {
	  // Создаем слайдер
	  new Swiper('.swiper', {
		// Подключаем модули слайдера
		modules: [Pagination, Navigation, Scrollbar],
		observer: true,
		observeParents: true,
		slidesPerView: "auto",
		spaceBetween: 20,
		centeredSlides: true,
		speed: 800,
  
		// Убираем точки пагинации
		pagination: false,
  
		// Добавляем скроллбар
		scrollbar: {
		  el: '.swiper-scrollbar',
		  draggable: true, // Позволяет перетаскивать скроллбар
		},
  
		// Кнопки "влево/вправо"
		navigation: {
		  prevEl: '.swiper-button-prev',
		  nextEl: '.swiper-button-next',
		},
  
		// Брейкпоинты
		breakpoints: {
		  768: {
			slidesPerView: "auto",
			spaceBetween: 40,
			centeredSlides: false,
		  },
		  1300: {
			slidesPerView: 3,
			centeredSlides: false,
			spaceBetween: 0,
		  },
		  1420: {
			slidesPerView: 3,
			centeredSlides: false,
			spaceBetween: 0,
		  },
		  1600: {
			slidesPerView: 3,
			centeredSlides: false,
			spaceBetween: 0,
		  },
		  1800: {
			slidesPerView: 3,
			centeredSlides: false,
			spaceBetween: 0,
		  },
		},
	  });
	}
  }
  
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	const viewportWidth = window.innerWidth;

	// if (viewportWidth > 1200) {
	// 	return
	// }
	initSliders();
});