// Function to mark task as complete
function completeTask(taskNumber) {

    let taskInput = document.getElementById("task" + taskNumber);

    if (taskInput.style.textDecoration === "line-through") {
        taskInput.style.textDecoration = "none";
    } else {
        taskInput.style.textDecoration = "line-through";
    }

    styleAllTasks();
}

// Function to remove task
function removeTask(taskNumber) {

    let taskInput = document.getElementById("task" + taskNumber);
    taskInput.parentElement.style.display = "none";
}

// Loop to style all tasks the same way
function styleAllTasks() {

    let allTasks = document.querySelectorAll("input[type='text']");

    for (let i = 0; i < allTasks.length; i++) {

        if (allTasks[i].style.textDecoration === "line-through") {
            allTasks[i].style.backgroundColor = "#d3ffd3"; // light green
        } else {
            allTasks[i].style.backgroundColor = "white";
        }
    }
}
