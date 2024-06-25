//if,else (условие для проверки для функции ниже)
function checkNumber(num) {
    if (num > 0) {
        return 'Положительное';
    } else if (num < 0) {
        return 'Отрицательное';
    } else {
        return 'Ноль';
    }
}
//prompt (ввод числа,проверка на отрицательность)
function runCheckNumber() {
    const num = prompt('Введите число:');
    if (num !== null) {
        const result = checkNumber(Number(num));
        document.getElementById('output').innerText = `Результат проверки числа: ${result}`;
    }
}
//switch,case (условия)
function getDayName(day) {
    switch (day) {
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        case 7:
            return 'Воскресенье';
        default:
            return 'Такого дня не существует';
    }
}
//получение дня по введенной цифре
function runGetDayName() {
    const day = prompt('Введите номер (1-7):');
    if (day !== null) {
        const result = getDayName(Number(day));
        document.getElementById('output').innerText = `Полученный день: ${result}`;
    }
}
//вывод чисел в поочереднем порядке для функции ниже
function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim();
}
//ввод числа и вывод (от 1 до указанного числа)
function runPrintNumbers() {
    const n = prompt('Введите число:');
    if (n !== null) {
        const result = printNumbers(Number(n));
        document.getElementById('output').innerText = `Результат: ${result}`;
    }
}
//while,вывод обратного отсчета
function countdown(n) {
    let result = '';
    while (n > 0) {
        result += n + ' ';
        n--;
    }
    return result;
}
//выполнение обратного отсчета
function runCountdown() {
    const n = prompt('Введите число:');
    if (n !== null) {
        const result = countdown(Number(n));
        document.getElementById('output').innerText = `Обратный отсчет: ${result}`;
    }
}
//вычисление четных чисел
function printEvenNumbers(max) {
    let result = '';
    let i = 0;
    do {
        if (i % 2 === 0) {
            result += i + ' ';
        }
        i++;
    } while (i <= max);
    return result;
}
//выполнение функции вычисления четных чисел до введенного вами
function runPrintEvenNumbers() {
    const max = prompt('Введите максимальное число:');
    if (max !== null) {
        const result = printEvenNumbers(Number(max));
        document.getElementById('output').innerText = `Четные числа: ${result}`;
    }
}
//ввод чисел с запятыми
function findFirstEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i];
        }
        continue;
    }
    return null;
}
//нахождение 1 четного числа после запятой
function runFindFirstEven() {
    const input = prompt('Введите список чисел, разделенных запятыми:');
    if (input !== null) {
        const arr = input.split(',').map(Number);
        const result = findFirstEven(arr);
        document.getElementById('output').innerText = result !== null ? `Первое четное число: ${result}` : 'Четных чисел не найдено';
    }
}
//всплывающие окна
alert('Добро пожаловать');
const isAdult = confirm('Вам есть 18 лет или больше?');
if (isAdult) {
    alert('Приветствую, старый)');
} else {
    alert('Вам вход запрещен');
}
//поле для ввода имени
const userName = prompt('Как вас зовут?');
if (userName) {
    alert('Привет, ' + userName);
} else {
    alert('Привет, гость');
}
