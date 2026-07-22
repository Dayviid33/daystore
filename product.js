const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(product => product.id === id);

const productContainer = document.getElementById("product-container");

// Was missing before — this caused a ReferenceError and broke the whole page
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const specsHTML = product.specs
    ? Object.entries(product.specs)
        .map(([key, value]) => `
            <p><strong>${key}:</strong> ${value}</p>
        `)
        .join("")
    : "<p>No specifications available.</p>";

const prosHTML = (product.pros || [])
    .map(pro => `<li>✅ ${pro}</li>`)
    .join("");

const consHTML = (product.cons || [])
    .map(con => `<li>❌ ${con}</li>`)
    .join("");

const newPrice = product.price;

const oldPrice = product.oldPrice || null;

const discount = oldPrice
    ? Math.round(((oldPrice - newPrice) / oldPrice) * 100)
    : null;

productContainer.innerHTML = `
    <div class="product-page">
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/placeholder.svg';">

            ${product.oldPrice ? `
                <span class="sale-ribbon">
                    SALE
                </span>
            ` : ""}
        </div>

        <div class="product-info">

            <button class="favorite-btn" data-id="${product.id}">
                ${favorites.includes(product.id) ? "❤️" : "🤍"}
            </button>

            <span class="product-badge">
                ${product.badge}
            </span>

            <h1>${product.name}</h1>

            <p><strong>Brand:</strong> ${product.brand}</p>

            <p class="rating">
                ⭐⭐⭐⭐⭐ ${product.rating} <span style="color:#6b7280; font-weight:400;">(${product.reviews || 0} reviews)</span>
            </p>

            <div class="price-box">
                ${product.oldPrice
                    ? `<span class="old-price">${formatPrice(product.oldPrice, product.currency)}</span>`
                    : ""}
                <span class="price">${formatPrice(product.price, product.currency)}</span>
                ${discount ? `<span class="discount-badge">Save ${discount}%</span>` : ""}
            </div>

            <a href="${product.affiliateLink}"
               class="featured-btn"
               target="_blank"
               rel="sponsored noopener">
                Buy Now →
            </a>

            <p>${product.description}</p>

            <h3>Specifications</h3>
            <div class="specs">
                ${specsHTML}
            </div>

            <h3>✅ Pros</h3>
            <ul class="pros-list">
                ${prosHTML}
            </ul>

            <h3>❌ Cons</h3>
            <ul class="cons-list">
                ${consHTML}
            </ul>

        </div>
    </div>
`;

// Was missing before — the favorite button was rendered but did nothing on this page
const favoriteBtn = document.querySelector(".favorite-btn");

favoriteBtn.addEventListener("click", function () {

    const productId = Number(favoriteBtn.dataset.id);

    if (favorites.includes(productId)) {
        favorites = favorites.filter(fav => fav !== productId);
        favoriteBtn.textContent = "🤍";
    } else {
        favorites.push(productId);
        favoriteBtn.textContent = "❤️";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

});