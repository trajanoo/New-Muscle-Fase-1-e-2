document.addEventListener("DOMContentLoaded", function () {
    const textoElement = document.getElementById('texto');
    const texto = textoElement.textContent;
    textoElement.textContent = '';
    let i = 0;
  
    function typeWriter() {
        if (i < texto.length) {
            textoElement.textContent += texto.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
  
    typeWriter();
  });
  
  function avançar(){
    location.href = 'fase1.html'
  }