body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    transition: background-color 0.3s, color 0.3s;
}

header {
    background-color: #1f1f1f;
    padding: 1em;
    text-align: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

#theme-toggle {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.2em;
}

#theme-icon {
    margin-right: 8px;
}

main {
    margin-top: 100px; /* Ajuste para evitar sobreposição com o header */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card {
    background-color: #1f1f1f;
    border: 1px solid #333;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card .front, .card .back {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    position: absolute;
    transition: transform 0.6s;
    padding: 20px;
    box-sizing: border-box;
}

.card .front {
    background-color: #333;
}

.card .back {
    background-color: #555;
    transform: rotateY(180deg);
}

.card.flipped .front {
    transform: rotateY(180deg);
}

.card.flipped .back {
    transform: rotateY(0deg);
}

footer {
    background-color: #1f1f1f;
    color: #ffffff;
    padding: 1em;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, color 0.3s;
}

body.light-mode {
    background-color: #ffffff;
    color: #000000;
}

body.light-mode header {
    background-color: #f0f0f0;
}

body.light-mode .card {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
}

body.light-mode .card .front {
    background-color: #ffffff;
    color: #000000;
}

body.light-mode .card .back {
    background-color: #e0e0e0;
    color: #000000;
}

body.light-mode footer {
    background-color: #f0f0f0;
    color: #000000;
}

