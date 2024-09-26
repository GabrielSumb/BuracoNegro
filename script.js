function flipCard(card) {
    card.classList.toggle('flipped');
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Claro';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Noturno';
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('nav#menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            document.querySelectorAll('.quiz-section').forEach(section => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'block';
            toggleMenu(); // Fechar o menu após clicar em um link
        }
    });
});

function navigateTo(sectionId) {
    document.querySelectorAll('.quiz-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
