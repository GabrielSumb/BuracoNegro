const flashcards = [
    {
        question: "Qual é o maior órgão do corpo humano?",
        answer: "A pele é o maior órgão do corpo humano."
    },
    {
        question: "Quantos ossos possui o esqueleto humano adulto?",
        answer: "O esqueleto humano adulto possui 206 ossos."
    },
    {
        question: "Qual é a função dos glóbulos vermelhos no sangue?",
        answer: "Os glóbulos vermelhos transportam oxigênio dos pulmões para o resto do corpo."
    },
    {
        question: "Qual é o órgão responsável pela filtração do sangue?",
        answer: "Os rins são responsáveis pela filtração do sangue."
    },
    {
        question: "Qual parte do cérebro é responsável pelo equilíbrio e coordenação?",
        answer: "O cerebelo é responsável pelo equilíbrio e coordenação."
    },
    {
        question: "Quantos litros de sangue o coração bombeia aproximadamente por dia?",
        answer: "O coração bombeia cerca de 7.570 litros de sangue por dia."
    },
    {
        question: "Qual é a molécula responsável pelo transporte de oxigênio no sangue?",
        answer: "A hemoglobina é a molécula responsável pelo transporte de oxigênio no sangue."
    },
    {
        question: "Qual é a principal função do fígado?",
        answer: "O fígado desintoxica o sangue, produz bile e armazena glicose."
    },
    {
        question: "Quantos dentes o adulto normalmente possui?",
        answer: "Um adulto normalmente possui 32 dentes."
    },
    {
        question: "Qual é a maior glândula do corpo humano?",
        answer: "O fígado é a maior glândula do corpo humano."
    }
];

let currentFlashcardIndex = 0;

// Função para exibir o flashcard
function showFlashcard(index) {
    const flashcard = flashcards[index];
    document.getElementById('question').textContent = flashcard.question;
    document.getElementById('answer').textContent = ""; // Limpa a resposta ao mostrar a nova pergunta

    // Atualiza o contador
    document.getElementById('counter').textContent = `Flashcard ${index + 1} de ${flashcards.length}`;

    // Rotaciona o card de volta
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.remove('flipped');
}

// Navegação entre os flashcards
document.getElementById('prev').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex > 0) ? currentFlashcardIndex - 1 : flashcards.length - 1;
    showFlashcard(currentFlashcardIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex < flashcards.length - 1) ? currentFlashcardIndex + 1 : 0;
    showFlashcard(currentFlashcardIndex);
});

// Função para mudar o tema
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    // Atualiza o ícone do botão de tema
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = "☀️ Mudar Tema";
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = "🌙 Mudar Tema";
        localStorage.setItem('theme', 'dark');
    }
}

// Evento para o botão de mudança de tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Evento para virar o flashcard
document.getElementById('flip').addEventListener('click', () => {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');

    const flashcardData = flashcards[currentFlashcardIndex];
    if (flashcard.classList.contains('flipped')) {
        document.getElementById('answer').textContent = flashcardData.answer;
    } else {
        document.getElementById('answer').textContent = "";
    }
});

// Inicializa o primeiro flashcard
showFlashcard(currentFlashcardIndex);

// Aplica a preferência de tema armazenada
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('theme-toggle').textContent = "☀️ Mudar Tema";
    } else {
        document.getElementById('theme-toggle').textContent = "🌙 Mudar Tema";
    }
});
        
