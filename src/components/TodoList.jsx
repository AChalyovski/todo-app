import React from 'react';
import axios from "axios";

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

    // TODO: Make interface for todos object
    return (
        <>
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
                                        <div key={todoItem.id} style={{display: "flex"}}>
                                            <p>{todoItem.title}</p>
                                            <button
                                                onClick={() => handleDeleteTodo(todoItem)}>
                                                X
                                            </button>
                                            <button
                                                onClick={() => handleEditTodo(todoItem)}>
                                                Edit
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
        </>
    )
};
export default TodoList;
