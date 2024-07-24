function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function sqrt() {
    let display = document.getElementById('display');
    let value = eval(display.value);
    display.value = `√(${value}) = ${Math.sqrt(value).toFixed(6)}`;
}

function power() {
    let display = document.getElementById('display');
    let base = eval(display.value);
    let exponent = prompt("Enter the exponent:");
    if (exponent != null) {
        let result = Math.pow(base, eval(exponent)).toFixed(6);
        display.value = `${base}^${exponent} = ${result}`;
    }
}

function sin() {
    let display = document.getElementById('display');
    try {
        let degrees = parseFloat(eval(display.value));
        let radians = degrees * (Math.PI / 180);
        let result = Math.sin(radians).toFixed(6); // Optional: rounding to 6 decimal places
        display.value = `sin(${degrees}) = ${result}`;
    } catch (e) {
        display.value = 'Error';
    }
}

function cos() {
    let display = document.getElementById('display');
    try {
        let degrees = parseFloat(eval(display.value));
        let radians = degrees * (Math.PI / 180);
        let result = Math.cos(radians).toFixed(6); // Optional: rounding to 6 decimal places
        display.value = `cos(${degrees}) = ${result}`;
    } catch (e) {
        display.value = 'Error';
    }
}

function tan() {
    let display = document.getElementById('display');
    try {
        let degrees = parseFloat(eval(display.value));
        let radians = degrees * (Math.PI / 180);
        // Optional: handling for very large angles where tan might approach infinity
        let tanValue = Math.tan(radians);
        let result = (Math.abs(tanValue) > 1e10) ? 'Infinity' : tanValue.toFixed(6);
        display.value = `tan(${degrees}) = ${result}`;
    } catch (e) {
        display.value = 'Error';
    }
}


function log() {
    let display = document.getElementById('display');
    let value = eval(display.value);
    display.value = `log(${value}) = ${Math.log10(value).toFixed(6)}`;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Function to show matrix options
function showMatrixOptions() {
    document.getElementById('matrix-input').style.display = 'block';
}

// Function to hide matrix options
function hideMatrixOptions() {
    document.getElementById('matrix-input').style.display = 'none';
}

// Function to perform the selected matrix operation
function performMatrixOperation() {
    let operation = document.getElementById('matrix-operation').value;
    let matrix1 = document.getElementById('matrix1').value;
    let matrix2 = document.getElementById('matrix2').value;

    let matrix1Array = parseMatrix(matrix1);
    let matrix2Array = parseMatrix(matrix2);

    let result;
    switch (operation) {
        case 'add':
            result = addMatrices(matrix1Array, matrix2Array);
            break;
        case 'subtract':
            result = subtractMatrices(matrix1Array, matrix2Array);
            break;
        case 'multiply':
            result = multiplyMatrices(matrix1Array, matrix2Array);
            break;
        default:
            result = 'Invalid operation';
    }

    alert('Result:\n' + formatMatrix(result));
    hideMatrixOptions();
}

// Function to parse matrix input
function parseMatrix(matrix) {
    return matrix.split(';').map(row => row.split(',').map(Number));
}

// Function to format matrix for display
function formatMatrix(matrix) {
    return matrix.map(row => row.join(',')).join(';');
}

// Function to add matrices
function addMatrices(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}

// Function to subtract matrices
function subtractMatrices(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((val, j) => val - matrix2[i][j]));
}

// Function to multiply matrices
function multiplyMatrices(matrix1, matrix2) {
    let result = new Array(matrix1.length).fill(0).map(() => new Array(matrix2[0].length).fill(0));
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix1[0].length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}
