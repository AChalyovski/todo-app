import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import { Route, Routes, Link } from "react-router-dom";
import AddTodo from "./components/Actions/AddTodo";
import axios from "axios";
import { BsPlusLg, FiSettings, BiHomeAlt } from "react-icons/all";
import { BsUiChecksGrid, BsUiChecks, BiShow, BiHide, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/all";
import ToggledIcons from "./components/Actions/ToggledIcons";


const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const listView = false;
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
        getAllTodos();
    }, []);

    return (
        <div className="h-screen bg-yellow-50 dark:bg-purple-500">
            <nav className="flex justify-between p-4">
                <Link title="Home" to="/">
                    <BiHomeAlt className="text-4xl fill-black" />
                </Link>
                <p className="text-2xl font-bold">Todo List: </p>
                <div className="flex">
                    <ToggledIcons id="listView" active={localStorage.getItem("listView")}>
                        <BsUiChecks />
                        <BsUiChecksGrid />
                    </ToggledIcons>

                    <ToggledIcons id="showCompleted" active={localStorage.getItem("showCompleted")}>
                        <BiShow />
                        <BiHide />
                    </ToggledIcons>

                    <ToggledIcons id="lightTheme" active={localStorage.getItem("lightTheme")}>
                        <MdOutlineLightMode />
                        <MdOutlineDarkMode />
                    </ToggledIcons>

                </div>

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
