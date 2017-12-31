import * as React from 'react';
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
                <TodoListTitle>Todo List</TodoListTitle>
                <TodoListItems todos={todos} />
            </div>
        );
    }
}

class TodoListTitle extends React.Component {
    render() {
        return (
            <h1 className={style.header}>
                {this.props.children}
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

class TodoListItemsHeader extends React.Component {
    render() {
        return (
            <div className={style.flexRowContainer}>
                <h4 className={style.headerItem}>Name</h4>
                <h4 className={style.headerItem}>Done</h4>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return (
            <div className={style.flexRowContainer}>
                <div className={style.item}>{this.props.name}</div>
                <div className={style.item}>{this.props.done.toString()}</div>
            </div>
        );
    }
}
