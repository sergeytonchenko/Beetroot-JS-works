// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и 
//значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью 
// document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями,
// перечисленными в массиве.

let styles = [
    {
    color: 'green',
    "font-size": '20px',
    "text-decoration": 'line-through;'
    }, 
    {
    color: 'purple',
    "font-size": '50px',
    "text-decoration": 'underline'
    }, 
    {
    color: 'pink',
    "font-size": '70px',
    "text-decoration": 'overline'
    }
];

function textStyle(_styles) {
    let textNo = document.querySelector('.textOn').value;

    if (textNo == '') {
        alert('Введите текст');
    } else {
        let text = '<ul>';

    for (const key in _styles) {
    let values = Object.values(_styles[key]);
    let keys = Object.keys(_styles[key]);

    text += `<li style="${keys[0]}: ${values[0]};
    ${keys[1]}: ${values[1]};
    ${keys[2]}: ${values[2]};">${textNo};</li><br/>`;
    
    text += '</ul>';    
    }
    document.querySelector('.styleText').innerHTML = text;
    }     
}


    