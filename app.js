let isInputVisible = true;
let isAscending = true;
let input = document.querySelector("#todoInput");
let list = document.querySelector("#todoList");
let displayInp = document.querySelector(".inp");

function addTask() {
    if (isInputVisible && input.value.trim() !== "") {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add('task-item');

        let taskText = document.createElement('span');
        taskText.textContent = input.value;
        taskText.classList.add('task-text');
        
        let cancelIcon = document.createElement("img");
        cancelIcon.src = "./image/Group 56.svg";
        cancelIcon.classList.add("cancel");
        cancelIcon.onclick = () => {
            taskDiv.remove();
        };

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(cancelIcon);
        list.appendChild(taskDiv);

        input.value = "";
        input.disabled = true;
        displayInp.style.display = "none";
    } else {
        displayInp.style.display = "block";
        input.disabled = false;
    }
}

function toggleSort() {
    isAscending = !isAscending;
    let tasks = list.children;

    if (tasks.length < 2) {
        return;
    }

    let sortArrow = document.querySelector(".arrow");
    sortArrow.src = isAscending ? "./image/Group 34.svg" : "./image/Group 90.svg";

    let tasksArray = Array.from(tasks);
    tasksArray.sort((a, b) => {
        let textA = a.querySelector('.task-text').textContent.toLowerCase();
        let textB = b.querySelector('.task-text').textContent.toLowerCase();
        return isAscending ? textA.localeCompare(textB) : textB.localeCompare(textA);
    });

    list.innerHTML = "";
    tasksArray.forEach(task => list.appendChild(task));
}


