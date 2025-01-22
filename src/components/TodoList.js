import { TodoItem } from "./TodoItem.js";

export class TodoList {
  constructor(todoContext) {
    this.todoContext = todoContext;
    this.listElement = document.createElement("ul");
    this.listElement.className = "todo-list";

    // Listen for changes in the todo context
    this.todoContext.addListener((todos) => this.update(todos));
  }

  update(todos) {
    // Clear the list
    this.listElement.innerHTML = "";

    // Add each todo item
    todos.forEach((todo) => {
      const todoItem = new TodoItem(todo, this.todoContext);
      this.listElement.appendChild(todoItem.render());
    });
  }

  render() {
    return this.listElement;
  }
}
