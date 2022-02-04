let addTaskButton = document.getElementById ("add-task-button");
let taskInput = document.getElementById("input-task");
let taskHTMLList = document.getElementById('task-list');
let taskList = [];
addTaskButton.addEventListener("click",() => createNewTask (taskInput.value, false));


function createNewTask (taskName, isChecked) {
  if (taskName) {
     let newTask = taskName;
     let newLi = document.createElement ('li')
     let newCheckBox = document.createElement('input');
     let newSpan = document.createElement('span');
     let newButton = document.createElement('button');
     newCheckBox.type = "checkbox";
     newCheckBox.checked = isChecked;
     newCheckBox.setAttribute('onclick','saveTaskList()')
     newSpan.className = "task";
     newSpan.innerHTML = newTask;
     newButton.className = "delete-btn";
     newButton.innerHTML = "Close";
     newButton.setAttribute ('onclick', "deleteTask(this);")
      
      newLi.appendChild(newCheckBox);
      newLi.appendChild(newSpan);
      newLi.appendChild(newButton);
      taskHTMLList.appendChild(newLi);
      taskInput.value = "";
      saveTaskList();
  }
}

function deleteTask (completedTask) {
    completedTask.parentNode.remove();
    saveTaskList();
}

function saveTaskList() {
    let taskList = []
    for (let task of document.querySelectorAll("li")) {
        taskList.push({'taskName':task.querySelector("span").innerText, 'isChecked':task.querySelector("input").checked});
    }
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function getTasksFromStorage () {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let task of taskList) {
        createNewTask(task['taskName'], task['isChecked']);
    }
}

