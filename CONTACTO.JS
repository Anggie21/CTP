document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioContacto");
    if (formulario) {
      formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensaje enviado correctamente.");
        formulario.reset();
      });
    }
  });