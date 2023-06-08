
const inputEncriptar = document.querySelector('#btn-encriptar');
const inputDesencriptar = document.querySelector('#btn-desencriptar');
const inputCopiar = document.querySelector('#copiar-text');
const cipiarResult = document.querySelector('#copiar-text');


function encriptar (){
  let texto = document.querySelector("#input-texto").value;
  let textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.querySelector("#textResultado").value = textoEncriptado;
  document.querySelector("#input-texto").value;
  }
  inputEncriptar.addEventListener('click', encriptar);

 function desencriptar (){
  let texto = document.querySelector("#input-texto").value;
  let textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.querySelector("#textResultado").value = textoDesencriptado;
  document.querySelector("#input-texto").value;
  }
  inputDesencriptar.addEventListener('click', desencriptar);


 
  function copiarAlPortapapeles() {
    let contentText = document.querySelector('#textResultado');
    contentText.select();
    document.execCommand("copy");
  }
  inputCopiar.addEventListener('click', copiarAlPortapapeles);
