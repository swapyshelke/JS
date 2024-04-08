import store from "./store.js";
// console.log(store);

function render(){
    const todos = document.querySelector(".todos");

          
          const todoElements = store.todos.map((todo) => 
            `<li class="todo" data-id="${todo.id}">
            <span class="todo-little ${todo.completed? "completed" : ""} ">${todo.title}</span>
            <div class="toggle-delete">
              <input type="checkbox" name="completed" class="todo-check" ${todo.completed ? "checked" : ""}>
              <button class="delete-todo-button">X</button>
            </div>
          </li>`).join("");
          todos.innerHTML = todoElements
}

export default render;