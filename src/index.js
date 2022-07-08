import Template from './templates/Template.js';
console.log('hola');
console.log('como estas');

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
