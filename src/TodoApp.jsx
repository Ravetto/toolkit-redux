import React, { useState } from 'react'
import { useGetTodoQuery } from './store/slices/apis/todosApis'

export const TodoApp = () => {
  const [ todoId, setTodoId ] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const previousTodo = () => {
    if(todoId === 1)return
    setTodoId(todoId - 1)
  }

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }


  return (
    <>
        <h1>Todos- RKT Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>
        <pre>{JSON.stringify(todo)}</pre>
  
        <button onClick={previousTodo}>previous</button>
        <button onClick={nextTodo}>next</button>
    </>
  )
}


