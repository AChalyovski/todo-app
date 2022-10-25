import React from 'react';

const TodoList = (props = (todos, isLoading)) => {
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
                                    {props.todos.map(item => (
                                        <p key={item.id}>{item.title}</p>
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
