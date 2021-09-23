import Carro from "./carro"

export default class Concessionaria {
  private endereco: string
  private listaDeCarros: Array<Carro>
  
  constructor(endereco: string, lista_de_carros: Array<Carro>) {
    this.endereco = endereco
    this.listaDeCarros= lista_de_carros
  }
  
  public fornecerEndereco(): string {
    return this.endereco
  }

  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros
  }
}
