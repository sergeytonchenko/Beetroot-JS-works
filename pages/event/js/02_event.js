// 2. Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать
//  данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

let _arr = [42, 36, 709, 0, 88, 12, 3, 27, 135, 276, 5, 7, 48];

let table = document.createElement('table');
table.setAttribute('bgcolor', 'grey');
table.setAttribute('border', 2);
table.setAttribute('height', '500px');
table.setAttribute('width', '500px');
table.setAttribute("id", 'table');


let tr1 = document.createElement('tr');
table.appendChild(tr1);
for (let d = 0; d < _arr.length; d++) {
    let th = document.createElement('th');
    tr1.appendChild(th);
    th.classList.add("Числа");
    th.style.cursor = 'pointer';
    th.innerText = 'Числа';
};
for (let a = 0; a < _arr.length; a++) {
    const element = _arr[a];
    let _tr2 = document.createElement('tr');
    table.appendChild(_tr2);
    for (let b = 0; b < _arr.length; b++) {
        let td = document.createElement('td');
        // td.classList.add(element);
        td.innerText = element;
        _tr2.appendChild(td);
    }
};
document.body.appendChild(table);

for (let h = 0; h <= table.rows.length - 1; h++) {
    let th0 = document.getElementsByClassName('Числа');
    th0[h].onclick = function () {
        let arr2 = [];
        //Получаем данные из выбранной колонки;
        for (let g = 1; g <= table.rows.length - 1; g++) {
            let el2 = table.rows[g].cells[h].innerHTML;
            arr2.push(el2);
        }
        //Сортируем массив;
        arr2.sort(function (a, b) {
            return a - b;
        });
        // console.log(arr2);
        //Добавляем отсортированный массив в выбранную колонку;
        for (let t = 1; t <= table.rows.length - 1; t++) {

            table.rows[t].cells[h].innerHTML = arr2[t - 1];


        }
    };
}