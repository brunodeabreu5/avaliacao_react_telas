import { React, useState } from "react";

import "./index.css";

function Formulario() {
  const [nome, setNome] = useState("");
  const [mail, setMail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    const novaPessoa = {
      nome: nome,
      mail: mail,
      telefone: telefone,
      date: date,
    };
    console.log(nome);
    setNome("");
    setMail("");

    event.preventDefault();
  }
  const handleChangeNome = (e) => {
    setNome(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeMail = (e) => {
    setMail(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeTelefone = (e) => {
    setTelefone(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="formAl">
      <form className="FormCadastro">
        <label>
          Nome:
          <input onChange={handleChangeNome} type="text" value={nome} />
        </label>
        <label>
          E-mail:
          <input onChange={handleChangeMail} type="email" value={mail} />
        </label>
        <label>
          Telefone:
          <input onChange={handleChangeTelefone} type="tel" value={telefone} />
        </label>
        <label>
          Data de nascimento:
          <input onChange={handleChangeDate} type="date" value={date} />
        </label>
        <label>
          <input className="check" type="checkbox" />
          Aceitar receber newsletter
        </label>
        <button onSubmit={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
