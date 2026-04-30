// Basic JavaScript for the website
console.log('Website loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const homeTab = document.getElementById('homeTab');
    const galleryTab = document.getElementById('galleryTab');
    const homeSection = document.getElementById('homeSection');
    const gallerySection = document.getElementById('gallerySection');

    function showSection(section) {
        homeSection.classList.remove('active');
        gallerySection.classList.remove('active');
        homeTab.classList.remove('active');
        galleryTab.classList.remove('active');

        if (section === 'gallery') {
            gallerySection.classList.add('active');
            galleryTab.classList.add('active');
        } else {
            homeSection.classList.add('active');
            homeTab.classList.add('active');
        }
    }

    homeTab.addEventListener('click', function() {
        showSection('home');
    });

    galleryTab.addEventListener('click', function() {
        showSection('gallery');
    });
});