import './index.css';

console.log('Webpack training - 02-Loaders');

window.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded and parsed. Sleep for a while');

  await sleep();

  const el = document.getElementById('message');
  el.innerHTML = 'Webpack says <span class="green">hi</span> with <span class="red">style</span>';
});

function sleep (t = 1000) {
  return new Promise(resolve => setTimeout(resolve, t));
}
