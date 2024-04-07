const navToggle = document.querySelector('.header-icons');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});
const searchicon = document.getElementById('search-icon');
const searchbox = document.querySelector('.search-box input');

searchIcon.addEventListener('click', () => {
  const searchTerm = searchBox.value.trim();
  if (searchTerm !== '') {
    // Perform search functionality here (e.g., filter products based on search term)
    console.log(`Searching for: ${searchTerm}`);
  } else {
    alert('Please enter a search term.');
  }
});
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
