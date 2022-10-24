import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () =>{
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/todos')
            .then(data => data.json())
            .then((data) => setTodos(data))
    },[])

    // if(todos === undefined) return <p>loading...</p>

    console.log("Todos: ", todos);
    console.log("Todos length: ", todos.title);
    console.log("Todos type: ", typeof todos);
    // TODO: Make interface for todos object
    return (
        <div>
            {todos.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    )
};
export default TodoList;
