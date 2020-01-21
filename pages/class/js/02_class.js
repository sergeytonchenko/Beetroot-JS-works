// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор,
//  пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера
//  и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов. 

class Marker {
    constructor(_properties) {
        //размер шрифта
        this.markerFont = _properties.markerFont;
        // поле, которое хранит цвет маркера;
        this.markerColor = _properties.markerColor;
        // поле, которое хранит количество чернил в маркере (в процентах);
    }
    print() {
        let text = document.getElementById("textarea");
        text.style.color = this.markerColor;
        text.style.fontSize = `${this.markerFont}px`;
        console.log (text);
        }
  }
  let fill = document.querySelector(".fill");
  let maxLength = document.getElementById("textarea"); 
  

  function countChar() { 
    let textBox = maxLength.value.replace(/[\s]/g, '').length; 
    let _markerQuatity = 400;
    
    let btn = document.querySelector("button");
    btn.addEventListener('click', function () {
        fill.style.height = `${400}px`;
        textBox = 0;        
    });

    fill.style.height = `${_markerQuatity - (textBox * 2)}px`;
    maxLength.setAttribute("maxlength", 200);
    console.log(textBox);
    
};
   
let write = new Marker({
    markerFont: 40,    
    markerColor: 'red',       
});
write.print ();

// function quantity() {    
//     fill.style.height = `${400}px`;
     
// }





