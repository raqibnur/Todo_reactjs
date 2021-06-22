import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiEditCircleLine } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from 'react-icons/io';

    function Todo({todos, completeTodo, revomeTodo, updateTodo}) {
    const [edit, setEdit]=useState({
        id: null,
        value: ''
    });

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }


    return todos.map((todo, index) => (
    
    <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
    > 
    
        <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
        <IoIosCloseCircleOutline
        onClick={()=> revomeTodo(todo.id)}
        className='delete-icon'
        />
        <RiEditCircleLine 
        onClick={()=> setEdit({id: todo.id, value: todo.text})}
        className='edit-icon'
        />
        </div>
    
    </div>

    ));
}

export default Todo
