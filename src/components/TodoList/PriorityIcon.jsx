import { HiChevronDoubleUp, HiChevronUp, HiChevronDown, HiChevronDoubleDown } from "react-icons/hi/";
import { FaGripLines } from "react-icons/fa/";
import { GrCompliance } from "react-icons/gr/";

const priorityIcons = {
    high: <HiChevronDoubleUp className="text-3xl fill-red-500 cursor-pointer" />,
    medium_high: <HiChevronUp className="text-3xl fill-amber-500 cursor-pointer" />,
    medium: <FaGripLines className="text-xl fill-yellow-400 ml-1.5 cursor-pointer" />,
    medium_low: <HiChevronDown className="text-3xl fill-green-400 cursor-pointer" />,
    low: <HiChevronDoubleDown className="text-3xl fill-green-600 cursor-pointer" />,
};

const PriorityIcon = (todoItemData = {}) => {
    const priority = todoItemData.todoItemData.priority;

    if (todoItemData.todoItemData.completed) {
        return <GrCompliance className="text-xl ml-1 fill-red-500 cursor-pointer" />;
    }

    return priorityIcons[priority];
};
export default PriorityIcon;

