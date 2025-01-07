const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicatorsContainer = document.getElementById('indicators');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function createIndicators() {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentIndex) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        indicatorsContainer.appendChild(indicator);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

createIndicators();
