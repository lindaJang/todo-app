import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers/index';


const store = createStore(todoApp);


let nextId = 0;
class TodoApp extends Component {
    render() {
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
                <ul>{this.props.todos.map(todo =>
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
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp
                todos={store.getState().todos}
            />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
