// increment
export function increment(index) {
    return {
        type: 'INCREMENT',
        index
    }
}

// add comment
export function addIncrement(id, comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}

// remove comment
export function removeIncrement(index) {
    return {
        type: 'REMOVE_COMMENT',
        index
    }
}