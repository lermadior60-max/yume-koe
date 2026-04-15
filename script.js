function mostraSeccion(idSeccion)
 {
 const secciones = document.querySelectorAll( '.seccion-contenido');

 secciones.forEach(sec => {
    sec.style.display = 'none';   
 });
document.getElementById(idSeccion).style.display = 'block';
}