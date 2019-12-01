function cycle1 () {
let numberFirst = +prompt("Введите диапазон от");

let numberSecond = +prompt("до");

let sum = 0;

while (numberFirst <= numberSecond) {

    sum += numberFirst;

    numberFirst++;

}
alert(`Сумма чисел в заданном дмапазоне равна ${sum}`);
};


function cycle2 () {
    let firstNumber = +prompt("Введите первое число");
    let secondNumber = +prompt("Введите второе число");
    
    
    while (firstNumber != 0 && secondNumber != 0) {
        if (firstNumber > secondNumber) {
            firstNumber = firstNumber % secondNumber;
        } else {
            secondNumber = secondNumber % firstNumber;
        }
    }
    alert(`Общим делителем Ваших чисел является число ${firstNumber + secondNumber}`);
};

function cycle3 () {
    let number = +prompt("Введите число");

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
    alert (`"Количество делителей числа равно", ${arr}`);
};

function cycle4 () { 
    let number = +prompt("Введите число");

    let quantity = 0;
    
    while (number >= 1) {
        number = number / 10;
        quantity++;
    }
    alert (`"Количество цифр в числе равно", ${quantity}`);
};

function cycle5 () { 
let num;

let a = 1;

let plus = 0;

let negative = 0;

let even = 0;

let noEven = 0;

let nul = 0;

do {
    num = +prompt(`Введите число`);
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

alert(`Положительных чисел было ${plus}
 Отрицательных чисел было ${negative}
 Четных чисел было ${even}
 Нечетных чисел было ${noEven}
 Количество нулей ${nul}`);
};

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

function cycle7 () { 
let number = prompt("Введите число");
let shift = prompt("На сколько цифр его сдвинуть?");

alert(number.slice(shift) + number.slice(0, shift));
};


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

