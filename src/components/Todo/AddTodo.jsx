import React from 'react'

export const AddTodo = ({handleChange, handleAddTodo, text}) => {
    
  return (
    <>
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <button onClick={handleAddTodo}>Add Task</button>
        </div>
    </>
  )
}
