const firstNumber = prompt('Podaj pierwszą liczbę!');
const operator = prompt('Podaj rodzaj działania: +, -, *, /, %');
const secondNumber = prompt('Podaj drugą liczbę!');
const allowedOperators = ['+', '-', '*', '/', '%'];


const calc = (firstNumber, secondNumber, operator) => {
    const parsedFirstNumber = Number(firstNumber);
    const parsedSecondNumber = Number(secondNumber);

    if (isNaN(parsedFirstNumber) || isNaN(parsedSecondNumber) ||
        !firstNumber || !secondNumber || !allowedOperators.includes(operator)) {
        alert('Podałeś nieprawidłową cyfrę lub operator!');
        return
    }

    switch (operator) {
        case "+" :
            alert(`Wynik: ${(parsedFirstNumber + parsedSecondNumber).toFixed(2)}`);
            break
        case "-" :
            alert(`Wynik: ${parsedFirstNumber - parsedSecondNumber}`);
            break
        case "*" :
            alert(`Wynik: ${(parsedFirstNumber * parsedSecondNumber).toFixed(2)}`);
            break
        case "%" :
            alert(`Wynik: ${parsedFirstNumber % parsedSecondNumber}`);
            break
        case "/" :
            if (!parsedSecondNumber) {
                alert('Nie można dzielić przez 0!');
                break
            }
            alert(`Wynik: ${(parsedFirstNumber / parsedSecondNumber).toFixed(2)}`);
            break
    }

}

calc(firstNumber, secondNumber, operator);
