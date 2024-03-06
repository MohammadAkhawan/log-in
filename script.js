const submitBtnElement = document.querySelector("button");
const passwordInputElement = document.querySelector("#password");
const confirmPassInputElement = document.querySelector("#confirm-password");
const errorElement = document.querySelector("#error");

const checkInput = () => {
    let password = passwordInputElement.value;
    let confirmPass = confirmPassInputElement.value;
    if (password !== confirmPass) {
        errorElement.style.visibility = "visible";
        passwordInputElement.style.border = "1px solid red";
        confirmPassInputElement.style.border = "1px solid red";
    }
};

submitBtnElement.addEventListener("click", checkInput);
