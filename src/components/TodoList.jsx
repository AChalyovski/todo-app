import React from 'react';
import axios from "axios";
import {AiOutlineEdit, AiOutlineDelete, MdOutlineDone} from "react-icons/all";

const TodoList = (props = (todos, isLoading, setIsLoading)) => {
    const handleDeleteTodo = (todoItem) => {
        axios
            .delete(`${import.meta.env.VITE_TODO_API}/${todoItem.id}`)
            .then(props.setIsLoading(true))
            .catch(err => console.log(err));
    }

    const handleEditTodo = (todoItem) => {
        console.log("Editing ", todoItem);
    }

    const handleCompleteTodo = (todoItem) => {
        console.log("Completing ", todoItem);
    }

    // TODO: Make interface for todos object
    return (
        <div className="bg-purple-300">
            {props.isLoading ?
                (
                    <p>Loading...</p>
                ) : (
                    <>
                        <p>Todo list: </p>
                        {props.todos.length ?
                            (
                                <div>
                                    {props.todos.map(todoItem => (
                                        <div key={todoItem.id}
                                             className="flex justify-between space-x-5 border-solid border-2 border-indigo-600 my-2">
                                            <p>{todoItem.title}</p>
                                            <p>{todoItem.description}</p>
                                            <p>{todoItem.priority}</p>
                                            <button
                                                className="bg-red-500 text-white font-medium px-2 py-1 rounded hover:bg-red-900"
                                                onClick={() => handleDeleteTodo(todoItem)}>
                                                <AiOutlineDelete/>
                                            </button>
                                            <button
                                                className="bg-blue-500 text-white font-medium px-2 py-1 rounded hover:bg-blue-900"
                                                onClick={() => handleEditTodo(todoItem)}>
                                                <AiOutlineEdit/>
                                            </button>
                                            <button
                                                className="bg-blue-500 text-white font-medium px-2 py-1 rounded hover:bg-blue-900"
                                                onClick={() => handleCompleteTodo(todoItem)}>
                                                <MdOutlineDone/>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No todos</p>
                            )
                        }
                    </>
                )}
        </div>
    )
};
export default TodoList;
