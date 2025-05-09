function calculateArithmetic(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const op = document.querySelector('input[name="operator"]:checked').value;
    let result;
    if (op === '/' && num2 === 0) {
        alert('Division by zero is not allowed!');
        return;
    }
    result = eval(num1 + op + num2);
    alert(`The result is: ${result}`);
}

function calculateFactorial(event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('factorialNum').value);
    if (n < 0) return alert('Please enter a non-negative number.');
    let fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;
    alert(`${n}! = ${fact}`);
}

function calculateFibonacci(event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('fibNum').value);
    if (n < 0) return alert('Please enter a positive integer.');
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    alert(`The ${n}th Fibonacci number is: ${n === 0 ? 0 : n === 1 ? 1 : b}`);
}

function calculateStats(event) {
    event.preventDefault();
    const values = [
        parseFloat(document.getElementById('val1').value),
        parseFloat(document.getElementById('val2').value),
        parseFloat(document.getElementById('val3').value)
    ];
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min;
    alert(`Max: ${max}, Min: ${min}, Range: ${range}`);
}

function signUp(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const zip = document.getElementById('zip').value;
    const output = `<div>${fname} ${lname} | ${email} | ${zip}</div>`;
    document.getElementById('signupResults').innerHTML += output;
}
