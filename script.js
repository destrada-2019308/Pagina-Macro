 
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
 

  const swiper = new Swiper('.slider-wrapper', {
 
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView: 3, // Muestra 3 imágenes a la vez en pantallas grandes
    
    // Responsivo: Cambia el número de imágenes dependiendo del tamaño de la pantalla
    breakpoints: {
        0: {
            slidesPerView: 1,  // 1 imagen en pantallas pequeñas
        },
        1024: {
            slidesPerView: 2,  // 2 imágenes en pantallas medianas
        },
        1200: {
            slidesPerView: 3,  // 3 imágenes en pantallas grandes
        }
    },
    

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  
  });