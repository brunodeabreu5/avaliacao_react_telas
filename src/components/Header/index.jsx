import React from "react";
import "./index.css";
import Menu from "../Menu/index";
import Logo from "../Logo/index";


function Header(){
    return(
        <header className="menuNav">
            <Logo/>
             <Menu/>
        </header>
    );
}
export default Header;