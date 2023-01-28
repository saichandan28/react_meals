import React from 'react';
import classes from './TodoListItem.module.css';

const TodoListItem = (props) => {

    return (
        <div className={classes['list-item']}>
            <img src="../../public/checked-checkbox.png" alt="Checked Checkbox"/>
            <h3>{props.taskName}</h3> 
            <div>
                <button>Mark Complete</button>            
                <button>Delete</button>            
            </div>
        </div>

    )
}

export default TodoListItem;