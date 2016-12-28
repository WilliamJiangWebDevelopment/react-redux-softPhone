import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/';
import Main from './../components/Main.js';

const mapStateToProps = (state) => ({
    list: state.phone
})

/**
 * function mapDispatchToProps(dispatch) {
 *   return bindActionCreators(actionCreators, dispatch);
 * }
 */
const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
