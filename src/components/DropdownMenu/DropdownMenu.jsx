import React, {useState} from "react";
import DropdownItem from "./DropdownItem";
import {HiOutlineCog} from "react-icons/hi";
import {AiFillCaretLeft, AiOutlineThunderbolt} from "react-icons/ai";
import {FaChevronRight} from "react-icons/fa";

const DropdownMenu = () => {
    const [active, setActive] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);


    function calcHeight(el) {
        const height = el.offsetHeight;
        console.log(height);
        setMenuHeight(height);
    }

      return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <div className="menu">
              <DropdownItem>Grid/List view</DropdownItem>
              <DropdownItem>
                Light/Dark theme
              </DropdownItem>
            </div>
        </div>
      );
    };

export default DropdownMenu;