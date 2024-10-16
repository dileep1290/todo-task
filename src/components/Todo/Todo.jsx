import React, { useState } from 'react'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList';

export const Todo = () => {

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    function handleChange(event){
        setText(event.target.value);
    }
    function handleAddTodo(){
        const newItem = {
            title : text,
            status : false,
            id : Date.now() + Math.random(),
        }
        const todoAfterItemAddition = [...todo, newItem]
        setTodo(todoAfterItemAddition);
        setText("")
       
    }
    // console.log(text);
    // console.log(todo);   

    function handleToggle(id){
        const todosAfterUpdation =  todo.map((item)=>
            item.id === id ? { ...item, status: !item.status } : item
        )

        setTodo(todosAfterUpdation);
    }
  return (
    <div>
        <AddTodo 
            handleChange={handleChange} 
            handleAddTodo={handleAddTodo}
            text={text}
        />
        <div>
            <ul>
                <TodoList todo={todo} handleToggle={handleToggle}/>
            </ul>
        </div>
    </div>
  )
}
