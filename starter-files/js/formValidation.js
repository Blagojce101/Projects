// Form validation

let form = document.querySelector('form');
let userName = document.querySelector('#name');
let companyName = document.querySelector('#company');
let email = document.querySelector('#email');
let phoneNumber = document.querySelector('#phone');
let buttonSubmit = document.querySelector('btn-submit');
let select = document.querySelector('.select');
let optionsBox = document.querySelector(".options-list");
let listItems = document.querySelectorAll(".list-item");

function checkInputName() {
    let userNameValue = userName.value;

    let letters = /^[A-Za-z]+$/;

    if (userNameValue === '') {
        setErrorFor(userName, 'Ве молиме внесете Ваше име и презиме.');
    } else if (userNameValue.match(letters)) {
        setSuccessFor(userName);
    } else {
        setErrorFor(userName, 'Ве молиме внесете валидно име и презиме.');
    };
};

function checkInputCompany() {
    let companyNameValue = companyName.value;

    if (companyNameValue === '') {
        setErrorFor(companyName, 'Ве молиме внесете име на Вашата компанија.');
    } else {
        setSuccessFor(companyName);
    };
};

function checkInputEmail() {
    let emailValue = email.value;

    let isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue === '') {
        setErrorFor(email, 'Ве молиме внесете Ваша е-маил адреса.');
    } else if (emailValue.match(isEmail)) {
        setSuccessFor(email);
    } else {
        setErrorFor(email, 'Ве молиме внесете валидна е-маил адреса.');
    };
};

function checkInputPhone() {
    let phoneNumberValue = phoneNumber.value;

    let phoneNo = /^\(?([0-9]{3})\)?[-/ ]?([0-9]{3})[-/ ]?([0-9]{3})$/;

    if (phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'Ве молиме внесете Ваш телефонски број.');
    } else if (phoneNumberValue.match(phoneNo)) {
        setSuccessFor(phoneNumber);
    } else {
        setErrorFor(phoneNumber, 'Ве молиме внесете валиден телефонски број.');
    };
};

let formGroup;

function setErrorFor(input, message) {
    formGroup = input.parentElement;
    let small = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    formGroup.style.margin = 0;
    small.innerText = message;
}

function setSuccessFor(input) {
    formGroup = input.parentElement;
    formGroup.style.margin = 0;
    formGroup.className = 'form-group success';
}

$(document).ready(function () {
    $(".close").click(function () {
        $(".collapse").collapse('hide');
    });
});

select.addEventListener("click", () => {
    optionsBox.classList.toggle("active");
});

listItems.forEach(element => {
    element.addEventListener("click", () => {
        select.textContent = element.textContent;
        select.classList.add('success')
        optionsBox.classList.remove("active");
    });
})

function checkSelectBox() {
    if (!listItems.value) {
        select.classList.add('error')
    }
}

form.addEventListener('input', function (event) {
    switch (event.target.id) {
        case 'name':
            checkInputName();
            break;
        case 'company':
            checkInputCompany();
            break;
        case 'email':
            checkInputEmail();
            break;
        case 'phone':
            checkInputPhone();
    }
});

form.addEventListener('submit', (event) => {

    event.preventDefault();

    checkInputName();
    checkInputCompany();
    checkInputEmail();
    checkInputPhone();
    checkSelectBox();

    let formUserName = userName.parentElement;
    let formEmail = email.parentElement;
    let formCompany = companyName.parentElement;
    let formPhone = phoneNumber.parentElement;

    if (userName.value !== '' && companyName.value !== '' && email.value !== '' && phoneNumber.value) {
        userName.value = '';
        companyName.value = '';
        email.value = '';
        phoneNumber.value = '';
        select.textContent = 'Изберете тип на студент';
        formEmail.className = 'border-box';
        formUserName.className = 'border-box';
        formCompany.className = 'border-box';
        formPhone.className = 'border-box';
        select.classList.remove('success');
        select.classList.remove('error');
    }
});