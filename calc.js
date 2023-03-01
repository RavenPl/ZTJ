const calc = (number1, number2, operator) => {
    let result;
    switch (operator) {
        case "+" :
            result = (number1 + number2).toFixed(2);
            alert(`Wynik: ${result}`);
            break;
        case "-" :
            result = (number1 - number2).toFixed(2);
            alert(`Wynik: ${result}`);
            break;
        case "*" :
            result = (number1 * number2).toFixed(2);
            alert(`Wynik: ${result}`);
            break;
        case "%" :
            result = (number1 % number2).toFixed(2);
            alert(`Wynik: ${result}`);
            break;
        case "/" :
            if (!number2) {
                alert('Nie można dzielić przez 0!');
                return null
            }
            result = (number1 / number2).toFixed(2);
            alert(`Wynik: ${result}`);
            break;
    }
    return result;
}