import React from 'react';
import { createStore } from 'redux';
import todoApp from './reducers';

import { addTodo, toggleTodo, setVisibilityFilter, VISIBILITY_FILTER } from './actions';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// testing

console.log(store.getState());

store.dispatch(addTodo('Learn redux'));

console.log(store.getState());

export default (props) => {
    return <div>Hello</div>
}


