document.addEventListener("DOMContentLoaded", function(event) {
    var button = document.querySelector('.button');
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    
    // Numărul de stele pe care doriți să le afișați
    var numStars = 5;
    
    // Parcurgeți și creați stele aleatorii
    for (var i = 0; i < numStars; i++) {
      var star = document.createElement('span');
      star.className = 'star';
      star.style.position = 'absolute';
      star.style.left = Math.random() * buttonWidth + 'px';
      star.style.top = Math.random() * buttonHeight + 'px';
      button.appendChild(star);
    }
  });
  