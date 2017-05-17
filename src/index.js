import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//import {Provider} from 'react-redux';
import todoApp from './reducers/index';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
//import Footer from './components/Footer';


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
const Link = ({
                  active,
                  children,
                  onClick
              }) => {
    if(active){
        return <span>{children}</span>;
    }
    return (
        <a href='#'
           onClick={e => {
               e.preventDefault();
               /*  a 태그의 경우, onclick 이벤트후 기본동작인 href 이벤트가 호출이된다.
                그래서 onclick과 href가 둘다 호출되어 버리는 문제점이 발생한다.
                이 때, onclick에서 preventDefault를 호출하게 되면, 다음 이벤트는 모두 무시가 되기 때문에 의도한대로 동작하게 된다. */
               onClick();
           }}
        >
            {children}
        </a>
    );
};

class FilterLink extends Component {
    componentWillMount(){
        const {store} = this.props;
        this.subscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        const props = this.props;
        const {store} = this.props;
        const state = store.getState();
        return(
            <Link
                active={
                    props.filter === state.visibilityFilter
                }
                onClick={() =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        );
    }
}

class VisibleTodoList extends Component {
    componentWillMount(){
        const {store} = this.props;
        this.subscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        //const props = this.props;
        const {store} = this.props;
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



const Footer = ({store}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
            store={store}
        >
            All
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_ACTIVE'
            store={store}
        >
            Active
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_COMPLETE'
            store={store}
        >
            Completed
        </FilterLink>
    </p>
);



const TodoApp = ({ store }) => (
    <div className="App">
        <AddTodo store={store}/>
        <VisibleTodoList store={store}/>
        <Footer store={store}/>

    </div>
);

//const store = createStore(todoApp);

ReactDOM.render(
    // <Provider store={store}>
    <TodoApp store={createStore(todoApp)}/>,
    // </Provider>,
    document.getElementById('root')
);