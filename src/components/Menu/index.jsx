import React from "react";

import "./index.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul className="menuForm">
        <li className="menuItens">
          <Link to="/">Home</Link>
        </li>
        <li className="menuItens">
          <Link to="/about">About</Link>
        </li>
        <li className="menuItens">
          <Link to="/users">Users</Link>
        </li>
        <li className="menuItens">
          <Link to="/users">Contato</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
