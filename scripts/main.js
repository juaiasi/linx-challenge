const apiUrl = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
const productsList = document.querySelector('#products')
console.log(productsList)

fetch(apiUrl, {method: 'GET'})
.then(function(data){
    return data.json() //promise
})
.then(function(data){
    // console.log(data.products[0].name) //teste
    data.products.forEach(product =>
        productsList.innerHTML += 
        (`<div id="product${product.id}" class="card">
            <div class="img-container">
                <img src="${product.image}" alt="${product.name}"/>
            </div>
            <div class="text-container">
                <h4>${product.name}</h4>
                <p>De: R$${product.oldPrice}</p>
                <p><strong>Por: R$${product.price}</strong></p>
                <p>ou 2x de R$${product.price/2}</p>
                <a href="#" class="btn sm">Comprar</a>
            </div>
        </div>`))
})

