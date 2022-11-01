import React, {useEffect, useState} from 'react';
import TodoList from "./components/TodoList/TodoList";
import {
    Route,
    Routes,
    Link
} from "react-router-dom";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import {BsUiChecks, BsUiChecksGrid, BsPlusLg, FiSettings} from "react-icons/all";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.jsx";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavItem/NavItem";

const App = () => {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isListView, setIsListView] = useState(true);

    const getAllTodos = () => {
        setIsLoading(true);
        axios.get(import.meta.env.VITE_TODO_API)
            .then((res) => setTodos(res.data))
            .then(setIsLoading(false));
    };

    const changeViewOption = () => {
        setIsListView(!isListView);
    }

    useEffect(() => {
        getAllTodos();
    }, [isLoading])

    return (
        <div>
            <nav className="bg-red-100 flex justify-between p-[1rem]">
                {isListView ?
                    (
                        <Link
                            to="/">
                            <BsUiChecksGrid className="text-[2rem] fill-red-900" onClick={changeViewOption}/>
                        </Link>
                    ) : (
                        <Link
                            to="/">
                            <BsUiChecks className="text-[2rem] fill-red-900" onClick={changeViewOption}/>
                        </Link>
                    )}
                <Navbar>
                <NavItem icon={<FiSettings className="text-[2rem]"/>}>
                          <DropdownMenu />
                        </NavItem>
                </Navbar>
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

            <div class="fab-container">
                <div class="button iconButton">
                    <Link
                        to="/add"
                        class="plusIcon">
                        <BsPlusLg className="text-[1rem]"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
