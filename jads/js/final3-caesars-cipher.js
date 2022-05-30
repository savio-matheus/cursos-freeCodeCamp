function rot13(str) {
    const ALPHABET_LENGTH = 26;
    const SHIFT = 13;
    let cipher = [];
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 77) {
            charCode = charCode + SHIFT;
        } else if (charCode >= 78 && charCode <= 90) {
            charCode = charCode - SHIFT;
        }
        cipher.push(charCode);
        //console.log(str.charCodeAt(i) + " -> " + charCode);
    }
    return String.fromCharCode(...cipher);
}
  
console.log(rot13("SERR PBQR PNZC"));