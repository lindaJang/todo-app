
import todos from './todos';

test('add todo to state', () => {

    const prevState = [];
    const action = {type: 'ADD_TODO', id: 0, text: 'Run JEST'};
    const nextState =
        [{
            id: 0,
            text: 'Run JEST',
            completed: false
        }];

    expect(todos(prevState, action)).toEqual(nextState);
});

test('toggle todo to state', () => {
    const prevState = [
        {
            id: 0,
            text: 'RUN',
            completed: false
        },
        {
            id: 1,
            text: 'WALK',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 0
    };
    const nextState = [
        {
            id: 0,
            text: 'RUN',
            completed: true
        },
        {
            id: 1,
            text: 'WALK',
            completed: false
        }
    ];
    expect(todos(prevState, action)).toEqual(nextState);
});

