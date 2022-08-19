import html from "../libary/core.js";
import { connect } from "../libary/store.js";

function Footer({ todos, filter, filters }) {
    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>${todos.filter(filters.active).length}</strong> Active task
            </span>
            <ul class="filters">
                ${Object.keys(filters).map((type, index) => {
                    return html`
                    <li>
                        <a 
                            class="${filter === type && 'selected'}" 
                            href="#"
                            onclick="dispatch('switchFilter', ${index});"
                        >
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                    `}
                )}
                
            </ul>
            <div class="clear">            
                ${todos.filter(filters.completed).length > 0 && html`
                    <button class="clear-completed"
                        onclick="dispatch('clearAllCompleted')"
                    >Clear completed</button>
                `}
            </div>
        </footer>
    `
}

export default connect()(Footer)