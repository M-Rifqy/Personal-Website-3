function changeNavColor() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;

    if (scroll < 100) {
        navbar.classList.remove('BgColour');
    } else {
      navbar.classList.add('BgColour');
    }
} 

window.addEventListener('scroll', changeNavColor);

//   for (var i = 1; i <= 50; i++) {
//     document.getElementById('skills').innerHTML +='<img src="./materials/blank.png" alt="blank"/>';
//   }

function portfolioAlert() {
    alert("You're currenly in that website, sir...");
}

var swiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper(".s2", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  });


