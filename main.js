document.getElementById('playButton').addEventListener('click', function () { //когда див playbutton нажат
    // Если видео уже играет, ставим на паузу
    if (document.getElementById('myVideo').paused) {
        document.getElementById('myVideo').play();
        document.getElementById('myImage').src = 'play-button.png';
        document.getElementById('myVideo').setAttribute("controls", "controls");
        // this.textContent = 'Пауза'; // Меняем текст кнопки
    } else {
        document.getElementById('myVideo').pause();
        document.getElementById('myImage').src = 'pause.png';
        // this.textContent = 'Воспроизвести'; // Меняем текст кнопки
    }
});document.getElementById('myVideo').addEventListener('play', function () { //когда видео запущено
        document.getElementById('myImage').src = 'play-button.png';        
    });

   
    document.getElementById('myVideo').addEventListener('pause', function () { //когда видео остановлено
        document.getElementById('myImage').src = 'pause.png';         
    });
    // Инициализация Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // Бесконечная прокрутка
    loop: true,
    // Автоматическая прокрутка
    autoplay: {
      delay: 3500, // Задержка в миллисекундах (3.5 секунды)
      disableOnInteraction: false, // Не останавливать при взаимодействии
      pauseOnMouseEnter: true, // Пауза при наведении мыши
    },
    // Скорость перехода между слайдами
    speed: 600,
    // Настройка точек-индикаторов
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Точки можно нажимать
      dynamicBullets: true, // Динамические точки (удобно для большого количества слайдов)
    },
    // Настройка кнопок навигации
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Поддержка свайпов
    grabCursor: true, // Курсор-рука при наведении
    // Адаптивные настройки (breakpoints)
    breakpoints: {
      // При ширине экрана >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // При ширине экрана >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });