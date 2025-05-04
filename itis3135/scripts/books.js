// Get the form and membership card elements
const form = document.getElementById('interest-form');
const membershipCard = document.getElementById('membership-card');
const cardName = document.getElementById('card-name');
const cardBook = document.getElementById('card-book');
const cardGenre = document.getElementById('card-genre');

// Handle form submission
form.addEventListener('submit', function (event) {
  // Prevent the form from submitting the traditional way (page reload)
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const bookInterest = document.getElementById('book').value;
  const genre = document.getElementById('genre').value;

  // Fill membership card with the entered information
  cardName.textContent = `${firstName} ${lastName}`;
  cardBook.textContent = bookInterest;
  cardGenre.textContent = genre;

  // Display the membership card
  membershipCard.classList.remove('hidden');
});

// Close the membership card
function closeCard() {
  // Hide the membership card
  membershipCard.classList.add('hidden');
  // Reset form fields
  form.reset();
}
