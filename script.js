document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.sliding-images img');
    let index = 0;

    function showImage(n) {
        images.forEach(image => image.style.opacity = 0); // Hide all images
        images[n].style.opacity = 1; // Show the selected image
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    showImage(index);
    setInterval(nextImage, 3000); // Change image every 3 seconds
});
