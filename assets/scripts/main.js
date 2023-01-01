var textInput = document.querySelector("#entradaTexto");
var outInput = document.querySelector("#saidaTexto");


function criptografarTexto(){

  var texto = textInput.value;
  if (/[A-Z-À-Ú-à-ù-0-9]/.test(texto)) {
    entradaTexto.innerHTML = 'Por favor, use apenas letras minúsculas, sem acentos ou números e criptografe novamente!'
  } else if (entradaTexto.value === '') {
    entradaTexto.innerHTML = 'Parece que você esqueceu de digitar algo, tente novamente!'
  } else { 
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
 
  document.getElementById('saidaTexto').innerHTML = resultadoCripto ;
}
};

function descriptografarTexto() {

    var texto = textInput.value;
    if (/[A-Z-À-Ú-à-ù-0-9]/.test(texto)) {
      saidaTexto.innerHTML = 'Por favor, use apenas letras minúsculas, sem acentos ou números e criptografe novamente!'
    } else if (entradaTexto.value === '') {
      saidaTexto.innerHTML = 'Parece que você esqueceu de digitar algo, tente novamente!' 
    } else {
        var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
        document.getElementById('saidaTexto').innerHTML = resultadoDescripto;
      }
};

function copiar() {
    var copiarTexto = document.getElementById('saidaTexto');
    if(copiarTexto.value === ''){
      saidaTexto.innerHTML = 'É preciso digitar algo, tente novamente!' 
    } else {
      copiarTexto.select();
      document.execCommand('copy');
      alert("Texto copiado.");
    }
}  

function limparTexto(){
  document.getElementById("saidaTexto").innerHTML = ''
}
