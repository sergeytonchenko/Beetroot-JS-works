// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
//  Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
function bank() {

    class Employee {
        constructor(_bankWorkers) {
            this.name = _bankWorkers.name
            this.position = _bankWorkers.position
        }
    }
    
    let workers = [new Employee({
        name: "Петров Иван",
        position: "Начальник отделения"
    }), new Employee({
        name: "Сидорова Инна",
        position: "Кредитный отдел"
    }), new Employee({
        name: "Иванова Анна",
        position: "Консультант"
    }), new Employee({
        name: "Громова Екатерина",
        position: "Кассир"
    }), new Employee({
        name: "Белов Алексей",
        position: "Охранник"
    })
    ]
    
    class Emptable extends Employee {
        constructor(_bankWorkers) {
            super(_bankWorkers);
        }
    
        getHtml(_workers) {
    
            let buff = `<table><thead>
                <tr>
                    <th>№</th>
                    <th>Фамилия, имя</th>
                    <th>Должность</th>
                </tr>
            </thead>`;
    
            for (let i = 0; i < _workers.length; i++) {
                const element = _workers[i];
                buff += `<tr> 
                <td>${i + 1}</td>
                <td>${element.name}</td>
                <td>${element.position[0].toUpperCase() + element.position.slice(1)}</td>            
                </tr>`
            };
    
            buff += `</table>`;
            document.getElementById('bank').innerHTML = buff;            
        }
    
    };
    
    let a = new Emptable(workers);
    
    a.getHtml(workers);
};




