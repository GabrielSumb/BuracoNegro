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
