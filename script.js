window.addEventListener('DOMContentLoaded', () => {
  const titleImage = document.querySelector('.animate-me');
  setTimeout(() => {
    titleImage.classList.add('active');
  }, 400);
  const track = document.querySelector('.scroll-track');
  let currentPage = 0;
  let isAnimating = false;
  const scrollThreshold = 50;
  window.addEventListener('wheel', (event) => {
    if (Math.abs(event.deltaY) < scrollThreshold) return;
    if (isAnimating) return;
    if (event.deltaY > 0 && currentPage === 0) {
      currentPage = 1;
      isAnimating = true;
      track.style.transform = 'translateY(-100vh)';
    } else if (event.deltaY < 0 &&currentPage === 1) {
      currentPage = 0;
      isAnimating =  true;
      track.style.transform = 'translateY(0vh)';
    }
    setTimeout(() => {
      isAnimating = false;
    }, 1200);
  });
});
