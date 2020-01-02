// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18),
//  взрослым (18_60) или пенсионером (60– ...).
function user_age() {
    let age = +prompt('Введите свой возраст', '30');

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\d]{1,3}/;
    let rez = reg.test(age);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || age === null || age === '' || age <= 0 || age >= 121) {        
        age = +prompt('Введите свой возраст', '30');
        rez = reg.test(age);    
    }

switch (true) {
    case age >= 0 && age <= 2:
        alert ("Вы младенец")
        break;
    case age >= 3 && age <= 10:
        alert ("Вы ребенок")
        break;
    case age >= 11 && age <= 18:
        alert ("Вы подросток")
        break;
    case age >= 19 && age <= 60:
        alert ("Вы взрослый человек")
        break;
    case age >= 61 && age <=100:
        alert ("Вы пенсионер")
        break;
    case age >= 111 && age <=120:
        alert ("Столько не живут")
         break;
    default:        
        break;
};
};

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен
//  на этой клавише (1–!, 2–@, 3–# и т. д).
function symbol() {
    let key = +prompt('Введите число от 0 до 9', '0');

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\d]{1}/;
    let rez = reg.test(key);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || key == null || key == '') {        
        key = +prompt('Введите число от 0 до 9', '0');
        rez = reg.test(key);    
    }

    switch (key) {
        case 0:
            alert ('(')
            break;
        case 1:
            alert ("!")
            break;
        case 2:
            alert ("@")
            break;
        case 3:
            alert ("#")
            break;
        case 4:
            alert ("$")
            break;
        case 5:
            alert ("%")
            break;
        case 6:
            alert ("^")
            break;
        case 7:
            alert ("&")
            break;
        case 8:
            alert ("*")
            break;
        case 9:
            alert (')')
            break;  
        default:
            alert ("Что-то пошло не так")
            break;
    };
};


// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
function threeNumber() {
    let number = +prompt('Введите трехзначное число', '100');

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[1-9][\d][\d]/;
    let rez = reg.test(number);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || number == null || number == '') {        
        number = +prompt('Введите трехзначное число', '100');
        rez = reg.test(number);    
    }

    numberThird = (number % 100) % 10;
    console.log(numberThird);
    numberSecond = Math.trunc((number % 100) / 10);
    console.log(numberSecond);
    numberFirst = Math.trunc(number / 100);
    console.log(numberFirst);
    
    if (numberThird == numberSecond || numberFirst == numberSecond || numberThird == numberFirst) {
        alert ("Здесь есть одинаковые цифры")
    } else {
        alert ("Здесь нет одинаковых цифр")
    }

    switch (true) {
        case numberThird == numberSecond || numberFirst == numberSecond:
            alert(`Одинаковые цифры: ${numberSecond}`)
            break;
        case numberFirst == numberSecond || numberThird == numberFirst:
            alert(`Одинаковые цифры: ${numberFirst}`)
            break;
        case numberThird == numberSecond || numberThird == numberFirst:
            alert(`Одинаковые цифры: ${numberThird}`)
            break;
        default:
            //alert("Что-то пошло не так")
            break;
};
};

// Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
function year() {
    let year = +prompt("Укажите год", '1987');

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\d]{1,4}/;
    let rez = reg.test(year);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || year == null || year == '') {        
        year = +prompt("Укажите год", '1987');
        rez = reg.test(year);    
    }


    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        alert ("Год високосный");
       
    } else {
        alert ("Год не високосный");
    };
};

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
function palindrome() {
    let number = +prompt('Введите пятизначное число', '12321');

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[1-9][\d]{4}/;
    let rez = reg.test(number);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez == false || number == null || number == '') {        
        number = +prompt('Введите пятизначное число', '12321');
        rez = reg.test(number);    
    }

    //Первый вариант решения задачи
    // let a = new String(number);
    
    // let palindrom = a.split('').reverse().join('');

    // if (palindrom == a) {
    //     alert ("Введенное Вами число - палиндром");
    // } else {
    //     alert ("Введенное Вами число не палиндром");
    // }

    //Второй вариант решения задачи
    numFifth = ((((number % 10000) % 1000) % 100 ) % 10);
    console.log(numFifth);
    numFourth = Math.trunc((number % 100) / 10);
    console.log(numFourth);
    numThird = Math.trunc((number % 1000) / 100);
    console.log(numThird);
    numSecond = Math.trunc((number % 10000) / 1000);
    console.log(numSecond);
    numFirst = Math.trunc(number / 10000);
    console.log(numFirst);
    
    if (numFifth == numFirst && numFourth == numSecond) {
        alert ("Введенное Вами число - палиндром")
    } else {
        alert ("Введенное Вами число не палиндром")
    };
};

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести
//  EUR, UAN или AZN, и получает в ответ соответствующую сумму.
function currency() {
    let dollar = +prompt("Укажите колличество долларов США", "100");

    //Добавление переменной на проверку валидности введенных символов
    let reg1 = /[\d]{1,20}/;
    let rez1 = reg1.test(dollar);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, пустую строку
    while (rez1 == false || dollar == null || dollar == '') {        
        dollar = +prompt("Укажите колличество долларов США", "100");
        rez1 = reg1.test(dollar);    
    }

    let currency = prompt(`В какую валюту Вы хотите перевести USD:
    EUR
    UAN
    AZN`, 'EUR'
    );

    //Добавление переменной на проверку валидности введенных символов
    let reg2 = /^EUR|UAN|AZN$/;
    let rez2 = reg2.test(currency);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, пустую строку
    while (rez2 == false || currency == null || currency == '') {        
        currency = prompt(`В какую валюту Вы хотите перевести USD:
        EUR
        UAN
        AZN`, 'EUR'
        );
        rez2 = reg2.test(currency);    
    }
    const usdEur = 0.9;
    const usdUan = 24.74;
    const usdAzn = 1.7;
    let sum;
    
    switch (true) {
        case currency == 'EUR':
            sum = dollar * usdEur;
            alert (`Сумма евро составит, ${sum}`);
            break;
        case currency == 'UAN':
            sum = dollar * usdUan;
            alert (`Сумма украинских гривен составит, ${sum}`);
            break;
        case currency == 'AZN':
            sum = dollar * usdAzn;
            alert (`Сумма азербайджанских манатов составит, ${sum}`);
            break;
        default:
            alert ("Что-то пошло не так")
            break;
    }; 
};

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//  от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
function purchase() {
    let purchase = +prompt("Введите сумму покупки", "больше 200");

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\d]{3,20}/;
    let rez = reg.test(purchase);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, пустую строку
    while (rez == false || purchase == null || purchase == '' || purchase <= 200) {        
        purchase = +prompt("Введите сумму покупки", "больше 200");
        rez = reg.test(purchase);    
    }

    let discount;
    let sum;

    switch (true) {
        case purchase >= 200 && purchase <= 300:
            discount = 0.03;
            sum = purchase - (discount * purchase);
            alert (`Сумма покупки со скидкой равна, ${sum}`);
            break;
        case purchase > 300 && purchase <= 500:
            discount = 0.05;
            sum = purchase - (discount * purchase);
            alert (`Сумма покупки со скидкой равна, ${sum}`);
            break;
        case purchase > 500:
            discount = 0.07;
            sum = purchase - (discount * purchase);
            alert (`Сумма покупки со скидкой равна, ${sum}`);
            break;
        default:            
            break;
};
};

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая
//  окружность поместиться в указанный квадрат.
function circleSquare() {
    let circle = +prompt("Введите длину окружности", "5");

    let reg1 = /[\d]{1,6}/;
    let rez1 = reg1.test(circle);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez1 == false || circle == null || circle == '' || circle <= 0 ) {        
        circle = +prompt("Введите длину окружности", "5");
        rez1 = reg1.test(circle);    
    }

    let square = +prompt("Введите периметр квадрата" , "5");

    let reg2 = /[\d]{1,6}/;
    let rez2 = reg2.test(square);
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена, число не должно быть меньше или равно нулю
    while (rez2 == false || square == null || square == '' || square <= 0 ) {        
        square = +prompt("Введите периметр квадрата" , "5");
        rez2 = reg2.test(square);    
    }

    let radius = circle / (2 * Math.PI);
    
    let side = square / 4;
    
    alert("Условие для окружности вписанной в квадрат R=a/2");
    console.log(radius);
    console.log(side);
    
    if (radius <= side / 2) {
        console.log(true);
    } else {
        console.log(false);
    };    
    
    if (radius <= side / 2) {
        alert ("Вписывается")
    } else {
        alert ("Не вписывается")
    };
};


// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За каждый правильный ответ начисляется 2 балла. После вопросов выведите 
// пользователю количество набранных баллов.
function questions() {
    
let questionOne = prompt("Назовите столицу Болгарии.", "София, Александрия, Лидия");
//Добавление переменной на проверку валидности введенных символов
let reg1 = /София|Александрия|Лидия/;
let rez1 = reg1.test(questionOne);
//Проверка на ввод данных: проверку валидности символов, нажатия Отмена, пустую строку
while (rez1 == false || questionOne == null || questionOne == '') {        
    questionOne = prompt("Назовите столицу Болгарии.", "София, Александрия, Лидия");
    rez1 = reg1.test(questionOne);    
}
let questionTwo = prompt(`Как имя писателя Азимова.
Варианты ответа: Борис, Айзек, Альберт`);

let questionThree = prompt(`Какая из этих птиц летает?.
Варианты ответа: Страус, Пингвин, Фламинго`);

let point = 0;

if (questionOne == 'София') {
    point = point + 2;
} else {
    point = 0;
}
console.log(point);
if (questionTwo == 'Айзек') {
    point = point + 2;
} else {
    point = point;
}
console.log(point);
if (questionThree == 'Фламинго') {
    point = point + 2;
} else {
    point = point;
}
console.log(point);
alert (`Сумма ваших набранных баллов равна, ${point}`)
};

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
function date() {
    let day = +prompt("Введите текущий день");
let month = +prompt("Введите текущий месяц");
let year = +prompt("Введите текущий год");

let date = new Date(year, month = month - 1, day);


let dayNext = new Date(date);
dayNext.setDate (date.getDate() + 1);


alert (`Следующий день, ${dayNext}`); 
};
