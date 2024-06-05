document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('fullsizeImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    galleryItems.forEach(item => {

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
