const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(product => product.id === id);

const productContainer = document.getElementById("product-container");

// Set a unique title + meta description per product so each page is
// distinguishable in search results and browser tabs/history, instead
// of every product page showing the same generic "Product" title.
if (product) {

    document.title = `${product.name} - DayStore`;

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            `${product.name} de ${product.brand} - ${product.description}`
        );
    }

}

// Was missing before — this caused a ReferenceError and broke the whole page
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const specsHTML = product.specs
    ? Object.entries(product.specs)
        .map(([key, value]) => `
            <p><strong>${key}:</strong> ${value}</p>
        `)
        .join("")
    : "<p>Nu sunt disponibile specificații.</p>";

const prosHTML = (product.pros || [])
    .map(pro => `<li>${pro}</li>`)
    .join("");

const consHTML = (product.cons || [])
    .map(con => `<li>${con}</li>`)
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
                    REDUCERE
                </span>
            ` : ""}
        </div>

        <div class="product-info">

            <button class="favorite-btn" data-id="${product.id}">
                ${favorites.includes(product.id) ? ICONS.heartFilled : ICONS.heartOutline}
            </button>

            <span class="product-badge">
                ${product.badge}
            </span>

            <h1>${product.name}</h1>

            <p><strong>Marcă:</strong> ${product.brand}</p>

            <p class="rating">
                ${ICONS.star.repeat(5)} ${product.rating} <span style="color:#6b7280; font-weight:400;">(${product.reviews || 0} recenzii)</span>
            </p>

            <div class="price-box">
                ${product.oldPrice
                    ? `<span class="old-price">${formatPrice(product.oldPrice, product.currency)}</span>`
                    : ""}
                <span class="price">${formatPrice(product.price, product.currency)}</span>
                ${discount ? `<span class="discount-badge">Economisești ${discount}%</span>` : ""}
            </div>

            <a href="${product.affiliateLink}"
               class="featured-btn"
               target="_blank"
               rel="sponsored noopener">
                Cumpără acum →
            </a>

            <p>${product.description}</p>

            <h3>Detalii Produs:</h3>
            <div class="specs">
                ${specsHTML}
            </div>

            <div class="pros-cons-grid">

                <div class="pros-box">
                    <h3>${ICONS.check} Avantaje</h3>
                    <ul class="pros-list">
                        ${prosHTML}
                    </ul>
                </div>

                <div class="cons-box">
                    <h3>${ICONS.cross} Dezavantaje</h3>
                    <ul class="cons-list">
                        ${consHTML}
                    </ul>
                </div>

            </div>

        </div>
    </div>
`;

// Was missing before — the favorite button was rendered but did nothing on this page
const favoriteBtn = document.querySelector(".favorite-btn");

favoriteBtn.addEventListener("click", function () {

    const productId = Number(favoriteBtn.dataset.id);

    if (favorites.includes(productId)) {
        favorites = favorites.filter(fav => fav !== productId);
        favoriteBtn.innerHTML = ICONS.heartOutline;
    } else {
        favorites.push(productId);
        favoriteBtn.innerHTML = ICONS.heartFilled;
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

});