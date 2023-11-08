const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(() => {
    let dateToday = new Date();

    let hour = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    horas.textContent = hour.toString().padStart(2, '0')
    minutos.textContent = minutes.toString().padStart(2, '0')
    segundos.textContent = seconds.toString().padStart(2, '0')
    

});