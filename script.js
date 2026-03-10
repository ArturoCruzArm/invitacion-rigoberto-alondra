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
        initVotoModal();
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

// ---- Modal Votos ----
function initVotoModal() {
    const votos = {
        rigo: {
            name: 'Rigoberto',
            paragraphs: [
                'Alondra mi amor, la vida nos hizo encontrarnos el uno al otro. Aún recuerdo cuando empezamos a hablar; desde ese momento sentí una conexión contigo que no puedo explicar, pero de una cosa sí estaba muy seguro: que quería todo contigo.',
                'Llevábamos apenas un día hablando y al día siguiente te mandé un ramo con rosas rojas y girasoles, las cuales son tus flores favoritas. A pesar de que 195 km de distancia nos separaban, eso jamás fue un impedimento para dejarte de conocer.',
                'Recuerdo que te dije que nos veríamos, teníamos la fecha planeada y ambos la esperábamos con ansias porque al fin nos conoceríamos en persona. Y finalmente llegó ese día; recuerdo que iba bien nervioso, emocionado y feliz por verte. Ocurrió algo que no esperaba: se descompuso la camioneta en plena carretera y no pude ir a verte ese día. Recuerdo que ambos estábamos tristes por no podernos ver, pero después de una semana al fin logré conocerte en persona.',
                'Verte salir de tu casa toda hermosa fue algo muy hermoso; ambos estábamos felices y emocionados. Nos fuimos al cine, platicamos en la plaza y fue algo muy especial, algo que nunca había sentido. Al pasar ese día contigo confirmé que te quería para siempre, sin importar la distancia.',
                'Y ese mismo día, después de nuestra cita, te pedí que fueras mi novia con un ramo de flores que te llevé. No olvido tu sonrisa y tu mirada hermosa, lo preciosa que te veías, y que sin pensarlo me respondiste que sí. No me la creía y te pregunté: "¿en serio sí?" y me respondiste que sí. Fue algo hermoso y desde ahí comenzó todo esto tan maravilloso.',
                'Cada mes iba a verte; recuerdo que anhelaba que pasaran los días porque ya quería estar junto a ti. También recuerdo cuando planeamos irnos a Mazamitla por tu cumpleaños; fue un día hermoso a tu lado, lleno de muchas aventuras juntos en ese lugar precioso. Cómo corríamos tomados de la mano hacia el camión porque nos agarró la lluvia, o cuando caminamos por todo el puente y cuando estuvimos en la cascada viendo lo hermoso que se miraba todo. Fueron unos días llenos de momentos inolvidables y se convirtió en nuestro lugar favorito.',
                'Fue entonces cuando quería que fuéramos algo más que novios, y te propuse regresar a Mazamitla porque tenía una sorpresa para ti. Llegó ese día, sábado 30 de agosto; estábamos ahí, nos fuimos a andar en cuatrimotos, fue algo hermoso porque iba a tu lado con un paisaje precioso, nos divertimos demasiado. Y llegando a la cabaña hicimos carne asada; fue algo maravilloso, cenando juntos en ese lugar tan bello.',
                'Entonces, terminando, te pedí que te arreglaras porque tenía una sorpresa para ti. Ya era domingo 31 de agosto del 2025. Mientras tú te arreglabas, yo estaba como loco preparando todo, adornando y repasando las palabras que te diría. Cuando todo estaba listo te llamé, tapé tus ojos preciosos y caminamos hacia donde tenía la sorpresa.',
                'Destapé tus ojos y, toda sorprendida y feliz, luciéndote hermosa, te miré a los ojos. En ese momento me ganaron los nervios y todas las palabras que tenía preparadas se me olvidaron, pero aun así dije algunas y siendo las 3:23 am te hice la siguiente pregunta: si querías casarte conmigo. Al escuchar el sí, fue uno de los momentos más felices de mi vida.',
                'Siempre agradezco a la vida por tenerte conmigo, porque eres la mujer más hermosa, y no solo físicamente; tienes muchas cualidades que te hacen única. No tengo palabras para agradecer tu hermosa compañía. Me pone muy feliz despertar día a día y saber que estoy con la persona que siempre soñé y que siempre quise en mi vida.'
            ]
        },
        alondra: {
            name: 'Alondra',
            paragraphs: [
                'Mi amor, mi compañero de vida. Hoy se cumplió nuestro mayor sueño; mi cielo, nos casamos, y soy la mujer más feliz del mundo. Compartiremos todo una larga vida juntos, como lo decimos todos los días: hasta que nos hagamos viejitos juntos, amor mío.',
                'Desde el primer día que te conocí, mi corazón supo que serías tú por muchos, muchos años, y así fue, mi amor, porque ya eres mi esposo. Y mi corazón se llena de alegría, mi bomboncito.',
                'Es algo increíble pensar que Dios te puso en mi camino y que todos los días me encargaré de hacerte muy feliz, así como tú, mi amor, te encargas todos los días de amarme con todo tu corazón y das todo por siempre verme feliz.',
                'Mi amor hermoso, precioso, eres un hombre maravilloso de un corazón precioso del cual me enamoré desde el primer día que nos conocimos. ¿Recuerdas ese día, mi amorcito? Porque yo lo recuerdo como si hubiera sido ayer. Nos conocimos un 15 de julio del 2024. Intercambiamos números y desde ahí empezamos a hablar.',
                'Desde el primer momento dije: es un hombre muy lindo y noble. ¿Ustedes creen en el amor a primera vista? Porque fue mi caso. Conforme íbamos hablando, más conexión sentía con mi esposo Rigo; era algo que nunca en mi vida había sentido. Mi corazón se sentía feliz, con una paz que jamás había sentido, porque estar con mi esposo es así: una paz maravillosa y una felicidad tan grande que siento desde que estoy a su lado.',
                '¿Quieren saber cómo me conquistó este apuesto hombre? De la manera más hermosa que se puedan imaginar. El mismo día que nos conocimos me preguntó cuáles eran mis flores favoritas, y al día siguiente me mandó un ramo hermoso, precioso, con la nota que decía: "NOMAS POR BONITA". Mi corazón se quería salir de la emoción y desde ahí dije: este hombre será mío, ¡porque será mío!',
                'Pasaban los días y más nos íbamos conociendo y más me enamoraba de él, de ese corazón tan hermoso que tiene y con la delicadeza que todos los días me trata. Fuera una fecha especial o no, se encargaba de hacerme feliz con flores y lo conseguía, porque nombre, me ponía bien feliz, mi amor.',
                'Había un detalle: él y yo no éramos del mismo estado; 192 kilómetros nos separaban, pero eso jamás fue impedimento para seguirnos conociendo. Pasaron un par de meses y me llenó de felicidad que vendría a verme, pero el mero día que nos veríamos pasó un imprevisto y no pudo llegar. Nos pusimos tristes, pero estábamos emocionados porque me dijo que la semana siguiente vendría a verme sí o sí.',
                'Y se llegó el gran día: el 7 de septiembre del 2024. Viniste a verme; verte llegar con un ramote, todo guapo y hermoso, uff, me enamoré muchísimo más de tu voz, tus ojos, tus abrazos, tus manos; todo me encantó de ti, esposo mío. Pasamos una tarde hermosa, me llevaste a ver mi película favorita y me pidió que fuera su novia con un ramo hermoso. Lo miré a los ojos y le dije que sí. Ambos nos pusimos muy felices y desde ahí nuestra historia de amor seguía creciendo.',
                'Mi esposo venía a verme cada mes y me hacía la más feliz. La pasábamos súper hermoso, contábamos los días ansiosos para volvernos a ver. Estando juntitos mi ahora esposo y yo, todo es hermoso; reímos demasiado, como cuando me llevó a pasar mi cumpleaños a Mazamitla porque sabía que era mi lugar favorito. Que nos equivocamos dónde tomaríamos el camión, jajaja, reímos demasiado, y que llegamos tarde a la reservación que nos asustamos porque pensamos que ya no la alcanzaríamos, jajaja, o cuando nos subimos al puente que tenía un chingo de miedo, jajaja, que nos mojamos machin porque llovió. Hiciste que mi cumpleaños dejara de ser un día cualquiera para convertirse en algo muy importante para mí.'
            ]
        }
    };

    const modal = document.getElementById('votoModal');
    const modalName = document.getElementById('votoModalName');
    const modalText = document.getElementById('votoModalText');
    const overlay = document.getElementById('votoOverlay');
    const closeBtn = document.getElementById('votoClose');

    function openModal(key) {
        const v = votos[key];
        modalName.textContent = v.name;
        modalText.innerHTML = v.paragraphs.map(p => `<p>${p}</p>`).join('');
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        document.querySelector('.voto-modal-scroll').scrollTop = 0;
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.btn-voto').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.voto));
    });

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
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
        window.open(`https://wa.me/5214778968079?text=${msg}`, '_blank');
    }
});
