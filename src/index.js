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

function decode(expr){
    let startIndex = 0
    let arrayOfChars = []
    let decodedArray = []

    for(let i = 0; i < expr.length / 10; i++){
        
        let lastIndex = startIndex + 10
        arrayOfChars.push(expr.slice(startIndex,lastIndex))
        startIndex = startIndex + 10;

        arrayOfChars[i] = arrayOfChars[i].replace(/00/g, "")
        arrayOfChars[i] = arrayOfChars[i].replace(/10/g, ".")
        arrayOfChars[i] = arrayOfChars[i].replace(/11/g, "-")
        arrayOfChars[i] = arrayOfChars[i].replace(/\*{10}/g, " ")

        if(arrayOfChars[i] == " "){
            decodedArray.push(arrayOfChars[i])
        } else {
            decodedArray.push(MORSE_TABLE[arrayOfChars[i]])
        }

    }

    return decodedArray.join("")
}

module.exports = {
    decode
}