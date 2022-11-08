import { HiChevronDoubleUp, HiChevronUp, HiChevronDown, HiChevronDoubleDown } from "react-icons/hi/";
import { FaGripLines } from "react-icons/fa/";
import { GrCompliance } from "react-icons/gr/";

const PriorityIcon = (todoItemData) => {
    const priority = todoItemData.todoItemData.priority;
    const priorityIcons = {
        high: <HiChevronDoubleUp className="text-[2rem] fill-red-500 cursor-pointer" />,
        medium_high: <HiChevronUp className="text-[2rem] fill-amber-500 cursor-pointer" />,
        medium: <FaGripLines className="text-[1.25rem] fill-yellow-400 ml-1.5 cursor-pointer" />,
        medium_low: <HiChevronDown className="text-[2rem] fill-green-400 cursor-pointer" />,
        low: <HiChevronDoubleDown className="text-[2rem] fill-green-600 cursor-pointer" />,
    };

    if (todoItemData.todoItemData.completed) {
        return <GrCompliance className="text-[1.5rem] ml-1 fill-red-500 cursor-pointer" />;
    }

    return priorityIcons[priority];
};
export default PriorityIcon;

