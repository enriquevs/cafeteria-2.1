'use strict';

const nextButton = document.querySelector('.next');
const previewButton = document.querySelector('.preview');
const carrouselImages = document.querySelectorAll('.carrousel__picture');

nextButton.addEventListener('click', nextImage);
previewButton.addEventListener('click', previewImage);

// setInterval(nextImage, 1000);


function nextImage() {
  let nextPosition;
  const activePosition = getActiveImage();
  nextPosition = Number(activePosition) + 1;
  if(nextPosition > carrouselImages.length - 1) {
    nextPosition = 0;
  }
  carrouselImages[nextPosition].classList.add('active');
}

function previewImage() {
  let previewPosition;
  const activePosition = getActiveImage();
  previewPosition = Number(activePosition) - 1;
  if(previewPosition < 0) {
    previewPosition = carrouselImages.length - 1;
  }
  carrouselImages[previewPosition].classList.add('active');
}

function getActiveImage() {
  for(const image of carrouselImages) {
    if(image.classList.contains('active')) {
      const activePosition = image.getAttribute('data-position');
      carrouselImages[activePosition].classList.remove('active');
      return activePosition;
    }
  }
}



/*formulario*/
const button = document.querySelector(".enviar");
button.addEventListener("click", readForm);

function readForm(event){
  const form = document.querySelector("#personal_data")
  console.log(form);
  const name = form.user_name.value;
  const lastname = form.user_lastname.value;
  const phone = form.user_phone.value;
  const email = form.user_email.value;
  const message = form.user_mesaje.value;

  console.log(name, lastname, phone, email, message);
}
