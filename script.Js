let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cartButton").textContent =
        `🛒 السلة (${cartCount})`;
}


