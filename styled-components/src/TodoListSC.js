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
        return (
            <Container>
                <TodoListHeader>Todo List</TodoListHeader>
                <TodoListItems todos={todos} />
            </Container>
        );
    }
}

const Container = styled.div`
    font: 'monospace';
`;

const TodoListHeader = styled.h1`
    color: deeppink;
`;

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

const FlexRowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

class TodoListItemsHeader extends React.Component {
    render() {
        return (
            <FlexRowContainer>
                <TodoListItemsHeaderItem>Name</TodoListItemsHeaderItem>
                <TodoListItemsHeaderItem>Done</TodoListItemsHeaderItem>
            </FlexRowContainer>
        );
    }
}

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
            <FlexRowContainer>
                <TodoItemName>{this.props.name}</TodoItemName>
                <TodoItemDone>{this.props.done.toString()}</TodoItemDone>
            </FlexRowContainer>
        );
    }
}
