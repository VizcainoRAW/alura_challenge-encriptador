let codigo_encriptado=[["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
const input_texto =document.getElementById("input")
const output_texto =document.getElementById("output")
var scroll=false

function encriptador(texto, selector) {
    texto = texto.toString().toLowerCase();
    if (selector==true){
      console.log("encriptando")
      for (var i = 0; i < codigo_encriptado.length; i++) {
        if (texto.includes(codigo_encriptado[i][0])) {
          texto = texto.replaceAll(codigo_encriptado[i][0], codigo_encriptado[i][1]);
        }
      }
    }
    if (selector==false){
      console.log("desencriptando")
      for (var i = 0; i < codigo_encriptado.length; i++) {
        if (texto.includes(codigo_encriptado[i][1])) {
          texto = texto.replaceAll(codigo_encriptado[i][1], codigo_encriptado[i][0]);
        }
      }
    }
    return texto;
}
function botonEncriptar(){
  const texto_encriptado= encriptador(input_texto.value,true)
  output.value=texto_encriptado
  escondePlaceholder()
  scrollDown()
}
function botonDesencriptar(texto){
  const texto_encriptado= encriptador(input_texto.value,false)
  output.value=texto_encriptado
  escondePlaceholder()
  scrollDown()
}
function botonCopiar(texto){
  navigator.clipboard.writeText(output_texto.value)
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
}
function escondePlaceholder(){
  if (output_texto.value === "") {
    output_texto.style.backgroundSize = "70%";
  } else {
    output_texto.style.backgroundSize = "0";
  }
}
function scrollDown() {
  if(scroll===false){
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    scroll=true
  }
}