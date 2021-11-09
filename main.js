

function checkout() {
    location.href = "success.html"
}

// Add items to cart
let cart = {
    red: 0,
    white: 0,
    blue: 0,
    black: 0,
    pink: 0,
    male: 0,
    female: 0
}

function addToCart = () {
    if(document.getElementById('male').checked) {
       cart.male++
    } else if(document.getElementById('female').checked) {
        cart.female++
    }

    if(document.getElementById('male').checked) {
        cart.male++
    } else if(document.getElementById('female').checked) {
         cart.female++
    }
    

}

console.log()