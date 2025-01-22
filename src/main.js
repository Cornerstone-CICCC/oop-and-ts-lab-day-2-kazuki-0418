import { TodoContext } from "./contexts/TodoContext.js";
import { AddTodo } from "./components/AddTodo.js";
import { TodoList } from "./components/TodoList.js";

// Create a global context for managing todos
const todoContext = new TodoContext();

// Create AddTodo and TodoList components
const addTodoComponent = new AddTodo(todoContext);
const todoListComponent = new TodoList(todoContext);

// Render components
const app = document.getElementById("app");
app.appendChild(addTodoComponent.render());
app.appendChild(todoListComponent.render());
