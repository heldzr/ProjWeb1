document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    let slideIndex = 0;
    let slideInterval;
  
    function showSlide(index) {
      if (index >= totalSlides) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = totalSlides - 1;
      } else {
        slideIndex = index;
      }
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  
    function nextSlide() {
      showSlide(slideIndex + 1);
      resetSlideInterval(); // Reinicia o intervalo ao mudar de slide
    }
  
    function prevSlide() {
      showSlide(slideIndex - 1);
      resetSlideInterval(); // Reinicia o intervalo ao mudar de slide
    }
  
    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 3000); // Troca o slide a cada 3 segundos
    }
  
    function resetSlideInterval() {
      clearInterval(slideInterval); // Limpa o intervalo atual
      startSlideInterval(); // Inicia um novo intervalo
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    startSlideInterval(); // Começa o intervalo de slides automático ao carregar a página
  });
  