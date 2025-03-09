window.onload = function () {
    alert('Here is something beautiful for you.');
};

const messages = ["Tannuuu Madam jee..", "Cutie jee", "Pyaari madam jee", "Sweetheart", "Angel", "Lovely Madam"];
const flowerImages = [
    './media/flower.png',
    './media/flower_2.png',
    './media/flower_3.png',
    './media/flower_4.png'
];

function getRandomSize() {
    const screenSize = window.innerWidth;
    if (screenSize > 1200) return [50, 70, 90, 110, 130];
    if (screenSize > 768) return [40, 60, 80, 100];
    return [30, 50, 70];
}

function startBlooming() {
    setInterval(showFlowers, 300);
}

function showFlowers() {
    let flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    flower.style.left = Math.random() * (window.innerWidth - 100) + 'px';

    let img = document.createElement('img');
    img.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    let sizeOptions = getRandomSize();
    let size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
    img.style.width = size + 'px';
    img.style.height = size + 'px';
    img.style.transform = 'scale(0)';
    flower.appendChild(img);
    document.body.appendChild(flower);

    setTimeout(() => {
        img.style.transform = 'scale(1)';
    }, 100);

    setTimeout(() => {
        flower.style.opacity = 0;
        setTimeout(() => document.body.removeChild(flower), 3000);
    }, 4000);

    let text = document.createElement('div');
    text.className = 'text';
    text.innerText = messages[Math.floor(Math.random() * messages.length)];
    text.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    text.style.left = Math.random() * (window.innerWidth - 150) + 'px';
    document.body.appendChild(text);

    setTimeout(() => {
        text.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        text.style.opacity = 0;
        setTimeout(() => document.body.removeChild(text), 3000);
    }, 4000);
}
