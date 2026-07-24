const favoritesGrid = document.getElementById("favorites-grid");

// Get favorite IDs from localStorage
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Find the matching products
const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
);

const title = document.querySelector(".products h2");

title.textContent = `Produsele Tale Favorite (${favoriteProducts.length})`;

// If there are no favorites
if (favoriteProducts.length === 0) {

   favoritesGrid.innerHTML = `
<div class="empty-state">

    <h2>Niciun favorit încă</h2>

    <p>
        Salvează produsele care îți plac și vor apărea aici.
    </p>

    <a href="index.html" class="view-btn">
        Explorează Produse
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
                Economisești ${Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) * 100
                )}%
            </span>`
            : "";

        favoritesGrid.innerHTML += `
            <div class="product-card" data-id="${product.id}">

                <button class="favorite-btn remove-btn" data-id="${product.id}" title="Elimină din favorite">
                    ${ICONS.heartFilled}
                </button>

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/placeholder.svg';">
                </div>

                <p class="rating">${ICONS.star} ${product.rating}</p>

                <h3>${product.name}</h3>

                <p class="brand">de ${product.brand}</p>

                <div class="price-box">
                    ${oldPrice}
                    <span class="price">${formatPrice(product.price, product.currency)}</span>
                    ${discountBadge}
                </div>

                <a href="product.html?id=${product.id}" class="view-btn">
                    Vezi oferta
                </a>

            </div>
            `;

    });

    document.querySelectorAll(".remove-btn").forEach(button => {

    button.addEventListener("click", function (event) {

        // Stop this click from also triggering the card's own click-to-navigate handler below
        event.stopPropagation();

        const id = Number(button.dataset.id);

        const updatedFavorites = favorites.filter(fav => fav !== id);

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        location.reload();

    });

});

    // Make the whole card clickable (not just the "Vezi oferta" button),
    // since the remove button above already stops its own click from bubbling here.
    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("click", function () {

            const id = card.dataset.id;
            window.location.href = `product.html?id=${id}`;

        });

    });

}