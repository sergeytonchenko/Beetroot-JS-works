//Функция валидации;
function validNumber(_param, _question) {

    let reg = /\d{1,7}/;
    let rez = reg.test(_param);
    
    while (rez == false || _param == null || _param == '') {        
        _param = +prompt(_question, '10');
        rez = reg.test(_param);        
    }
    return _param;
}

// Написать функцию, которая принимает 2 числа и 
// возвращает -1, если первое меньше, чем второе; 1 – 
// если первое больше, чем второе; и 0 – если числа 
// равны.
function checkNumber() {
    
    let _question1 = 'Введите первое число';
    let _variableOne = +prompt(_question1, '10');
    let numberOne = validNumber(_variableOne, _question1);    

    let _question2 = 'Введите второе число';
    let _variableTwo = +prompt(_question2, '10');
    let numberTwo = validNumber(_variableTwo, _question2);

    if (numberOne == numberTwo) {
      alert (0);
    } else if (numberOne > numberTwo) {
        alert (1);
    } else {
        alert (-1);
    }
}

// Написать функцию, которая вычисляет факториал переданного ей числа.

function calcFactorial() {

    let _question = 'Введите число';
    let _variable = +prompt(_question, '10');
    let number = validNumber(_variable, _question);

    result = 1;
    while (number >= 1) {
    result *= number--;        
    }
    alert(`Факториал числа равен ${result}`);
    
}
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.

function checkNumber4() {
    let numberOne = prompt('Введите первое число');

let numberTwo = prompt('Введите второе число');

let numberThree = prompt('Введите третье число');
    alert (numberOne + numberTwo + numberThree);
  }

  // Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


function calcSquare() {
    let sideA = +prompt('Введите сторону А');

let sideB = +prompt('Введите сторону В');
    if (sideA == 0) {
        sgua = sideB * sideB;
    } else if (sideB == 0) {
        sgua = sideA * sideA;
    } else {
        sgua = sideB * sideA;
    }

    alert(`Площадь прямоугольника равна ${sgua}`);
}
// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

function checkNumber1() {
    let num = +prompt(`Введите число`);
    b = num;
    d = 0;

    while (num > 0) {
        num--;
        a = b % num;
        if (a == 0) {
            c = num;
            d = d + c;
        }
    }
    if (d == b) {
        alert(`Ваше число совершенно`);
    } else {
        alert(`Ваше число не совершенно`);
    }
}
// Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
// и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function checkNumber2() {
    let firstNumber = +prompt(`Введите первое число диапазона`);

let secondNumber = +prompt(`Введите второе число диапазона`);

    while (firstNumber <= secondNumber) {
        sum = firstNumber;
        b = sum;
        d = 0;
        while (sum > 0) {
            sum--;
            a = b % sum;
            if (a == 0) {
                c = sum;
                d = d + c;
            }
        }
        if (d == b) {
            alert(d);
        }

        firstNumber++;

    }

}
// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формат
// е «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.


function getDate1() {
    let hh = +prompt(`Введите часы`);

let mm = +prompt(`Введите минуты`);

let ss = +prompt(`Введите секунды`);

    if (hh < 10) hh = '0' + hh;

    if (mm < 10) mm = '0' + mm;

    if (ss < 10) ss = '0' + ss;

    if (hh > 23 || mm > 59 || ss > 59) return false;

    alert  (hh + ':' + mm + ':' + ss);
    
}
// Вариант решения задачи с текущем временем.
// function getDate(date) {

//     let hh = date.getHours();
//     if (hh < 10) hh = '0' + hh;

//     let mm = date.getMinutes();
//     if (mm < 10) mm = '0' + mm;

//     let ss = date.getSeconds();
//     if (ss < 10) ss = '0' + ss;

//     return hh + ':' + mm + ':' + ss;

// }

// let date = new Date();

// alert(getDate(date));

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function getDate2() {
    let hh = +prompt(`Введите часы`);

let mm = +prompt(`Введите минуты`);

let ss = +prompt(`Введите секунды`);

    if (hh > 23 || mm > 59 || ss > 59) return false;

    alert (`Введенное Вами время в секундах = ${(hh * 3600) + (mm * 60) + ss}сек`);
    
}
// Написать функцию, которая принимает количество секунд, переводит их в часы,
// минуты и секунды и возвращает в виде строки «чч: мм: сс».

function getDate3() {
    let sec = +prompt(`Введите количество секунд`);

    let hh = Math.trunc(sec / 3600);

    let mm = Math.trunc((sec - (hh * 3600)) / 60);
    
    let ss = sec - (hh * 3600) - (mm * 60);

    if (hh > 23 || mm > 59 || ss > 59) return false;

    if (hh < 10) hh = '0' + hh;

    if (mm < 10) mm = '0' + mm;

    if (ss < 10) ss = '0' + ss;

    alert (hh + ':' + mm + ':' + ss);

}
// Написать функцию, которая считает разницу между датами.Функция принимает 6 параметров,
// которые описывают 2 даты, и возвращает результат в виде строки «чч: мм: сс».
// При выполнении задания используйте функции из предыдущих 2 - х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите обратно в «чч: мм: сс».

function getDate4() {
    
let hh1 = +prompt(`Введите часы первого времени`);

let mm1 = +prompt(`Введите минуты первого времени`);

let ss1 = +prompt(`Введите секунды первого времени`);

let hh2 = +prompt(`Введите часы второго времени`);

let mm2 = +prompt(`Введите минуты второго времени`);

let ss2 = +prompt(`Введите секунды второго времени`);

    if (hh1 > 23 || mm1 > 59 || ss1 > 59) return false;

    firstDate =  (hh1 * 3600) + (mm1 * 60) + ss1;

    if (hh2 > 23 || mm2 > 59 || ss2 > 59) return false;

    secondDate = (hh2 * 3600) + (mm2 * 60) + ss2;

    if (secondDate > firstDate) {
        result = secondDate - firstDate;
    } else {
        result = firstDate - secondDate;
    }

    let hh3 = Math.trunc(result / 3600);

    let mm3 = Math.trunc((result - (hh3 * 3600)) / 60);
    
    let ss3 = result - (hh3 * 3600) - (mm3 * 60);

    if (hh3 > 23 || mm3 > 59 || ss3 > 59) return false;

    if (hh3 < 10) hh3 = '0' + hh3;

    if (mm3 < 10) mm3 = '0' + mm3;

    if (ss3 < 10) ss3 = '0' + ss3;

    alert (`Разница во времени равна ${hh3 + ':' + mm3 + ':' + ss3}`) ;

   }





























  



  


