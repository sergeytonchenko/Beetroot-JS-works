let buttons = document.querySelectorAll('.number');

let text = document.querySelector('h1');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (text.textContent === '0') {
            text.innerText = this.textContent;
        } else {
            text.innerText += this.textContent;
        }        
    })    
};

let buttonsOper = document.querySelectorAll('.operation');

for (let a = 0; a < buttonsOper.length; a++) {
  buttonsOper[a].addEventListener('click', function () {
      text.innerText.includes('+') || text.innerText.includes('-') ||
      text.innerText.includes('*') || text.innerText.includes('/') ?
      text.innerText = `${eval(text.innerText)}${this.textContent}` : text.innerText += this.textContent;         
    })    
};

let buttonsResult = document.querySelector('.result');

buttonsResult.addEventListener('click', function (event) {
        text.innerText = eval(text.innerText);    
})

let buttonsNull = document.querySelector('.null');

buttonsNull.addEventListener('click', function (event) {
        text.innerText = '0';    
})

document.addEventListener('keydown', function(event) {

    if (text.textContent === '0') {
        switch (event.keyCode) {
            case 48:
            case 96:
                text.innerText = '0';
              break;
            case 49:
            case 97:
                text.innerText = '1';
              break;
            case 50:
            case 98:
                text.innerText = '2';
              break;
            case 51:
            case 99:
                text.innerText = '3';
              break;
            case 52:
            case 100:
                text.innerText = '4';
              break;
            case 53:
            case 101:
                text.innerText = '5';
              break;
            case 54:
            case 102:
                text.innerText = '6';
              break;
            case 55:
            case 103:
                text.innerText = '7';
              break;
            case 56:
            case 104:
                text.innerText = '8';
              break;
            case 57:
            case 105:
                text.innerText = '9';
              break;
            case 13:
            case 187:
              text.innerText = '0';
                break;            
            case 107:
             text.innerText += '+';            
                break;
            case 106:
                  text.innerText += '*';
                break;
            case 109:
            case 189:
                  text.innerText += '-';
                break;
            case 111:
            case 191:
                  text.innerText += '/';
                break;
            case 67:
                  text.innerText = '0';
                break;
            default:
              ;
          }
    } else {
        switch (event.keyCode) {
            case 48:
            case 96:
                text.innerText += '0';
              break;
            case 49:
            case 97:
                text.innerText += '1';
              break;
            case 50:
            case 98:
                text.innerText += '2';
              break;
            case 51:
            case 99:
                text.innerText += '3';
              break;
            case 52:
            case 100:
                text.innerText += '4';
              break;
            case 53:
            case 101:
                text.innerText += '5';
              break;
            case 54:
            case 102:
                text.innerText += '6';
              break;
            case 55:
            case 103:
                text.innerText += '7';
              break;
            case 56:
            case 104:
                text.innerText += '8';
              break;
            case 57:
            case 105:
                text.innerText += '9';
              break;
            case 13:
            case 187:
                text.innerText = eval(text.innerText);
              break;            
            case 107:            
            text.innerText.includes('+') || text.innerText.includes('-') ||
            text.innerText.includes('*') || text.innerText.includes('/') ? text.innerText = `${eval(text.innerText)}+` : text.innerText += '+';
              break;
            case 106:
              text.innerText.includes('+') || text.innerText.includes('-') ||
              text.innerText.includes('*') || text.innerText.includes('/') ? text.innerText = `${eval(text.innerText)}*` : text.innerText += '*';
              break;
            case 109:
            case 189:
              text.innerText.includes('+') || text.innerText.includes('-') ||
              text.innerText.includes('*') || text.innerText.includes('/') ? text.innerText = `${eval(text.innerText)}-` : text.innerText += '-';
              break;
            case 111:
            case 191:
              text.innerText.includes('+') || text.innerText.includes('-') ||
              text.innerText.includes('*') || text.innerText.includes('/') ? text.innerText = `${eval(text.innerText)}/` : text.innerText += '/';
              break;
            case 67:
            text.innerText = '0';
            break;
            default:
              ;
          }
    }
  });




