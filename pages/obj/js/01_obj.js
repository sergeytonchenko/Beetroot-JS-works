// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//  Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
    Производитель: "Ford",
    Модель: "Shelby Mustang GT 500",
    Год_выпуска: 1967,
    Максимальная_скорость: "204 км/ч",
    Объем_цилиндра: "7010 куб.см",
    Разгон_до_100: "4.3 сек",
    Мощность_двигателя: "350 л.с.",
};

function printText(_car) {

    for (const key in _car) {
    let newLi = document.createElement("li");
    newLi.textContent = `"${key}": ${_car[key]}`;
    let h = document.getElementById("ala");
    h.insertAdjacentElement("beforeend", newLi);
}
        
};
function blurCar() {
    let blur = document.getElementsByClassName("car");
    blur[0].style.filter = 'none';
    
};
function visiBlock() {
    let visi = document.getElementsByClassName("info__block");
    visi[0].style.visibility = 'visible';
    
};
function task() {
    let distance = document.getElementById("distance").value;
    let speed = document.getElementById("speed").value;

    while (distance == '' || speed == '') {
        alert('Заполните поле ввода');p
    }

    let time;
    let time1 = (distance / speed);
    if (time1 <= 4) {
        time = time1;
    } else {
        time = ((time1 / 4) - 1) + time1;
    }
    
    document.getElementsByClassName("time")[0].innerHTML = `Затраченное время: ${time.toFixed(2)} ч.`;    
};
function dontDrink() {
    let drink = document.getElementsByClassName("drink");
    drink[0].style.visibility = 'visible';
}



