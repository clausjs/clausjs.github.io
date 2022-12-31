let memory = 0, func = "";
let functionChanged = false;

function addToScreen(e) {
    const value = e.innerHTML;
    const element = document.getElementById('output');

    let newValue;
    if (functionChanged) {
        functionChanged = false;
        newValue = value;
    } else newValue = element.innerHTML === "0" ? value : element.innerHTML + value;

    element.innerHTML = newValue;
}

function setFunc(e) {
    const tempFunc = e.innerHTML;

    const element = document.getElementById('output');
    memory = element.innerHTML;
    functionChanged = true;

    switch (tempFunc) {
        case "-":
            func = "subtract";
            break;
        case "+":
            func = "add";
            break;
        case "*":
            func = "multiply";
            break;
        case "/":
            func = "divide";
            break;
        default:
            break;
    }
}

function calculate() {
    const element = document.getElementById('output');

    let value = Number(element.innerHTML);
    if (memory !== 0 && func !== "") {
        switch (func) {
            case "subtract":
                value = Number(memory) - value;
                break;
            case "add":
                value = Number(memory) + value;
                break;
            case "multiply":
                value = Number(memory) * value;
                break;
            case "divide":
                value = Number(memory) / value;
                break;
            default:
                break;
        }

        const result = Number(value);
        if (result % 1 === 0) element.innerHTML = result;
        else element.innerHTML = Number(result.toFixed(10));

        functionChanged = true;
    }
}

function memoryClear() {
    memory = 0;
    func = "";

    const element = document.getElementById('output');
    element.innerHTML = "0";
}