import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = (props = (todos, setTodos)) => {
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "low",
    });

    const data = {
        id: props.todos.length + 1,
        completed: false,
        timeOfCompletion: null,
        ...formData,
    };

    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleCreateTodo = () => {
        axios
            .post(import.meta.env.VITE_TODO_API, data)
            .then((res) => props.setTodos([...props.todos, res.data]))
            .then(navigateTo("/"));
    };

    return (
        <>
            <form id="todos-form" onSubmit={handleCreateTodo}>
                <input type="text" name="title" placeholder={"To do"} value={formData.title} onChange={handleChange} />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder={"Description"}
                    value={formData.description}
                    onChange={handleChange}
                />
                <br />
                <label>Priority</label>
                <select id="priority" name="priority" onChange={handleChange}>
                    <option value="high">High</option>
                    <option value="medium high">Medium High</option>
                    <option value="medium">Medium</option>
                    <option value="medium low">Medium Low</option>
                    <option value="low">Low</option>
                </select>
                <br />
            </form>
            <button type="submit" form="todos-form">
                Submit
            </button>
        </>
    );
};
export default AddTodo;
