import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import { Route, Routes, Link } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import { BsPlusLg, FiSettings, BiHomeAlt } from "react-icons/all";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.jsx";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavItem/NavItem";
import { defaultTodo } from "./common/utils.js";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const populateDefaultSettings = () => {
        localStorage.setItem("theme", "light");
        localStorage.setItem("view", "list");
        localStorage.setItem("completed", false);
    };
    //TODO Extract it in the utils
    const getAllTodos = () => {
        axios
            .get(import.meta.env.VITE_TODO_API)
            .then((res) => setTodos(res.data))
    };

    useEffect(() => {
        if (todos.length) {
            setIsLoading(false);
        }
    }, [todos])

    useEffect(() => {
        populateDefaultSettings();
        getAllTodos();
    }, []);

    return (
        <div className="bg-yellow-50 dark:bg-black">
            <nav className="flex justify-between p-4">
                <Link title="Home" to="/">
                    <BiHomeAlt className="text-4xl fill-black" />
                </Link>
                <p className="text-2xl font-bold">Todo List: </p>
                <Navbar>
                    <NavItem icon={<FiSettings title="Settings" className="text-4xl" />}>
                        <DropdownMenu />
                    </NavItem>
                </Navbar>
            </nav>
            <Routes>
                <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} isLoading={isLoading} />} />
                <Route path="/add" element={<AddTodo todos={todos} setTodos={setTodos} />} />
                <Route path="/edit/:id" element={<p>Edit Todo</p>} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
            {/* //TODO: Use focus within or checkbox and aria-label, title */}
            <div className="fab-container">
                <div className="button iconButton hover:bg-orange-700 ">
                    <Link title="Add Todo" to="/add" className="plusIcon">
                        <BsPlusLg className="text-lg" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default App;
