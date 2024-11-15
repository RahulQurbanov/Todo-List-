let input = document.querySelector("#todoInput");
let list = document.querySelector("#todoList");
let displayInp = document.querySelector(".inp");
let cancelIcon = document.querySelector(".cancel");
let noBorder = document.querySelector(".no-border");

if (list.children.length === 0) {
    list.style.display = "none";
}

cancelIcon.onclick = () => {
    input.value = "";
    displayInp.style.display = "none";
};

function addTask() {
    if (input.value.trim() !== "") {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-item");
        list.style.display = "flex";

        let taskText = document.createElement("li");
        taskText.textContent = input.value
        // taskText.textContent = `${list.children.length + 1}. ${input.value}`;
        taskText.classList.add("task-text");

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
        noBorder.style.border = "1px solid #C4C4C4";
    }
}

function updateTaskNumbers() {
    Array.from(list.children).forEach((task, index) => {
        let taskText = task.querySelector(".task-text");
        taskText.textContent = input.value;
        // taskText.textContent = `${index + 1}. ${taskText.textContent.split(". ")[1]}`;
    });

    if (list.children.length === 0) {
        list.style.display = "none";
        noBorder.style.border = "none";
    }
}

let filter1 = document.querySelector(".filter1");
let filter2 = document.querySelector(".filter2");

filter2.style.display = "none";

filter1.addEventListener("click", () => {
    let items = Array.from(list.children);
    items.sort((a, b) => {
        return a.querySelector(".task-text").textContent
            .split(". ")[1]
            .localeCompare(b.querySelector(".task-text").textContent.split(". ")[1]);
    });
    items.forEach(item => list.appendChild(item));
    updateTaskNumbers(); 
    filter1.style.display = "none";
    filter2.style.display = "block";
});

filter2.addEventListener("click", () => {
    let items = Array.from(list.children);
    items.sort((a, b) => {
        return b.querySelector(".task-text").textContent
            .split(". ")[1]
            .localeCompare(a.querySelector(".task-text").textContent.split(". ")[1]);
    });
    items.forEach(item => list.appendChild(item));
    updateTaskNumbers();
    filter2.style.display = "none";
    filter1.style.display = "block";
});

filter1.addEventListener("mouseover", () => {
    filter1.src = "./image/Group 34 (1).svg";
});
filter1.addEventListener("mouseout", () => {
    filter1.src = "./image/Group 34.svg";
});

filter2.addEventListener("mouseover", () => {
    filter2.src = "./image/Group 91.svg";
});
filter2.addEventListener("mouseout", () => {
    filter2.src = "./image/Group 90.svg";
});