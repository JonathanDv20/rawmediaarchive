document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Aquí puedes añadir la lógica de autenticación
    if (username === "admin" && password === "admin") {
        alert('Inicio de sesión exitoso');
        // Redirigir a otra página si es necesario
        window.location.href = "dashboard.html"; // Por ejemplo
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
