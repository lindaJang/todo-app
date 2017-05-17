import todos from '../todos';

test('addTodo test', () => {
    const prevState = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'run today'
    };
    const nextState =
        [{
            id: 0,
            text: 'run today',
            completed: false
        }];

    expect(todos(prevState, action)).toEqual(nextState);
});

test('toggleTodo test', () => {
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
        type: 'TOGGLE_TODO',
        id: 0
    };
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