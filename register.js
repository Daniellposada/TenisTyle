document.addEventListener("DOMContentLoaded", function () {
  const registroForm = document.getElementById("registroForm");

  registroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const genero = document.getElementById("genero").value;

    // objeto con la información del usuario
    const usuario = {
      nombres,
      apellidos,
      email,
      password,
      genero,
    };

    // Guardar el objeto en localStorage
    localStorage.setItem(email, JSON.stringify(usuario));

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "login.html";
  });
});
 