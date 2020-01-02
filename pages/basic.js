// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
function user_name() {    

    let a = prompt("Назовите свое имя", "Сергей");  

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[а-яА-ЯёЁa-zA-Z]{1,20}/;
    let rez = reg.test(a);     

    //Проверка на ввод данных: проверку валидности символов, пустой строки, нажатия "Отмена" 
    while (rez == false || a === null || a === '') {        
        a = prompt("Назовите свое имя", "Сергей");              
        rez = reg.test(a);
    }
        a = a.toLowerCase();//Убираем все заглавные буквы, если значение введено с CapsLock
        a = a[0].toUpperCase() + a.slice(1); //Делает первую букву заглавной
        alert ("Привет, " + a + "!");
    
} 

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
//  Текущий год укажите в коде как константу.
function user_age() {
    let year = +prompt("Какого Вы года рождения?", "1990");
    
    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{4}/;
    let rez = reg.test(year); 
    
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, год рождения на ниже 1920 и не выше 2018
    while (rez == false || year === null || year === '' || year < 1920 || year > 2018) {        
        year = +prompt("Какого Вы года рождения?", "1990");
        rez = reg.test(year);
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

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{1,20}/;
    let rez = reg.test(square); 

    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || square === null || square === '' || square <= 0 ) {        
        square = +prompt("Укажите длинну стороны квадрата", "4");
        rez = reg.test(square);
    }
     let perimeter = 4 * square;

    alert ("Периметр Вашего квадрата равен " + perimeter);
};

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
function circle() {
    let radius = +prompt("Укажите радиус окружности", "2");

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{1,20}/;
    let rez = reg.test(radius);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || radius === null || radius === '' || radius <= 0 ) {        
        radius = +prompt("Укажите радиус окружности", "2");
        rez = reg.test(radius);    
    }

    let area = (Math.PI * Math.pow(radius, 2)).toFixed(2);

    alert ("Площадь окружности равна " + area);
};

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
function distance() {
    let distance = +prompt("Укажите растояние между городами в км", '5');

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{1,6}/;
    let rez1 = reg.test(distance);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez1 == false || distance === null || distance === '' || distance <= 0 ) {        
        distance = +prompt("Укажите растояние между городами в км", '5');
        rez1 = reg.test(distance);    
    }
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    let time = +prompt("За сколько часов Вы хотите добраться?", '1');    
    let rez2 = reg.test(time);
    
    while (rez2 == false || time === null || time === '' || time <= 0 ) {        
        time = +prompt("За сколько часов Вы хотите добраться?", '1');
        rez2 = reg.test(time);    
    }
    
    let speed = (distance / time).toFixed(2);

    alert ("Вам необходимо двигаться со скоростью " + speed + " км/ч");
};

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
// Курс валюты храните в константе.
function currency() {
    let dollar = +prompt("Укажите колличество долларов США", '100');
    const KURS = 0.9;
    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{1,15}/;
    let rez = reg.test(dollar);

    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || dollar === null || dollar === '' || dollar <= 0 ) {        
        dollar = +prompt("Укажите колличество долларов США", '100');
        rez = reg.test(dollar);    
    }    

    let evro = KURS * dollar;

    alert ("Колличество евро по курсу на 27.10.2019 равно " + evro);
};

// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб
//  помещается на флешку.
function capacity() {
    let capacity = +prompt("Укажите колличество Гб Вашей флешки", '16');
    const file = 0.82;
    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{1,8}/;
    let rez = reg.test(capacity);

    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || capacity === null || capacity === '' || capacity <= 0 ) {        
        capacity = +prompt("Укажите колличество Гб Вашей флешки", '16');
        rez = reg.test(capacity);    
    } 
        
    let number = capacity / file;
    
    alert ("Колличество файлов, размером 820Мб на Вашей флешке " + Math.trunc(number));
};

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
function chocolade() {
    let money = +prompt("Сколько у Вас денег?", '100');    

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{1,6}/;
    let rez1 = reg.test(money);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez1 == false || money === null || money === '' || money <= 0 ) {        
        money = +prompt("Сколько у Вас денег?", '100');
        rez1 = reg.test(money);    
    }
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    let price = +prompt("Сколько стоит шоколадка?", '30');    
    let rez2 = reg.test(price);
    
    while (rez2 == false || price === null || price === '' || price <= 0 ) {        
        price = +prompt("Сколько стоит шоколадка?", '30');
        rez2 = reg.test(price);    
    }

    let number = money / price;//Считаем колличество шоколадок, которое можно купить

    let cashback = money % price;//Считаем сдачу

    alert ("Количество шоколадок, которое Вы можете купить равно " + Math.round(number));

    alert ("У Вас остается " + cashback + " денег");
};

// Запросите у пользователя трехзначное число и выведите его задом наперед.
// Для решения задачи вам понадобится оператор % (остаток от деления).
function number() {
    let number = +prompt("Введите трехзначное число", '378');

    //Добавление переменной на проверку валидности введенных символов
    //число должно быть трехзначным и не начинатся на ноль
    let reg = /[1-9][0-9][0-9]/;
    let rez = reg.test(number);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || number === null || number === '') {        
        number = +prompt("Введите трехзначное число", '378');
        rez = reg.test(number);    
    }

    let first = number % 10;//Узнаем последнюю цифру числа
    let four = number / 10;
    let second = Math.trunc(four) % 10;//Узнаем вторую цифру числа
    let third = Math.trunc(Math.trunc(four) / 10);//Узнаем первую цифру числа

    if (first == 0 && second == 0) {
        alert ("Ваше перевернутое число " + third);
    } else if (first == 0) {
        alert ("Ваше перевернутое число " + second + third);//Переворачиваем число
    } else {
        alert ("Ваше перевернутое число " + first + second + third);//Переворачиваем число
    }
} 

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых.
// Вывести сумму начисленных процентов.
function bank() {
    let number = +prompt("Введите сумму", '1000');
    const percent = 0.05;//Годовой процент на депозит

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[0-9]{1,6}/;
    let rez = reg.test(number);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || number === null || number === '' || number <= 0 ) {        
        number = +prompt("Введите сумму", '1000');
        rez = reg.test(number);    
    }
    
    let moneyPecent = number * percent;//Узнаем сколько денег мы получим с процентной ставки за год
    let cash = (moneyPecent / 6).toFixed(3);//Узнаем сколько денег мы получим с процентной ставки два месяца
    
    alert ("Ваши проценты за два месяца равны " + cash);
};





