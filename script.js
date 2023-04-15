const form = document.forms.namedItem("register")
const name = form.elements.namedItem("name");
const lastName = form.elements.namedItem("lastname");
const gender = form.elements.namedItem("gender");
const login = form.elements.namedItem("login");
const password = form.elements.namedItem("password");
const date = form.elements.namedItem("date");

const validation = () => {
    console.log('jo');
    return false
}


const formHandler = (e) => {
    e.preventDefault();
    const check = validation();
    if (check) {
        alert('No elo!')

    }
    console.log(lastName.value, name.value, gender[0].checked, gender[1].checked, password.value, login.value, date.value)
}

form.addEventListener('submit', formHandler);