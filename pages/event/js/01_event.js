// 1. Создать HTML-страницу для отображения/редактирования текста.
//  При открытии страницы текст отображается с помощью тега div. 
//  При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать.
//   При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом.
//   Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

let simpleText = "Привет! Это домашнее задание по событиям в JS. Нажмите Ctrl + E";

let example = document.createElement('div');
    example.style.fontSize = `${40}px`;
    example.innerText = simpleText;
    example.style.display = 'block';
    document.body.append(example);

let textArea = document.createElement('textarea');
    textArea.style.height = `${200}px`;
    textArea.style.widht = `${200}px`;    
    textArea.innerText = simpleText;
    textArea.style.display = 'none';
    document.body.append(textArea);

let p = document.createElement('p');
    p.innerText = 'Для редактирования нажмите Ctrl+R';
    p.style.display = 'none';
    document.body.append(p);

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        example.style.display = 'none';
        p.style.display = 'block';
        textArea.style.display = 'block';
                               
    }
  });
document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyR' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
      textArea.style.display = 'none';      
      example.innerText = textArea.value;
      example.style.display = 'block';
      p.style.display = 'none';         
    }
});

