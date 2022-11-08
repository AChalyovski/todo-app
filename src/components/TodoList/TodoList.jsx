import { useEffect, useState } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos = [], isLoading }) => {
    const [ongoingTodos, setOngoingTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    const showCompletedSetting = localStorage.getItem("completed");

    useEffect(() => {
        setOngoingTodos(todos.filter((item) => item.completed === false));
        setCompletedTodos(todos.filter((item) => item.completed === true));
    }, [todos]);

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
    if (todos.length === 0) {
        return <p>No Data</p>;
    }
    // TODO: Make interface for todos object
    return (
        <div>
            <div className="p-4">
                {ongoingTodos.map((todoItem) => (
                    <TodoItem key={todoItem.id} todoItem={todoItem} />
                ))}
            </div>
            <div>
                <p className="text-xl text-gray-500 font-bold text-center">Completed Todos:</p>
                <div className="p-4">
                    {completedTodos.map((completedTodo) => (
                        <TodoItem key={completedTodo.id} todoItem={completedTodo} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TodoList;
