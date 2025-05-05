const form = document.getElementById('interest-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const book = document.getElementById('book').value;
  const genre = document.getElementById('genre').value;

  nameSpan.innerText = `${firstName} ${lastName}`;
  bookSpan.innerText = book;
  genreSpan.innerText = genre;

  card.classList.remove('hidden'); // Show the card
});