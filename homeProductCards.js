// Uncomment this line to use the addToCart function
import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false; // If no products are provided, exit the function
  }

  // Loop through each product in the products array
  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } = curProd;

    // Clone the product template for each product
    const productClone = document.importNode(productTemplate.content, true);
    
    // Set unique ID for each product card
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    // Update the product details in the cloned template
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = `Stock: ${stock}`;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${(price * 4).toFixed(2)}`;

    // Event listener for quantity toggle
    productClone.querySelector(".stockElement").addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

    // Event listener for Add to Cart button
    productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
      addToCart(event, id, stock);
    });

    // Append the cloned template to the product container
    productContainer.appendChild(productClone);
  });
};
