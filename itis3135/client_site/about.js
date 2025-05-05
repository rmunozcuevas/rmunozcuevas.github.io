document.addEventListener("DOMContentLoaded", () => {
    const images = [
      "/images/book_one.png",
      "/images/book_two.png",
      "/images/book_three.png",
      "/images/book_four.png",
      "/images/book_five.png"
    ];
  
    let currentIndex = 0;
    const slideshow = document.getElementById("slideshow");
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      slideshow.src = images[currentIndex];
    });
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      slideshow.src = images[currentIndex];
    });
  });
  
  
  
  

  