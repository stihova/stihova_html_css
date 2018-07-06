
var display = document.getElementById("display");

function ClearDisplay(buttonValue)
{
    if (buttonValue === 'CA')
    {
        display.value = '';
    }
}

function onNumber(buttonValue)
{
    if (display.value === '')
    {
        display.value = buttonValue;
    }
    else
    {
        display.value += buttonValue;
    }
}

function onOperator(operatorValue)
{
    var lastChar = display.value[display.value.length -1];
    if (display.value !== '' && lastChar.match(/\d$/))
    {
        display.value += operatorValue;
    }
    if (display.value === '' && operatorValue === '-')
    {
        display.value += operatorValue;
    }
}

function Point(dot)
{
    var expression = display.value.split(/[+\-/*]/);
    var lastNum = expression[expression.length-1];

    if (display.value !== '' && lastNum.match(/\./))
    {
        display.value += '';
    }
    else
    {
        display.value += dot;
    }
}

function ClearLast()
{
    display.value = display.value.slice(0, -1);
}

function Result()
{
    var result = display.value;
    var lastChars = result[result.length -1];
    if (lastChars.match(/\+|-|\/|\*|\.$/) )
    {
        result = result.replace(/.$/, '');
    }
    display.value = eval(result);
}

