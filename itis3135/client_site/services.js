
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
const sugggestionDisplay = document.getElementById("suggestion-display");

const GoodBooks = {
    Fiction: ["The Great Gatsby" , "To Kill a MockingBird","1984","Pride and Prejudice"] , 
    SciFi: ["Dune","Ender's Game","The Hunger Games","The Martian"] , 
    Mystery:["Gone Girl","The Hound of the Baskervilles","The Girl with the Dragon Tattoo","The Silent Patient"] , 
    History: ["Sapiens: A Brief History of Humankind","A People's History of the United States","The History of the Ancient World", "The Guns of August"]
}

suggestionButton.addEventListener('click', function() {
    const randomBook = GoodBooks[Math.floor(Math.random() * GoodBooks.length)];
    sugggestionDisplay.innerText = `How About Reading: ${randomBook}`;

});

