import {addTodo, toggleTodo, setVisibilityFilter} from './action';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './action';

test('addTodo action creator',() => {
    const action = addTodo('run today');
    const nextAction = {
        type: ADD_TODO,
        id: 0,
        text: 'run today'
    };
    expect(action).toEqual(nextAction);
});

test('toggleTodo action creator',() => {
    const action = toggleTodo(0);
    const nextAction = {
        type: TOGGLE_TODO,
        id: 0
    };
    expect(action).toEqual(nextAction);
});


test('setVisibilityFilter action creator',() => {
    const action = setVisibilityFilter('SHOW_COMPLETE');
    const nextAction = {
        type: SET_VISIBILITY_FILTER,
        filter: 'SHOW_COMPLETE'
    };
    expect(action).toEqual(nextAction);
});
