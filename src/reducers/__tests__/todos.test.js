import todos from '../todos';
import {addTodo, toggleTodo} from '../../action';

describe('todos', () => {
    test('addTodo run today by using a single reducer(todos)', () => {
        const prevState = [];
        const action = addTodo('run today');
        const nextState =
            [{
                id: 0,
                text: 'run today',
                completed: false
            }];

        expect(todos(prevState, action)).toEqual(nextState);
    });

    test('toggleTodo index:0 by using a single reducer(todos)', () => {
        const prevState = [
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
        ];
        const action = toggleTodo(0);
        const nextState = [
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
        ];
        expect(todos(prevState,action)).toEqual(nextState);
    });

    test('default test', () => {
        const prevState = [
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
        ];
        const action = {
            type: 'defaults'
        };
        const nextState = [
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
        ];
        expect(todos(prevState,action)).toEqual(nextState);
    });

});
