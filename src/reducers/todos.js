import {ADD_TODO, TOGGLE_TODO} from '../action';
import todo from './todo';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
                todo(undefined ,action)
            ];
        case 'TOGGLE_TODO':
            return state.map( t => todo(t,action));
        default:
            return state;
    }
};
//TODO: ...todo 연산 안됨..

export default todos;