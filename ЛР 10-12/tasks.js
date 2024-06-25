function calculate(a, b, c) {
    if (b - c === 0) {
        alert("Ошибка: Деление на ноль");
        return;
    }
    if (a < 0) {
        alert("Ошибка: Нельзя брать корень из отрицательного числа");
        return;
    }
    const result = (Math.sqrt(c + 2 * Math.PI) / (b - c)) - (7 * (a**2 - Math.PI));
    return result;
}

function showCalculation() {
    const a = parseFloat(prompt("Введите значение a:"));
    const b = parseFloat(prompt("Введите значение b:"));
    const c = parseFloat(prompt("Введите значение c:"));
    const result = calculate(a, b, c);
    if (result !== undefined) {
        document.getElementById('calculationResult').innerText = `Результат: ${result}`;
    }
}

function stringOperations() {
    const S1 = "ВАША ФАМИЛИЯ";  
    const S2 = "АДРЕС";          
    const S2Length = S2.length;
    const S1Reversed = S1.split("").reverse().join("");
    const S2UpperCase = S2.toUpperCase();
    document.getElementById('stringResult').innerText = `Длина строки S2: ${S2Length}\nСтрока S1 в обратном порядке: ${S1Reversed}\nСтрока S2 в верхнем регистре: ${S2UpperCase}`;
}
