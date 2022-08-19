import html from "../libary/core.js";

const day = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()

const handleEdit = (action, index)=> {
    dispatch(action, index)
    document.querySelector('.editing .edit').focus()
}

window.handleEdit = handleEdit

function TodoItem(todo, index, editIndex) {
    return html`
        <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
            <div class="view">
                <input 
                    id="toggle"
                    class="toggle" 
                    type="checkbox" 
                    ${todo.completed && 'checked'}
                    onchange="dispatch('toggle', ${index})"
                >

                <label ondblclick="handleEdit('startEdit', ${index})">${todo.title}</label>
                <button 
                    class="destroy"
                    onclick="dispatch('remove', ${index})"
                >
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <div class="create-at">
                <span>
                <i class="fa-regular fa-clock"></i>
                ${todo.updateAt ? 'Update at: ' : 'Create at: '}</span>
                <span class="create-day">
                        ${todo.updateAt || todo.createAt}
                </span>

            </div>
            <input 
            class="edit" 
            value="${todo.title}"
            onkeyup="event.keyCode == 13 && dispatch('save', this.value.trim())
            || event.keyCode == 27 && dispatch('cancelEdit', this.value.trim())
            "
            onblur="dispatch('save', this.value.trim())"
            >
            <div></div>
        </li>
    `
}

export default TodoItem