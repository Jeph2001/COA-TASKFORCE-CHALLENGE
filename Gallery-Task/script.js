document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const country = item.getAttribute('data-country');
        const overlay = item.querySelector('.overlay');
        const countryElem = document.createElement('p');
        countryElem.textContent = country;
        overlay.appendChild(countryElem);
    });
});
