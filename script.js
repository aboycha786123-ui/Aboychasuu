// Basic JavaScript for the website
console.log('Website loaded!');

// Example: Add an event listener
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    header.addEventListener('click', function() {
        alert('Hello from JavaScript!');
    });
});