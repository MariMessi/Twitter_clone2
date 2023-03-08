import "./index.css";
import HamburgerMenu from "../hamburgerMenu";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";



const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    const hambTrigger = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className="Header">
            
            <FiMenu className="Header_hamburger" onClick={hambTrigger}/>
            <HamburgerMenu showMenu={showMenu} />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR4nO2YT4hPURTHr3PmmYU/oSQWdiLlX5KFUogyIvmz8Cf5t8SGrGQWiixFGqWI/Oac22gkZkWyU6SRKAsiJZphfr93zhsy+T2950emZqb3e/e9N5v3qbt7797zPefce889xpSUlJSUlJQkxNbmI+kFZH2NJAGy1oDlObKcMbd19ki/eBVZbFzATt1o2kNwmqQ9hMhIJBlC1nDEQSpAejj+/k7fFCR/O7A+QtKL6Re2XyYjaTXymov9SHJlVMN5+ACSZ8jy848o+WRsdYbDwtr2n4cuGxtis3OAld1JjcfhEen3rC41t6rTsVPWpRIAVo4M8w7L3aY8EoYTkORt88bLELB2AetjJP3qWVmUTgDLsREm/4hW1if5v4WCFam8z3+HfEcbbDFpQQo2j5qrLN2my18wpgNIDzgI6Gshf5VxIj4NVMYIdR1I7kVCTU/YmiiCSTczyy6TBY1zO8mitUbenkAra01XbR6w7E0dgU5/WyYCzI1wErK+ccvlNAJ0g7PtQLIHSPd5FV0GLL1FCvDSnjyj5jDJYGECSOpR5J0FRBdJ4anD8SX2ymQFsDwpXoR0ZCbAs8Hyf7VJcRFoM1mCJDsLE0Hab2w40WRNVBYAy9P8Bcg5kwdIwVa0uglJriHJj5yMHzSVYE5OAvRSAZv3vMkN689E1s85ps4Hc7N/an4Con1QCVYi67ccPP8raYnuTlSkkT7MUgBYPW2KJrofgLQdWB84ps716OVWuIBoUWA9iKQDTsbb5t/ZbvSErWB1P7C+cDC8DqSncvW8R7okSpMW8lej9XcA6UlguY+kvmPKvEOSNSZ3ugemIcvZRgctg2NSq7HXsyiTm6Iis4DkOLC+THXCsPQCydHIIWbcsf5CsHoISa7GZXbU84k7d1KP7weS93E7kKUjbhPawbnjbXJJSUlJSUmJyZHfxnHsrRJKPnUAAAAASUVORK5CYII=" alt ="twitter_icon" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABc0lEQVR4nMVVzUrDQBDOzb+L9hGKZz10V3oo+BLq1QrFg32DPkKgBy9CZywFb+oj9Oqp+BSCCLZ05qyHyCQbmqRds7EuHQhhf/J9M1++nQ2CTYQGvvAG3hi872qgz6OHjz0vBJK9Ro5O7vncDwHysxAo4Kd/AxVZJGMB1UhfQiBvGcu8rK/6Tg34phRcADTSNAG1PTQtSqaGXFdI3/L2UoFGDk0CYSlBLrOYhCOF9Gjb0+y/7SigWbKP5zYJf5GMowbQmTUJpKuchEBtZwLxf9k50EgTAz42ck6cCdIqinOno2hbMk3BRaLWHR+kUsXzQG3ZV4lMDbkuP3IBlIBrpI6pprO8xqGTuxRwV6xYsO34eET72X0yXshliMTCwN3NVpCNw9toK3YY0EtqzyZyLWPXV4V87WTZskan13GRS7vWsZuy/2V+6QyugHumm/Zs5eZOMtBMxn9serTU5NbqRa4VVO6mVVtFYMLpPlgV3q5LH/EDZ8qvZz5ni2IAAAAASUVORK5CYII=" alt ="sparkling" />
        
        </div>

    );
}; //#359bf0

export default Header