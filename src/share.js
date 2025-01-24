document.getElementById('shareButton').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: "Kunjungi TNR Now, situs jadwal steril terjangkau di Bandung Raya.",
            url: window.location.href
        })
        .then(() => {
            console.log('Share successful!');
        })
        .catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Sharing is not supported on this browser. Share manually by copying link in address bar');
    }
});