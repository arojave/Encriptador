function encriptar() {
    var texto = document.getElementById("text-to-encrypt").value.toLowerCase();
    var resultado = "";
    for (var i = 0; i < texto.length; i++) {
      switch (texto[i]) {
        case "e":
          resultado += "enter";
          break;
        case "i":
          resultado += "imes";
          break;
        case "a":
          resultado += "ai";
          break;
        case "o":
          resultado += "ober";
          break;
        case "u":
          resultado += "ufat";
          break;
        default:
          resultado += texto[i];
      }
    }
    document.getElementById("resultado").value = resultado;
    document.getElementById("text-to-encrypt").value = "";
    document.getElementById("img_vacia").style.display = "none";
    document.getElementById("label1").style.display = "none";
    document.getElementById("btn_copiar").style.display = "inline-block";

  }
  
  function desencriptar() {
    var texto = document.getElementById("text-to-encrypt").value;
    var resultado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("resultado").value = resultado;
    document.getElementById("text-to-encrypt").value = "";
    document.getElementById("img_vacia").style.display = "none";
    document.getElementById("label1").style.display = "none";
    document.getElementById("btn_copiar").style.display = "inline-block";
}
  
  function copiarTexto() {
    var texto = document.getElementById("resultado").value;
    navigator.clipboard.writeText(texto).then(function() {
        console.log('Copiado al portapapeles: ' + texto);
        window.alert("Copiado");
    }, function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}
