import { Funcionarios } from "./Funcionarios";


export const deletar = (indice: number) => {
    return(
      Funcionarios.splice(indice,1)   // remove o indice chamado, 1 representa apenas uma unidade
    )
  }