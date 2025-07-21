var userName = document.querySelector('#userName');
var userEmail = document.querySelector('#userEmail');
var userPassword = document.querySelector('#userPassword');
var registerBtn = document.querySelector('#registerBtn');
var alertContainer = document.querySelector('.alertContainer');


var alertItem = document.querySelector('.alertItem');
var close = document.querySelector('#close');
var alertMsg = document.querySelector('#alertMsg');
var myForm = document.querySelector('form');
var arr = [];
close.addEventListener('click', closeBt)
registerBtn.addEventListener('click', registerItems)
alertContainer.addEventListener('click', closeBt)
alertItem.addEventListener('click', function(e) {
    e.stopPropagation()
})
userEmail.addEventListener('input', validateEmail)

function registerItems(e) {
    e.preventDefault();
    if (isEmpty() != true) {
        var items = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value



        }
        arr.push(items);
        Toastify({

            text: "account created successfully",

            duration: 3000

        }).showToast();



        console.log(arr);

    }
}


function isEmpty() {
    if (userName.value == '' || userEmail.value == '' || userPassword.value == '') {
        console.log("error");
        viewError("this an error");
        return true;

    }
}

function viewError(message) {
    alertContainer.classList.replace('d-none', 'd-block');
    alertMsg.innerHTML = message
}

function closeBt() {
    alertContainer.classList.replace('d-block', 'd-none')
}

function validateEmail() {
    var regex = /^[a-zA-Z0-9_.]{3,20}@[a-zA-Z0-9]{1,50}\.[a-zA-Z]{2,5}$/;
    var text = userEmail.value;
    if (regex.test(text)) {
        userEmail.classList.add("is-valid")
        userEmail.classList.remove('is-invalid')
    } else {
        userEmail.classList.add('is-invalid')
    }
}