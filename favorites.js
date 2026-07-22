const favoritesGrid = document.getElementById("favorites-grid");

// Get favorite IDs from localStorage
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Find the matching products
const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
);

const title = document.querySelector(".products h2");

title.textContent = `Your Favorites (${favoriteProducts.length})`;

// If there are no favorites
if (favoriteProducts.length === 0) {

   favoritesGrid.innerHTML = `
<div class="empty-state">

    <h2>No favorites yet</h2>

    <p>
        Save products you love and they'll appear here.
    </p>

    <a href="index.html" class="view-btn">
        Browse Products
    </a>

</div>
`;

} else {

    favoriteProducts.forEach(product => {

        const oldPrice = product.oldPrice
            ? `<span class="old-price">${formatPrice(product.oldPrice, product.currency)}</span>`
            : "";

        const discountBadge = product.oldPrice
            ? `<span class="discount-badge">
                Save ${Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) * 100
                )}%
            </span>`
            : "";

        favoritesGrid.innerHTML += `
            <div class="product-card">

                <button class="favorite-btn remove-btn" data-id="${product.id}" title="Remove from favorites">
                    ❤️
                </button>

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/placeholder.svg';">
                </div>

                <p class="rating">⭐ ${product.rating}</p>

                <h3>${product.name}</h3>

                <p class="brand">by ${product.brand}</p>

                <div class="price-box">
                    ${oldPrice}
                    <span class="price">${formatPrice(product.price, product.currency)}</span>
                    ${discountBadge}
                </div>

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