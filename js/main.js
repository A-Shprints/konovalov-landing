document.addEventListener("DOMContentLoaded", function () {
  // Бургер

  const burger = document.querySelector(".nav__burger");
  const navContainer = document.querySelector(".container__nav");
  const body = document.body;
  const menuItems = document.querySelectorAll(".menu__link");

  burger.addEventListener("click", () => {
    navContainer.classList.toggle("nav__burger--clicked");
    body.classList.toggle("no-scroll");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navContainer.classList.remove("nav__burger--clicked");
      body.classList.remove("no-scroll");
    });
  });

  // Свайпер

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Адаптивные настройки
    breakpoints: {
      450: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
    },
  });

  // EmailJS - Отправка данных формы

  // Модальное окно

  document
    .getElementById("privacyPolicyLink")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("myModal").style.display = "block";
    });

  document
    .getElementById("closeModalBtn")
    .addEventListener("click", function () {
      document.getElementById("myModal").style.display = "none";
    });

  document
    .getElementById("closeModalFooterBtn")
    .addEventListener("click", function () {
      document.getElementById("myModal").style.display = "none";
    });

  window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  });
});
