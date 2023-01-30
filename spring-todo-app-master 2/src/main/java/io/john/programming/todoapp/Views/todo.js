// script.js
const form = document.getElementById("new-todo-form");
const todoList = document.getElementById("todo-list");

// Handle form submissions
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodoText = document.getElementById("new-todo-text").value;

  // Make API request to create new to-do item
  fetch("http://localhost:8080/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: newTodoText }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Add new to-do item to the UI
      const newTodo = document.createElement("tr");
      newTodo.innerHTML = `
        <td>${data.task}</td>
        <td>
          <button class="edit-button" data-id="${data.id}">Edit</button>
          <button class="delete-button" data-id="${data.id}">Delete</button>
        </td>
      `;
      todoList.appendChild(newTodo);
    });
});

// Handle click events on the "edit" and "delete" buttons
todoList.addEventListener("click", (event) => {
  const target = event.target;
  const todoId = target.dataset.id;

  if (target.classList.contains("edit-button")) {
    // Make API request to update to-do item
    // Code to handle editing the
  }
});
