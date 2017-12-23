import * as React from 'react';
import { PropTypes } from 'prop-types';
import style from './TodoList.scss';

export default class TodoListContainer extends React.Component {
    render() {
        const todos = [
            { name: 'call mum', done: false },
            { name: 'pay bill', done: true },
            { name: 'shop grocery', done: false },
            { name: 'book holiday', done: false }
        ];
        return (
            <div className={style.todoList}>
                <TodoListHeader />
                <TodoListItems todos={todos} />
            </div>
        );
    }
}

class TodoListHeader extends React.Component {
    render() {
        return (
            <h1 className={style.header}>
                Todo List
            </h1>
        );
    }
}

class TodoListItems extends React.Component {
    render() {
        const todoItems = this.props.todos.map(todo => <TodoItem key={todo.name} name={todo.name} done={todo.done} />);
        return (
            <div>
                <TodoListItemsHeader />
                {todoItems}
            </div>
        );
    }
}
TodoListItems.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        done: PropTypes.bool
    })).isRequired
};

class TodoListItemsHeader extends React.Component {
    render() {
        return (
            <div className={style.todoListItemHeader}>
                <h4 className={style.headerItem}>Name</h4>
                <h4 className={style.headerItem}>Done</h4>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return (
            <div className={style.itemContainer}>
                <div className={style.item}>{this.props.name}</div>
                <div className={style.item}>{this.props.done.toString()}</div>
            </div>
        );
    }
}
TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
};
