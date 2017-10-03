const max = document.body.getBoundingClientRect().height - window.innerHeight;
const progress = document.querySelectorAll('progress');

progress[0].setAttribute('max', max);

window.addEventListener('scroll', () => {
  const value = window.scrollY;
  if (value > 0) {
    progress[0].setAttribute('value', value);
  }
});