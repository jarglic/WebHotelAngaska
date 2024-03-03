

function abrirImagen(src) {
    const overlay = document.getElementById('overlay');
    const imagenAmpliada = document.getElementById('imagen-ampliada-src');
    
    overlay.style.display = 'flex';
    imagenAmpliada.src = src;
}

function cerrarImagen() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
