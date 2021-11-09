

function checkout() {
    location.href = "success.html"
}

// Add items to cart
let color = {
    red: 0,
    white: 0,
    blue: 0,
    black: 0,
    pink: 0
}

let sex = {
    male: 0,
    female: 0
}

function addToCart () {
    let productColor = 'product-color'
    let productSex = 'product-sex'
    let productDescription = 'Lego Water Bottle'

    if(document.getElementById('red').checked) {
       color.red++
       document.getElementById(productColor).innerHTML = `Red ${productDescription}`
    } else if(document.getElementById('white').checked) {
        color.white++
        document.getElementById(productColor).innerHTML = `White ${productDescription}`
    } else if(document.getElementById('blue').checked) {
        color.blue++
        document.getElementById(productColor).innerHTML = `Blue ${productDescription}`
    } else if(document.getElementById('black').checked) {
        color.black++
        document.getElementById(productColor).innerHTML = `Black ${productDescription}`
    } else if(document.getElementById('pink').checked) {
        color.pink++
        document.getElementById(productColor).innerHTML = `Pink ${productDescription}`
    }

    if(document.getElementById('male').checked) {
        sex.male++
        document.getElementById(productColor).innerHTML = `Male`
    } else if(document.getElementById('female').checked) {
         sex.female++
         document.getElementById(productColor).innerHTML = `Female`
    }

    console.log(color, sex)
    location.href = "checkout.html"

}



