import todoApp from '../todoApp';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../../action';

describe('todoApp', () =>{
    test('addTodo run today by using combineReducer(todoApp)', () => {
        const prevState = {};
        const action = {
            type: ADD_TODO,
            id: 0,
            text: 'run today'
        };
        const nextState = {
            todos: [{
                id: 0,
                text: 'run today',
                completed: false }],
            visibilityFilter: 'SHOW_ALL'
        };
        expect(todoApp(prevState, action)).toEqual(nextState);
    });

    test('toggle index:0 by using combineReducer(todoApp)', () => {
        const prevState = {
            todos: [
                {
                    id: 0,
                    text: 'run today',
                    completed: false
                },
                {
                    id: 1,
                    text: 'walk today',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };
        const action = {
            type: TOGGLE_TODO,
            id: 0
        };
        const nextState = {
            todos: [
                {
                    id: 0,
                    text: 'run today',
                    completed: true
                },
                {
                    id: 1,
                    text: 'walk today',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };
        expect(todoApp(prevState, action)).toEqual(nextState);
    });


    test('set visibilityFilter from SHOW_ALL to SHOW_COMPLETE by using combineReducer(todoApp)', () => {
        const prevState = {
            todos: [
                {
                    id: 0,
                    text: 'run today',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };
        const action = {
            type: SET_VISIBILITY_FILTER,
            filter: 'SHOW_COMPLETE'
        };
        const nextState = {
            todos: [
                {
                    id: 0,
                    text: 'run today',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_COMPLETE'
        };
        expect(todoApp(prevState, action)).toEqual(nextState);
    });
});
