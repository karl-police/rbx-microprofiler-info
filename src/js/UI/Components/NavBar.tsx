import React from "react"
import { Link } from "react-router-dom";

type Props = React.HTMLAttributes<HTMLElement> & {
    
}


function NavBar(props?: Props) {
    return <>
    <nav id="nav_bar" {...props}>
        <ul>
            <li><Link to="/">MicroProfiler Info</Link></li>
            <li style={{marginLeft: "auto"}}><Link to="/about">About</Link></li>
        </ul>
    </nav>
    </>
}

export default NavBar;