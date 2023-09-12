
const swiperEl = document.querySelector('swiper-container');

    const params = {
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: false,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        360: {
          slidesPerView: 1,
          slidesPerGroup:1,
          pagination: true,
          navigation: false
        },
      },
      scrollbar: false,
      navigation: true,
      pagination: false
    };

    Object.assign(swiperEl, params)

    swiperEl.initialize();


// function showReg() {
//   document.getElementById('registration').style.display = 'block';
// }


// function closeReg() {
//   document.getElementById('registration').style.display = 'none';
// }

function showReg() {
  var registration = document.getElementById("registration");
  registration.style.display = "block";
  setTimeout(function() {
    registration.classList.add("show");
  }, 10);
}

function closeReg() {
  var registration = document.getElementById("registration");
  registration.classList.remove("show");
  setTimeout(function() {
    registration.style.display = "none";
  }, 300);
};

let chatOpen = false;
let chatElement = document.getElementById('chat');
let toggleButton = document.querySelector('toggleBtn');
function toggleChat() {
  chatOpen = !chatOpen;
  if(chatOpen) {
    chatElement.style.display = 'block';
    toggleButton.textContent = 'none'
  }else {
    chatElement.style.display = 'none'
    toggleButton.textContent = block
  }
}