import * as React from 'react';
import styled from 'styled-components';

export default class TodoListContainer extends React.Component {
    render() {
        const todos = [
            { name: 'call mum', done: false },
            { name: 'pay bill', done: true },
            { name: 'shop grocery', done: false },
            { name: 'book holiday', done: false }
        ];
        const todoItems = todos.map(todo => <TodoItem key={todo.name} name={todo.name} done={todo.done} />);
        return (
            <Container>
                <TodoListTitle>Todo List</TodoListTitle>
                <div>
                    <TodoListHeader>
                        <TodoListItemsHeaderItem>Name</TodoListItemsHeaderItem>
                        <TodoListItemsHeaderItem>Done</TodoListItemsHeaderItem>
                    </TodoListHeader>
                    {todoItems}
                </div>
            </Container>
        );
    }
}

const Container = styled.div`
    font: 'monospace';
`;

const TodoListTitle = styled.h1`
    color: deeppink;
`;

const TodoListHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

const TodoItemContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const TodoListItemsHeaderItem = styled.h4`
    width: 15em;
`;

const TodoItemName = styled.div`
    width: 15em;
`;

const TodoItemDone = styled.div`
    width: 15em;
`;

class TodoItem extends React.Component {
    render() {
        return (
            <TodoItemContainer>
                <TodoItemName>{this.props.name}</TodoItemName>
                <TodoItemDone>{this.props.done.toString()}</TodoItemDone>
            </TodoItemContainer>
        );
    }
}
