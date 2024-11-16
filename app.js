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
        document.querySelector(".filter1").style.display = "none";
        document.querySelector(".filter2").style.display = "block";
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
        document.querySelector(".filter2").style.display = "none";
        document.querySelector(".filter1").style.display = "block";
    }
}

function toggleFilters() {
    if (list.children.length >= 2) {
        document.querySelector(".filter1").style.pointerEvents = "auto";
        document.querySelector(".filter2").style.pointerEvents = "auto";
    } else {
        document.querySelector(".filter1").style.pointerEvents = "none";
        document.querySelector(".filter2").style.pointerEvents = "none";
    }
}

document.querySelector(".filter1").addEventListener("click", getFilter1);
document.querySelector(".filter2").addEventListener("click", getFilter2);

// Mouseover effects
document.querySelector(".filter1").addEventListener("mouseover", () => {
    document.querySelector(".filter1").src = "./image/Group_34_(1).svg";
});
document.querySelector(".filter1").addEventListener("mouseout", () => {
    document.querySelector(".filter1").src = "./image/Group_34.svg";
});

document.querySelector(".filter2").addEventListener("mouseover", () => {
    document.querySelector(".filter2").src = "./image/Group_91.svg";
});
document.querySelector(".filter2").addEventListener("mouseout", () => {
    document.querySelector(".filter2").src = "./image/Group_90.svg";
});