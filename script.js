function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    const images = document.getElementsByClassName('art-project');
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    
    // Get the image source
    img.src = images[n - 1].getElementsByTagName("img")[0].src;
    
    // Get the title and description
    const title = images[n - 1].querySelector('.art-title').innerHTML;
    const description = images[n - 1].querySelector('.art-description').innerHTML;
    
    // Set the caption in the modal
    caption.innerHTML = `<strong>${title}</strong><br>${description}`;
}
