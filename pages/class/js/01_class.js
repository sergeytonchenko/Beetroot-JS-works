// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

class Circle {
  // поле, хранящее радиус окружности;
  constructor(_radius) {
      this.r = _radius;
  }
  // get-свойство, возвращающее радиус окружности;
  get radius() {
    return this.r;
    
  }
// set-свойство, устанавливающее радиус окружности;
  set radius(_radius) {
    this.r = _radius;
    document.getElementsByClassName("buf1")[0].innerHTML = c.r;
  }
  // get-свойство, возвращающее диаметр окружности;
  get diameter() {
    return 2 * this.r;
  }
  // метод, вычисляющий площадь окружности;
  Area() {
    let areaCircle = (Math.PI * Math.pow(this.r, 2)).toFixed (2);
    document.getElementsByClassName("buf3")[0].innerHTML = areaCircle;
  }
  // метод, вычисляющий длину окружности.
  Length() {
    let lengthCircle = (Math.PI * this.diameter).toFixed (2);
    document.getElementsByClassName("buf4")[0].innerHTML = lengthCircle;
    }
}

// Продемонстрировать работу свойств и методов.
let c = new Circle();

//Устанавливаем новый радиус через свойство set
function newRadius() {
  c.radius = +prompt ('Введите радиус');
  document.getElementsByClassName("buf2")[0].innerHTML = c.diameter;
}











