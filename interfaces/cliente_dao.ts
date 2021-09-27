import Cliente from "../modules/cliente";
import { DaoInterface } from "./dao_interface";

export class ClienteDAO {
  nomeTabela: string = 'tb_cliente'

  inserir(object: Cliente): boolean {
    console.log('Logica de Inserir')
    return true
  }
  atualizar(object: Cliente): boolean {
    console.log('Logica de atualizar')
    return true
  }
  remover(id: number): Cliente {
    console.log('Logica de remover')
    return new Cliente('', '','')
  }
  selecionar(id: number): Cliente {
    console.log('Logica de selecionar')
    return new Cliente('', '','')
  }
  selecionarTodos(): any[] {
    console.log('Logica de selecionar todos')
    return [ new Cliente('', '','') ]
  }
}