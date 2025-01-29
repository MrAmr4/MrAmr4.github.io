// script.js
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

// Fungsi untuk membuka menu
menuOpenButton.addEventListener('click', () => {
  navMenu.style.left = '0'; // Tampilkan menu
  body.classList.add('show-mobile-menu'); // Tambahkan efek blur jika diperlukan
});

// Fungsi untuk menutup menu
menuCloseButton.addEventListener('click', () => {
  navMenu.style.left = '-300px'; // Sembunyikan menu
  body.classList.remove('show-mobile-menu'); // Hilangkan efek blur jika diperlukan
});

let slideIndex = 0;

function addImage() {
    const slideImages = document.getElementById('slideImages');

    // Menambah gambar baru ke slide
    const newImage = document.createElement('img');
    newImage.src = "https://via.placeholder.com/600x400"; // Ganti dengan URL gambar yang sesuai
    newImage.alt = "Gambar Slide " + (slideIndex + 1);
    
    // Menambahkan gambar baru ke dalam slide container
    slideImages.appendChild(newImage);
    slideIndex++;

    // Sesuaikan ukuran gambar sesuai dengan container
    adjustSlideWidth();
}

function adjustSlideWidth() {
    const slideImages = document.getElementById('slideImages');
    const images = slideImages.getElementsByTagName('img');
    
    let totalWidth = 0;
    for (let i = 0; i < images.length; i++) {
        totalWidth += images[i].width;
    }
    
    slideImages.style.width = totalWidth + 'px';
}

// Menambahkan beberapa gambar awal
window.onload = function() {
    addImage();
    addImage();
    addImage();
};
