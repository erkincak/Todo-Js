//selectors
const todoInput = document.querySelector(".todo-input");
const todoButtons = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listener

todoButtons.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event) {
  event.preventDefault();
  // creating div of todolist
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //creating list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Checked button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //delete button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("remove-btn");
  todoDiv.appendChild(removeButton);
  //Append todoList
  todoList.appendChild(todoDiv);
  //Clear Input
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete
  if (item.classList[0] === "remove-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //Check
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
