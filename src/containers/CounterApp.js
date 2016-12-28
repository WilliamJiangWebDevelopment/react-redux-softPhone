import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreator from '../actions/CounterAction'
import Counter from '../components/Counter';

class CounterApp extends Component {
    render() {
        let { dispatch }  = this.props;
        let boundActionCreators = bindActionCreators(actionCreator, dispatch);

        return (
            <div className="container-fluid">
                <Counter
                    value={this.props.value}
                    onIncrement={() => dispatch(actionCreator.incrementCounter())}
                    onDecrement={() => dispatch(actionCreator.decrementCounter())}
                    {...boundActionCreators}
                    ></Counter>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        value: state.counters
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreator, dispatch);
}

//also work: connect(mapStateToProps)(CounterApp);
export default connect(
    (state) => ({
        value: state.counters
    })
)(CounterApp);