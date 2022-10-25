import React, {useEffect, useState} from 'react';
import TodoList from "./components/TodoList";
import {
    Route,
    Routes,
    Link
} from "react-router-dom";
import AddTodo from "./components/AddTodo";
import axios from "axios";

const App = () => {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllTodos = () => {
        setIsLoading(true);
        axios.get(import.meta.env.VITE_TODO_API)
            .then((res) => setTodos(res.data))
            .then(setIsLoading(false));
    };

    useEffect(() => {
        getAllTodos();
    }, [isLoading])

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/add">
                            Add
                        </Link>
                    </li>
                    <li>
                        <Link to="/edit/edit">
                            Edit
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<TodoList todos={todos} isLoading={isLoading}/>}/>
                <Route path="/home" element={<TodoList todos={todos} isLoading={isLoading}/>}/>
                <Route path="/add" element={
                    <AddTodo
                        todos={todos}
                        setTodos={setTodos}
                    />
                }/>
                <Route path="/edit/:id" element={<p>Edit Todo</p>}/>
                <Route path="*" element={<p>404</p>}/>
            </Routes>
        </>
    );
}

export default App;
