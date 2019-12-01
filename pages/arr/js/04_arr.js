// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
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
        faculty: 'JS'
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
    document.getElementsByClassName("list")[0].innerHTML = tag;    
};

// Вывод на экран аудиторий для указанного факультета;
function audFacul(_room) {
    let auditFacult = prompt('Введите название факультета');
    let tag = '<ul>';
    let buf1;
    let flag = false;
    for (const key in _room) {
        if (auditFacult.toLowerCase () == _room[key].faculty.toLowerCase ()) {
            if (typeof _room[key] == 'object') {
                let values = Object.values(_room[key]);
                let keys = Object.keys(_room[key]);
                for (let i = 0; i < keys.length; i++) {
                    tag += `<li><span style="color: green;">${keys[i]}: </span>${values[i]};<br/></li>`;
                }
                buf1 = `Аудитории для факультета <span style="color: red;">${auditFacult.toUpperCase ()}:</span><br/> ${tag}`;
            } else {
                if (!flag) {
                    buf1 = 'Такой факультет отсутствует';
                    flag = !flag;
                }
            }
        } else {
            if (!flag) {
                buf1 = 'Такой факультет отсутствует';
                flag = !flag;
            }
        }
    }
    tag += '</ul>';
    document.getElementsByClassName("sum")[0].innerHTML = buf1;
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

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета;
function siteStud(_room) {
    let groupFacult = prompt('Введите название факультета');
    let siteGroup = +prompt('Введите количество студентов');
    let tag = '<ul>';
    let buf1;
    let flag = false;
    for (const key in _room) {
        if (groupFacult.toLowerCase () == _room[key].faculty.toLowerCase () && siteGroup <= _room[key].site) {
            if (typeof _room[key] == 'object') {
                let values = Object.values(_room[key]);
                let keys = Object.keys(_room[key]);
                for (let i = 0; i < keys.length; i++) {
                    tag += `<li><span style="color: green;">${keys[i]}: </span>${values[i]};<br/></li>`;
                }
                buf1 = `Вашей группе подходит аудитория: <br/> ${tag}`;
            } else {
                if (!flag) {
                    buf1 = '';
                    flag = !flag;
                }
            }
        } else {
            if (!flag) {
                buf1 = 'Такой факультет отсутствует';
                flag = !flag;
            }
        }
    }
    tag += '</ul>';
    document.getElementsByClassName("site")[0].innerHTML = buf1;
};

