import "./index.css";
import { useState } from "react";
import MenuContent from "../menuContent";

const SideMenu = () => {
    const [isActive, setActive] = useState(false);

    const showMenu = () => {
        setActive((prev) => !prev);
    }
    return(
        <div className="SideMenu">
            <MenuContent />
            <button>Tweet</button>
            {isActive ? <MenuContent /> : null}
        </div>

    );
};

export default SideMenu;