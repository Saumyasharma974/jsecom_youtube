export const homeQuantityToggle=(event,id,stock)=>{
 const currentCardElement=document.querySelector(`#card${id}`);
 //console.log(currentCardElement);
const productQuantity=currentCardElement.querySelector(".productQuantity");
console.log(productQuantity);
let quantity= parseInt(productQuantity.getAttribute('data-quantity'))|| 1;
//console.log(quantity);

if (event.target.className==="cartIncrement"){
    if(quantity< stock){
        quantity++;
    }
    else if(quantity===stock){
        quantity=stock;
    }
}
if (event.target.className==="cartDecrement"){
    if(quantity> 1){
        quantity--;
    }

}
productQuantity.innerText=quantity;

productQuantity.setAttribute('data-quantity',quantity);
return quantity;
}