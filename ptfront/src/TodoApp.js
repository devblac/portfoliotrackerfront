import React, { useState } from 'react'
import useTodos from './hooks/useTodos';

const initialTodos = [
    {id: 1, title: 'First item'},
    {id: 2, title: 'Second item'}
]

const TodoApp = () => {
/*     const [todos, setTodos] = useState(initialTodos); */
        const [todos, addTodo, deleteTodo]  = useTodos(initialTodos);

        return (
    <div>
        <button onClick={() => addTodo({title: 'Nueva tarea'})}>
            Add
        </button>
        <ul>
            {todos.map(todo => (
                <il key={todo.id}>
                    {todo.title}
                    <button onClick={() => deleteTodo(todo.id)}>
                         Delete
                    </button>
                </il>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp