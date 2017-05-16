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
