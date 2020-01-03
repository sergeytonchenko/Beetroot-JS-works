//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function cycle1 () {
let numberFirst = +prompt("Введите диапазон от", "0");

//Добавление переменной на проверку валидности введенных символов
let reg = /[\d\-]{1,20}/;
let rez1 = reg.test(numberFirst);
  
//Проверка на ввод данных: проверку валидности символов, нажатия Отмена
while (rez1 == false || numberFirst == '' || numberFirst == null) {        
    numberFirst = +prompt("Введите диапазон от", "0");
    rez1 = reg.test(numberFirst);
}

let numberSecond = +prompt("до", "10");
let rez2 = reg.test(numberSecond);
//Проверка на ввод данных: проверку валидности символов, нажатия Отмена
while (rez2 === false || numberSecond === null || numberSecond === '') {        
    numberSecond = +prompt("до", "10");
    rez2 = reg.test(numberSecond);
}

let sum = 0;

while (numberFirst <= numberSecond) {
    sum += numberFirst;
    numberFirst++;
}
alert(`Сумма чисел в заданном диапазоне равна ${sum}`);
};

//Запросить 2 числа и найти только наибольший общий делитель.
function cycle2 () {
    let firstNumber = +prompt("Введите первое натуральное число", "10");

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\d]{1,20}/;
    let rez1 = reg.test(firstNumber);  

    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена
    while (rez1 == false || firstNumber == '' || firstNumber == null) {        
        firstNumber = +prompt("Введите первое натуральное число", "10");
        rez1 = reg.test(firstNumber);
    }

    let secondNumber = +prompt("Введите второе натуральное число", "20");
    
    //Добавление переменной на проверку валидности введенных символов    
    let rez2 = reg.test(secondNumber);  

    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена
    while (rez2 == false || secondNumber == '' || secondNumber == null) {        
        secondNumber = +prompt("Введите второе натуральное число", "20");
        rez2 = reg.test(secondNumber);
    }
    
    while (firstNumber != 0 && secondNumber != 0) {
        if (firstNumber > secondNumber) {
            firstNumber = firstNumber % secondNumber;
        } else {
            secondNumber = secondNumber % firstNumber;
        }
    }
    alert(`Общим делителем Ваших чисел является число ${firstNumber + secondNumber}`);
};

//Запросить у пользователя число и вывести все делители этого числа.
function cycle3 () {
    let number = +prompt("Введите число", "5");

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\d]{1,20}/;
    let rez = reg.test(number);  

    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена
    while (rez == false || number == '' || number == null) {        
        number = +prompt("Введите число", "5");
        rez = reg.test(number);
    }

    let divider = number;
    let quantity;
    let arr = [];
    
    while (divider >= 1) {
        quantity = number % divider;
        
        if (quantity == 0) {
            arr.push(divider);
        } 
        divider--;
    }
    alert (`Делители числа ${number}: ${arr}`);
};

//Определить количество цифр в введенном числе.
function cycle4 () { 
    let number = +prompt("Введите число", "100");

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\d]{1,20}/;
    let rez = reg.test(number);  
    
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена
    while (rez == false || number == '' || number == null) {        
        number = +prompt("Введите число", "100");
        rez = reg.test(number);
    }

    //Первый вариант решения задачи
    // let a = new String(number);
    // let arr = a.split('');
    // alert(arr.length);

    let quantity = 0;
    
    while (number >= 1) {
        number = number / 10;
        quantity++;
    }
    alert (`Количество цифр в числе равно ${quantity}`);
};

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
// отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
function cycle5 () {

let num;

let a = 1;//переменная не обходимая для подсчета

let plus = 0;// положительные числа

let negative = 0;//отрицательные числа

let even = 0;// четные числа

let noEven = 0;//нечетные числа

let nul = 0;//нули

do {
    num = +prompt("Введите число", "10");

    //Добавление переменной на проверку валидности введенных символов
    let reg = /[\-\d]{1,20}/;
    let rez = reg.test(num);  
    
    //Проверка на ввод данных: проверку валидности символов, нажатия Отмена
    while (rez == false || num == '' || num == null) {        
        num = +prompt("Введите число", "10");
        rez = reg.test(num);
    }

    switch (true) {
        case num > 0:
            plus++;
            break;
        case num == 0:
            nul++;
            break;
        case num < 0:
            negative++;
            break;
        case num % 2 == 0:
            even++;
            break;
        case num % 2 != 0:
            noEven++;
            break;
    }
    a++;
} while (a <= 10);

alert(`Положительных чисел было ${plus};
 Отрицательных чисел было ${negative};
 Четных чисел было ${even};
 Нечетных чисел было ${noEven};
 Количество нулей ${nul}`);
};

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
// вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.
function cycle6 () { 
do {
    let firstNumber = +prompt(`Введите первое число`);

    let secondNumber = +prompt(`Введите второе число`);

    let action = prompt(`Введите действие`, "+ - * /");

    let result;

    switch (true) {
        case action == '+':
            result = firstNumber + secondNumber;
            break;
        case action == '-':
            result = firstNumber - secondNumber;
            break;
        case action == '*':
            result = firstNumber * secondNumber;
            break;
        case action == '/':
            result = firstNumber / secondNumber;
            break;
    }
    alert(`Результат равен ${result}`);
} while (confirm("Займемся математикой?"));
};

// Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
function cycle7 () { 
let number = prompt("Введите число");
let shift = prompt("На сколько цифр его сдвинуть?");

alert(number.slice(shift) + number.slice(0, shift));
};

// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?»
// и так до тех пор, пока пользователь нажимает OK.
function cycle8 () { 
let arr = ["воскресенье", "понедельник", "вторник", "среда", "четверг",
"пятница", "суббота"];

let a = 0;

do {
    a++;
    if (a == 7) {
    a = 0;  
    }
} while (confirm (`"Сегодня ${arr [a]}, хотите увидеть следующий день?"`));
};

// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
function cycle9 () {
let a;

for (let number = 2; number <= 9; number++) {
    let c = [];
    for (let b = 1; b <= 10; b++) {
        a = number * b;
        c.push(a);
    }
    document.writeln("Умножение на ", number, " = ", c, "<br>");
};
};

// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50,
// то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

function cycle10 () {
    alert("Загадайте число от 0 до 100");

    let N = 50;
    let c = 50;
    let b = 25;
    let d = 0;
    
    while (d == 0) {
        let a = prompt(`Ваше число > ${N},< ${N} или == ${N}?`, ">, <, ==");
        if (a == '>') {
            N = c + b;
            c = N;
            b = Math.round(b / 2);
            if (N == 101) {
            alert(`Ваше число 100`);
            break;
            }
        } if (a == '<') {
            N = c - b;
            c = N;
            b = Math.round(b / 2);
            if (N == -1) {
                alert(`Ваше число 0`);
                break;
            }
        } if (a == '==') {
            alert(`Ваше число ${N}`);  
            d = 1;
        };
    };
}




