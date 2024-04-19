onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-volver-arriba").style.display = "block";
  } else {
    document.getElementById("btn-volver-arriba").style.display = "none";
  }
}

// Función para volver al inicio al hacer clic en el botón
document.getElementById("btn-volver-arriba").onclick = function() {
  document.body.scrollTop = 0; // Para navegadores que no son compatibles con document.documentElement.scrollTop
  document.documentElement.scrollTop = 0; // Para navegadores compatibles
}
