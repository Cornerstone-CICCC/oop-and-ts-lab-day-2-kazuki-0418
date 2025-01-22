export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  // Add a task
  addTodo(task) {
    if (task.trim()) {
      this.todos.push({ id: Date.now(), task, completed: false });
      this.notifyListeners();
    }
  }

  // Remove a task
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notifyListeners();
  }

  // Toggle task completion
  toggleComplete(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.notifyListeners();
  }

  // Register a listener to react to changes
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Notify all listeners of state changes
  notifyListeners() {
    this.listeners.forEach((callback) => callback(this.todos));
  }
}
