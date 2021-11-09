function checkout() {
    location.href = "success.html"
}

function lego() {
    location.href = "https://www.lego.com/en-us"
}

function home () {
    location.href = "index.html"
}

// Add items to cart
let cart = []

function addToCart () {
    if(document.getElementById('red').checked) {
       cart.push('Red')
    } else if(document.getElementById('white').checked) {
        cart.push('White')
    } else if(document.getElementById('blue').checked) {
        cart.push('Blue')
    } else if(document.getElementById('black').checked) {
        cart.push('Black')
    } else if(document.getElementById('pink').checked) {
        cart.push('Pink')
    }

    if(document.getElementById('male').checked) {
        cart.push('Male')
    } else if(document.getElementById('female').checked) {
        cart.push('Female')
    }

    console.log(cart)

    localStorage.setItem("cart", cart);
    window.location.href="checkout.html";
}

function getCart () {
    let input = localStorage.getItem("cart")
    let cart = input.split(',')

    let productColor = 'product-color'
    let productSex = 'product-sex'
    let productDescription = 'Lego Water Bottle'

    console.log(cart)

    document.getElementById(productColor).innerHTML = `${cart[0]} ${productDescription}`
    document.getElementById(productSex).innerHTML = `- ${cart[1]}`
}

function resetLocalStorage () {
    let resetValue ={};
    localStorage.setItem("cart", resetValue);
}



