const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(product => product.id === id);

const productContainer = document.getElementById("product-container");

productContainer.innerHTML = `
    <div class="product-page">
        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">
            <h1>${product.name}</h1>

            <p><strong>Brand:</strong> ${product.brand}</p>

            <p><strong>Rating:</strong> ⭐ ${product.rating}</p>

            <p class="price">${product.price}</p>

            <p>${product.description}</p>

            <a href="${product.affiliateLink}" class="view-btn">
                Buy Now
            </a>
        </div>
    </div>
`;