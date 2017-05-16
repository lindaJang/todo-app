import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//import {Provider} from 'react-redux';
import todoApp from './reducers/index';


const store = createStore(todoApp);

const FilterLink = ({
    filter,
    currentFilter,
    children
}) => {
    if(filter === currentFilter){
        return <span>{children}</span>;
    }
    return (
       <a href='#'
        onClick={e => {
            e.preventDefault();
            /*  a 태그의 경우, onclick 이벤트후 기본동작인 href 이벤트가 호출이된다.
                그래서 onclick과 href가 둘다 호출되어 버리는 문제점이 발생한다.
                이 때, onclick에서 preventDefault를 호출하게 되면, 다음 이벤트는 모두 무시가 되기 때문에 의도한대로 동작하게 된다. */
            store.dispatch({
                type:'SET_VISIBILITY_FILTER',
                filter
            });
        }}
       >
           {children}
       </a>
    );
};

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
    }
};

let nextId = 0;
class TodoApp extends Component {
    render() {
        const {
            todos,
            visibilityFilter
        } = this.props;
        const visibleTodos = getVisibilityTodos(
          todos,
          visibilityFilter
        );
        return (
            <div className="App">
                <input ref={node =>{
                    this.input = node;
                }} />
                <button onClick={()=> {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: nextId++,
                        text: this.input.value
                    });

                    this.input.value = '';
                }}>Add todo</button>
                <ul>{visibleTodos.map(todo =>
                    <li key={todo.id}
                        onClick={ () => {store.dispatch({
                            type: 'TOGGLE_TODO',
                            id: todo.id
                          });
                        }}
                        style={{
                            textDecoration: todo.completed ?
                                'line-through' : 'none'
                        }}>
                        {todo.text}</li>
                )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {', '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {', '}
                    <FilterLink
                        filter='SHOW_COMPLETE'
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

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
