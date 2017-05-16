import visibilityFilter from '../visibilityFilter';

test('set visibilityFilter test', () =>{

    const prevState = 'SHOW_ALL';
    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETE'
    };
    const nextState = 'SHOW_COMPLETE';

    expect(visibilityFilter(prevState,action)).toEqual(nextState);
});