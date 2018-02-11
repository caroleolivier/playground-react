import { combineReducers } from 'redux';
import { VISIBILITY_FILTER } from './actions';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actions'

const initialState = {
    visibilityFilter: VISIBILITY_FILTER.SHOW_ALL,
    todos: []
};

function visibilityFilterReducer(state=VISIBILITY_FILTER.SHOW_ALL, action) {
    debugger;
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todosReducer(state=[], action) {
    debugger;
    switch(action.type) {
        case ADD_TODO:
            return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                    if(index == action.index) {
                        Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todos: todosReducer
});

export default todoApp;
