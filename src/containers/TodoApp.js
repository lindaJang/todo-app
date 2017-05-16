import React, { Component } from 'react';

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
                        text: 'test'
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
                  >{todo.text}</li>
                )}
                </ul>
            </div>
        );
    }
}

export default TodoApp;
