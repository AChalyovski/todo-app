import React, { useState, useEffect } from "react";
import DropdownItem from "./DropdownItem";
import { HiOutlineCog } from "react-icons/hi";
import { AiFillCaretLeft, AiOutlineThunderbolt } from "react-icons/ai";
import { FaChevronRight, BsUiChecksGrid, BsUiChecks, BiShow, BiHide, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/all";

const DropdownMenu = () => {
    const [active, setActive] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    const [showHideCompleted, setShowHideCompleted] = useState(true);

    const gridView = "grid";
    const listView = "list";
    const lightMode = "light";
    const darkMode = "dark";
    const showCompleted = "show";
    const hideCompleted = "hide";

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <div className="menu">
                <DropdownItem>
                    <BsUiChecksGrid />
                    <BsUiChecks />
                    Grid/List view
                </DropdownItem>
                <DropdownItem>
                <MdOutlineDarkMode/>
                <MdOutlineLightMode/>
                    Light/Dark theme
                </DropdownItem>
                <DropdownItem >
                    <BiShow onClick={() => console.log("asd")}/>
                    <BiHide />
                    Show/Hide completed
                </DropdownItem>
            </div>
        </div>
    );
};

export default DropdownMenu;