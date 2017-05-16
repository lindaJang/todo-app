import todoApp from './todoApp';

test('addTodo test', () => {
    const prevState = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'run today'
    };
    const nextState = {
       todos: [{
           id: 0,
           text: 'run today',
           completed: false
       }],
       visibilityFilter: 'SHOW_ALL'

    };

    expect(todoApp(prevState, action)).toEqual(nextState);
});

test('toggleTodo test', () => {
   const prevState = {
       todos: [{
           id: 0,
           text: 'run today',
           completed: false
       },
       {
           id: 1,
           text: 'walk today',
           completed: false
       }],
       visibilityFilter: 'SHOW_ALL'
    };
   const action = {
       type: 'TOGGLE_TODO',
       id: 1
   };
    const nextState = {
        todos: [{
            id: 0,
            text: 'run today',
            completed: false
        },
        {
            id: 1,
            text: 'walk today',
            completed: true
        }],
        visibilityFilter: 'SHOW_ALL'
    };

    expect(todoApp(prevState,action)).toEqual(nextState);
});

test('set visibilityFilter test', () =>{

    const prevState = {
        todos: [{
            id: 0,
            text: 'run today',
            completed: false
        },
            {
                id: 1,
                text: 'walk today',
                completed: true
            }],
        visibilityFilter: 'SHOW_ALL'
    };
    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETE'
    };
    const nextState = {
        todos: [{
            id: 0,
            text: 'run today',
            completed: false
        },
            {
                id: 1,
                text: 'walk today',
                completed: true
            }],
        visibilityFilter: 'SHOW_COMPLETE'
    };
});