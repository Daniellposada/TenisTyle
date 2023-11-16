document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtener los valores de los campos
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Obtener el usuario almacenado en localStorage
      const storedUser = localStorage.getItem(email);

      if (storedUser) {
        // El usuario existe en localStorage
        const usuario = JSON.parse(storedUser);

        if (usuario.password === password) {
          // Contraseña válida, redirigir al usuario a la página de inicio
          window.location.href = "index.html";
  
          // Almacena el nombre del usuario en el LocalStorage
          localStorage.setItem("nombreUsuario", usuario.nombres);
        } else {
          alert("Contraseña incorrecta. Por favor, inténtalo nuevamente.");
        }
      } else {
        alert("El usuario no existe. Por favor, regístrate.");
      }
    });
  
    const nombreUsuario = localStorage.getItem("nombreUsuario");
  
    if (nombreUsuario) {
      document.getElementById("nombreUsuario").textContent = nombreUsuario;
    }
  
    document.getElementById("cerrarSesion").addEventListener("click", function (event) {
      event.preventDefault();
  
      //elimina el nombre del usuario del LocalStorage
      localStorage.removeItem("nombreUsuario");
    });
  });