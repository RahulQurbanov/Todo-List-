let isInputVisible = true;

function addTask() {
    let input = document.querySelector("#todoInput");
    let list = document.querySelector("#todoList");
    let displayInp = document.querySelector(".inp");

    if (isInputVisible && input.value.trim() !== "") {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add('task-item');

        // Create a span for the task text
        let taskText = document.createElement('span');
        taskText.textContent = input.value;
        taskText.classList.add('task-text');
        
        // Create the cancel icon
        let cancelIcon = document.createElement("img");
        cancelIcon.src = "./image/Group 56.svg";
        cancelIcon.classList.add("cancel");
        cancelIcon.onclick = () => taskDiv.remove();

        // Append text and cancel icon to the task container
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(cancelIcon);

        // Append the task to the list
        list.appendChild(taskDiv);

        // Clear the input field and hide it
        input.value = "";
        input.disabled = true;
        displayInp.style.display = "none";
    } else {
        // Show the input for the next entry
        displayInp.style.display = "block";
        input.disabled = false;
    }
}

