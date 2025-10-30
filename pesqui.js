window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function showImpact() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('results');

    if (input.value.trim() === '') return;

    results.classList.add('show');

    // Rola suavemente até os resultados
    setTimeout(() => {
        results.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
        });
    }, 100);
}

// Permite pesquisar pressionando Enter
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        showImpact();
    }
});

// Contadores em tempo real
function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const increment = parseFloat(element.dataset.increment);
    let current = 0;
    
    // Animação inicial rápida
    const quickInterval = setInterval(() => {
        current += target / 50;
        if (current >= target) {
            current = target;
            clearInterval(quickInterval);
            
            // Depois continua incrementando
            setInterval(() => {
                current += increment;
                element.textContent = Math.floor(current).toLocaleString('pt-BR');
            }, 1000);
        }
        element.textContent = Math.floor(current).toLocaleString('pt-BR');
    }, 30);
}

// Iniciar quando a seção aparecer na tela
const observerOptions = {
    threshold: 0.3
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter-number');
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            });
        }
    });
}, observerOptions);

// Observar a seção
const counterSection = document.querySelector('#contador');
if (counterSection) {
    counterObserver.observe(counterSection);
}