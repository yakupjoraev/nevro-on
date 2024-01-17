// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


// //плавный скролл
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// };

function moreText() {
  const containers = document.querySelectorAll('[data-more-wrapper]');

  if (!containers) {
    return null;
  }

  containers.forEach(container => {
    const toggleButton = container.querySelector("[data-more-btn]");

    container.addEventListener("click", function () {
      this.classList.toggle("more");

      const more = this.classList.contains('more');

      if (more) {
        toggleButton.querySelector('span').innerText = "Свернуть";
      } else {
        toggleButton.querySelector('span').innerText = "Нажмите, чтобы открыть";
      }
    });
  });
}

moreText();



function doctorsSlider() {
  const container = document.querySelector('.doctors');
  if (!container) {
    return null
  }

  const swiper = new Swiper('.doctors__swiper', {
    // Default parameters
    slidesPerView: "auto",
    spaceBetween: 40,

    pagination: {
      el: '.doctors__swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 1200px
      1200: {
        spaceBetween: 80
      }
    }
  })
}

doctorsSlider();

function doctorSlider() {
  const container = document.querySelector('.doctor');
  if (!container) {
    return null
  }

  const swiper = new Swiper('.doctor__swiper', {
    // Default parameters
    slidesPerView: "auto",
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: '.doctor__arrow--next',
      prevEl: '.doctor__arrow--prev',
    },

    pagination: {
      el: '.doctor__swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 1200px
      1200: {
        spaceBetween: 60
      }
    }
  })
}

doctorSlider();


function doctors() {
  const container = document.querySelector('.doctors');

  if (!container) {
    return null
  }
  // Get all slides and contents
  const slides = document.querySelectorAll('[data-doctor-slide]');
  const contents = document.querySelectorAll('[data-doctor-content]');

  // Add click event listener to each slide
  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      // Remove 'active' class from all slides
      slides.forEach(s => s.classList.remove('active'));

      // Add 'active' class to the clicked slide
      slide.classList.add('active');

      // Get the corresponding content index
      const contentIndex = slide.getAttribute('data-doctor-slide');

      // Remove 'active' class from all contents
      contents.forEach(content => content.classList.remove('active'));

      // Add 'active' class to the corresponding content
      contents[contentIndex - 1].classList.add('active');
    });
  });
}

doctors();


function services() {
  // Get all services items
  let servicesItems = document.querySelectorAll('[data-services-item]');
  let allContents = document.querySelectorAll('[data-services-content]');

  // Add click event listener to each services item
  servicesItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Remove "active" class from all services items
      servicesItems.forEach(function (item) {
        item.classList.remove('active');
      });

      // Add "active" class to the clicked services item
      item.classList.add('active');

      // Get the corresponding services content
      const contentId = item.getAttribute('data-services-item');
      const content = document.querySelector('[data-services-content="' + contentId + '"]');

      // Remove "active" class from all services content
      allContents.forEach(function (content) {
        content.classList.remove('active');
      });

      // Add "active" class to the corresponding services content
      content.classList.add('active');
    });

  });

  if (window.matchMedia("(max-width: 767px)").matches) {
    allContents.forEach(allContent => {
      const btn = allContent.querySelector('[data-services-btn]');

      btn.addEventListener('click', () => {
        allContent.classList.toggle('open')
        btn.textContent = btn.textContent === "Показать ещё" ? "Скрыт" : "Показать ещё";
      })
    });
  }
};

services();



function phoneMask() {
  const formContainer = document.querySelector('.form');

  if (!formContainer) {
    return null;
  }

  let formPhones = document.querySelectorAll('.js-input-phone');

  formPhones.forEach(formPhone => {
    const mask = IMask(formPhone, {
      mask: [
        {
          mask: '+{7}(000)000-00-00',
          startsWith: '7',
          prepare: value => (value[0] === '8' ? value.slice(1) : value)
        },
        {
          mask: '8(000)000-00-00',
          startsWith: '8',
        }
      ]
    });

  });
}

phoneMask();

// validate////////////////////////////////////////////////////////////////////////////////////////////////////////
let forms = document.querySelectorAll('.form');

