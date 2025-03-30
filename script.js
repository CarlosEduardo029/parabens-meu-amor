document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Elementos do DOM
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContainer = document.querySelector('.main-container');
    const gift = document.getElementById('gift');
    const letterSection = document.getElementById('letterSection');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const toggleMusicBtn = document.getElementById('toggleMusic');

    // Texto da carta - sua mensagem romântica
    const loveMessage = `Meu amor mais precioso,

    Hoje, enquanto escrevo esta carta, meu coração transborda de amor e gratidão por ter você em minha vida. Cada momento ao seu lado é como uma página de um conto de fadas que se torna realidade.

    Você é a primeira pessoa em quem penso quando acordo e a última antes de dormir. Seu sorriso ilumina meus dias mais escuros, e seu amor me dá forças para enfrentar qualquer desafio.

    Sabe o que mais amo em você? A forma como seus olhos brilham quando está feliz, como sua risada enche o ambiente de alegria, e como seu abraço tem o poder de fazer todos os problemas desaparecerem.

    Você não é apenas minha namorada, é minha melhor amiga, minha confidente, minha parceira de aventuras e sonhos. Com você, aprendi o verdadeiro significado do amor - aquele que é paciente, gentil, que compreende, que perdoa, que cresce a cada dia.

    Quero construir um futuro ao seu lado, compartilhar milhares de momentos especiais, criar memórias inesquecíveis e envelhecer junto com você. Porque não há lugar no mundo em que eu me sinta mais em casa do que ao seu lado.

    Você é meu presente mais precioso, meu amor mais puro, minha felicidade mais verdadeira. 

    Te amo mais que tudo nessa vida! ❤️`;

    // Função para inicializar o site
    const initializeSite = () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContainer.classList.remove('hidden');
                createFloatingHearts();
            }, 500);
        }, 2000);
    };

    // Função para criar corações flutuantes
    const createFloatingHearts = () => {
        const container = document.querySelector('.floating-hearts-container');
        const colors = [
            'rgba(138, 43, 226, 0.4)',  // purple
            'rgba(255, 105, 180, 0.4)', // pink
            'rgba(147, 112, 219, 0.4)'  // royal purple
        ];

        const createHeart = () => {
            const heart = document.createElement('i');
            heart.classList.add('fas', 'fa-heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.position = 'fixed';
            heart.style.top = '-20px';
            heart.style.animation = `float ${heart.style.animationDuration} ease-in forwards`;
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        };

        setInterval(createHeart, 300);
    };

    // Função para inicializar a animação de digitação
    const initializeTyped = () => {
        new Typed('#typedText', {
            strings: [loveMessage],
            typeSpeed: 40,
            backSpeed: 0,
            cursorChar: '❤️',
            showCursor: true,
            onComplete: (self) => {
                document.querySelector('.letter-footer').style.opacity = '1';
            }
        });
    };

    // Evento de clique no presente
    gift.addEventListener('click', () => {
        gift.style.transform = 'rotateX(180deg) scale(0.5)';
        setTimeout(() => {
            document.getElementById('giftSection').style.display = 'none';
            letterSection.classList.remove('hidden');
            initializeTyped();
        }, 600);
    });

    // Controle de música
    let isMusicPlaying = false;
    toggleMusicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            toggleMusicBtn.innerHTML = '<i class="fas fa-music"></i>';
            toggleMusicBtn.classList.remove('playing');
        } else {
            backgroundMusic.play();
            toggleMusicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            toggleMusicBtn.classList.add('playing');
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Adicionar efeito de hover nos corações do rodapé
    document.querySelectorAll('.footer-decoration i').forEach((heart, index) => {
        heart.style.animationDelay = `${index * 0.2}s`;
    });

    // Inicializar o site
    initializeSite();

    // Animação suave ao scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Adicionar efeito de parallax nos corações flutuantes
    window.addEventListener('mousemove', (e) => {
        const hearts = document.querySelectorAll('.floating-hearts-container i');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        hearts.forEach(heart => {
            const speed = parseFloat(heart.style.fontSize) / 20;
            heart.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });
});