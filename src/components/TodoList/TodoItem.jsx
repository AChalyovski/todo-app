import { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete, MdOutlineDone } from "react-icons/all";
import PriorityIcon from "./PriorityIcon.jsx";
import axios from "axios";
import { todoContainerColor } from "../../common/utils.js";

const TodoItem = (todoItem = {}) => {
    const todoItemData = todoItem.todoItem;
    const priority = todoItemData.priority;
    const emptyField = "N/A";

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
            <p className="todo-text font-medium">{todoItemData.title || emptyField}</p>
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

