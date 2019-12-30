// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
function user_name() {    

    let a = prompt("Назовите свое имя", "Сергей");  

    //Добавление переменной на проверку валидности введенных символов
    let reg = /^[а-яА-ЯёЁa-zA-Z\-\'\.]{1,20}$/;
    let rez = reg.test(a); 
    console.log(a);   

    //Проверка на ввод данных: проверку валидности символов, пустой строки, нажатия "Отмена" 
    while (rez == false || a === null || a === '') {        
        a = prompt("Назовите свое имя", "Сергей");              
        rez = reg.test(a);
    }
        a = a[0].toUpperCase() + a.slice(1); //Делает первую букву заглавной
        alert ("Привет, " + a + "!");
    
} 

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
//  Текущий год укажите в коде как константу.
function user_age() {
    let year = +prompt("Какого Вы года рождения?", "1990");

    //Проверка на ввод данных: пустой строки, нажатия Отмена, год рождения на ниже 1920 и не выше 2018
    while (typeof(year) === 'string' || year === null || year === '' || year < 1920 || year > 2018) {        
        year = +prompt("Какого Вы года рождения?", "1990");
    }

const GURRYEAR = 2020;

let age = GURRYEAR - year;

switch (true) {
    case age % 10 == 2 || age % 10 == 3 || age % 10 == 4:
        alert ("Вам " + age + " года");
        break;
    case age % 10 == 1:
        alert ("Вам " + age + " год");
    case age % 10 == 0 || age % 10 == 5 || age % 10 == 6 ||
         age % 10 == 7 || age % 10 == 8 || age % 10 == 9:
        alert ("Вам " + age + " лет");
    default:
        break;
}
};

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
function square() {
    let square = +prompt("Укажите длинну стороны квадрата", "4");      

    while (typeof(square) === 'string' || square === null || square === '' || square <= 0 ) {        
        square = +prompt("Укажите длинну стороны квадрата", "4");
    }
     let perimeter = 4 * square;

    alert ("Периметр Вашего квадрата равен " + perimeter);
};

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
function circle() {
    let radius = prompt("Укажите радиус окружности");

let area = Math.PI * Math.pow(radius, 2);

alert ("Площадь окружности равна " + area);
};

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
function distance() {
    let distance = prompt("Укажите растояние между городами в км");

let time = prompt("За сколько часов Вы хотите добраться?");

let speed = distance / time;

alert ("Вам необходимо двигаться со скоростью " + speed + " км/ч");
};

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
// Курс валюты храните в константе.
function currency() {
    let dollar = prompt("Укажите колличество долларов США");

const KURS = 0.9;

let evro = KURS * dollar;

alert ("Колличество евро по курсу на 27.10.2019 равно " + evro);
};

// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб
//  помещается на флешку.
function capacity() {
    let capacity = prompt("Укажите колличество Гб Вашей флешки");

    const file = 0.82;
    
    let number = capacity / file;
    
    alert ("Колличество файлов, размером 820Мб на Вашей флешке " + Math.trunc(number));
};

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
function chocolade() {
    let money = prompt("Сколько у Вас денег?");

let price = prompt("Сколько стоит шоколадка?");

let number = money / price;

let cashback = money % price;

alert ("Вы можете купить " + Math.round(number) + " шоколадок");

alert ("У Вас остается " + cashback + " денег");
};

// Запросите у пользователя трехзначное число и выведите его задом наперед.
// Для решения задачи вам понадобится оператор % (остаток от деления).
function number() {
    let number = prompt("Введите трехзначное число");

if (number >= 100 && number <= 999) {

    let first = number % 10;
    let four = number / 10;
    let second = Math.trunc(four) % 10;
    let third = Math.trunc(Math.trunc(four) / 10);
    alert ("Ваше перевернутое число " + first + second + third)
} 
else {
    alert ("Учите математику!!!");    
};
};

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых.
// Вывести сумму начисленных процентов.
function bank() {
    let number = prompt("Введите сумму");

const percent = 0.05;

let cash = ((number * percent) / 6);

alert ("Ваши проценты за два месяца равны " + cash);
};





