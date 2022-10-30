export function longestWords(words) {
    // implementar logica aqui
    return words.reduce((longWords, currentWord) => {
        if(!longWords[0] || longWords[0].length < currentWord.length) return [currentWord];
        if(longWords[0].length > currentWord.length) return longWords;
        longWords.push(currentWord);
        return longWords;
    },[])
}