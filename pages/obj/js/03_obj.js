// 3. Создать объект, описывающий время (часы, минуты, секунды),
// и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени,
//  может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд,
//   то должно получиться «20:31:15», а не «20:30:75».

let date =  {
    hours: 20,
    minutes: 30,
    seconds: 10
}

function getDate(_date) {

    if (_date.hours < 10) _date.hours = '0' + _date.hours;

    if (_date.minutes < 10) _date.minutes = '0' + _date.minutes;

    if (_date.seconds < 10) _date.seconds = '0' + _date.seconds;

    let time = _date.hours + ':' + _date.minutes + ':' + _date.seconds;

    document.querySelector('.time').innerHTML = time;    
    
}

function shiftSecond(_date) {
    
    let shiftSec = +prompt ("Введите секунды");

    let allSec = ((_date.hours * 3600) + (_date.minutes * 60) + _date.seconds);

    let result = shiftSec + allSec;    
    
    let hh1 = Math.trunc(result / 3600);

    let mm1 = Math.trunc((result - (hh1 * 3600)) / 60);

    let ss1 = result - (hh1 * 3600) - (mm1 * 60);
    
    if (hh1 < 10) hh1 = '0' + hh1;

    if (mm1 < 10) mm1 = '0' + mm1;

    if (ss1 < 10) ss1 = '0' + ss1;

    let resSec;

    let dd1;

    if (hh1 >=24) {
        dd1 = Math.trunc(hh1 / 24);
        hh1 -= (dd1*24);
        if (hh1 < 10) hh1 = '0' + hh1;
        resSec =  dd1 + 'д ' + hh1 + ':' + mm1 + ':' + ss1;
    } else {
        resSec =  hh1 + ':' + mm1 + ':' + ss1;
    }
    document.querySelector('.time').innerHTML = resSec;
        
}

function shiftMinutes(_date) {
    
    let shiftMin = +prompt ("Введите минуты");

    let allMin = ((_date.hours * 60) + _date.minutes);

    let result = shiftMin + allMin;    
    
    let hh2 = Math.trunc(result / 60);

    let mm2 = Math.trunc(result - (hh2 * 60));
    
    if (hh2 < 10) hh2 = '0' + hh2;

    if (mm2 < 10) mm2 = '0' + mm2;

    let resMin;

    let dd2;

    if (hh2 >=24) {
        dd2 = Math.trunc(hh2 / 24);
        hh2 -= (dd2*24);
        if (hh2 < 10) hh2 = '0' + hh2;
        resMin =  dd2 + 'д ' + hh2 + ':' + mm2 + ':' + _date.seconds;
    } else {
        resMin =  hh2 + ':' + mm2 + ':' + _date.seconds;
    }   
    document.querySelector('.time').innerHTML = resMin;
    
}

function shiftHours(_date) {
    
    let shiftHour = +prompt ("Введите часы");

    let hh3 = _date.hours + shiftHour;

    let resHour;

    let dd3;

    if (hh3 >=24) {
        dd3 = Math.trunc(hh3 / 24);
        hh3 -= (dd3*24);
        if (hh3 < 10) hh3 = '0' + hh3;
        resHour =  dd3 + 'д ' + hh3 + ':' + _date.minutes + ':' + _date.seconds;
    } else {
        resHour =  hh3 + ':' + _date.minutes + ':' + _date.seconds;
    }   
    document.querySelector('.time').innerHTML = resHour;
    
}