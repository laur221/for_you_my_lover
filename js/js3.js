document.getElementById('b4').addEventListener('click', function() {
    window.location.href = 'index5.html'; // Redirecționează către pagina index5.html dacă utilizatorul apasă pe butonul "1000%"
});

document.querySelectorAll('.custom-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var answer = button.textContent.trim(); // Obține textul butonului fără spații albe de la început și sfârșit

        if (answer !== '1000%') { // Verifică dacă răspunsul este diferit de "1000%"
            document.getElementById('resultMessage').innerText = 'Răspunsul nu este corect!'; // Afișează mesajul că răspunsul nu este corect
        }
    });
});
