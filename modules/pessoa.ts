

export default class Pessoa {
  protected nome: string
  protected telefone: string

  constructor(nome: string, telefone: string) {
    this.nome=nome
    this.telefone = telefone
    
  }

  public dizerNome(): string {
    return this.nome
  }

  public dizerTelefone(): string {
    return this.telefone
  }
}