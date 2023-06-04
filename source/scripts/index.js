let codigo_encriptado=[["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
const input_texto =document.getElementById("input")

function encriptar(texto) {
    texto = texto.toString().toLowerCase();
    console.log(texto)
    for (var i = 0; i < codigo_encriptado.length; i++) {
      if (texto.includes(codigo_encriptado[i][0])) {
        texto = texto.replaceAll(codigo_encriptado[i][0], codigo_encriptado[i][1]);
      }
    }
    return texto;
  }
  
function botonEncriptar(){
    const texto_encriptado= encriptar(input_texto.value)
    output.value=texto_encriptado
}
