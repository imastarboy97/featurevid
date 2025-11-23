// Handle overlay info buttons
const overlayButtons = document.querySelectorAll('.overlay-btn');
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeModal = document.getElementById('closeModal');

overlayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const videoSrc = btn.getAttribute('data-video');
        videoPlayer.src = videoSrc;
        modal.style.display = 'block';
        videoPlayer.play();
    });
});

closeModal.addEventListener('click', () => {
    videoPlayer.pause();
    videoPlayer.src = '';
    modal.style.display = 'none';
});