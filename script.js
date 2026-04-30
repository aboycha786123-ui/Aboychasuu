// Basic JavaScript for the website
console.log('Website loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const homeTab = document.getElementById('homeTab');
    const galleryTab = document.getElementById('galleryTab');
    const homeSection = document.getElementById('homeSection');
    const gallerySection = document.getElementById('gallerySection');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const galleryImages = document.querySelectorAll('.gallery-img');

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

    function openModal(src, alt) {
        modalImage.src = src;
        modalImage.alt = alt;
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    homeTab.addEventListener('click', function() {
        showSection('home');
    });

    galleryTab.addEventListener('click', function() {
        showSection('gallery');
    });

    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});