const form = document.getElementById('vote-form');
const genreSelect = document.getElementById('genre');

// Create and insert the result message element just once
const resultMsg = document.createElement('p');
resultMsg.id = 'vote-result';
form.appendChild(resultMsg); // This puts it under the form neatly

form.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevents the form from submitting

    const selectedGenre = genreSelect.value;

    if (selectedGenre === "") {
        alert("Please select a genre before submitting!");
    } else {
        const messages = [
            `Thank you for voting for ${selectedGenre}! Your choice will be added into the consideration of genre of the week.`,
            `Your genre: ${selectedGenre} was chosen as genre of the week!`
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        resultMsg.innerText = randomMessage;
    }
});

const suggestionButton = document.getElementById('suggestionButton');
const suggestionDisplay = document.getElementById('suggestionDisplay');



const GoodBooks = {
    Fiction: ["The Great Gatsby" , "To Kill a MockingBird","1984","Pride and Prejudice"] , 
    SciFi: ["Dune","Ender's Game","The Hunger Games","The Martian"] , 
    Mystery:["Gone Girl","The Hound of the Baskervilles","The Girl with the Dragon Tattoo","The Silent Patient"] , 
    History: ["Sapiens: A Brief History of Humankind","A People's History of the United States","The History of the Ancient World", "The Guns of August"]
}

suggestionButton.addEventListener('click', function () {
    const genres = Object.keys(GoodBooks);
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const booksInGenre = GoodBooks[randomGenre];
    const randomBook = booksInGenre[Math.floor(Math.random() * booksInGenre.length)];

    suggestionDisplay.innerText = `How about reading: "${randomBook}" from the ${randomGenre} genre?`;
});





// 
const card = document.getElementById('membership-card');
const nameSpan = document.getElementById('card-name');
const bookSpan = document.getElementById('card-book');
const genreSpan = document.getElementById('card-genre');





