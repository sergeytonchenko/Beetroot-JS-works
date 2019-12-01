// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
let a = 0;

function lightColor() {
    let arr2 = ['red', 'yellow', 'green'];
    if (a <= 2) {
        
        if (a == 0) {
            document.getElementsByClassName(`${arr2[0]}`)[0].style.visibility = 'visible';
            document.getElementsByClassName(`${arr2[1]}`)[0].style.visibility = 'hidden';
            document.getElementsByClassName(`${arr2[2]}`)[0].style.visibility = 'hidden';
        }; 
        if (a == 1) {
            document.getElementsByClassName(`${arr2[1]}`)[0].style.visibility = 'visible';
            document.getElementsByClassName(`${arr2[0]}`)[0].style.visibility = 'hidden';
            document.getElementsByClassName(`${arr2[2]}`)[0].style.visibility = 'hidden';
        };
        if (a == 2) {
            document.getElementsByClassName(`${arr2[2]}`)[0].style.visibility = 'visible';
            document.getElementsByClassName(`${arr2[0]}`)[0].style.visibility = 'hidden';
            document.getElementsByClassName(`${arr2[1]}`)[0].style.visibility = 'hidden';
        } 
        a++;
    console.log (a);
    }
    if (a == 3) {
        a = 0;
    };   
};


