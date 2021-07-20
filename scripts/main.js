//Using API
var apiUrl = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
const productsList = document.querySelector('#products')

//Load the first 8 products
async function loadProducts(){
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
                    <img src="https:${product.image}" alt="${product.name}"/>
                </div>
                <div class="text-container">
                    <h4>${product.name}</h4>
                    <p class="product-description">${product.description}</p>
                    <p>De: R$${(product.oldPrice).toString().replace('.',',')}</p>
                    <p><strong>Por: R$${(product.price).toString().replace('.',',')}</strong></p>
                    <p>ou 2x de R$${(product.price/2).toString().replace('.',',')}</p>
                    <a href="#" class="btn sm">Comprar</a>
                </div>
            </div>`))
        apiUrl = 'https://'+data.nextPage;
    })
}

loadProducts();

//Load more products
async function moreProducts(){
    await loadProducts();
    fetch(apiUrl, {method: 'GET'})
    .then(function(data){
        return data.json() //promise
    })
    .then(function(data){
        data.products.forEach(product =>
            productsList.innerHTML += 
            (`<div id="product${product.id}" class="card">
                <div class="img-container">
                    <img src="https:${product.image}" alt="${product.name}"/>
                </div>
                <div class="text-container">
                    <h4>${product.name}</h4>
                    <p class="product-description">${product.description}</p>
                    <p>De: R$${(product.oldPrice).toString().replace('.',',')}</p>
                    <p><strong>Por: R$${(product.price).toString().replace('.',',')}</strong></p>
                    <p>ou 2x de R$${(product.price/2).toString().replace('.',',')}</p>
                    <a href="#" class="btn sm">Comprar</a>
                </div>
            </div>`))
    })
    .catch(err => {
        alert("Mais produtos em breve!");
    })
}

//Change display for text on mobile screen

var hidden = false;

function changeDisplay() {
    var des = document.getElementById("d-text");
    var icon = document.getElementById("icon-arrow");
    if (hidden == false) {
        des.classList.add("hidden");
        icon.classList.add("rotated");
        hidden = true;
    } else {
        des.classList.remove("hidden");
        icon.classList.remove("rotated");
        hidden = false;
    }
}

// Validating basic-form

function validateForm() {
    var fName = document.getElementById("f-name");
    var fEmail = document.getElementById("f-email");
    var fCpf = document.getElementById("f-cpf");
    var fMan = document.getElementById("f-man");
    var fWoman = document.getElementById("f-woman");

    if(fName.value == ""){
        alert("Nome não informado");
        fName.focus();
        return;
    }
    if(fEmail.value == ""){
        alert("Email não informado");
        fName.focus();
        return;
    }
    if(fEmail.value.includes('@') == false){
        alert("Isso não é um email válido");
        fName.focus();
        return;
    }
    if(fCpf.value == ""){
        alert("CPF não informado");
        fName.focus();
        return;
    }
    if(fCpf.value.length < 11){
        alert("CPF inválido");
        fName.focus();
        return;
    }
    if(fCpf.value == ""){
        alert("CPF não informado");
        fName.focus();
        return;
    }
    if(fMan.checked == false && fWoman.checked == false){
        alert("Sexo não informado");
        fName.focus();
        return;
    }
    else{
        alert("Obrigado! Em breve entraremos em contato :D");
    //window.location.href = "email.html";
    }
}

//Validating share-form

function validateShare() {
    var fFriendName = document.getElementById("f-friend-name");
    var fFriendEmail = document.getElementById("f-friend-email");

    if(fFriendName.value == ""){
        alert("Nome não informado");
        fName.focus();
        return;
    }
    if(fFriendEmail.value == ""){
        alert("Email não informado");
        fName.focus();
        return;
    }
    if(fFriendEmail.value.includes('@') == false){
        alert("Isso não é um email válido");
        fName.focus();
        return;
    }
    else{
        alert("Obrigado! Em breve entraremos em contato com seu amigo :D");
    //window.location.href = "email.html";
    }
}