window.addEventListener('load', function() {
    // Mostrar la imagen después de 2 segundos
    setTimeout(function() {
        document.getElementById('imageContainer').classList.add('show');

        // Mostrar la barra de carga después de que la imagen ha estado 5 segundos visible
        setTimeout(function() {
            document.getElementById('loadingContainer').classList.add('show');

            // Iniciar animación de la barra de progreso
            let progressElement = document.getElementById('progress');
            let loadingAmountElement = document.getElementById('loadingAmount');
            let totalData = 5.1; // GB
            let currentData = 0.0;

            let interval = setInterval(function() {
                currentData += 0.1; // Incremento de 0.1GB
                if (currentData >= totalData) {
                    currentData = totalData; // Limitar a 5.1GB
                    clearInterval(interval);
                    // Redirigir a home.html después de completar la carga
                    window.location.href = 'home.html';
                }

                progressElement.style.width = (currentData / totalData) * 100 + '%';
                loadingAmountElement.textContent = currentData.toFixed(1) + ' GB';
            }, 500); // 500 ms = 0.1 GB cada medio segundo (total 5 segundos para 5.1GB)
        }, 5000);
    }, 2000);
});
