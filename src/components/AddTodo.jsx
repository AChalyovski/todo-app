import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddTodo = (props = (todos, setTodos)) => {
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [priority, setPriority] = useState("");
    const navigateTo = useNavigate();

    const data = {
        id: props.todos.length + 1,
        title: newTitle,
        description: newDescription,
        completed: false,
        timeOfCompletion: null,
        priority: priority,
    }

    const handleCreateTodo = () => {
        axios
            .post(import.meta.env.VITE_TODO_API, data)
            .then((res) => props.setTodos([...props.todos, res.data]))
            .then(navigateTo('/'));
    }

    return (
        <>
            <form onSubmit={handleCreateTodo}>
                <input
                    type="text"
                    placeholder={"To do"}
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                />
                <br/>
                <input
                    type="text"
                    placeholder={"Description"}
                    value={newDescription}
                    onChange={(event) => setNewDescription(event.target.value)}
                />
                <br/>
                <label>Priority</label>
                <select id="priority" name="priority" onChange={(event) => setPriority(event.target.value)}>
                    <option value="high">High</option>
                    <option value="medium high">Medium High</option>
                    <option value="medium">Medium</option>
                    <option value="medium low">Medium Low</option>
                    <option value="low">Low</option>
                </select>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
};
export default AddTodo;
