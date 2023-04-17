const form = document.forms.namedItem("register");
const name = form.elements.namedItem("name");
const lastname = form.elements.namedItem("lastname");
const gender = form.elements.namedItem("gender");
const login = form.elements.namedItem("login");
const password = form.elements.namedItem("password");
const date = form.elements.namedItem("date");

const validation = () => {

    const formData = {
        name: name.value,
        lastname: lastname.value,
        login: login.value,
        password: password.value,
        date: date.value,
        gender: {
            man: gender[0].checked,
            woman: gender[1].checked
        },
    };

    const check = Object.entries(formData).map((obj, i) => {
        if (obj[0] !== "gender") {
            const el = document.querySelector(`[name = ${obj[0]}]`);
            const p = document.querySelector(`[data-id = "${i + 1}"]`);

            el.addEventListener('input', () => {
                el.classList.remove('not-valid');
                p.classList.remove('show');
            });

            if (obj[1] === "") {
                el.classList.add('not-valid');
                p.classList.add('show');
                return ""
            } else {
                el.classList.remove('not-valid');
                p.classList.remove('show');
                return null
            }
        }
    }).some(obj => obj === "");
    return {check, formData}
}

const formHandler = (e) => {
    e.preventDefault();
    const {check, formData} = validation();

    if (!check) {
        formData.gender.man
            ? alert(`Pan ${formData.name} ${formData.lastname} urodzony ${formData.date} chce utworzyć konto o loginie ${formData.login}`)
            : alert(`Pani ${formData.name} ${formData.lastname} urodzona ${formData.date} chce utworzyć konto o loginie ${formData.login}`)
    }
}
form.addEventListener('submit', formHandler);