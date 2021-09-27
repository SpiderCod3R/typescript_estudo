import { DaoInterface } from "./interfaces/dao_interface";

export class Dao<T> implements DaoInterface<T> {
  nomeTabela: string='';
  
  inserir(object: T): boolean {
    console.log('Logica de Inserir')
    return true
  }
  atualizar(object: T): boolean {
    console.log('Logica de atualizar')
    return true
  }
  remover(id: number): T {
    console.log('Logica de remover')
    return Object()
  }
  selecionar(id: number): T {
    console.log('Logica de selecionar')
    return Object()
  }
  selecionarTodos(): [T] {
    console.log('Logica de selecionar todos')
    return [ Object() ]
  }

}