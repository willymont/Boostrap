// script.js

// Agrega funcionalidad al botón "Agregar al carrito"
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const product = button.parentNode;
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.querySelector("p").textContent;

            // Agrega el producto al carrito
            const cart = document.querySelector("#cart");
            const cartItem = document.createElement("li");
            cartItem.textContent = `${productName} - ${productPrice}`;
            cart.appendChild(cartItem);

            // Muestra un mensaje de confirmación
            const confirmationMessage = document.querySelector("#confirmation-message");
            confirmationMessage.textContent = `Producto agregado al carrito: ${productName}`;
            confirmationMessage.style.display = "block";

            // Oculta el mensaje de confirmación después de 3 segundos
            setTimeout(function() {
                confirmationMessage.style.display = "none";
            }, 3000);
        });
    });
});