import "./index.css";
import { Link } from "react-router-dom";
//imagem
import Facebook from "../../Img/facebook-logo.svg";
import Twitter from "../../Img/Twitter.svg";
import Instagram from "../../Img/instagram.svg";

function Footer() {
  return (
    <div className="rede">
      <di className="redeSociais">
        <Link>
          <img className="redesocial" src={Facebook} alt="Facebook" />
        </Link>
        <Link>
          <img className="redesocial" src={Twitter} alt="Twitter" />
        </Link>
        <Link>
          <img className="redesocial" src={Instagram} alt="Instagram" />
        </Link>
      </di>
      <div className="contatos">
        <h4>Bruno de Abreu</h4>
        <h4> 45 4905-4903</h4>
        <h4>Brunodornelesdeabreu@hotmail.com</h4>
      </div>
    </div>
  );
}
export default Footer;
