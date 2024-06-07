document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const thumbnailItems = document.querySelectorAll('.thumbnail-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('fullsizeImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

   

    thumbnailItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    galleryItems.forEach(item => {
        const country = item.getAttribute('data-country');
        const overlay = item.querySelector('.overlay');
        const countryElem = document.createElement('p');
        countryElem.textContent = country;
        overlay.appendChild(countryElem);

        item.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = item.getAttribute('image-fullsize');
            captionText.innerHTML = `${item.querySelector('h2').textContent} - ${country}`;
        });
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});
