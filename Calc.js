// variables
var display = document.getElementById('display'),
    inputs = document.getElementsByClassName('inputs'),
    operators = document.getElementsByClassName('operators'),
    equal = document.getElementById('equal'),
    clear = document.getElementById('clear'),
    backspace = document.getElementById('backspace'),
    currentInputValue,
    currentOperator,
    displayValue,
    result,
    backspaceValue,
    i,
    j;


// functions:
function dataInput() {
    currentInputValue = this.value;
    display.value += currentInputValue;

  }

// for operators input
function operatorInput(event) {
  var btn;
    var list = ["*", "/", "="];
    if (event.type === "keydown"){
      if(list.includes(event.key)){
        equal.preventDefault();
        btn = e.key;
      }
    }

    // to handle the clics
    if (event.type === "click"){
      if(list.includes(event.key)){
        equal.preventDefault();
        btn = e.key;
      }
    }
    currentOperator = this.value;
    display.value += currentOperator;
}

// for displaying the calculated result
// regex to only display numbers
function displayResult() {
    if (display.value === "") {
        display.value = "";
    } else {
        displayValue = display.value;
      // I tried replacing eval for security but the result wasn't direct
      /*
      result = result = Function ('return'+ displayValue);
      */
        result = eval(displayValue);
        display.value = result;
        //secure what we send when we use eval()
    }
}

// for deleting(backspace) single value
function deleteSingle() {
    backspaceValue = display.value;
    display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}

// for clearing input field
function clearAll() {
    display.value = "";
}

// for blocking alphabets into input field and helping calculation through keyboard keys
function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            display.value += "0";
        } else if (key.which === 49) {
            display.value += "1";
        } else if (key.which === 50) {
            display.value += "2";
        } else if (key.which === 51) {
            display.value += "3";
        } else if (key.which === 52) {
            display.value += "4";
        } else if (key.which === 53) {
            display.value += "5";
        } else if (key.which === 54) {
            display.value += "6";
        } else if (key.which === 55) {
            display.value += "7";
        } else if (key.which === 56) {
            display.value += "8";
        } else if (key.which === 57) {
            display.value += "9";
        } else if (key.which === 46) {
            display.value += ".";
        } else if (key.which === 40) {
            display.value += "(";
        } else if (key.which === 41) {
            display.value += ")";
        } else if (key.which === 42) {
            display.value += "*";
        } else if (key.which === 47) {
            display.value += "/";
        } else if (key.which === 43) {
            display.value += "+";
        } else if (key.which === 45) {
            display.value += "-";
        } else if (key.which === 37) {
            display.value += "%";
        //return button
        } else if (key.which === 187 || key.which === 13) {
            displayResult();
         // c (clear) button
        } else if (key.which === 99) {
            clearAll();
        } else {
            display.value = display.value;
        }
        return true;
    }
}

// for deleting value using backspace
function backspaceKeyEvent (event) {
    if (event.which === 8) {
        deleteSingle();
    }
}

// 
window.onload = function () {
    // tried to use onkeydown here too but it didn't work as I wanted
    document.onkeypress = keyboardInput;
    //replace by onkeydown with a delay
    
    // for deleting value using backspace
    document.onkeydown = backspaceKeyEvent;

    // for numeric input
    for (i = 0; i < inputs.length; i++) {
        inputs[i].onclick = dataInput;
    }

    // for operators input
    for (j = 0; j < operators.length; j++) {
        operators[j].onclick = operatorInput;
    }

    // for displaying the calculated result
    equal.onclick = displayResult;

    // for deleting 1 value at a time
    backspace.onclick = deleteSingle;

    // to clear input
    clear.onclick = clearAll;
};