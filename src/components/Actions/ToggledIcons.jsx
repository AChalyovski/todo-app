import { useState } from "react";

const ToggledIcons = (props) => {
    const primaryIcon = props.children[0];
    const secondaryIcon = props.children[1];
    const [activePrimaryIcon, setActivePrimaryIcon] = useState(props.active);

    //Bug: Initial click isnt registered in the 
    const hangleIconChange = () => {
        setActivePrimaryIcon(!activePrimaryIcon);
        localStorage.setItem(props.id, activePrimaryIcon);
    };

    return (
        <div className="text-4xl fill-black" onClick={hangleIconChange}>
            {activePrimaryIcon ? (primaryIcon) : (secondaryIcon)}
        </div>
    );
};
export default ToggledIcons;
