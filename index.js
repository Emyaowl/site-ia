// Carrossel automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const slideInterval = 3000; // 3 segundos

function showSlide(index) {
    // Remove active de todos
    slides.forEach(slide => {
        slide.classList.remove('active', 'exit-left');
    });
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Adiciona exit-left no slide atual
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('exit-left');
    }
    
    // Atualiza índice
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    // Ativa novo slide
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Auto-play
let autoPlay = setInterval(() => {
    showSlide(currentSlide + 1);
}, slideInterval);

// Clique nos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(autoPlay);
        showSlide(index);
        autoPlay = setInterval(() => {
            showSlide(currentSlide + 1);
        }, slideInterval);
    });
});