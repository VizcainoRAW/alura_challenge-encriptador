let encrypted_codes=[["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
const inputText =document.getElementById("input")
const outputText =document.getElementById("output")
var scroll=false

function encryptor(text, encrypt=true) {
  text = text.toString().toLowerCase();

  if (encrypt===true) {
    console.log("Encrypting");
    for (var i = 0; i < encrypted_codes.length; i++) {
      if (text.includes(encrypted_codes[i][0])) {
        text = text.replaceAll(encrypted_codes[i][0], encrypted_codes[i][1]);
      }
    }
  } else {
    console.log("Decrypting");
    for (var i = 0; i < encrypted_codes.length; i++) {
      if (text.includes(encrypted_codes[i][1])) {
        text = text.replaceAll(encrypted_codes[i][1], encrypted_codes[i][0]);
      }
    }
  }

  return text;
}
function botonEncriptar(){
  const texto_encriptado= encryptor(inputText.value,true)
  output.value=texto_encriptado
  hidePlaceholder()
  scrollDown()
}
function botonDesencriptar(texto){
  const texto_encriptado= encryptor(inputText.value,false)
  output.value=texto_encriptado
  hidePlaceholder()
  scrollDown()
}
function copyButton() {
  navigator.clipboard.writeText(outputText.value)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
}
function hidePlaceholder() {
  console.log(outputText.value)
  if (outputText.value === "") {
    console.log("no ocultanodo")
    outputText.style.backgroundSize = "70%";
    setButtonVisibility(".boton_copiar",false);
    setButtonVisibility(".clear-button",false);
  } else {
    console.log("ocultanodo")
    outputText.style.backgroundSize = "0";
    setButtonVisibility(".boton_copiar",true);
    setButtonVisibility(".clear-button",true);
  }
}
function clearButton(){
  outputText.value=""
  hidePlaceholder()
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
function setButtonVisibility(buttonClass, visibility = true) {
  const Button = document.querySelector(buttonClass);
  if (visibility) {
    Button.style.display = "block";
  } else {
    Button.style.display = "none";
  }
}
