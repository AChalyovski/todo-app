import React from 'react';
import axios from "axios";
import TodoItem from "./TodoItem.jsx"

const TodoList = (props = (todos, isLoading, setIsLoading)) => {
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
                                        <TodoItem key={todoItem.id} todoItem={todoItem}/>
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
