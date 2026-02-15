const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

function resize() {
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
        this.size = Math.random() * 2.5 + 0.8;
        this.speed = Math.random() * 1.6 + 0.4;
        this.color = ['#b8860b', '#d4af37', '#cd9b1d'][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.35 + 0.15;
        this.rotation = Math.random() * 360;
        this.rotSpeed = Math.random() * 1.4 - 0.7;
        this.baseScale = Math.random() * 0.6 + 0.7;
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotSpeed;
        this.scale = this.baseScale + Math.sin(Date.now() * 0.001 + this.x) * 0.12;

        if (this.y > canvas.height + 50) {
            this.reset();
        }

        // Fade top/bottom
        this.alpha = this.opacity;
        if (this.y < 100) this.alpha *= this.y / 100;
        if (this.y > canvas.height - 100) this.alpha *= (canvas.height - this.y) / 100;
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

function init() {
    particles = [];
    const count = Math.min(90, Math.floor(canvas.width * canvas.height / 14000));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resize();
    init();
});

resize();
init();
animate();
