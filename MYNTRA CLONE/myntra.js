document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search');
    const profileIcon = document.querySelector('.profile');
    const wishlistIcon = document.querySelector('.wishlist');
    const bagIcon = document.querySelector('.bag');

    // Example event listeners
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value;
            // Perform search logic or redirect to search results page
            console.log('Searching for:', searchTerm);
        }
    });

    profileIcon.addEventListener('click', function () {
        // Handle profile icon click event
        console.log('Profile icon clicked');
    });

    wishlistIcon.addEventListener('click', function () {
        // Handle wishlist icon click event
        console.log('Wishlist icon clicked');
    });

    bagIcon.addEventListener('click', function () {
        // Handle bag icon click event
        console.log('Bag icon clicked');
    });

    // You can add more event listeners or functionality as needed
});
