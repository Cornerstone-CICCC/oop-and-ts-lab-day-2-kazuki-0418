import { TodoContext } from "../contexts/TodoContext.js";

export class AddTodo {
  constructor(todoContext) {
    this.todoContext = todoContext;
  }

  render() {
    const container = document.createElement("div");
    container.className = "add-todo";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter task details...";
    input.id = "todo-input";

    const button = document.createElement("button");
    button.textContent = "Add To Do";
    button.id = "todo-add-btn";

    button.addEventListener("click", () => {
      const task = input.value;
      this.todoContext.addTodo(task);
      input.value = ""; // Clear input
    });

    container.appendChild(input);
    container.appendChild(button);

    return container;
  }
}
