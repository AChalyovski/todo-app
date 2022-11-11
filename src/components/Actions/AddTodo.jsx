import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = ({ todos = [], setTodos }) => {
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "low",
    });

    const data = {
        id: new Date().getTime(),
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

    const handleCreateTodo = (event) => {
        axios
            .post(import.meta.env.VITE_TODO_API, data)
            .then((res) => setTodos([...todos, res.data]))
            .then(navigateTo("/"));
        event.preventDefault();
    };

    return (
        <div className="p-10 flex flex-col items-center justify-center">
            <p className="text-xl text-gray-500 font-bold text-center mb-10">Add New todo</p>
            <form className="flex flex-col" id="todos-form" onSubmit={handleCreateTodo}>
                <input
                    className="mb-4"
                    type="text"
                    name="title"
                    placeholder={"To do"}
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder={"Description"}
                    value={formData.description}
                    onChange={handleChange}
                    className="mb-4"
                />
                <label>Priority</label>
                <select id="priority" defaultValue="low" name="priority" onChange={handleChange}>
                    <option value="high">High</option>
                    <option value="medium_high">Medium High</option>
                    <option value="medium">Medium</option>
                    <option value="medium_low">Medium Low</option>
                    <option value="low">Low</option>
                </select>
            </form>
            <button
                className="bg-orange-600 text-white font-medium px-2 py-1 mt-10 rounded hover:bg-orange-700"
                type="submit"
                form="todos-form">
                Submit
            </button>
        </div>
    );
};
export default AddTodo;
