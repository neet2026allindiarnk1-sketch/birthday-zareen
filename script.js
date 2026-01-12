// Screen Navigation
function nextScreen(screenNumber) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById('screen' + screenNumber);
    targetScreen.classList.add('active');
    
    // Trigger confetti on screen 2 and 7
    if (screenNumber === 2 || screenNumber === 7) {
        createConfetti();
    }
    
    // Start music on screen 2
    if (screenNumber === 2) {
        const audio = document.getElementById('bgMusic');
        audio.play().catch(e => console.log('Audio autoplay blocked'));
    }
}

// Floating Hearts Background
function createFloatingHearts() {
    const container = document.getElementById('heartsBg');
    const hearts = ['💕', '💖', '💗', '💓', '❤️', '🩷'];
    
    setInterval(() => {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (3 + Math.random() * 3) + 's';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }, 500);
}

// Confetti Effect
function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#e91e63', '#ff6b9d', '#ffd700', '#ff4081', '#f50057', '#ff80ab'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = (5 + Math.random() * 10) + 'px';
            confetti.style.height = (5 + Math.random() * 10) + 'px';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3500);
        }, i * 30);
    }
}

// Audio Control
document.getElementById('audioBtn').addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
        this.classList.add('playing');
        this.textContent = '🎵';
    } else {
        audio.pause();
        this.classList.remove('playing');
        this.textContent = '🔇';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
});

// Keyboard navigation (optional)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const activeScreen = document.querySelector('.screen.active');
        const screenNumber = parseInt(activeScreen.id.replace('screen', ''));
        if (screenNumber < 7) {
            nextScreen(screenNumber + 1);
        }
    }
});