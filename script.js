// ============================================
// Boda - Rigoberto & Alondra
// ============================================

const audio = document.getElementById('bgMusic');
let isPlaying = false;

// ---- Splash Screen ----
document.getElementById('openInvitation').addEventListener('click', () => {
    document.getElementById('splashScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.add('visible');

    audio.volume = 0.5;
    audio.play().then(() => {
        isPlaying = true;
        document.getElementById('musicToggle').classList.add('playing');
    }).catch(() => {});

    setTimeout(() => {
        initParticles();
        initFloatingElements();
        initCountdown();
        initScrollReveal();
        initSparkleTrail();
    }, 100);
});

// ---- Particles ----
function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (6 + Math.random() * 8) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        const size = (2 + Math.random() * 3) + 'px';
        p.style.width = size;
        p.style.height = size;
        const colors = ['#D4AF37', '#F5E6A3', '#9B8FB0', '#D4C5E2'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(p);
    }
}

// ---- Floating Elements ----
function initFloatingElements() {
    const container = document.getElementById('floatingElements');
    const symbols = ['✦', '♡', '✧', '·'];
    for (let i = 0; i < 12; i++) {
        const el = document.createElement('div');
        el.className = 'float-el';
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.animationDuration = (10 + Math.random() * 12) + 's';
        el.style.animationDelay = Math.random() * 10 + 's';
        el.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        el.style.color = Math.random() > 0.5 ? '#D4AF37' : '#D4C5E2';
        container.appendChild(el);
    }
}

// ---- Countdown ----
function initCountdown() {
    const eventDate = new Date('2026-05-30T13:00:00-06:00');

    function update() {
        const diff = eventDate - new Date();
        if (diff <= 0) {
            ['days','hours','minutes','seconds'].forEach(id => document.getElementById(id).textContent = '0');
            return;
        }
        document.getElementById('days').textContent = Math.floor(diff / 86400000);
        document.getElementById('hours').textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        document.getElementById('minutes').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        document.getElementById('seconds').textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// ---- Scroll Reveal ----
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.anime-reveal, .anime-pop').forEach(el => observer.observe(el));
}

// ---- Sparkle Trail ----
function initSparkleTrail() {
    const container = document.getElementById('sparkleContainer');
    let lastX = 0, lastY = 0, throttle = false;

    document.addEventListener('mousemove', (e) => {
        if (throttle) return;
        throttle = true;
        setTimeout(() => throttle = false, 50);
        const dist = Math.sqrt((e.clientX - lastX) ** 2 + (e.clientY - lastY) ** 2);
        if (dist > 10) {
            const s = document.createElement('div');
            s.className = 'sparkle';
            s.style.left = (e.clientX + (Math.random() - 0.5) * 10) + 'px';
            s.style.top = (e.clientY + (Math.random() - 0.5) * 10) + 'px';
            container.appendChild(s);
            setTimeout(() => s.remove(), 600);
            lastX = e.clientX;
            lastY = e.clientY;
        }
    });
}

// ---- Music Toggle ----
document.getElementById('musicToggle').addEventListener('click', () => {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    document.getElementById('musicToggle').classList.toggle('playing', isPlaying);
});

// ---- RSVP WhatsApp ----
function buildMessage() {
    const name = document.getElementById('guestName').value.trim();
    const num = document.getElementById('numGuests').value;
    const att = document.getElementById('attendance').value;
    const msg = document.getElementById('message').value.trim();

    if (!name || !num || !att) {
        alert('Por favor llena todos los campos requeridos.');
        return null;
    }

    let text = `*Boda Rigoberto & Alondra*\n\n`;
    text += `*Nombre:* ${name}\n`;
    text += `*Invitados:* ${num}\n`;
    text += `*Asistencia:* ${att === 'si' ? 'Confirmo mi asistencia' : 'No podré asistir'}\n`;
    if (msg) text += `*Mensaje:* ${msg}\n`;

    return encodeURIComponent(text);
}

document.getElementById('sendConfirm').addEventListener('click', () => {
    const msg = buildMessage();
    if (msg) {
        // Number placeholder - update with actual contact number
        window.open(`https://wa.me/52?text=${msg}`, '_blank');
    }
});
