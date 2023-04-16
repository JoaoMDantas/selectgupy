let text1=document.querySelector('#fraseinit');
let text2=document.querySelector('#result');

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }
  const stringOr = 'Hello, World!';
  const stringIn= inverterString(stringOr);
  text1.textContent=stringOr;
  text2.textContent=stringIn;