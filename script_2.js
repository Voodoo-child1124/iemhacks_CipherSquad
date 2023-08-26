const historyImages = document.querySelectorAll('.history-image img');
let currentImageIndex = 0;

function changeHistoryImage() {
    historyImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % historyImages.length;
    historyImages[currentImageIndex].classList.add('active');
}

setInterval(changeHistoryImage, 3000)
