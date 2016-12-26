import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreator.js';

import Main from './Main.js';

function mapStateToProps(state) {
    return {
        list: state.list,
        status: state.status
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
