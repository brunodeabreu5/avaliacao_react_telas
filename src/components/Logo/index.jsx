import React from "react";
import "./index.css";
import LogoMarca from "../../Img/Logo.svg"



function Logo(){
    return(

        <div>
            <img className="logo" src={LogoMarca}></img>
        </div>

    );
}
export default Logo;