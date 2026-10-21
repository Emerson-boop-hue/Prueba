let valor = 0;

const contadorEl = document.getElementById('contador');
const btnSumar = document.getElementById('btnSumar');

btnSumar.addEventListener('click', () => {
    valor++;
    contadorEl.textContent = valor;
});