// JavaScript for the testimonial carousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
  AnimationEffect(u)
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

// Initialize the carousel with the first item active
showItem(currentIndex);
