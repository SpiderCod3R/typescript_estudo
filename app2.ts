// Forma de importar Default e non Default parameters
// import Carro, { qualquer_coisa as x  } from './modules/carro'

import Carro from './modules/carro'
// import Pessoa from './modules/pessoa'
import Concessionaria from './modules/consecionaria'
import Cliente from './modules/cliente'

//--- SPECS  ---//

//***Objetos do tipo Carros */
let carroA = new Carro('Nissan', 'GTR 35 Premium', 4, 769_109)
let carroB = new Carro('Chevrolet', 'Camaro', 4, 85_109)
let carroC = new Carro('Porche', 'Cayman', 2, 91_109)
let carroD = new Carro('Dodge', 'Charge', 2, 115_109)
let carroE = new Carro('Lamborguini', 'Diablo SV', 2, 225_109)

let listaDeCarros: Carro[] = [carroA, carroB, carroC, carroD, carroE]

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)

//***Comprar o Carros
let cliente = new Cliente('Alexandre Sampaio', '9999999999999', 'GTR 35 Premium')

concessionaria.mostrarListaDeCarros().map((carro: Carro)=> {
  if (carro['modelo'] == cliente.dizerCarroPreferido()) {
    // Compra o Carro
    cliente.comprarCarro(carro)
  }
})

console.log(cliente)