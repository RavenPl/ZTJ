if (confirm('Chcesz zostać programistą?')) {

    const answer = prompt('Super! Ile czasu poświęcasz dziennie na naukę?');
    if (isNaN(Number(answer)) || answer === "") {
        alert('Proszę o wpisywanie cyfr!');
    } else {
        if (answer > 5) {
            alert('Super! Widać, że ci zależy!');
        } else if (answer > 0 && answer <= 5) {
            alert('Jest ok, chociaż możesz jeszcze przycisnąć!');
        } else if (Number(answer) === 0) {
            alert('W końcu musisz zacząć!');
        } else {
            alert('Jak to minusowe godziny?!');
        }
    }
} else {
    confirm('Szkoda, może jeszcze do nas wrócisz?')
        ? alert('Super! Czekamy na Ciebie!')
        : alert(':(')
}
