const formMemo = document.querySelector(".js-to-do-form"),
        inputMemoWrite = formMemo.querySelector("input"),
        ulMemoList = document.querySelector(".js-to-do-list");

const TODO_LS = "toDo";

const toDoList = [];

function saveToDoLS() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDoList));
}

function paintToDo(text) {
    const newList = document.createElement("li");
    const delBtn = document.createElement("button");
    const newSpan = document.createElement("span");

    delBtn.innerText = "X";
    newSpan.innerText = text;
    newList.appendChild(newSpan);
    newList.appendChild(delBtn);
    ulMemoList.appendChild(newList);

    const countId = toDoList.length + 1;
    newList.id = countId;
    const toDoObj = {
        text: text,
        id: countId
    }
    toDoList.push(toDoObj);
    saveToDoLS();
}

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = inputMemoWrite.value;

    paintToDo(currentValue);
    inputMemoWrite.value = "";
}

function loadToDo() {
    const toDo = localStorage.getItem(TODO_LS);

    if(toDo !== null) {
        const parsedToDo = JSON.parse(toDo);
        parsedToDo.forEach(function(eachToDo) {
            paintToDo(eachToDo.text); 
        })
    }
}

function init() {
    loadToDo();
    formMemo.addEventListener("submit", handleSubmit);
}

init();