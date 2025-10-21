document.addEventListener("DOMContentLoaded", () => {
  const usuarioActivo = localStorage.getItem("usuarioActivo");
  if (!usuarioActivo) {
    window.location.href = "login.html";
  }

  document.getElementById("btnAlerta").addEventListener("click", () => {
    alert("Bienvenido a Lamborghini: Potencia, lujo e innovación en un solo rugido.");
  });

  document.getElementById("btnLogout").addEventListener("click", () => {
    localStorage.removeItem("usuarioActivo");
    alert("Sesión cerrada correctamente.");
    window.location.href = "login.html";
  });
});

function mostrarModal(modelo) {
  let contenido = "";

  switch (modelo) {
    case "Lamborghini Aventador":
      contenido = `
        <img src="img/car1.jpg" class="img-fluid rounded mb-3" alt="${modelo}">
        <h5 class="text-warning">Lamborghini Aventador</h5>
        <p>El Aventador es la máxima expresión del ADN de Lamborghini: potencia V12 atmosférica, diseño icónico y prestaciones radicales. 
        Un superdeportivo creado para quienes buscan emociones puras.</p>
        <ul class="list-unstyled">
          <li><strong>Motor:</strong> V12 6.5L 770 CV</li>
          <li><strong>Velocidad Máxima:</strong> 350 km/h</li>
          <li><strong>Aceleración 0–100 km/h:</strong> 2.8 segundos</li>
          <li><strong>Precio Aprox.:</strong> $500,000 USD</li>
        </ul>`;
      break;

    case "Lamborghini Huracán":
      contenido = `
        <img src="img/car2.jpg" class="img-fluid rounded mb-3" alt="${modelo}">
        <h5 class="text-warning">Lamborghini Huracán</h5>
        <p>El Huracán representa la fusión perfecta entre diseño, potencia y tecnología. 
        Su motor V10 ofrece un rugido inconfundible que despierta pasión a primera vista.</p>
        <ul class="list-unstyled">
          <li><strong>Motor:</strong> V10 5.2L 640 CV</li>
          <li><strong>Velocidad Máxima:</strong> 325 km/h</li>
          <li><strong>Aceleración 0–100 km/h:</strong> 2.9 segundos</li>
          <li><strong>Precio Aprox.:</strong> $250,000 USD</li>
        </ul>`;
      break;

    case "Lamborghini Revuelto":
      contenido = `
        <img src="img/car3.jpg" class="img-fluid rounded mb-3" alt="${modelo}">
        <h5 class="text-warning">Lamborghini Revuelto</h5>
        <p>El Revuelto es el primer superdeportivo híbrido enchufable V12 de Lamborghini. 
        Combina tres motores eléctricos con la potencia de un V12 de nueva generación.</p>
        <ul class="list-unstyled">
          <li><strong>Motor:</strong> V12 Híbrido 6.5L + 3 Motores Eléctricos (1015 CV)</li>
          <li><strong>Velocidad Máxima:</strong> 350 km/h</li>
          <li><strong>Aceleración 0–100 km/h:</strong> 2.5 segundos</li>
          <li><strong>Precio Aprox.:</strong> $600,000 USD</li>
        </ul>`;
      break;

    default:
      contenido = "<p>No se encontró información del modelo seleccionado.</p>";
  }

  document.getElementById("modalContenido").innerHTML = contenido;
  new bootstrap.Modal(document.getElementById("modalProducto")).show();
}
