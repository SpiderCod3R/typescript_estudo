import Pessoa from "./pessoa";
import Carro from "./carro"

export default class Cliente extends Pessoa {
  protected carro: Carro
  protected carroPreferido: string

  constructor(nome:string, telefone: string, carroPreferido: string) {
    super(nome, telefone)
    this.carroPreferido=carroPreferido
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro
  }

  public dizerCarroQueTem(): Carro {
    return this.carro
  }
}