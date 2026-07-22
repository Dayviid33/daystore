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

                <span class="featured-label">Featured Product</span>

                <h2>${featuredProduct.name}</h2>

                <p>
                    ${featuredProduct.tagline || featuredProduct.description}
                </p>

                <a href="product.html?id=${featuredProduct.id}" class="featured-btn">
                    Shop Now →
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
           <div class="product-card">

             <button class="favorite-btn" data-id="${product.id}">
            ${favorites.includes(product.id) ? "❤️" : "🤍"}
            </button>

                <span class="badge">Trending</span>

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/placeholder.svg';">
                </div>

                <p class="rating">⭐ ${product.rating}</p>

                <h3>${product.name}</h3>

                <p class="brand">by ${product.brand}</p>

               <div class="price-box">

    ${product.oldPrice
        ? `<span class="old-price">${formatPrice(product.oldPrice, product.currency)}</span>`
        : ""}

    <p class="price">${formatPrice(product.price, product.currency)}</p>

    ${product.oldPrice
        ? `<span class="discount-badge">
            Save ${Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}%
        </span>`
        : ""}

</div>

                <a href="product.html?id=${product.id}" class="view-btn">
                View Details
                </a>

            </div>
        `;

    });

    document.querySelectorAll(".favorite-btn").forEach(button => {

   button.addEventListener("click", function () {

    const id = Number(button.dataset.id);

    if (favorites.includes(id)) {

        favorites = favorites.filter(fav => fav !== id);
        button.textContent = "🤍";

    } else {

        favorites.push(id);
        button.textContent = "❤️";

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

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