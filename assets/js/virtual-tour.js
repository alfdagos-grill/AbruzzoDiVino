// Tour virtuale delle cantine
class VirtualTour {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.virtual-tour-slide');
        this.totalSlides = this.slides.length;
        this.autoplayInterval = null;
        
        this.init();
    }

    init() {
        // Aggiungi controlli di navigazione
        const controls = document.createElement('div');
        controls.className = 'virtual-tour-controls';
        controls.innerHTML = `
            <button class="prev-slide" aria-label="Precedente">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="slide-indicators"></div>
            <button class="next-slide" aria-label="Successivo">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        document.querySelector('.virtual-tour').appendChild(controls);
        
        // Aggiungi indicatori
        const indicators = controls.querySelector('.slide-indicators');
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.className = 'slide-indicator';
            indicator.setAttribute('aria-label', `Vai alla slide ${i + 1}`);
            indicator.addEventListener('click', () => this.goToSlide(i));
            indicators.appendChild(indicator);
        }
        
        // Eventi dei pulsanti
        controls.querySelector('.prev-slide').addEventListener('click', () => this.prevSlide());
        controls.querySelector('.next-slide').addEventListener('click', () => this.nextSlide());
        
        // Gestione touch swipe
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.querySelector('.virtual-tour').addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.querySelector('.virtual-tour').addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        // Avvia autoplay
        this.startAutoplay();
        
        // Aggiorna slide corrente
        this.updateSlide();
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            this.nextSlide();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            this.prevSlide();
        }
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
        
        // Pausa autoplay su hover
        document.querySelector('.virtual-tour').addEventListener('mouseenter', () => {
            clearInterval(this.autoplayInterval);
        });
        
        document.querySelector('.virtual-tour').addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }
    
    updateSlide() {
        this.slides.forEach((slide, index) => {
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Aggiorna indicatori
        document.querySelectorAll('.slide-indicator').forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlide();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlide();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlide();
    }
}

// Inizializza il tour virtuale quando il documento è pronto
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.virtual-tour')) {
        new VirtualTour();
    }
});