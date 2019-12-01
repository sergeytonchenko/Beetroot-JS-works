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

  function countChar() {  
    let _markerQuatity = 400;
    let fill = document.getElementsByClassName("fill");
    fill[0].style.height = `${_markerQuatity - (document.getElementById("textarea").value.replace(/ *n*r*t*/g, "").length * 2)}px`;
    let maxLength = document.getElementById("textarea");
    maxLength.setAttribute("maxlength", 200);
};
   

let write = new Marker({
    markerFont: 40,    
    markerColor: 'red',       
});
write.print ();

function quantity() {
    let quantity = document.getElementsByClassName("fill");
    quantity[0].style.height = `${400}px`;
    
    
}





