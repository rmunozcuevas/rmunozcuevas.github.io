// Select the form and genre dropdown
const form = document.getElementById('vote-form');
const genreSelect = document.getElementById('genre');

// Create a result message element
const resultMsg = document.createElement('p');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the default form submission behavior

    // Get the selected genre value
    const selectedGenre = genreSelect.value;

    // Check if a genre is selected
    if (selectedGenre === "") {
        alert("Please select a genre before submitting!");
    } else {
        // Create and display result message
        resultMsg.innerText = `Thank you for voting for ${selectedGenre}!`;
        document.body.appendChild(resultMsg); // Append the message to the page

        // Optionally, store the result in localStorage or send it to a server
        localStorage.setItem('votedGenre', selectedGenre);  // Save to localStorage
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

