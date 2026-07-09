const favoritesGrid = document.getElementById("favorites-grid");

// Get favorite IDs from localStorage
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Find the matching products
const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
);

// If there are no favorites
if (favoriteProducts.length === 0) {

    favoritesGrid.innerHTML = `
        <h2>No favorite products yet ❤️</h2>
    `;

} else {

    favoriteProducts.forEach(product => {

        favoritesGrid.innerHTML += `
            <div class="product-card">

            <div class="card-actions">
                <button class="remove-btn" data-id="${product.id}">
                    Remove ❤️
                </button>

                <a href="product.html?id=${product.id}" class="view-btn">
                    View Deal
                </a>
            </div>

            <img src="${product.image}" alt="${product.name}">

            <p class="rating">⭐ ${product.rating}</p>

            <h3>${product.name}</h3>

            <p class="brand">by ${product.brand}</p>

            <p class="price">${product.price}</p>

            <a href="product.html?id=${product.id}" class="view-btn">
                View Deal
            </a>

            </div>
            `;  

    });

    document.querySelectorAll(".remove-btn").forEach(button => {

    button.addEventListener("click", function () {

        const id = Number(button.dataset.id);

        const updatedFavorites = favorites.filter(fav => fav !== id);

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        location.reload();

    });

});

}