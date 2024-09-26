const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let result = '';
    let morseWord = '';
    let decodedWord = '';

    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            result = result + ' ';
        } else {
            for (let j = i; j < i + 9; j += 2) {
                if (expr[j] === '1' && expr[j + 1] === '0') {
                    morseWord = morseWord + '.';
                } else if (expr[j] === '1' && expr[j + 1] === '1'){
                    morseWord = morseWord + '-';
                }
            }
            decodedWord = `${MORSE_TABLE[morseWord]}`;
            result = result + decodedWord;
            morseWord = '';
        }



    }
    // console.log(result);

    return result;
}

module.exports = {
    decode
}