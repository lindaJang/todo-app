import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//import {Provider} from 'react-redux';
import todoApp from './reducers/index';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

const store = createStore(todoApp);

const getVisibilityTodos = (
    todos,
    filter
) => {
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        case 'SHOW_COMPLETE':
            return todos.filter(
                t => t.completed
            );
        default:
            return
    }
};

let nextId = 0;
const TodoApp = ({
     todos,
     visibilityFilter
}) => (
    <div className="App">
        <AddTodo
            onAddClick={text =>
            store.dispatch({
                type: 'ADD_TODO',
                id: nextId++,
                text
            })
            }
        />
        <TodoList
            todos={
                getVisibilityTodos(
                todos,
                visibilityFilter
                )
            }
            onTodoClick={id =>
                store.dispatch({
                   type: 'TOGGLE_TODO',
                   id
                })
            }
        />
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={filter =>
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            })
            }
        />

    </div>
);

const render = () => {
    ReactDOM.render(
        // <Provider store={store}>
        <TodoApp
            {...store.getState()}
        />,
        // </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();