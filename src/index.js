const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const result = [];
  const letterLength = 10;

  for (let i = 0; i < expr.length; i += letterLength) {
    const chunk = expr.slice(i, i + letterLength);

    if (chunk === '**********') {
      result.push(' ');
    } else {
      let morse = '';

      for (let j = 0; j < letterLength; j += 2) {
        const pair = chunk.slice(j, j + 2);
        if (pair === '10' || pair === '11') {
          morse += pair === '10' ? '.' : '-';
        }
      }

      result.push(MORSE_TABLE[morse]);
    }
  }

  return result.join('');
};
