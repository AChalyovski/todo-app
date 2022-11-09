import { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete, MdOutlineDone, TbArrowsUp } from "react-icons/all";
import PriorityIcon from "./PriorityIcon.jsx";
import axios from "axios";

const TodoItem = (todoItem) => {
    const todoItemData = todoItem.todoItem;
    const priority = todoItemData.priority;

    const todoContainerColor = {
        high: {
            gradient: "from-red-400",
            border: "border-red-500",
        },
        medium_high: {
            gradient: "from-amber-400",
            border: "border-amber-500",
        },
        medium: {
            gradient: "from-yellow-300",
            border: "border-yellow-400",
        },
        medium_low: {
            gradient: "from-green-300",
            border: "border-green-400",
        },
        low: {
            gradient: "from-green-500",
            border: "border-green-600",
        },
    };

    const handleDeleteTodo = (todoItem) => {
        axios
            .delete(`${import.meta.env.VITE_TODO_API}/${todoItem.id}`)
            //             .then(setIsLoading(true))
            .catch((err) => console.log(err));
    };

    const handleEditTodo = (todoItem) => {
        console.log("Editing ", todoItem);
    };

    const toggleCompleteTodo = () => {
        axios
            .put(`${import.meta.env.VITE_TODO_API}/${todoItemData.id}`, {
                ...todoItemData,
                completed: !todoItemData.completed,
            })
            .catch((err) => console.log(err));
    };

    return (
        <div
            className={`flex justify-between space-x-5 border-solid border-2 ${todoContainerColor[priority].border} rounded-lg my-2 h-14 items-center p-4 bg-gradient-to-l ${todoContainerColor[priority].gradient}`}>
            <PriorityIcon todoItemData={todoItemData} />
            <p className="todo-text font-medium">{todoItemData.title}</p>
            <p className="todo-text italic">{todoItemData.description}</p>
            <button
                title="Edit Todo"
                className={`bg-${
                    todoItemData.completed ? "blue-500 opacity-50" : "blue-500"
                } text-white font-medium px-2 py-1 rounded hover:bg-blue-900" h-8`}
                disabled={todoItemData.completed}
                onClick={() => handleEditTodo(todoItemData)}>
                <AiOutlineEdit />
            </button>
            <button
                title="Complete Todo"
                className="bg-blue-500 text-white font-medium px-2 py-1 rounded hover:bg-blue-900 h-8"
                onClick={() => toggleCompleteTodo()}>
                <MdOutlineDone />
            </button>
            <button
                title="Delete Todo"
                className="bg-red-600 text-white font-medium px-2 py-1 rounded hover:bg-red-900 h-8"
                onClick={() => handleDeleteTodo(todoItemData)}>
                <AiOutlineDelete />
            </button>
        </div>
    );
};
export default TodoItem;

