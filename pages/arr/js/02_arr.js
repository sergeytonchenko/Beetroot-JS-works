// 2. Создать массив, описывающий чек в магазине. 
//Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции:
let check = [
    {
        name: 'broad',
        number: 2,
        price: 10
    },
    {
        name: 'milk',
        number: 1,
        price: 18
    },
    {
        name: 'egg',
        number: 10,
        price: 2.8
    },
    {
        name: 'bacon',
        number: 3,
        price: 45
    }
];
// Распечатка чека на экран;
function printCheck(_check) {
   
    let tag = 'Чек покупки <ul>';

    for (const key in _check) {
        
        if (typeof _check[key] == 'object') { 
               
            let values = Object.values(_check[key]);
            let keys = Object.keys(_check[key]);
        
            for (let i = 0; i < keys.length; i++) {
            tag +=  `<li><span style="color: blue;">${keys[i]}:</span> ${values[i]};<br/></li>`;
            }
        }
    }
    tag += '</ul>';
    document.querySelector('.list').innerHTML = tag;
}
// Подсчет общей суммы покупки;
function sum(_check) {
    let sum = 0;
    for (let i = 0; i < _check.length; i++) {
        sum = sum + (_check[i].price * _check[i].number);
    }
    document.querySelector('.sum').innerHTML = `Общая сумма покупки составила: ${sum};<br/>`;
}

// Получение самой дорогой покупки в чеке;
function costly(_check) {
    _check.sort(function (a, b) {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });    
      document.querySelector('.costly').innerHTML = `Самый дорогостоящий товар в чеке: ${_check[0].name};<br/>`;  
}

// Подсчет средней стоимости одного товара в чеке.
function averageCost(_check) {
    let sum = 0;
    for (let i = 0; i < _check.length; i++) {
        sum = sum + _check[i].price;
    }
    document.querySelector('.averageCost').innerHTML = `Средняя стоимость товара в чеке: ${sum / _check.length};<br/>`;
}
