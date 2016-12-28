import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActions from '../actions'
import Header from '../components/todomvc/Header'
import MainSection from '../components/todomvc/MainSection'

import '../styles/todomvc.css'

const TodoApp = ({todos, actions}) => (
    <div>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions}/>
    </div>
)

TodoApp.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);