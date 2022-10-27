import React, {useEffect, useState} from 'react';
import TodoList from "./components/TodoList";
import {
    Route,
    Routes,
    Link
} from "react-router-dom";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import {BsUiChecks, BsUiChecksGrid, BsPlusLg} from "react-icons/all";

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
        <div>
            <nav className="bg-red-100 w-screen">
                <ul>
                    <li>
                        <Link
                            to="/">
                            <BsUiChecks className="text-[30px] fill-red-900"/>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/">
                            <BsUiChecksGrid className="text-[30px] fill-red-900"/>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/add">
                            <BsPlusLg className="text-[30px] fill-red-900"/>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={
                    <TodoList
                        todos={todos}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                }/>
                <Route path="/add" element={
                    <AddTodo
                        todos={todos}
                        setTodos={setTodos}
                    />
                }/>
                <Route path="/edit/:id" element={<p>Edit Todo</p>}/>
                <Route path="*" element={<p>404</p>}/>
            </Routes>
        </div>
    );
}

export default App;
