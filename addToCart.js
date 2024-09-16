import { getCartProductFormLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";

getCartProductFormLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageElement = getCartProductFormLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = parseInt(currentProdElem.querySelector('.productQuantity').innerText);
  let price = currentProdElem.querySelector('.productPrice').innerText;
  price = parseFloat(price.replace("₹", ""));

  let existingProd = arrLocalStorageElement.find((curProd) => curProd.id === id);

  // If the product already exists in the cart, update its quantity and price
  if (existingProd) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    let updatedPrice = price * quantity;

    // Update the cart with new values
    arrLocalStorageElement = arrLocalStorageElement.map((curProd) => {
      if (curProd.id === id) {
        return { ...curProd, quantity, price: updatedPrice };
      }
      return curProd;
    });

    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageElement));
    updateCartValue(arrLocalStorageElement);
    return; // Exit since we've updated an existing product
  }

  // If the product does not exist, add it to the cart
  let totalPrice = price * quantity;
  let newCartItem = { id, quantity, price: totalPrice };

  arrLocalStorageElement.push(newCartItem);

  localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageElement));
  updateCartValue(arrLocalStorageElement);
};
``
