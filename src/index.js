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
    // write your solution here 
    let str='';
    let arrLetter = [];
    let arrWord = expr.split('**********');
    for (let i=0; i < arrWord.length; i++) {
        arrLetter[i] = arrWord[i].match(/\w{1,10}/gi).map(x=>x.replace(/00/g, '')).map(x=>x.replace(/10/g, '.')).map(x=>x.replace(/11/g, '-'));
    }

    for (let i=0; i < arrLetter.length; i++) {
      for (let j=0; j < arrLetter[i].length; j++) {
         str = str + MORSE_TABLE[arrLetter[i][j]];
      }
      str = str+' ';
    }
    /*console.log(str);*/
    return str.slice(0, -1);
}

module.exports = {
    decode
}