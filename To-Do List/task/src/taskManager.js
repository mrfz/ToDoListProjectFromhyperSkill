let addTaskButton = document.getElementById ("add-task-button");
let taskInput = document.getElementById("input-task");
let taskList = document.getElementById('task-list')
addTaskButton.addEventListener("click", createNewTask());


function createNewTask () {
  if (taskInput.value != "") {
     let newTask = taskInput.value;
     let newLi = document.createElement ('li')
     let newCheckBox = document.createElement('input');
     let newSpan = document.createElement('span');
     let newButton = document.createElement('button');
     newCheckBox.class = "checkbox";
     newSpan.class = "task"
      .innerHTML = newTask;
     newButton.class = "delete-btn";
      .innerHTML = "Close";
      
      newLi.appendChild(newCheckBox);
      newLi.appendChild(newSpan);
      newLi.appendChild(newButton);
      taskList.appendChild(newLi);
  }
}