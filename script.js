// selectors
let taskInput = document.getElementById("taskinput");
let addBtn = document.getElementById("addbtn");
let taskList = document.getElementById("tasklist");

// task add karne ka function
function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Pehle task enter kar");
        return;
    };

    // new li
    let li = document.createElement("li");
    li.innerText = taskText;

    // complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✓";

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    // delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    // buttons ko li ke andar daalna
    li.appendChild(completeBtn);
    li.appendChild(delBtn);

    // li ko ul ke andar daalna
    taskList.appendChild(li);

    // input clear
    taskInput.value = "";

    // local storage me save
    saveTasks();
}

// add button click
addBtn.addEventListener("click", addTask);

// enter key support
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// tasks save karne ka function
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// purane tasks load karne ka function
function loadTasks() {
    let data = localStorage.getItem("tasks");

    if (data) {
        taskList.innerHTML = data;

        // load ke baad buttons ko dobara event dena padega
        let allLi = taskList.querySelectorAll("li");

        allLi.forEach((li) => {
            let buttons = li.querySelectorAll("button");

            let completeBtn = buttons[0];
            let delBtn = buttons[1];

            completeBtn.addEventListener("click", () => {
                li.classList.toggle("completed");
                saveTasks();
            });

            delBtn.addEventListener("click", () => {
                li.remove();
                saveTasks();
            });
        });
    }
}

// page load hote hi tasks load
loadTasks();