let isAscending = true;
let input = document.querySelector("#todoInput");
let list = document.querySelector("#todoList");
let displayInp = document.querySelector(".inp");
let cancelIcon = document.querySelector(".cancel");

cancelIcon.onclick = () => {
    if (input.value.trim() === "") {
        input.value = "";
        displayInp.style.display = "none";
    }
};

function addTask() {
    if (input.value.trim() !== "") {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add('task-item');

        let taskText = document.createElement('span');
        taskText.textContent = `${list.children.length + 1}. ${input.value}`;
        taskText.classList.add('task-text');
        
        let taskCancelIcon = document.createElement("img");
        taskCancelIcon.src = "./image/Group 56.svg";
        taskCancelIcon.classList.add("cancel");
        taskCancelIcon.onclick = () => {
            taskDiv.remove();
            updateTaskNumbers();
        };

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(taskCancelIcon);
        list.appendChild(taskDiv);

        input.value = "";
        displayInp.style.display = "none";
    } else {
        displayInp.style.display = "block";
    }
}

function updateTaskNumbers() {
    Array.from(list.children).forEach((task, index) => {
        let taskText = task.querySelector('.task-text');
        taskText.textContent = `${index + 1}. ${taskText.textContent.split('. ')[1]}`;
    });
}

function toggleSort() {
    isAscending = !isAscending;
    let tasks = Array.from(list.children);

    if (tasks.length < 2) {
        return;
    }

    let sortArrow = document.querySelector(".arrow");
    sortArrow.src = isAscending ? "./image/Group 34.svg" : "./image/Group 90.svg";

    tasks.sort((a, b) => {
        let textA = a.querySelector('.task-text').textContent.toLowerCase();
        let textB = b.querySelector('.task-text').textContent.toLowerCase();
        return isAscending ? textA.localeCompare(textB) : textB.localeCompare(textA);
    });

    list.innerHTML = "";
    tasks.forEach(task => list.appendChild(task));
    updateTaskNumbers();
}

