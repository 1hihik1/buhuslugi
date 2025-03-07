//фикс якорей из за фиксированной шапки
/*
document.addEventListener("DOMContentLoaded", function () {
  let shiftWindow = function () {
    scrollBy(0, -50); // Высота вашей фиксированной шапки
  };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);
});*/

//КНОПКА-ЯКОРЬ НАВЕРХ
// Отслеживаем положение прокрутки страницы
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Если пользователь пролистал страницу ниже начала, показываем кнопку "наверх"
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Прокрутка страницы вверх при нажатии на кнопку
function scrollToTop() {
  window.scrollTo({
    top: 0, // Прокручиваем до самого верха
    behavior: "smooth", // Плавная прокрутка
  });
}

//СЛАЙДЕР
const slider = document.querySelector(".slides");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0; // Текущий индекс слайда
const slides = document.querySelectorAll(".slider-image");
const totalSlides = slides.length;

// Функция для перехода к конкретному слайду
function goToSlide(index) {
  if (index < 0) {
    index = totalSlides - 1; // Переход к последнему слайду, если индекс меньше 0
  } else if (index >= totalSlides) {
    index = 0; // Переход к первому слайду, если индекс больше максимального
  }

  const offset = -index * 100; // Смещение в процентах
  slider.style.transform = `translateX(${offset}%)`; // Применяем смещение
  currentIndex = index;
}

// Переход к следующему слайду
function nextSlide() {
  goToSlide(currentIndex + 1);
}

// Переход к предыдущему слайду
function prevSlide() {
  goToSlide(currentIndex - 1);
}

// Автопролистывание
let autoSlideInterval = setInterval(nextSlide, 5000); // Меняем слайд каждые 5 секунд

// Остановка автопролистывания при наведении на слайдер
slider.parentElement.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

// Возобновление автопролистывания при уходе курсора
slider.parentElement.addEventListener("mouseleave", () => {
  autoSlideInterval = setInterval(nextSlide, 5000);
});

// Назначение обработчиков для кнопок
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

//КОПИРОВАНИЕ ТЕКСТА В БУФЕР ОБМЕНА

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Скопировано: " + text);
    })
    .catch((err) => {
      console.error("Не удалось скопировать: ", err);
    });
}
