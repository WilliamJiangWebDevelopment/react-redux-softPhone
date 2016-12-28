/**
 * this is copied from redux/examples/counter/src/components/Counter.js
 * update: this.method.bind(this), otherwise can't pass.
 */
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd.bind(this)}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync.bind(this)}>
                    Increment async
                </button>
            </p>
        )
    }
}

export default Counter
