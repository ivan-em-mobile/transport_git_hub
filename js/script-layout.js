// ===========================================
// Lógica para alternar Modo Escuro
// ===========================================

// Note que o seu HTML usa 'dark-btn', então mantemos 'themeToggle'
const themeToggle = document.getElementById('themeToggle'); 
const body = document.body;
const themeKey = 'themePreference';

/**
 * Define o tema (claro ou escuro) e atualiza o ícone do botão.
 * @param {string} theme - 'dark' ou 'light'
 */
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        // Símbolo de lua
        themeToggle.innerHTML = '&#9790;';
    } else {
        body.classList.remove('dark-mode');
        // Símbolo de sol (&#9788;) - Note que no seu HTML usa 🌙, vou usar o símbolo de sol para alternar
        themeToggle.innerHTML = '&#9788;'; 
    }
    // Salva a preferência
    localStorage.setItem(themeKey, theme);
}

/**
 * Inicializa o tema ao carregar a página.
 */
function initializeTheme() {
    // Verifica se o botão de toggle existe antes de prosseguir
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem(themeKey);

    if (savedTheme) {
        // 1. Prioridade: Preferência salva
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 2. Segunda prioridade: Preferência do sistema operacional
        setTheme('dark');
    } else {
        // 3. Padrão: Modo claro
        setTheme('light');
    }
}

// Ouvinte de evento no botão para alternar o tema
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    // Inicializa o tema quando a página carrega
    initializeTheme();
}


// ===========================================
// SEU CÓDIGO JS ORIGINAL
// ===========================================

// Botões "Comprar"
const botoesCompra = document.querySelectorAll(".produto-card button");

botoesCompra.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita clicar no card junto
        alert("Produto adicionado ao carrinho!");
    });
});

// Clique no card inteiro
const cards = document.querySelectorAll(".produto-card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        console.log("Você clicou no produto:", card.querySelector("h3").innerText);
    });
});