const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
    // Use backticks for template literals and embed the cartProducts.length
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${cartProducts.length}`;
}
