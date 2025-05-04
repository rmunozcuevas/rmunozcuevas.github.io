
const form = document.getElementById('vote-form');
const genreSelect = document.getElementById('genre');


const resultMsg = document.createElement('p');


form.addEventListener('submit', function (e) {
    e.preventDefault();  


    const selectedGenre = genreSelect.value;


    if (selectedGenre === "") {
        alert("Please select a genre before submitting!");
    } else {

        resultMsg.innerText = `Thank you for voting for ${selectedGenre}!`;
        document.body.appendChild(resultMsg); 

    }
});
const suggestionButton = document.getElementById("suggestion-button");
const suggestionDisplay = document.getElementById("suggestion-display");


const GoodBooks = {
    Fiction: ["The Great Gatsby" , "To Kill a MockingBird","1984","Pride and Prejudice"] , 
    SciFi: ["Dune","Ender's Game","The Hunger Games","The Martian"] , 
    Mystery:["Gone Girl","The Hound of the Baskervilles","The Girl with the Dragon Tattoo","The Silent Patient"] , 
    History: ["Sapiens: A Brief History of Humankind","A People's History of the United States","The History of the Ancient World", "The Guns of August"]
}

suggestionButton.addEventListener('click', function() {

    const genres = Object.keys(GoodBooks);

    const randomGenre = genres[Math.floor(Math.random() * genres.length)];

    const randomBook = GoodBooks[randomGenre][Math.floor(Math.random() * GoodBooks[randomGenre].length)];
    

    sugggestionDisplay.innerText = `How About Reading: ${randomBook}`;
});



// JS for AboutPage
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Change image every 3 seconds
  setTimeout(showSlides, 3000);
}

// Start slideshow
showSlides();




