import React from 'react';

const Todoitem = (props)=>{
    return (
        <li className='todo-item'>
            <span>
           {props.completed ? <></> : <input type='checkbox' /> }
            <span className='todo-itm-text'>{props.text}</span>
            </span>
            <p>...</p>
            
        </li>
    )
}

export default Todoitem
