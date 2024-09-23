document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (!role || !username || !password) {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
        return;
    }

    // Aquí podrías agregar la lógica para validar el inicio de sesión.
    // Por ahora, solo mostramos un mensaje de éxito.
    errorMessage.textContent = '';

    // Simular redirección basada en el rol seleccionado.
    switch (role) {
        case 'admin':
            window.location.href = 'admin.html'; // Redirigir a la página de administrador
            break;
        case 'teacher':
            window.location.href = 'teacher.html'; // Redirigir a la página de profesor
            break;
        case 'student':
            window.location.href = 'student.html'; // Redirigir a la página de estudiante
            break;
        default:
            errorMessage.textContent = 'Rol seleccionado no válido.';
    }
});
