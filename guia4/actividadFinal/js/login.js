document.getElementById("formLogin").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (usuario === "juan" && password === "1234") {
      alert("Inicio de sesión exitoso. Bienvenido al mundo Lamborghini, Juan!");
      localStorage.setItem("usuarioActivo", "juan");
      window.location.href = "index.html";
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  });
  