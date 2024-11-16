let input = document.querySelector("#todoInput");
let list = document.querySelector("#todoList");
let displayInp = document.querySelector(".inp");
let cancelIcon = document.querySelector(".cancel");
let noBorder = document.querySelector(".no-border");

cancelIcon.addEventListener("mouseover", () => {
    cancelIcon.src = "./image/Group_70.svg";
});
cancelIcon.addEventListener("mouseout", () => {
    cancelIcon.src = "./image/Group_56.svg";
});

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
        taskText.textContent = input.value.trim();
        taskText.classList.add("task-text");

        let taskCancelIcon = document.createElement("img");
        taskCancelIcon.src = "./image/Group_56.svg";
        taskCancelIcon.classList.add("cancel");
        taskCancelIcon.onclick = () => {
            taskDiv.remove();
            if (list.children.length === 0) {
                list.style.display = "none";
                noBorder.style.border = "none";
            }
        };

        taskCancelIcon.addEventListener("mouseover", () => {
            taskCancelIcon.src = "./image/Group_70.svg";
        });
        taskCancelIcon.addEventListener("mouseout", () => {
            taskCancelIcon.src = "./image/Group_56.svg";
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(taskCancelIcon);
        list.appendChild(taskDiv);

        input.value = "";
        displayInp.style.display = "none";
    } else {
        displayInp.style.display = "block";
        noBorder.style.border = "1px solid #C4C4C4";
    }

    toggleFilters();
}

let filter1 = document.querySelector(".filter1");
let filter2 = document.querySelector(".filter2");

filter2.style.display = "none";

function getFilter1() {
    if (list.children.length >= 2) {
        let items = Array.from(list.children);
        items.sort((a, b) => {
            let aText = a.querySelector(".task-text").textContent.toLowerCase();
            let bText = b.querySelector(".task-text").textContent.toLowerCase();
            return aText.localeCompare(bText);
        });
        items.forEach(item => list.appendChild(item));
        filter1.style.display = "none";
        filter2.style.display = "block";
    }
}

function getFilter2() {
    if (list.children.length >= 2) {
        let items = Array.from(list.children);
        items.sort((a, b) => {
            let aText = a.querySelector(".task-text").textContent.toLowerCase();
            let bText = b.querySelector(".task-text").textContent.toLowerCase();
            return bText.localeCompare(aText);
        });
        items.forEach(item => list.appendChild(item));
        filter2.style.display = "none";
        filter1.style.display = "block";
    }
}

function toggleFilters() {
    if (list.children.length >= 2) {
        filter1.style.pointerEvents = "auto";
        filter2.style.pointerEvents = "auto";
    } else {
        filter1.style.pointerEvents = "none";
        filter2.style.pointerEvents = "none";
    }
}

filter1.addEventListener("click", getFilter1);
filter2.addEventListener("click", getFilter2);

filter1.addEventListener("mouseover", () => {
    filter1.src = "./image/Group_34_(1).svg";
});
filter1.addEventListener("mouseout", () => {
    filter1.src = "./image/Group_34.svg";
});

filter2.addEventListener("mouseover", () => {
    filter2.src = "./image/Group_91.svg";
});
filter2.addEventListener("mouseout", () => {
    filter2.src = "./image/Group_90.svg";
});
