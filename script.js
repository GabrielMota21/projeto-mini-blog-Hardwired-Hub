const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  let currentIndex = 0;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });