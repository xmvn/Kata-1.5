let mySwiper;

function initSwiper() {
  mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function destroySwiper() {
  if (mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
}

function checkResolution() {
  if (window.innerWidth < 768) {
    if (!mySwiper) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

checkResolution();

window.addEventListener('resize', checkResolution);


let showHideButton = document.querySelector(".services-block__show-hide-button");
let servicesElements = document.querySelectorAll(".services-element.services-element_hidden");

showHideButton.addEventListener("click", function() {
  servicesElements.forEach(function(element) {
    element.classList.toggle("services-element_hidden");
  });

  if (showHideButton.innerText === "Показать все") {
    showHideButton.innerText = "Скрыть";
    showHideButton.style.marginTop = '30px';
    showHideButton.style.marginBottom = '14px';
  } else {
    showHideButton.innerText = "Показать все";
    showHideButton.style.marginTop = '8px';
  }
});