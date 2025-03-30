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

    Hoje é um dia tão especial, tão lindo, porque foi nesse dia que o mundo recebeu um presente precioso: você. Meu amor, feliz aniversário! Que alegria é poder estar ao seu lado, celebrando mais um ano da sua vida, da sua história, da sua luz que ilumina tudo ao seu redor.

Nesses 19 anos, você tem sido uma inspiração. Sua força, sua bondade, seu coração gigante são coisas que me encantam mais a cada dia. Eu sou tão grato por ter você na minha vida, por poder testemunhar o seu brilho, por poder ver de perto o quão incrível você é. Cada sorriso seu ilumina meu dia, cada palavra sua me aquece e me faz sentir que estou no lugar certo, ao lado da pessoa mais especial do mundo.

Eu me lembro de tantas coisas que me fazem amar você ainda mais. O jeito que seus olhos brilham quando você fala sobre algo que ama, a forma como sua risada é contagiante e como sua presença transforma qualquer dia comum em algo extraordinário. Eu amo o som da sua voz, a maneira como você me faz sentir seguro, como se nada pudesse me atingir enquanto estivermos juntos. Você é o meu porto seguro, minha paz, minha felicidade.

Meu amor, se eu pudesse, pegaria todas as estrelas do céu e colocaria em um potinho só para você, porque você merece tudo de mais bonito nesse mundo. Mas como não posso, eu prometo continuar te amando, te apoiando, te admirando e te lembrando todos os dias do quão maravilhosa você é. Eu prometo segurar sua mão nos dias difíceis e celebrar com você todas as suas conquistas. Eu quero estar ao seu lado, nos dias bons e ruins, compartilhando cada momento, construindo uma história linda com você.

Neste seu dia, desejo que cada momento seja repleto de felicidade, que você se sinta amada, especial e rodeada de boas energias. Que seus sonhos se tornem realidade, que seus passos sejam leves e que sua caminhada seja cheia de conquistas. Eu estarei sempre aqui, torcendo por você, segurando sua mão, te dando meu amor. Quero que você saiba que você nunca estará sozinha, porque meu amor por você é infinito e inabalável.

Você é meu motivo de sorrisos, minha melhor companhia, minha maior felicidade. Obrigado por ser exatamente como é. Obrigado por me permitir fazer parte da sua vida e da sua história. Eu te amo, minha princesa. Feliz 19 anos! Que seja um ciclo maravilhoso para você, cheio de amor, sucesso e momentos inesquecíveis.

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
    document.addEventListener('DOMContentLoaded', () => {
        const backgroundMusic = document.getElementById('backgroundMusic');
        const toggleMusicBtn = document.getElementById('toggleMusic');
        let isMusicPlaying = false;
    
        // Função para carregar e tocar a música
        function initializeAudio() {
            // Configurar volume inicial
            backgroundMusic.volume = 0.5;
            
            // Adicionar tratamento de erros
            backgroundMusic.addEventListener('error', (e) => {
                console.error('Erro ao carregar o áudio:', e);
                toggleMusicBtn.style.display = 'none'; // Esconde o botão se houver erro
            });
    
            // Garantir que o áudio possa ser tocado
            backgroundMusic.load();
        }
    
        // Função para alternar a música
        function toggleMusic() {
            if (isMusicPlaying) {
                backgroundMusic.pause();
                toggleMusicBtn.innerHTML = '<i class="fas fa-music"></i>';
                toggleMusicBtn.classList.remove('playing');
            } else {
                // Promessa para tocar o áudio
                const playPromise = backgroundMusic.play();
    
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            toggleMusicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                            toggleMusicBtn.classList.add('playing');
                        })
                        .catch(error => {
                            console.error('Erro ao tocar áudio:', error);
                        });
                }
            }
            isMusicPlaying = !isMusicPlaying;
        }
    
        // Event Listener para o botão de música
        toggleMusicBtn.addEventListener('click', toggleMusic);
    
        // Inicializar o áudio
        initializeAudio();
    
        // Tratamento para quando a página for fechada/mudada
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && isMusicPlaying) {
                backgroundMusic.pause();
                isMusicPlaying = false;
                toggleMusicBtn.innerHTML = '<i class="fas fa-music"></i>';
                toggleMusicBtn.classList.remove('playing');
            }
        });
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
