import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import { Route, Routes, Link } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import { BsPlusLg, FiSettings, BiHomeAlt } from "react-icons/all";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.jsx";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavItem/NavItem";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isListView, setIsListView] = useState(true);

    const populateDefaultSettings = () => {
        localStorage.setItem("theme", "light");
        localStorage.setItem("view", "list");
        localStorage.setItem("completed", false);
    };

    const getAllTodos = () => {
        setIsLoading(true);
        axios
            .get(import.meta.env.VITE_TODO_API)
            .then((res) => setTodos(res.data))
            .then(setIsLoading(false));
    };

    useEffect(() => {
        populateDefaultSettings();
        getAllTodos();
    }, []);

    return (
        <div className="bg-yellow-50">
            <nav className="flex justify-between p-[1rem]">
                <Link to="/">
                    <BiHomeAlt className="text-[2rem] fill-black" />
                </Link>
                <p className="text-2xl font-bold">Todo List: </p>
                <Navbar>
                    <NavItem icon={<FiSettings className="text-[2rem]" />}>
                        <DropdownMenu />
                    </NavItem>
                </Navbar>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={<TodoList todos={todos} isLoading={isLoading} setIsLoading={setIsLoading} />}
                />
                <Route path="/add" element={<AddTodo todos={todos} setTodos={setTodos} />} />
                <Route path="/edit/:id" element={<p>Edit Todo</p>} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
{/* //TODO: Use focus within or checkbox and aria-label, title */}
            <div className="fab-container">
                <div className="button iconButton">
                    <Link to="/add" className="plusIcon">
                        <BsPlusLg className="text-[1rem]" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default App;
