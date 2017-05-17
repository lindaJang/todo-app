import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers/index';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import {connect} from 'react-redux';

const getVisibleTodos = (
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
            return;
    }
};

const mapStateToProps = (state) => {
    return{
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick : (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            });
        }
    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

const TodoApp = () => (
    <div className="App">
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);


ReactDOM.render(
    <Provider store={createStore(todoApp)}>
    <TodoApp />
    </Provider>,
    document.getElementById('root')
);