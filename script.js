const productGrid = document.getElementById("product-grid");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let compare = JSON.parse(localStorage.getItem("compare")) || [];

// Render the featured product section from whichever product has featured: true
const featuredSection = document.getElementById("featured-section");

if (featuredSection) {

    const featuredProduct = products.find(product => product.featured);

    if (featuredProduct) {

        featuredSection.innerHTML = `
            <div class="featured-text">

                <span class="featured-label">Produs Recomandat</span>

                <h2>${featuredProduct.name}</h2>

                <p>
                    ${featuredProduct.tagline || featuredProduct.description}
                </p>

                <a href="product.html?id=${featuredProduct.id}" class="featured-btn">
                    Cumpără acum →
                </a>

            </div>

            <div class="featured-image">
                <img src="${featuredProduct.image}" alt="${featuredProduct.name}" onerror="this.onerror=null;this.src='images/placeholder.svg';">
            </div>
        `;

    } else {
        featuredSection.style.display = "none";
    }

}

function displayProducts(productList) {

    productGrid.innerHTML = "";

    productList.forEach(product => {

        productGrid.innerHTML += `
           <div class="product-card" data-id="${product.id}">

             <button class="favorite-btn" data-id="${product.id}">
            ${favorites.includes(product.id) ? ICONS.heartFilled : ICONS.heartOutline}
            </button>

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/placeholder.svg';">
                </div>

                <p class="rating">${ICONS.star} ${product.rating}</p>

                <h3>${product.name}</h3>

                <p class="brand">de ${product.brand}</p>

               <div class="price-box">

    ${product.oldPrice
        ? `<span class="old-price">${formatPrice(product.oldPrice, product.currency)}</span>`
        : ""}

    <p class="price">${formatPrice(product.price, product.currency)}</p>

    ${product.oldPrice
        ? `<span class="discount-badge">
            Economisești ${Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}%
        </span>`
        : ""}

</div>

                <a href="product.html?id=${product.id}" class="view-btn">
                Vezi pe eMAG
                </a>

            </div>
        `;

    });

    document.querySelectorAll(".favorite-btn").forEach(button => {

   button.addEventListener("click", function (event) {

    // Stop this click from also triggering the card's own click-to-navigate handler below
    event.stopPropagation();

    const id = Number(button.dataset.id);

    if (favorites.includes(id)) {

        favorites = favorites.filter(fav => fav !== id);
        button.innerHTML = ICONS.heartOutline;

    } else {

        favorites.push(id);
        button.innerHTML = ICONS.heartFilled;

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

});

});

    // Make the whole card clickable (not just the "Vezi detalii" button),
    // since the heart button above already stops its own click from bubbling here.
    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("click", function () {

            const id = card.dataset.id;
            window.location.href = `product.html?id=${id}`;

        });

    });

}

displayProducts(products);

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const sortSelect = document.getElementById("sort-select");

searchBtn.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);

});

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);

});

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

       const selectedCategory = button.dataset.category;

if (selectedCategory === "All") {
    displayProducts(products);
} else {

    const filteredProducts = products.filter(product =>
        product.category === selectedCategory
    );

    displayProducts(filteredProducts);

}

    });

});

sortSelect.addEventListener("change", function () {

    console.log(sortSelect.value);  

    let sortedProducts = [...products];

    switch (sortSelect.value) {

        case "rating":
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;

        case "low":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;

        case "high":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;

        case "name":
            sortedProducts.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            break;

        default:
            sortedProducts = [...products];
    }

    displayProducts(sortedProducts);

});