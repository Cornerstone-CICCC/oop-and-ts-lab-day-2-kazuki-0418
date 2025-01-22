export class TodoItem {
  constructor(todo, todoContext) {
    this.todo = todo;
    this.todoContext = todoContext;
  }

  render() {
    const listItem = document.createElement("li");
    listItem.className = `todo-item ${this.todo.completed ? "completed" : ""}`;

    const taskText = document.createElement("span");
    taskText.textContent = this.todo.task;
    taskText.style.textDecoration = this.todo.completed
      ? "line-through"
      : "none";

    // "Mark Complete" button
    const markCompleteButton = document.createElement("button");
    markCompleteButton.textContent = this.todo.completed
      ? "Mark Incomplete"
      : "Mark Complete";
    markCompleteButton.className = "mark-complete-btn";

    // Click to toggle completed state
    markCompleteButton.addEventListener("click", () => {
      this.todoContext.toggleComplete(this.todo.id);
    });

    // Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    removeButton.addEventListener("click", () => {
      this.todoContext.removeTodo(this.todo.id);
    });

    listItem.appendChild(taskText);
    listItem.appendChild(markCompleteButton);
    listItem.appendChild(removeButton);

    return listItem;
  }
}
