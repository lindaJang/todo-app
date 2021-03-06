import React from 'react';
import AddTodo from '../components/AddTodo'
import VisibleTodoList from '../components/VisibleTodoList'
import Footer from '../components/Footer'

const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default TodoApp;
