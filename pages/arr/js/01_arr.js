// 1. Создать массив «Список покупок». Каждый элемент массива является объектом,
//  который содержит название продукта, необходимое количество и куплен или нет.
//  Написать несколько функций для работы с таким массивом.
let arr = [
    {
        name: 'broad',
        number: 2,
        buy: 'Куплен'
    },
    {
        name: 'milk',
        number: 0,
        buy: 'Не куплен'
    },
    {
        name: 'egg',
        number: 10,
        buy: 'Куплен'
    },
    {
        name: 'bacon',
        number: 0,
        buy: 'Не куплен'
    }
]
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты,
// а потом – купленные.
function printArr(_arr) { 
    //Сортировка массива
    _arr.sort(function (a, b) {
        if (a.buy > b.buy) {
          return -1;
        }
        if (a.buy < b.buy) {
          return 1;
        }
        return 0;
      });
    //Вывод списка покупок
    let tag = '<ul>';

    for (const key in _arr) {
        if (typeof _arr[key] == 'object') {
            let values = Object.values(_arr[key]);
            let keys = Object.keys(_arr[key]);
            for (let i = 0; i < keys.length; i++) {
            tag +=  `<li><span style="color: green;">${keys[i]}:</span> ${values[i]};<br/></li>`;
            }
        }
    }
    tag += '</ul>';
    document.querySelector('.list').innerHTML = tag;  
       
}

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим
// в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
function addArr(_arr) {
    let purchase = prompt('Добавьте покупку в список покупок', 'bacon');

    let reg1 = /[a-zA-Zа-яА-я]/;
    let rez1 = reg1.test(purchase);
    //Проверка на ввод данных
    while (rez1 == false || purchase == null || purchase == '') {        
        purchase = prompt('Добавьте покупку в список покупок', 'bacon');
        rez1 = reg1.test(purchase);    
    }

    let how = +prompt('Введите количество товара', '5');

    let reg2 = /[0-9]/;
    let rez2 = reg2.test(how);
    //Проверка на ввод данных
    while (rez2 == false || how == null || how == '' || how <= 0 ) {        
        how = +prompt('Введите количество товара', '5');
        rez2 = reg2.test(how);    
    }    
    let i = [];
    let newBuy = {
        name: purchase,
        number: how,
        buy: 'Куплен'
    }

    for (const key in _arr) {
        if (_arr[key].name.includes(purchase.toLowerCase())) {
            _arr[key].buy = 'Куплен';
            _arr[key].number += how;
            i.push(1);
        }
    }
    if (i.length == 0) {
        arr.push(newBuy);
    }
    
    printArr(arr);
}

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function byArr(_arr) {
    let purchase = prompt(`Какой товар Вы купили?
    milk;
    bacon;
    egg;
    broad`, 'bacon');
    
    let reg1 = /(bacon)|(milk)|(egg)|(broad)/;
    let rez1 = reg1.test(purchase.toLocaleLowerCase());
    //Проверка на ввод данных
    while (rez1 == false || purchase == null || purchase == '') {
        alert('Введите правильное название продукта');
        purchase = prompt(`Какой товар Вы купили?
        milk;
        bacon;
        egg;
        broad`, 'bacon');
        rez1 = reg1.test(purchase.toLocaleLowerCase());    
    }
    for (const key in _arr) {
        if (_arr[key].name.includes(purchase.toLowerCase())) {
            _arr[key].buy = 'Куплен';
            _arr[key].number += 1;
        }
        
    }
    printArr(arr);
}





