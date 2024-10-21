 
  document.getElementById('download').addEventListener('click', () => {
    window.open('https://drive.google.com/drive/folders/1_kq5hhLhGseQ8j6J8JE4ZPKAuUotDGrT?usp=drive_link','_blank')
 
  });

  document.getElementById('homepage').addEventListener('click', () => {
    window.open('https://grupomacro.com/index.php/es/servicios-grupo-macro','_blank')
 
  });

  document.getElementById('homepage1').addEventListener('click', () => {
    window.open('https://grupomacro.com/index.php/es/servicios-grupo-macro','_blank')
 
  });

  document.getElementById('urbanizacion').addEventListener('click', () => {
    window.open('https://grupomacro.com/index.php/es/urbanizacion','_blank')
 
  });
 
  document.getElementById('contactame').addEventListener('click', () => {
    window.open('https://grupomacro.com/index.php/es/contactenos','_blank')
 
  });

  document.getElementById('nostros').addEventListener('click', () => {
    window.open('https://grupomacro.com/index.php/es/nosotros-grupo-macro','_blank')
 
  });

  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  
  let currentSlide = 0;
  const slideWidth = slides[0].clientWidth; // Obtiene el ancho de cada slide
  
  nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length; // Se asegura de que currentSlide vuelva a 0 después del último slide
      sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      console.log(currentSlide);
  });
  
  prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Se asegura de que currentSlide vuelva al último slide si es menor que 0
      sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  });

/*
  new Swiper('.card-wrapper', {
 
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    // If we need pagination
 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
  });*/