// 2. Создать объект, хранящий в себе отдельно числитель и 
// знаменатель дроби, и следующие функции для работы с этим 
// объектом: 
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.


let fractionOne = {
    numerator: 2,
    denominator: 6,    
}

let fractionTwo = {
    numerator: 3,
    denominator: 5,    
}


function infoFraction(_fractionOne, _fractionTwo) {
    let fraction1 = `<li><span style="color: green;">Первая дробь </span>= ${_fractionOne.numerator}/${_fractionOne.denominator};</li><br/>`;
    let fraction2 = `<li><span style="color: green;">Вторая дробь </span>= ${_fractionTwo.numerator}/${_fractionTwo.denominator};</li><br/>`;
    let sumFraction = `<li><span style="color: green;">Сложение дробей </span>= ${((_fractionOne.numerator * _fractionTwo.denominator) + (_fractionTwo.numerator * _fractionOne.denominator)) / (_fractionTwo.denominator * _fractionOne.denominator)};</li><br/>`;
    let difFraction = `<li><span style="color: green;">Вычитание дробей </span>= ${((_fractionOne.numerator * _fractionTwo.denominator) - (_fractionTwo.numerator * _fractionOne.denominator)) / (_fractionTwo.denominator * _fractionOne.denominator)};</li><br/>`;
    let multFraction = `<li><span style="color: green;">Умножение дробей </span>= ${(_fractionOne.numerator * _fractionTwo.numerator) / (_fractionTwo.denominator * _fractionOne.denominator)};</li><br/>`;
    let divFraction = `<li><span style="color: green;">Деление дробей </span>= ${(_fractionOne.numerator * _fractionTwo.denominator) / (_fractionTwo.numerator * _fractionOne.denominator)};</li><br/>`;
    //Сокращение первой дроби
    let dif1;
    let dif2;
    let difMax;
    let reduction;

        if (_fractionOne.denominator % _fractionOne.numerator) {
            reduction = "Нечего сокращать";
        } else {
            if (_fractionOne.denominator > _fractionOne.numerator) {
                    dif1 = _fractionOne.denominator % _fractionOne.numerator;
                    difMax = dif1 + _fractionOne.numerator;
                } else {
                    dif2 = _fractionOne.numerator % _fractionOne.denominator;
                    difMax = dif2 + _fractionOne.denominator;
                }
                
            }
        reduction = `<li><span style="color: green;">Первую дробь можно переписать на </span>= ${_fractionOne.numerator / difMax}/${_fractionOne.denominator / difMax};</li><br/>`;
    //вывод результатов   
    document.getElementsByClassName("fraction")[0].innerHTML = `${fraction1} ${fraction2}
     ${sumFraction} ${difFraction} ${multFraction} ${divFraction} ${reduction}`;
}
infoFraction(fractionOne, fractionTwo);

