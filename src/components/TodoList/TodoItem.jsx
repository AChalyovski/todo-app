import { AiOutlineEdit, AiOutlineDelete, MdOutlineDone } from "react-icons/all";
import PriorityIcon from "./PriorityIcon.jsx";
import axios from "axios";
import { todoContainerColor } from "../../common/utils.js";

const TodoItem = ({ todoItem = {}, todos = [], setTodos }) => {
    const priority = todoItem.priority;
    const emptyField = "N/A";

    const handleEditTodo = () => {
        console.log("Editing ", todoItem);
    };

    const toggleCompleteTodo = () => {
        axios
            .put(`${import.meta.env.VITE_TODO_API}/${todoItem.id}`, {
                ...todoItem,
                completed: !todoItem.completed,
            })
            .then((res) => {
                setTodos((prev) => prev.map((item) => (item.id === res.id ? res : item)));
            })
            .catch((err) => console.log(err));
    };

    const handleDeleteTodo = () => {
        axios
            .delete(`${import.meta.env.VITE_TODO_API}/${todoItem.id}`)
            .then(
                setTodos((prev) => {
                    return prev.filter((item) => item.id != todoItem.id);
                })
            )
            .catch((err) => console.log(err));
    };

    return (
        <div
            className={`flex justify-between space-x-5 border-solid border-2 ${todoContainerColor[priority].border} rounded-lg my-2 h-14 items-center p-4 bg-gradient-to-l ${todoContainerColor[priority].gradient}`}>
            <PriorityIcon todoItem={todoItem} />
            <p className="todo-text font-medium">{todoItem.title || emptyField}</p>
            <p className="todo-text italic">{todoItem.description}</p>
            <button
                title="Edit Todo"
                className={`bg-blue-500 ${todoItem.completed ? "opacity-50" : null
                    } text-white font-medium px-2 py-1 rounded hover:bg-blue-900 h-8`}
                disabled={todoItem.completed}
                onClick={() => handleEditTodo()}>
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
                onClick={() => handleDeleteTodo()}>
                <AiOutlineDelete />
            </button>
        </div>
    );
};
export default TodoItem;

