export function maxValue(values = []) {
  // implementar logica aqui
  if (values.length < 1) return 0 
  return Math.max(...values)
}