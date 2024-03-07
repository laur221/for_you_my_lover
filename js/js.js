function moveButton(event) {
    var button = event.target;
    var buffer = 20; // O margine de siguranță de 10px

    var maxPositionX = window.innerWidth - button.offsetWidth - buffer;
    var newPositionX = Math.floor(Math.random() * maxPositionX) + buffer;

    var maxPositionY = window.innerHeight - button.offsetHeight - buffer;
    var newPositionY = Math.floor(Math.random() * maxPositionY) + buffer;

    button.style.position = 'absolute';
    button.style.left = `${newPositionX}px`;
    button.style.top = `${newPositionY}px`;
}

document.getElementById('noBtn').addEventListener('click', moveButton);









/*function moveButton(event) {
    var button = event.target;
    // Asigură-te că butonul nu se mișcă în afara lățimii vizibile a ecranului
    var maxPositionX = window.innerWidth - button.offsetWidth;
    var newPositionX = Math.floor(Math.random() * maxPositionX);

    // Asigură-te că butonul nu se mișcă în afara înălțimii vizibile a ecranului
    var maxPositionY = window.innerHeight - button.offsetHeight;
    var newPositionY = Math.floor(Math.random() * maxPositionY);

    // Setează noua poziție a butonului
    button.style.position = 'absolute';
    button.style.left = `${newPositionX}px`;
    button.style.top = `${newPositionY}px`;
}

document.getElementById('noBtn').addEventListener('click', moveButton);




/*function moveButton(event) {
    var button = event.target;
    var newPositionX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    var newPositionY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    button.style.position = 'absolute';
    button.style.left = newPositionX + 'px';
    button.style.top = newPositionY + 'px';
}

document.getElementById('noBtn').addEventListener('click', moveButton);
*/