const images = [
  './images/kluchar.jpg',
  './images/kluchar1.jpg'
];

let current = 0;
const bg = document.getElementById('bg-hero');

function changeBackground() {
  current = (current + 1) % images.length;
  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = `url('${images[current]}')`;
    bg.style.opacity = 1;
  }, 1000);
}

bg.style.backgroundImage = `url('${images[0]}')`;
setInterval(changeBackground, 5000);