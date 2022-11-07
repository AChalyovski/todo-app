import { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete, MdOutlineDone, TbArrowsUp } from "react-icons/all";
import PriorityIcon from "./PriorityIcon.jsx";
import axios from "axios";

const TodoItem = (todoItem) => {
    const todoItemData = todoItem.todoItem;
    const [gradientColor, setGradientColor] = useState("from-yellow-100");
    const [borderColor, setBorderColor] = useState("border-black");

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

    const changeTodoColor = (priority) => {
        switch (priority) {
            case "high":
                setGradientColor("from-red-400");
                setBorderColor("border-red-500");
                break;
            case "medium high":
                setGradientColor("from-amber-400");
                setBorderColor("border-amber-500");
                break;
            case "medium":
                setGradientColor("from-yellow-300");
                setBorderColor("border-yellow-400");
                break;
            case "medium low":
                setGradientColor("from-green-300");
                setBorderColor("border-green-400");
                break;
            case "low":
                setGradientColor("from-green-500");
                setBorderColor("border-green-600");
                break;
        }
        if (todoItemData.completed === true) {
            setGradientColor("from-gray-500");
            setBorderColor("border-black-500");
        }
    };

    useEffect(() => {
        changeTodoColor(todoItemData.priority);
    }, [todoItemData]);

    return (
        <div
            className={`flex justify-between space-x-5 border-solid border-2 ${borderColor} rounded-lg my-2 h-14 items-center p-4 bg-gradient-to-l ${gradientColor}`}>
            <PriorityIcon todoItemData={todoItemData} />
            <p className="table-cell font-medium">{todoItemData.title}</p>
            <p className="table-cell italic">{todoItemData.description}</p>
            <button
                className="bg-red-500 text-white font-medium px-2 py-1 rounded hover:bg-red-900 h-8"
                onClick={() => handleDeleteTodo(todoItemData)}>
                <AiOutlineDelete />
            </button>
            <button
                className="bg-blue-500 text-white font-medium px-2 py-1 rounded hover:bg-blue-900 h-8"
                onClick={() => handleEditTodo(todoItemData)}>
                <AiOutlineEdit />
            </button>
            <button
                className="bg-blue-500 text-white font-medium px-2 py-1 rounded hover:bg-blue-900 h-8"
                onClick={() => toggleCompleteTodo()}>
                <MdOutlineDone />
            </button>
        </div>
    );
};
export default TodoItem;

