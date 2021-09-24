import Carro from "./carro"
import { ConsecionariaInterface } from "../interfaces/concessionaria_interface"

export default class Concessionaria implements ConsecionariaInterface{
  private endereco: string
  private listaDeCarros: Array<Carro>
  
  constructor(endereco: string, lista_de_carros: Array<Carro>) {
    this.endereco = endereco
    this.listaDeCarros= lista_de_carros
  }

  public fornecerHorariosDeFuncionamento(): string {
    return "De segunda à Sexta das 09:00 as 19:00 aos Sabados e Domingo de 08:00 à 13:00"
  }
  
  public fornecerEndereco(): string {
    return this.endereco
  }

  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros
  }
}
