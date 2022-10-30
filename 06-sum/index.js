export function sum(values) {
  // implementar logica aqui
  return values.reduce((somaTotal, numeroAtual) => {
    return somaTotal + numeroAtual
  },0)
}