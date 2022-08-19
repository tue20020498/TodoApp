import storage from '../util/storage.js';

const time = new Date().toLocaleTimeString()
const currentTime = new Date().toLocaleDateString() + " " + time

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active:(todo) => !todo.completed,
        completed:(todo) => todo.completed
    },
    editIndex: null,
}

const actions = {
    add({todos}, title) {
        if(title) {
            todos.push({title, completed: false, createAt: currentTime, updateAt: null})
            storage.set(todos)
        }
    },
    toggle({todos}, index) {
        todos[index].completed = !todos[index].completed
        storage.set(todos)
    },
    toggleAll({todos}, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    remove({todos}, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, index) {
        const newFilters = Object.keys(state.filters)
        state.filter = newFilters[index]
    },
    clearAllCompleted(state) {
       state.todos = state.todos.filter(state.filters.active)
       storage.set(state.todos)
    }, 
    startEdit(state, index) {
        state.editIndex = index
        
    },
    save(state, title) {
        if(state.editIndex != null) {
            if(title) {
                state.todos[state.editIndex].title = title
                state.todos[state.editIndex].updateAt = currentTime
                storage.set(state.todos)
            } else {
                this.remove(state, state.editIndex)
            }
            state.editIndex = null
        }
    },
    cancelEdit(state) {
        state.editIndex = null
    }

}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}