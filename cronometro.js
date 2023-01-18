var countDownData = new Data("Out20, 2021 14:00.00").getTime();

    var x =setInterval(function () {
        var now = new Data().getTime();

        var distance = countDownData - now;

        var dia = Math.floor(distance / (1000 * 60 * 60 * 24))
var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
var segundos = Math.floor((distance % (1000 * 60)) / 1000);

        documentgetElementByld("dias").innerHTML = dias;
        documentgetElementByld("horas").innerHTML = horas;
        documentgetElementByld("minutos").innerHTML = minutos;
        documentgetElementByld("segundos").innerHTML = segundos;

        effectDCircle(dias, horas, minutos, segundos);
  
}, 1000);

effectDCircle = function (d, h, m, s) {

    const max_seg = 60;
    const max_min = 60;
    const max_hour = 24;
    const max_day = 30;


    const strokeDashoffset=439;

    var circleSVG=DocumentgetElementsByClassName('outer');

    var valPerDay=strokeDashoffset/max_day;
    var size=strokeDashoffset-(valPerDay*d);
    circleSVG[0].style.strokeDashoffset=size;

    var valPerDay=strokeDashoffset/max_hour;
    var size=strokeDashoffset-(valPerHour*h);
    circleSVG[1].style.strokeDashoffset=size;

    var valPerDay=strokeDashoffset/max_min;
    var size=strokeDashoffset-(valPerMin*m);
    circleSVG[2].style.strokeDashoffset=size;

    var valPerDay=strokeDashoffset/max_sec;
    var size=strokeDashoffset-(valPerSecond*s);
    circleSVG[3].style.strokeDashoffset=size;
    

}