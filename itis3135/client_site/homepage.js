const interestForm = document.getElementById('interest-form');
const output = document.getElementById('form-output');

interestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const bookInterest = document.getElementById('book').value;
  const genre = document.getElementById('genre').value;

  // Update the output section
  output.innerHTML = `
    <h3>Your Submitted Information:</h3>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Book of Interest:</strong> ${bookInterest}</p>
    <p><strong>Preferred Genre:</strong> ${genre}</p>
  `;

  // Update the membership card
  document.getElementById('card-name').textContent = `${firstName} ${lastName}`;
  document.getElementById('card-book').textContent = bookInterest;
  document.getElementById('card-genre').textContent = genre;
});

    
    

  
