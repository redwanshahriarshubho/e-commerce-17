let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${productName} added to cart! Price: $${price}`);
}