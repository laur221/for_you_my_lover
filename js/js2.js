document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('verifyBtn').addEventListener('click', function() {
        checkAnswer();
    });
});

function checkAnswer() {
    var answer = document.getElementById('answer').value.trim().toLowerCase(); 

    if (answer === 'iubitul meu') {
        window.location.href = 'index4.html'; // Redirecționează către pagina index4.html
    } else {
        document.getElementById('resultMessage').innerText = 'Răspuns greșit!'; // Afișează mesajul "Răspuns greșit!"
    }
}
