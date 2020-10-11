window.onload = function() {
    var numbers = document.getElementsByClassName('number')//вызываем цифарки,чтобы с ними что-то делать
    for (var i = 0; i < numbers.length; i++)
    {
        var element = numbers[i];
        element.addEventListener('click', function() { //для циферок выполнялись операции
            var vvod = document.getElementById('vvod');
            if (vvod.value === "0") {
                vvod.value = this.innerHTML;
            } 
            else {
                vvod.value += this.innerHTML;
            }
        });
    }

    var value = 0;
    var operand;
    var operands = document.getElementsByClassName('operand'); //добавляем как событие , чтобы операции тоже выполнялись,event-событие.
    for (var i = 0; i < operands.length; i++)
    {
        operands[i].addEventListener('click', function() {
            switch (this.innerHTML) {
                case '+':
                    value = document.getElementById('vvod').value - 0;// што за документ . што он делает
                    document.getElementById('vvod').value = 0;
                    operand = '+';
                    break;
                case '-':
                    value = document.getElementById('vvod').value - 0;
                    document.getElementById('vvod').value = 0;
                    operand = '-';
                    break;
                case '*':
                    value = document.getElementById('vvod').value - 0;
                    document.getElementById('vvod').value = 0;
                    operand = '*';
                    break;
                case '/':
                    value = document.getElementById('vvod').value - 0;
                    document.getElementById('vvod').value = 0;
                    operand = '/';
                    break;
                case '**':
                    value = document.getElementById('vvod').value - 0;
                    document.getElementById('vvod').value = 0;
                    operand = '**';
                    break;
                case '=':
                    var value2 = document.getElementById('vvod').value - 0;
                    if (operand === '+') {
                        // сложение
                        document.getElementById('vvod').value = value + value2;//не понел 0_о
                    }
                    else if (operand === '-') {
                        // вычитание
                        document.getElementById('vvod').value = value - value2;//не понел 0_о
                    }
                    else if (operand === '*') {
                        document.getElementById('vvod').value = value * value2;//не понел 0_о
                    }
                    else if (operand === '/') {
                        document.getElementById('vvod').value = value / value2;//не понел 0_о
                    }
                    else if (operand === '**') {
                        document.getElementById('vvod').value = Math.pow(value, value2);
                    }
            }
        });
    }

    document.getElementById("clear").addEventListener('click', function() {
        document.getElementById('vvod').value = 0;
    });
}