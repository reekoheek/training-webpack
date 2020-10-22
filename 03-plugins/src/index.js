import './index.css';

console.log('Webpack training - 03-Plugins');

window.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded and parsed. Sleep for a while');

  await sleep();

  const el = document.getElementById('message');
  el.innerHTML = 'Webpack says <span class="traffic">hi</span> with <span class="traffic">style</span>';

  changeTrafficColor([...document.querySelectorAll('.traffic')])
});

function sleep (t = 1000) {
  return new Promise(resolve => setTimeout(resolve, t));
}

const COLORS = ['red', 'green', 'blue'];

function changeTrafficColor (els) {
  els.forEach(el => {
    el.classList.remove(...COLORS);
    el.classList.add(COLORS[Math.floor(Math.random() * 3)]);
  })

  setTimeout(() => changeTrafficColor(els), 1000);
}
