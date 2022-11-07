import { HiChevronDoubleUp, HiChevronUp, HiChevronDown, HiChevronDoubleDown } from "react-icons/hi/";
import { FaGripLines } from "react-icons/fa/";
import { GrCompliance } from "react-icons/gr/";

/*
High: HiChevronDoubleUp
Low High: HiChevronUp
Medium: AiOutlineLine // FaGripLines // HiOutlineMinusSm
Low Medium: HiChevronDown
Low: HiChevronDoubleDown
*/

const PriorityIcon = (todoItemData) => {
    if(todoItemData.todoItemData.completed){
        return <GrCompliance className="text-[1.5rem] ml-1 fill-red-500 cursor-pointer" />
    }
    switch (todoItemData.todoItemData.priority) {
        case "high":
            return <HiChevronDoubleUp className="text-[2rem] fill-red-500 cursor-pointer" />;
        case "medium high":
            return <HiChevronUp className="text-[2rem] fill-amber-500 cursor-pointer" />;
        case "medium":
            return <FaGripLines className="text-[1.25rem] fill-yellow-400 ml-1.5 cursor-pointer" />;
        case "medium low":
            return <HiChevronDown className="text-[2rem] fill-green-400 cursor-pointer" />;
        case "low":
            return <HiChevronDoubleDown className="text-[2rem] fill-green-600 cursor-pointer" />;
    }
};
export default PriorityIcon;

