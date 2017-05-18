import visibilityFilter from '../visibilityFilter';
import {setVisibilityFilter} from '../../action';

test('set visibilityFilter from SHOW_ALL to SHOW_COMPLETE by using a single reducer(visibilityFilter)', () =>{

    const prevState = 'SHOW_ALL';
    const action = setVisibilityFilter('SHOW_COMPLETE');
    const nextState = 'SHOW_COMPLETE';

    expect(visibilityFilter(prevState,action)).toEqual(nextState);
});