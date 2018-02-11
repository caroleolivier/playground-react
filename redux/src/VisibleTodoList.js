import React from 'react';
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { VISIBILITY_FILTER, toggleTodo } from './actions';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VISIBILITY_FILTER.SHOW_ALL:
            return todos;
        case VISIBILITY_FILTER.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VISIBILITY_FILTER.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    debugger;
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (index) => dispatch(toggleTodo(index))
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)

export default VisibleTodoList;