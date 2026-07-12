const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(product => product.id === id);

const productContainer = document.getElementById("product-container");

const specsHTML = product.specs
    ? Object.entries(product.specs)
        .map(([key, value]) => `
            <p><strong>${key}:</strong> ${value}</p>
        `)
        .join("")
    : "<p>No specifications available.</p>";

productContainer.innerHTML = `
    <div class="product-page">
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">
            <h1>${product.name}</h1>

            <p><strong>Brand:</strong> ${product.brand}</p>

            <p class="rating">
                ⭐ ${product.rating} / 5
            </p>

            <p class="price">${product.price}</p>

            <p>${product.description}</p>

            <h3>Specifications</h3>

        <div class="specs">
            ${specsHTML}
        </div>

            <h3>Why we recommend it</h3>

    <ul class="recommend-list">
        <li>✅ Premium build quality</li>
        <li>✅ Excellent performance</li>
        <li>✅ Great value for money</li>
    </ul>

           <a href="${product.affiliateLink}"
            class="view-btn"
            target="_blank"
            rel="noopener noreferrer">
                View Deal →
            </a>
        </div>
    </div>
`;