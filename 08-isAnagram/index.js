export function isAnagram(word1, word2) {
  // implementar logica aqui
  return word1.toLowerCase().split("").sort().join("") == word2.toLowerCase().split("").sort().join("") ;
}