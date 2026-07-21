const productGrid = document.getElementById("product-grid");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let compare = JSON.parse(localStorage.getItem("compare")) || [];

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
        ? `<span class="old-price">${product.oldPrice}</span>`
        : ""}

    <p class="price">${product.price}</p>

    ${product.oldPrice
        ? `<span class="discount-badge">
            Save ${Math.round(
                ((parseFloat(product.oldPrice.replace("$","")) -
                parseFloat(product.price.replace("$",""))) /
                parseFloat(product.oldPrice.replace("$",""))) * 100
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
            sortedProducts.sort((a, b) =>
                parseFloat(a.price.replace("$", "")) -
                parseFloat(b.price.replace("$", ""))
            );
            break;

        case "high":
            sortedProducts.sort((a, b) =>
                parseFloat(b.price.replace("$", "")) -
                parseFloat(a.price.replace("$", ""))
            );
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