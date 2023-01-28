import React from 'react';
import TodoListItem from './TodoListItem';
import classes from './TodoList.module.css';

const TodoList = () => {

    return <div className={classes.list}>
        <TodoListItem taskName="Sleep"></TodoListItem>
        <TodoListItem taskName="Practice React"></TodoListItem>
    </div>
}

export default TodoList;