// Search functionality

const searchInput = document.querySelector(".nav-right input");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("keyup", function () {

    const searchText = searchInput.value.toLowerCase();

    movieCards.forEach(function (card) {

        const movieName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (movieName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// Watch Now button

const watchButton = document.querySelector(".watch-button");

watchButton.addEventListener("click", function () {

    alert("Welcome to Prime Video! Start watching your favorite content.");

});


// Sign In button

const signInButton = document.querySelector(".nav-right button");

signInButton.addEventListener("click", function () {

    alert("Sign In functionality will be added later.");

});
