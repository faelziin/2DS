document.addEventListener("DOMContentLoaded", () => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".slider");
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.style.opacity = i === index ? "1" : "0";
      });
    }
  
    document.getElementById("next-button").addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });
  
    document.getElementById("prev-button").addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });
  
    // Mostra a primeira imagem assim que carregar
    showImage(currentImageIndex);
  });
  