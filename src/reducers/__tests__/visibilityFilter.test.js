import visibilityFilter from '../visibilityFilter';
import {SET_VISIBILITY_FILTER} from '../../action';

test('set visibilityFilter from SHOW_ALL to SHOW_COMPLETE by using a single reducer(visibilityFilter)', () =>{

    const prevState = 'SHOW_ALL';
    const action = {
        type: SET_VISIBILITY_FILTER,
        filter: 'SHOW_COMPLETE'
    };
    const nextState = 'SHOW_COMPLETE';

    expect(visibilityFilter(prevState,action)).toEqual(nextState);
});