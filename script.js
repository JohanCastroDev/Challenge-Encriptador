const txtEncrypt = document.getElementById('encrypted');
const txtUncrypt = document.getElementById('unencrypted');
const encryptBtn = document.getElementById('encrypt');
const unencryptBtn = document.getElementById('unencrypt');

// Validar que solo se ingresen letras minúsculas, espacios en blanco y comas
txtUncrypt.addEventListener('input', () => {
  txtUncrypt.value = txtUncrypt.value.toLowerCase().replace(/[^a-z\s,]/g, '');
});



encryptBtn.addEventListener('click', () => {
  const text = txtUncrypt.value.toLowerCase(); // Convertir todo a minúsculas
  let encrypt = text.split('');

  encrypt.forEach((letter, index) => {
    if (letter === 'a') encrypt[index] = 'ai';
    if (letter === 'e') encrypt[index] = 'enter';
    if (letter === 'i') encrypt[index] = 'imes';
    if (letter === 'o') encrypt[index] = 'ober';
    if (letter === 'u') encrypt[index] = 'ufat';
  });
  txtEncrypt.value = encrypt.join('');
});

unencryptBtn.addEventListener('click', () => {
  const text = txtEncrypt.value;

  const unencryptedText = text
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  txtUncrypt.value = unencryptedText;
});

document.getElementById("copiar").addEventListener("click", function() {
  var textoACopiar = document.getElementById("encrypted");
  textoACopiar.select();
  textoACopiar.setSelectionRange(0, 99999);
  document.execCommand("copy");
  textoACopiar.value = "";
  txtUncrypt.value = "";
  console.log("Texto copiado al portapapeles");
});

document.getElementById('pegar').addEventListener('click', function() {
  navigator.clipboard.readText()
      .then(text => {
          document.getElementById('encrypted').value = text;
          console.log('Texto pegado desde el portapapeles: ', text);
      })
      .catch(err => {
          console.log('No se pudo pegar el texto: ', err);
      });
});

