import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers/index';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';


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


class VisibleTodoList extends Component {
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        //const props = this.props;
        const {store} = this.context;
        const state = store.getState();
        return(
            <TodoList
                todos={
                    getVisibilityTodos(
                        state.todos,
                        state.visibilityFilter
                    )
                }
                onTodoClick={ id =>
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
                }
            />
        );
    }
}
VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
};





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