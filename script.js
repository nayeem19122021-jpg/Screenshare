const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const video = document.getElementById('video');

let stream;

startBtn.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        });

        video.srcObject = stream;

        startBtn.style.display = 'none';
        stopBtn.style.display = 'inline';
    } catch (error) {
        console.error('Error accessing screen share:', error);
        alert('Permission denied or screen sharing unavailable. Please allow access and try again.');
    }
});

stopBtn.addEventListener('click', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;

        stopBtn.style.display = 'none';
        startBtn.style.display = 'inline';
    }
});
