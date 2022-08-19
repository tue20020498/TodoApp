function html([first, ...strings], ...values) {
    return values.reduce((acc, value) => acc.concat(value, strings.shift()),[first]).filter(
        (item) => (item && item !== true) || item === 0
    ).join('\n');

}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map();

    function render() {


        for(const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
            component(Object.assign({}, props, selector(state), args))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}

export default html;

