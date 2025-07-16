 let indice = 3;
    const slides = document.querySelectorAll('.slide');

    function mostrarSlide(i) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[i].classList.add('active');
    }

    function cambiarSlide(direccion) {
      indice = (indice + direccion + slides.length) % slides.length;
      mostrarSlide(indice);
    }