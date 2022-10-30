export function mostUsedChar(text) {
    // implementar logica aqui
    let count = 0;
    let char = " ";
    let save = {};
    text.split("").forEach((letter) => {
        if(save[letter]){
            save[letter] += 1;
        } else {
            save[letter] = 1;
        }
        if(save[letter] > count){
            count = save[letter];
            char = letter;
        }
    })
    return char;
}