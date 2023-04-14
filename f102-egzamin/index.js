let firstNumber = prompt('Podaj pierwszą liczbę!');
const operator = prompt('Podaj rodzaj działania: +, -, *, /, %');
let secondNumber = prompt('Podaj drugą liczbę!');
const allowedOperators = ['+', '-', '*', '/', '%'];
let result;

const calculator = (firstNumber, secondNumber, operator) => {
    const parsedFirstNumber = Number([...firstNumber].map(el => el === "," ? "." : el).join(''));
    const parsedSecondNumber = Number([...secondNumber].map(el => el === "," ? "." : el).join(''));

    if (
        isNaN(parsedFirstNumber) ||
        isNaN(parsedSecondNumber) ||
        !firstNumber ||
        !secondNumber ||
        !allowedOperators.includes(operator)
    ) {
        alert('Podałeś nieprawidłową cyfrę lub operator!');
        return;
    }

    result = calc(parsedFirstNumber, parsedSecondNumber, operator);

    if (result) {
        const anotherOperator = prompt('Jeśli chcesz kontynuować to wybierz kolejny operator!');
        if (allowedOperators.includes(anotherOperator)) {
            secondNumber = prompt(`Podaj kolejną liczbę! Aktualny wynik to: ${result}`);
            calculator(result, secondNumber, anotherOperator);
        } else {
            alert(`Końcowy wynik to: ${result}!`)
        }
    }
}
calculator(firstNumber, secondNumber, operator);
