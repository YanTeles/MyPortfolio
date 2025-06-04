// Translations
const translations = {
    pt: {
        home: 'Home',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato',
        journey: 'Minha Jornada',
        growth: {
            title: '🌱 Crescimento',
            text: '+1 Ano de evolução contínua com prática diária, cursos e desafios'
        },
        learning: {
            title: '🧠 Aprendizado',
            text: 'Domínio em HTML, CSS, JS, SQL, Java, Git e Github'
        },
        fundamentals: {
            title: '🛠️ Fundamentos',
            text: 'Base sólida em lógica de programação e resolução de problemas'
        },
        intro: '👋 Olá! Meu nome é Yan Caliel Pereira Teles, tenho 20 anos e sou estudante de Engenharia de Software pela Unileste. Sou apaixonado por tecnologia e estou sempre em busca de novos desafios que me permitam aprender, crescer e contribuir com soluções criativas e eficientes. Tenho perfil proativo, gosto de trabalhar em equipe e estou construindo minha trajetória como desenvolvedor com foco em boas práticas, aprendizado contínuo e impacto positivo através do código.'
    },
    en: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        journey: 'My Journey',
        growth: {
            title: '🌱 Growth',
            text: '+1 Year of continuous evolution with daily practice, courses and challenges'
        },
        learning: {
            title: '🧠 Learning',
            text: 'Proficiency in HTML, CSS, JS, SQL, Java, Git and Github'
        },
        fundamentals: {
            title: '🛠️ Fundamentals',
            text: 'Solid foundation in programming logic and problem solving'
        },
        intro: '👋 Hi! My name is Yan Caliel Pereira Teles, I\'m 20 years old and I\'m a Software Engineering student at Unileste. I\'m passionate about technology and I\'m always looking for new challenges that allow me to learn, grow and contribute with creative and efficient solutions. I have a proactive profile, I enjoy working in teams and I\'m building my path as a developer focusing on best practices, continuous learning and positive impact through code.'
    }
};

// Theme handling
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Initialize Lottie animation
let themeAnimation = null;

function initThemeAnimation() {
    themeAnimation = bodymovin.loadAnimation({
        container: document.getElementById('theme-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../animations/animacao.json'
    });
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = root.classList.contains('light-theme') ? 'dark' : 'light';
    
    // Play animation
    if (themeAnimation) {
        if (currentTheme === 'dark') {
            themeAnimation.setDirection(-1);
        } else {
            themeAnimation.setDirection(1);
        }
        themeAnimation.play();
    }
    
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
});

function setTheme(theme) {
    if (theme === 'light') {
        root.classList.add('light-theme');
    } else {
        root.classList.remove('light-theme');
    }
}

// Initialize theme animation when the page loads
document.addEventListener('DOMContentLoaded', initThemeAnimation);

// Language handling
const langToggle = document.getElementById('langToggle');
const langText = document.querySelector('.lang-text');

// Load saved language
const savedLang = localStorage.getItem('lang') || 'pt';
setLanguage(savedLang);

langToggle.addEventListener('click', () => {
    const currentLang = langText.textContent.toLowerCase() === 'pt' ? 'en' : 'pt';
    setLanguage(currentLang);
    localStorage.setItem('lang', currentLang);
});

function setLanguage(lang) {
    langText.textContent = lang.toUpperCase();
    
    // Update menu items
    document.querySelectorAll('.menu h2').forEach((item, index) => {
        const keys = ['home', 'about', 'skills', 'projects', 'contact'];
        const text = translations[lang][keys[index]];
        item.innerHTML = item.innerHTML.replace(/>([^<]+)$/, `>${text}`);
    });

    // Update journey section
    document.querySelector('.info-section h2').textContent = translations[lang].journey;

    // Update info cards
    const cards = document.querySelectorAll('.info-card');
    cards[0].querySelector('h3').textContent = translations[lang].growth.title;
    cards[0].querySelector('p').textContent = translations[lang].growth.text;
    cards[1].querySelector('h3').textContent = translations[lang].learning.title;
    cards[1].querySelector('p').textContent = translations[lang].learning.text;
    cards[2].querySelector('h3').textContent = translations[lang].fundamentals.title;
    cards[2].querySelector('p').textContent = translations[lang].fundamentals.text;

    // Update intro text
    document.querySelector('.left-content p').textContent = translations[lang].intro;
}

// Smooth scroll for About link
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('.menu h2:nth-child(2)'); // Seleciona o link "About"
    
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});
