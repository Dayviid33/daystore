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

     const prosHTML = (product.pros || [])
    .map(pro => `<li>✅ ${pro}</li>`)
    .join("");

const consHTML = (product.cons || [])
    .map(con => `<li>❌ ${con}</li>`)
    .join("");

    const newPrice = parseFloat(product.price.replace("$", ""));

const oldPrice = product.oldPrice
    ? parseFloat(product.oldPrice.replace("$", ""))
    : null;

const discount = oldPrice
    ? Math.round(((oldPrice - newPrice) / oldPrice) * 100)
    : null;
;

productContainer.innerHTML = `
    <div class="product-page">
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">
            <span class="product-badge">
    ${product.badge}
</span>

            <h1>${product.name}</h1>

            <p><strong>Brand:</strong> ${product.brand}</p>

            <p class="rating">
    ⭐⭐⭐⭐⭐ ${product.rating} (${product.reviews.toLocaleString()} reviews)
</p>
          <div class="price-box">

    ${oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ""}

    <span class="price">${product.price}</span>

    ${discount ? `<span class="discount">Save ${discount}%</span>` : ""}

</div>

<a href="${product.affiliateLink}"
   class="view-btn"
   target="_blank"
   rel="noopener noreferrer">
    View Deal →
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