forms.forEach(form => {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    let formInputs = form.querySelectorAll('.js-input'),
      inputPhone = form.querySelector('.js-input-phone'),
      inputEmail = form.querySelector('.js-input-email');

    function validatePhone(phone) {
      let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      return re.test(String(phone));
    }

    function validateEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function hasClassInParents(element, className) {
      if (element.classList.contains(className)) {
        return true;
      } else if (element.parentElement) {
        return hasClassInParents(element.parentElement, className);
      } else {
        return false;
      }
    }

    let hasValidationFailed = false;

    formInputs.forEach(function (input) {
      if (input.classList.contains('js-input-email') && !validateEmail(input.value)) {
        console.log('Email not valid');
        input.classList.add('error');
        hasValidationFailed = true;
      } else if (input.classList.contains('js-input-phone') && !validatePhone(input.value)) {
        console.log('Phone not valid');
        input.classList.add('error');
        hasValidationFailed = true;
      } else if (input.value === '') {
        console.log('Input not filled');
        input.classList.add('error');
        hasValidationFailed = true;
      } else {
        input.classList.remove('error');
      }
    });

    if (hasValidationFailed) {
      console.log('Validation failed');
    } else {
      console.log('Form submitted successfully!');

      // Update button text and icon on success
      const submitButton = form.querySelector('.form__btn');
      submitButton.querySelector('.form__btn-text').innerText = 'Ваша заявка принята!';
      submitButton.querySelector('.form__btn-icon').src = './img/icons/check.svg';
      submitButton.querySelector('.form__btn-icon').alt = 'check icon';

      // Check if the form has the modal__form class
      if (form.classList.contains('modal__form')) {
        // Add 'successfully' class to the form
        form.classList.add('successfully');

        // Remove 'show' class from the modal after 2 seconds
        setTimeout(() => {
          form.classList.remove('successfully');
          // Assuming you have a reference to the modal, you can remove its 'show' class here
          const modal = document.querySelector('.modal');
          modal.classList.remove('show');
        }, 2000);
      }
    }
  });
});


function map() {
  const container = document.querySelector('.map')
  if (!container) {
    return null
  }

  let center = [59.959048, 30.353058];

  function init() {


    let map = new ymaps.Map('map', {
      center: center,
      zoom: 15
    });

    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/pin.svg',
      // iconImageHref: '/local/templates/main/img/pin.svg',
      iconImageSize: [42, 42],
      iconImageOffset: [-14, -64]
    })

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
}

map();

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.news-page');

  if (!container) {
    return null;
  }

  let newsItems = document.querySelectorAll(".news-page__item");

  function updateNewsItems() {
    newsItems.forEach(function (item) {
      const textContainer = item.querySelector(".news-page__item-texts");
      const textLines = textContainer.textContent.trim().split('\n').filter(Boolean).length;

      if (window.innerWidth <= 991) {
        // Для разрешения менее или равно 991px
        item.classList.remove("desktop-more");
      }
      else if (window.innerWidth <= 767) {
        // Для разрешения от 992px до 1440px включительно
        if (textLines > 4) {
          item.classList.add("desktop-more");
        } else {
          item.classList.remove("desktop-more");
        }
      }
      else if (window.innerWidth <= 991) {
        // Для разрешения от 992px до 1440px включительно
        if (textLines > 9) {
          item.classList.add("desktop-more");
        } else {
          item.classList.remove("desktop-more");
        }
      }

      else if (window.innerWidth <= 1024) {
        // Для разрешения от 992px до 1440px включительно
        if (textLines > 20) {
          item.classList.add("desktop-more");
        } else {
          item.classList.remove("desktop-more");
        }
      }
      else if (window.innerWidth <= 1440) {
        // Для разрешения от 992px до 1440px включительно
        if (textLines > 24) {
          item.classList.add("desktop-more");
        } else {
          item.classList.remove("desktop-more");
        }
      } else {
        // Для разрешения более 1440px
        if (textLines > 17) {
          item.classList.add("desktop-more");
        } else {
          item.classList.remove("desktop-more");
        }
      }
    });
  }

  // Вызовите функцию при загрузке страницы и изменении размера окна
  updateNewsItems();
  window.addEventListener('resize', updateNewsItems);
});

//Toggle theme
const themeBtn = document.querySelector('.slider-theme');
themeBtn.addEventListener('click', () => {
  let element = document.body;
  element.classList.toggle('light-mode')
})


const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });


});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});

// Функция для открытия модалки через минуту
function openModalAfterDelay() {
  const modalId = 'modal1'; // Замените 'yourModalId' на реальный идентификатор модалки
  const modal = document.getElementById(modalId);
  modal.classList.add('show');
}

// Задержка в 1 минуту (60000 миллисекунд)
setTimeout(openModalAfterDelay, 60000);

