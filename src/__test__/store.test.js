import {createStore} from 'redux';
import todoApp from '../reducers/todoApp';
import {addTodo, toggleTodo, setVisibilityFilter} from '../action';


describe('store', () => {

    test('store function test', () => {
        const store = createStore(todoApp);
        const methods = Object.keys(store);

        expect(methods.length).toBe(4); // [ 'dispatch', 'subscribe', 'getState', 'replaceReducer' ]
        expect(methods).toContain('dispatch');
        expect(methods).toContain('subscribe');
        expect(methods).toContain('getState');
        expect(methods).toContain('replaceReducer');
    });

    test('throws if reducer is not a function', () =>{
        expect(() => createStore()).toThrow();
        expect(() => createStore('test')).toThrow();
        expect(() => createStore({})).toThrow();
        expect(() => createStore(() => {})).not.toThrow();
    });

    test('it applies the reducer to the previous state', () =>{
        const store = createStore(todoApp,
            {
                todos: [{
                    id: 1,
                    text: 'Hello'
                }],
                visibilityFilter: 'SHOW_ALL'
            }
        );
        expect(store.getState()).toEqual(
            {
                todos: [{
                    id: 1,
                    text: 'Hello'
                }],
                visibilityFilter: 'SHOW_ALL'
            }
        )
    });

    test('it dispatches the store with an action(addTodo)', () => {
        const store = createStore(todoApp);
        const action = addTodo('study hard');

        store.dispatch(action);
        //console.log(store.getState());

        expect(store.getState()).toEqual(
            {
                todos: [{
                    id: 0,
                    text: 'study hard',
                    completed: false
                }],
                visibilityFilter: 'SHOW_ALL'
            }
        )

    });

    test('it dispatches the store with an action(toggleTodo)', () => {
        const store = createStore(todoApp,
            {
                todos: [{
                    id: 0,
                    text: 'Hello',
                    completed: true
                }],
                visibilityFilter: 'SHOW_ALL'
            }
        );
        const action = toggleTodo(0);

        store.dispatch(action);
        //console.log(store.getState());

        expect(store.getState()).toEqual(
            {
                todos: [{
                    id: 0,
                    text: 'Hello',
                    completed: false
                }],
                visibilityFilter: 'SHOW_ALL'
            }
        )
    });

    test('it dispatches the store with an action(setVisibilityFilter)', () => {
        const store = createStore(todoApp,
            {
                todos: [{
                    id: 0,
                    text: 'Hello',
                    completed: true
                }],
                visibilityFilter: 'SHOW_ALL'
            }
        );
        const action = setVisibilityFilter('SHOW_COMPLETE');

        store.dispatch(action);
        //console.log(store.getState());

        expect(store.getState()).toEqual(
            {
                todos: [{
                    id: 0,
                    text: 'Hello',
                    completed: true
                }],
                visibilityFilter: 'SHOW_COMPLETE'
            }
        )
    });
});
