// Function using Rest Operator
function addToCart(...items) {
    return items;
}

// Adding products
let cart = addToCart(
    { name: "Shirt", price: 1000 },
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 5000 }
);

// Using Spread Operator to clone cart
let updatedCart = [...cart];

// Using Array Destructuring
let [firstProduct, ...remainingProducts] = updatedCart;

// Function to display cart details
function showCart() {
    document.getElementById("total").innerText =
        "Total Items: " + updatedCart.length;

    document.getElementById("first").innerText =
        "First Product: " + firstProduct.name + " - Rs " + firstProduct.price;

    document.getElementById("remaining").innerText =
        "Remaining Products: " +
        remainingProducts.map(item => item.name).join(", ");
}