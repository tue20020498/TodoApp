import html from "../libary/core.js";

const day = new Date().toDateString()
const time = new Date().toLocaleTimeString()

const createAt = new Date().toLocaleDateString() + " " + time
function Header() {
    return html`
        <header class="header">
            <div class="heading">
                <p class="time">${day}</p><br>
                <h1>Todo App </h1>
            </div>
            <div>
                <input 
                    class="new-todo" 
                    placeholder="Enter today's work!" 
                    autofocus
                    onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
                >
                <button 
                class="add-todo"
                onclick = "dispatch('add', document.querySelector('.new-todo').value.trim())"
                >Add Task</button>
            </div>
        </header>
    `
}

export default Header