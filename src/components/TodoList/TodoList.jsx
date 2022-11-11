import { useEffect } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos = [], isLoading, setTodos }) => {
    const completedTodos = todos.filter((item) => item.completed);
    const ongoingTodos = todos.filter((item) => !item.completed);

    useEffect(() => {
        if (todos?.length) {
            setTodos(todos);
        }
    }, [todos]);

    if (todos.length === 0) {
        return <p className="text-4xl fill-black text-center" >No Data</p>;
    }

    if (isLoading) {
        return (
            <div>
                <p className="text-4xl fill-black text-center">Loading...</p>
            </div>
        );
    }
    // TODO: Make interface for todos object
    return (
        <div className="px-96 pt-4">
            <div>
                {ongoingTodos.map((todoItem) => (
                    <TodoItem key={todoItem.id} todoItem={todoItem} todos={ongoingTodos} setTodos={setTodos} />
                ))}
            </div>
            <div>
                <p className="text-xl text-gray-500 font-bold text-center">Completed Todos:</p>
                <div>
                    {completedTodos.map((completedTodo) => (
                        <TodoItem key={completedTodo.id} todoItem={completedTodo} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TodoList;
