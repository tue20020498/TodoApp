import html from "../libary/core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../libary/store.js";

function TodoList({todos, filter, filters, editIndex}) {

    return html`
        <section class="main">
        <div class="round">
        <input 
            id="toggle-all" 
            class="toggle-all" 
            type="checkbox"
            onchange="dispatch('toggleAll', this.checked)"
            ${todos.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all"></label>
        <span>Mark all as complete</span>
        </div>
            <ul class="todo-list">
               ${todos.filter(filters[filter]).map((todo, index) => TodoItem(todo, index, editIndex))} 
            </ul>
        </section>
    `
}

export default connect()(TodoList)