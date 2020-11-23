const hiForm = document.querySelector(".js-form"),
        hiName = hiForm.querySelector("input"),
        greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
        SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = hiName.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    hiForm.classList.add(SHOWING_CN);
    hiForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    hiForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요, ${text}님!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();