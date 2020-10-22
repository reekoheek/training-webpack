console.log('Webpack training - 01-Intro');

window.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded and parsed. Sleep for a while');

  await sleep();

  const el = document.getElementById('message');
  el.innerHTML = 'Hello webpack';
});

function sleep (t = 1000) {
  return new Promise(resolve => setTimeout(resolve, t));
}
