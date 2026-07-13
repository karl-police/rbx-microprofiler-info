import NavBar from "../Components/NavBar";

function Header() {
    return <>
        <div id="header">
            {/*<span id="site_title" style={{alignContent: "center"}}>MicroProfiler Info</span>*/}
            <NavBar className="inheritSize"/>
        </div>
    </>
}


export default Header;