function encryptText() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let encryptedText = inputText.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    document.getElementById('resultArea').innerHTML = `<p>${encryptedText}</p><button onclick="copyToClipboard()" id="Porta">Copiar</button>`;
}

function decryptText() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let decryptedText = inputText.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    document.getElementById('resultArea').innerHTML = `<p>${decryptedText}</p><button onclick="copyToClipboard()" id="Porta">Copiar</button>`;
}

function copyToClipboard() {
    let resultParagraph = document.getElementById('resultArea').querySelector('p');
    let resultText = resultParagraph.innerText;
    navigator.clipboard.writeText(resultText);
    alert('Texto copiado al portapapeles.');
}

