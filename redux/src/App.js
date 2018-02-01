import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';

import { addTodo, toggleTodo, setVisibilityFilter, VISIBILITY_FILTER } from './actions';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App(props) {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
        </div>
    );
}

export default (props) => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}


