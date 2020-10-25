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

    for (let i = 0; i <expr.length; i += 10) {
        let temp = '';

        for (let j = 0; j < 10; j += 2) {
            switch (`${expr[i+j]}${expr[i+j+1]}`) {
                case '10':
                    temp += '.';
                    break;
                case '11':
                    temp += '-';
                    break;
                case '**':
                    result += ' ';
                    j+=10;
                    break;
                default:
                    break;
            }
        }

        result += MORSE_TABLE[temp] || '';
    }
    
    return result;
}

module.exports = {
    decode
}