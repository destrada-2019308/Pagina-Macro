 
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
      if (currentSlide < slides.length - 1) {
          currentSlide++;
          sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
  });
  
  prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
          currentSlide--;
          sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
  });
  