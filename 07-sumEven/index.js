export function sumEven(value) {
  // implementar logica aqui
  return value.reduce((somaTotal, numeroAtual) => {
    return numeroAtual % 2 == 0 ? somaTotal + numeroAtual : somaTotal
  },0) 
}