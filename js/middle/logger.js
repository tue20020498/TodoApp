export default function logger(reducer) {
    
    return (prevState, action, args) => {

        console.group(action)
        console.log('Prev', prevState)
        console.log('Action Arguments', args)
        const nextState = reducer(prevState, action, args);
        console.log('nextState', nextState)

        console.groupEnd()
        return nextState;
    }
}

