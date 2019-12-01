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
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function printArr(_arr) { 
    //Сортировка массива
    _arr.sort(function (a, b) {
        if (a.buy > b.buy) {
          return 1;
        }
        if (a.buy < b.buy) {
          return -1;
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
    document.getElementsByClassName("list")[0].innerHTML = tag;
    
       
}

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function addArr(_arr) {
    let purchase = prompt('Добавьте покупку в список покупок');
    let how = +prompt('Введите колличество товара');
    let flag = false;

    let newBuy = {
        name: purchase,
        number: how,
        buy: 'Куплен'
    }
    
    for (const key in _arr) {
        if (_arr[key].name.includes(purchase.toLowerCase())) {
            _arr[key].buy = 'Куплен';
            _arr[key].number += how;
        } if (!flag) {
            _arr.push(newBuy);
            flag = !flag;
        } else {
            if (!flag) {
                _arr.push(newBuy);
                flag = !flag;
            }
        }
    }
    printArr(arr);
}

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function byArr(_arr) {
    let purchase = prompt('Добавьте товар в список покупок');
    
    for (const key in _arr) {
        if (_arr[key].name.includes(purchase.toLowerCase ())) {
            _arr[key].buy = 'Куплен';
            _arr[key].number += 1;
        }
        
    }
    printArr(arr);
}





