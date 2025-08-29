const display = document.getElementById('display');

function addToDisplay(input) {
    display.value += input;
}


function clearDisplay() {
    display.value = "";
}


function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Input Error"
    }
}


function remove() {
    display.value = display.value.slice(0, -1);
}


function positiveOrNegative() {
    let currentValue = parseFloat(display.value);

    if (!isNaN(currentValue)) {
        currentValue = -currentValue;
        display.value = currentValue;
    }
}