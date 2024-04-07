// Toggle Navigation
const navToggle = document.querySelector('.header-icons');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});

// Search Bar Functionality
const searchIcon = document.getElementById('search-icon');
const searchBox = document.querySelector('.search-box input');

searchIcon.addEventListener('click', () => {
  const searchTerm = searchBox.value.trim();
  if (searchTerm !== '') {
    // Perform search functionality here (e.g., filter products based on search term)
    console.log(`Searching for: ${searchTerm}`);
  } else {
    alert('Please enter a search term.');
  }
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.content a');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement.parentElement.querySelector('h3').textContent;
    const price = button.parentElement.querySelector('span').textContent;
    // Add the product to the cart (you can create a cart object or array to store items)
    console.log(`Added ${product} to cart for ${price}`);
  });
});

