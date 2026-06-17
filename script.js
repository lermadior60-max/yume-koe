// Funciones para abrir y cerrar ventanas emergentes (Modales)
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function closeModalOnOutsideClick(event, modalId) {
    if (event.target.id === modalId) {
        closeModal(modalId);
    }
}

// Función para descargar contacto (.vcf)
function downloadVCard() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:CUMPLIPLACA;;;;
FN:CUMPLIPLACA
ORG:Servicios Profesionales
TEL;TYPE=CELL,VOICE:+1234567890
EMAIL;TYPE=PREF,INTERNET:sofia.rodriguez@email.com
NOTE:Especialistas en soluciones eficientes y personalizadas.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Contacto_Cumpliplaca.vcf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Lógica limpia del carrusel de imágenes
let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot");
let carouselTimer;

function showSlides(n) {
    if (slides.length === 0) return;
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        if(dots[i]) dots[i].classList.remove("active");
    }
    
    slides[slideIndex].classList.add("active");
    if(dots[slideIndex]) dots[slideIndex].classList.add("active");
    
    resetAutoPlay();
}

function moveSlide(step) {
    showSlides(slideIndex += step);
}

function currentSlide(index) {
    showSlides(slideIndex = index);
}

function startAutoPlay() {
    carouselTimer = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000);
}

function resetAutoPlay() {
    clearInterval(carouselTimer);
    startAutoPlay();
}

// Iniciar la reproducción automática al cargar la página
startAutoPlay();


