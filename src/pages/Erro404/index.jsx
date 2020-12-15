import React from "react";
import "./index.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Erro from "../../Img/error 404.png";

function Erro404() {
    return(
        <div className="pag404">
        <Header/>
        <div className="tamImg" >
        <img className="imgErro" src={Erro}/>
        </div>
        <Footer/>
        </div>
    );

}
export default Erro404;