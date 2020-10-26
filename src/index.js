document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasks = [];
  const form = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");
  const todos = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    todos.innerHTML += description.value;
    event.preventDefault();
    }, false);

  });
