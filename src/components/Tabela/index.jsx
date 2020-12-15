import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { servicos } from "../../Servico.json";

function Tabela() {
  return (
    <TableContainer>
      <Table>
          <h1 className="textTable">Planos</h1>
        <TableBody>
          {servicos.map((servico) => (
            <TableRow >
              <TableCell>{servico.servico}</TableCell>
              <TableCell>{servico.descrição}</TableCell>
              <TableCell>{servico.valor}</TableCell>
              <TableCell>{servico.valorAnual}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tabela;
