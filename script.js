const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height - 100;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 2 + 0.6;
        this.color = ['#B8860B', '#D4AF37', '#CD9B1D'][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.4 + 0.2;
        this.rotation = Math.random() * 360;
        this.rotSpeed = Math.random() * 1.2 - 0.6;
        this.baseScale = Math.random() * 0.6 + 0.7;
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotSpeed;

        // Gentle pulsing scale
        this.scale = this.baseScale + Math.sin(Date.now() * 0.001 + this.x) * 0.15;

        if (this.y > canvas.height + 50) {
            this.reset();
        }

        // Fade near top and bottom
        this.alpha = this.opacity;
        if (this.y < 80) this.alpha *= (this.y / 80);
        if (this.y > canvas.height - 80) this.alpha *= ((canvas.height - this.y) / 80);
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.scale(this.scale, this.scale);

        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 15000));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

// Initialize
window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

resizeCanvas();
initParticles();
animate();
