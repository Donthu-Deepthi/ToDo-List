document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Add task when button clicked
    addBtn.addEventListener("click", addTask);
  
    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const li = document.createElement("li");
      li.className = "task-item";
  
      const taskLeft = document.createElement("div");
      taskLeft.className = "task-left";
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
  
      const span = document.createElement("span");
      span.className = "task-text";
      span.innerText = taskText;
  
      checkbox.addEventListener("change", () => {
        span.classList.toggle("completed", checkbox.checked);
      });
  
      taskLeft.appendChild(checkbox);
      taskLeft.appendChild(span);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerText = "Delete";
      deleteBtn.onclick = () => li.remove();
  
      li.appendChild(taskLeft);
      li.appendChild(deleteBtn);
  
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
  