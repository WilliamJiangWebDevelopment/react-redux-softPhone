
const counter = (state = 666, action = {}) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            //console.log(state, action);
            return state + 1;
        case 'DECREMENT_COUNTER':
            //console.log(state, action);
            return state - 1;
        default:
            return state;
    }
}

export default counter;

