import todo from '../todo';
import {addTodo, toggleTodo} from '../../action';

describe('todo test', () => {
    test('addTodo test by using todo func', () => {
        const prevState = {};
        const action = addTodo('run fast');
        const nextState = {
            id: 0,
            text: 'run fast',
            completed: false
        };
        expect(todo(prevState,action)).toEqual(nextState);
    });
    test('toggleTodo test by using todo func', () => {
        const prevState = {
            id: 0,
            text: 'run fast',
            completed: false
        };
        const action = toggleTodo(0);
        const nextState = {
            id: 0,
            text: 'run fast',
            completed: true
        };
        expect(todo(prevState,action)).toEqual(nextState);
    });

    test('default action test', () => {
        const prevState = {
            id: 0,
            text: 'run fast',
            completed: false
        };
        const action = {type: 'none'};
        const nextState = {
            id: 0,
            text: 'run fast',
            completed: false
        };
        expect(todo(prevState,action)).toEqual(nextState);
    });

});
