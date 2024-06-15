var countDownDate = new Date("Oct 20, 2021 14:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    effectDCircle(dias, horas, minutos, segundos);

}, 1000);

function effectDCircle(d, h, m, s) {
    const strokeDashoffset = 439;
    var circleSVG = document.getElementsByClassName('outer');

    var valPerDay = strokeDashoffset / 30; // Max 30 dias
    var sizeDay = strokeDashoffset - (valPerDay * d);
    circleSVG[0].style.strokeDashoffset = sizeDay;

    var valPerHour = strokeDashoffset / 24; // Max 24 horas
    var sizeHour = strokeDashoffset - (valPerHour * h);
    circleSVG[1].style.strokeDashoffset = sizeHour;

    var valPerMin = strokeDashoffset / 60; // Max 60 minutos
    var sizeMin = strokeDashoffset - (valPerMin * m);
    circleSVG[2].style.strokeDashoffset = sizeMin;

    var valPerSec = strokeDashoffset / 60; // Max 60 segundos
    var sizeSec = strokeDashoffset - (valPerSec * s);
    circleSVG[3].style.strokeDashoffset = sizeSec;
}
