import React from "react";
import "./index.css";
import Fundo from "../../Img/Fundo.jpg";
function Section() {
  return (
    <div className="form">
      <img className="fundo" src={Fundo}/>
      <div className="texto">
        <h1>Computação em nuvem</h1>
        <p>
          Resumindo, a computação em nuvem é o fornecimento de serviços de
          computação, incluindo servidores, armazenamento, bancos de dados,
          rede, software, análise e inteligência, pela Internet (“a nuvem”) para
          oferecer inovações mais rápidas, recursos flexíveis e economias de
          escala. Você normalmente paga apenas pelos serviços de nuvem que usa,
          ajudando a reduzir os custos operacionais, a executar sua
          infraestrutura com mais eficiência e a escalonar conforme as
          necessidades da sua empresa mudam.
        </p>
      </div>
      
    </div>
  );
}
export default Section;
