const MORSE = { 
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
    '-.-.--': '!',
    '.......': ' '
  };
const morseCode = Object.keys(MORSE);
const charts = Object.values(MORSE);
const input = ('.... . .-.. .-.. --- ....... .-- --- .-. .-.. -.. -.-.--').split(' ');
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    const translate =  morseCode.indexOf(element);
    const decodeMorse = (charts[translate]).toUpperCase();
console.log(decodeMorse);
}


//console.log(input);
// function DECODER(input,result) {
//     for (let index = 0; index < input.length; index++) {
//         const translate = (charts[morseCode.indexOf(input[index])]);
//         console.log(translate);
        
// }};

// console.log(DECODER(input));

//morseCode.map()


