var buttons = document.querySelectorAll('.grid-item');
var display = document.querySelector('.display');

operand1 = 0;
operand2 = null;
operator = null;
equalPressed = false;

function getVal(){
    var value = this.getAttribute('data-value');
    switch(value){
        case '+':
            operand1 = parseFloat(display.innerText);
            operator = '+';
            display.innerText = '';
            break;
        case '-':
            operand1 = parseFloat(display.innerText);
            operator = '-';
            display.innerText = '';
            break;
        case '*':
            operand1 = parseFloat(display.innerText);
            operator = '*';
            display.innerText = '';
            break;
        case '/':
            operand1 = parseFloat(display.innerText);
            operator = '/';
            display.innerText = '';
            break;
        case '%':
            operand1 = parseFloat(display.innerText);
            operator = '%';
            display.innerText = '';
            break;
        case 'backspace':
            var result = parseInt(parseFloat(display.innerText)/10);
            display.innerText = result;
            break;
        case '+-':
            var result = parseFloat(display.innerText) * -1;
            display.innerText = result;
            break;
        case '=':
            equalPressed = true;
            operand2 = parseFloat(display.innerText);
            switch(operator){
                case '+':
                    var result = operand1 + operand2;
                    display.innerText = result;
                    break;
                case '-':
                    var result = operand1 - operand2;
                    display.innerText = result;
                    break;
                case '*':
                    var result = operand1 * operand2;
                    display.innerText = result;
                    break;
                case '%':
                    var result = operand1 % operand2;
                    display.innerText = result;
                    break;
                default:
                    var result = operand1 / operand2;
                    display.innerText = result;
            }
            break;
        case 'AC':
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = '';
            break;
        default:
            if(equalPressed) display.innerText = value;
            else display.innerText += value;
            equalPressed = false;
    }
}

for(var i = 0; i < buttons.length; ++i){
    buttons[i].addEventListener('click', getVal);
}