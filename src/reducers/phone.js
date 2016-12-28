
const initialState = [
    '3478221246', '6043895635', '6668889999'
]

const phone = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_PHONE':
            return [
                ...state,
                action.phone
            ]
        case 'DELETE_PHONE':
            return state.filter(number =>
                number !== action.phone
            );
        default:
            return state;
    }
    return state;
}

export default phone;

