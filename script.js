const productGrid = document.getElementById("product-grid");

function displayProducts(productList) {

    productGrid.innerHTML = "";

    productList.forEach(product => {

        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="product.html?id=${product.id}" class="view-btn">View Deal</a>
            </div>
        `;

    });

}

displayProducts(products);

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

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