import React from 'react'

export const TodoList = ({todo, handleToggle}) => {
    
  return (
    <>
        {
            todo.map((item)=>{
                const {title, status, id} = item
                return(
                    <li key={id}>
                        {title} - {status ? "Completed" : "NotCompleted"}
                        <button onClick={ ()=>handleToggle(id) }>Toggle</button>
                    </li>
                )
            })
        }
    </>
  )
}
