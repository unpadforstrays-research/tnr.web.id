const sidebar = document.getElementById('aside');
const tutup = document.getElementById('tutup');
const toggleButton = document.getElementById('tombol');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('translate-x-full');
});

function hide() {
    sidebar.classList.add('translate-x-full')
}

tutup.addEventListener("click", () => {
     sidebar.classList.toggle('translate-x-full')
});

function bagi() {
    navigator.share({
    title: document.title,
    text: "Kunjungi TNR Now, situs jadwal steril terjangkau di Bandung Raya.",
    url: window.location.href
});
};





