let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let addBtn = document.getElementById("addBtn")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});


let formValidation = () => {
    if (textInput.value === "") {
        console.log("Failure");
        msg.innerHTML = "Input cannot be blank";
    } else {
        console.log("Success");
        msg.innerHTML = "";
        acceptData();
        addBtn.setAttribute("data-bs-dismiss", "modal")
        addBtn.click();
    }
}


let data = {};


let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;

    console.log(data);
    createTask();
}


let createTask = () => {
    tasks.innerHTML +=
        `
    <div>
        <span class="fw-bold">${data.text}</span>
        <span class="text-secondary small">${data.date}</span>
        <p>${data.description}</p>
        <span class="options">

            <i data-bs-toggle="modal" data-bs-target="#form" onClick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
            <i onClick="deleteTask(this)" class="fa-sharp fa-solid fa-delete-left"></i>
        </span>
    </div>
    `
    resetForm();
}

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";

}


let deleteTask = (e) => {
    e.parentElement.parentElement.remove()
}


let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    selectedTask.remove();
}



