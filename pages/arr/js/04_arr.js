// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20) и названия факультета, 
// для которого она предназначена.
// Написать несколько функций для работы с ним.
let room = [
    {
        name: '233',
        site: 18,      
        faculty: 'front-end'
    },
    {
        name: '256',
        site: 15,      
        faculty: 'front-end'
    },
    {
        name: '240',
        site: 10,      
        faculty: 'web-designer'
    },
    {
        name: '236',
        site: 12,      
        faculty: 'python'
    },
    {
        name: '221',
        site: 14,      
        faculty: 'react'
    }
];
// Вывод на экран всех аудиторий;
function printArr(_room) {        
     
    let tag = '<ul>';

    for (const key in _room) {
        if (typeof _room[key] == 'object') {
            let values = Object.values(_room[key]);
            let keys = Object.keys(_room[key]);
            for (let i = 0; i < keys.length; i++) {
            tag +=  `<li><span style="color: green;">${keys[i]}: </span>${values[i]};<br/></li>`;
            }
        }
    }
    tag += '</ul>'
    document.querySelector('.list').innerHTML = tag;    
};

// Вывод на экран аудиторий для указанного факультета;
function audFacul(_room) {
    let auditFacult = prompt('Введите название факультета', 'front-end');
    //Проверка на ввод данных
    while (auditFacult == null || auditFacult == '') {        
        auditFacult = prompt('Введите название факультета', 'front-end');           
    }
    
    let tag = '<p>Аудитории для Вашего факультета:</p><ul>';
    let tag2 = '<p>Такого факультета не существует</p>';
    let arr = [];  
    
    for (const key in _room) {        
        if (auditFacult.toLowerCase() == _room[key].faculty) {
            arr.push(_room[key].faculty);
            tag += `<li>Аудитория №<span style="color: green;">
                    ${_room[key].name}</span>, количество мест ${_room[key].site}<br/></li>`;            
        } 
    }
    if (arr.length == 0) {
        document.querySelector('.sum').innerHTML = tag2;
    } else {
        tag += '</ul>';
        document.querySelector('.sum').innerHTML = tag; 
    }    
};

// // Функция сортировки аудиторий по названию (по алфавиту).
function sortAud(_room) { 
    
    _room.sort(function (a, b) {
        return a.name - b.name;
    });
    printArr(room);
};

// Функция сортировки аудиторий по количеству мест;
function sortSite(_room) { 
    _room.sort(function (a, b) {
        if (a.site > b.site) {
          return 1;
        }
        if (a.site < b.site) {
          return -1;
        }
        return 0;
    });
    printArr(room);
};

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
function siteStud(_room) {
    let auditFacult = prompt('Введите название факультета', 'front-end');    
    //Проверка на ввод данных
    while (auditFacult == null || auditFacult == '') {        
        auditFacult = prompt('Введите название факультета', 'front-end');           
    }

    let numberStudents = +prompt('Количество студентов', '10');

    let reg = /[0-9]/;
    let rez = reg.test(numberStudents);
    //Проверка на ввод данных
    while (rez == false || numberStudents == null || numberStudents == '' || numberStudents <= 0 ) {        
        numberStudents = +prompt('Количество студентов', '10');
        rez = reg.test(numberStudents);    
    }

    let tag = '<p>Для Вашей группы подходят следующие аудитории:</p><ul>';
    let tag2 = '<p>Подходящей аудитории нет</p>';
    let arr = [];  
    
    for (const key in _room) {        
        if (auditFacult.toLowerCase() == _room[key].faculty && numberStudents <= _room[key].site) {
            arr.push(_room[key].faculty);
            tag += `<li>Аудитория №<span style="color: green;">
                    ${_room[key].name}</span>, количество мест ${_room[key].site}<br/></li>`;            
        } 
    }
    if (arr.length == 0) {
        document.querySelector('.sum').innerHTML = tag2;
    } else {
        tag += '</ul>';
        document.querySelector('.sum').innerHTML = tag; 
    }    
}


