let firstNumber = prompt('Podaj pierwszą liczbę!');
const operator = prompt('Podaj rodzaj działania: +, -, *, :, %');
let secondNumber = prompt('Podaj drugą liczbę!');
const allowedOperators = ['+', '-', '*', '/', '%'];
let result;

const calculator = (firstNumber, secondNumber, operator) => {
    const parsedFirstNumber = Number([...firstNumber].map(letter => letter === "," ? "." : letter).join(''));
    const parsedSecondNumber = Number([...secondNumber].map(letter => letter === "," ? "." : letter).join(''));

    if (
        isNaN(parsedFirstNumber) ||
        isNaN(parsedSecondNumber) ||
        !firstNumber ||
        !secondNumber ||
        !allowedOperators.includes(operator)
    ) {
        alert('Podałeś nieprawidłową cyfrę lub operator!');
        return
    }

    result = calc(parsedFirstNumber, parsedSecondNumber, operator);

    if (result) {
        const again = prompt('Jeśli chcesz kontynuować to wybierz operator');
        if (allowedOperators.includes(again)) {
            secondNumber = prompt(`Podaj kolejną liczbę! Aktualny wynik to: ${result}`);
            calculator(result, secondNumber, again);
        } else {
            alert(`Końcowy wynik to: ${result}!`)
        }
    }
}
calculator(firstNumber, secondNumber, operator);