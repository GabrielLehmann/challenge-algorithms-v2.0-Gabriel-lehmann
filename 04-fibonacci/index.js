export function fibonacci(value) {
  // implementar logica aqui
  let n1 = 0
  let n2 = 1
  let temp
  for (let i = 0; i < value; i++) {
    temp = n1
    n1 = n1 + n2
    n2 = temp
  }
  return n1
}